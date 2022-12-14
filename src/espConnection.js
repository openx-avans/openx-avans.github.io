import { useEspStore } from '@/store/espStore';
import { useDataStore } from '@/store/dataStore';

const serviceUUID = '435d12e8-6497-4426-8b89-6d1c59f10bf7';
const bleCharacteristicTX = '88b8a26c-cfbb-44d9-97bf-e7b76558dfc0';
const bleCharacteristicRX = 'cb617589-41eb-4566-9954-7589dd923378';
let writeGATTCharacteristic = null;
const textDecoder = new TextDecoder();
const textEncoder = new TextEncoder();

const onDisconnected = () => {
  console.log('Disconnect handler');
};

export async function sendSettingsToEsp() {
  // TODO: move below connected when done
  const dataStore = useDataStore();

  console.log('Sending to ESP', JSON.stringify({
    plants: dataStore.plants,
    settings: dataStore.settings,
  }));

  const espStore = useEspStore();

  if (!espStore.connected) {
    throw new Error('Not connected to ESP');
  }

  const toSend = textEncoder.encode(JSON.stringify({
    plants: dataStore.plants,
    settings: dataStore.settings,
  }));

  await writeGATTCharacteristic.writeValue(toSend);
}

const onStatusUpdate = (event) => {
  const value = textDecoder.decode(event.target.value);
  console.log(value);
};

export async function connectToESP() {
  const espStore = useEspStore();

  if (!navigator.bluetooth) {
    espStore.supported = false;
    return;
  }

  try {
    const options = {
      optionalServices: [serviceUUID],
      filters: [
        { name: 'OpenX-Plants' },
      ],
    };

    const device = await navigator.bluetooth.requestDevice(options);

    device.addEventListener('gattserverdisconnected', onDisconnected);

    const server = await device.gatt.connect();
    const service = await server.getPrimaryService(serviceUUID);
    writeGATTCharacteristic = await service.getCharacteristic(bleCharacteristicTX);
    const notificationGATTCharacteristic = await service.getCharacteristic(bleCharacteristicRX);

    notificationGATTCharacteristic.startNotifications()
      .then(() => {
      notificationGATTCharacteristic.addEventListener('characteristicvaluechanged', onStatusUpdate);
    });

    espStore.connected = true;
  } catch (e) {
    espStore.connected = false;
    console.log(e);
  }
}
