<script>
import { useEspStore } from '@/store/espStore';
import { connectToESP as initBle } from '@/espConnection';

export default {
  setup() {
    const espStore = useEspStore();

    return {
      espStore,
    };
  },
  methods: {
    connectToEsp() {
      if (!this.espStore.connected) {
        initBle();
      }
    },
  },
};
</script>

<template>
  <div>
    <p v-if="espStore.supported" @click="connectToEsp">
      BLE Status:
      <span class="green" v-if="espStore.connected">Connected</span>
      <span class="red" v-else>Disconnected</span>
    </p>
    <p v-else>Not supported :(</p>
  </div>
</template>

<style scoped>
.green {
  color: green;
}
.red {
  color: red;
}
</style>
