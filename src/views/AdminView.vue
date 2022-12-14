<script>
import PlantSettings from '@/components/PlantSettings.vue';

export default {
  components: {
    PlantSettings,
  },
  data: () => ({
    plants: [
      {
        moisture: 580,
        light: 1342,
      }
    ],
    settings: {
      measureInterval: 20,
      gameDuration: 30,
      waterUsage: 0.25,
      powerUsage: 5,
      transmitInterval: 5,
    },
  }),
  methods: {
    logout() {
      // TODO: stuff
    },
    save() {
      alert('send to ESP if connected');
    },
  },
};
</script>

<template>
  <div>
    <nav class="d-flex justify-content-between">
      <h1>
        <b>Open</b>Admin
      </h1>
      <button class="btn" onclick="logout()">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
      </button>
    </nav>
    <form>
      <section>
        <h1>
          Plant instellingen
        </h1>
        <hr>
        <!-- Foreach plant -->
        <PlantSettings v-for="(_, i) in plants"
                       :key="i"
                       :index="i"
                       v-model="plants[i]"
        />
        <!-- End foreach -->
      </section>
      <section>
        <h1>Overige instellingen</h1>
        <hr>
        <div class="d-flex flex-column gap-4 pb-2 pt-2">
          <div>
            <h2>Meet interval</h2>
            <div class="d-flex flex-row gap-4 align-items-center">
              <input type="number" class="rounded" v-model="settings.measureInterval" />
              <p class="mb-0">Seconden</p>
            </div>
          </div>
          <div>
            <h2>Spelduur</h2>
            <div class="d-flex flex-row gap-4 align-items-center">
              <input type="number" class="rounded" v-model="settings.gameDuration" />
              <p class="mb-0">Seconden</p>
            </div>
          </div>
          <div>
            <h2>Waterverbruik</h2>
            <div class="d-flex flex-row gap-4 align-items-center">
              <input type="number" class="rounded" v-model="settings.waterUsage" />
              <p class="mb-0">Liter per uur</p>
            </div>
          </div>
          <div>
            <h2>Stroomverbruik</h2>
            <div class="d-flex flex-row gap-4 align-items-center">
              <input type="number" class="rounded" v-model="settings.powerUsage" />
              <p class="mb-0">Procent per uur</p>
            </div>
          </div>
          <div>
            <h2>Data verzend interval</h2>
            <div class="d-flex flex-row gap-4 align-items-center">
              <input type="number" class="rounded" v-model="settings.transmitInterval" />
              <p class="mb-0">Minuten</p>
            </div>
          </div>
        </div>
      </section>
      <button type="button" class="btn btn-success rounded-circle shadow" @click="save">
        <i class="fa-solid fa-check"></i>
      </button>
    </form>
  </div>
</template>
