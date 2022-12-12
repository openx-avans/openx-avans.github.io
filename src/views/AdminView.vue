<script>
export default {
  data: () => ({
    plants: [
      {
        moisture: 580,
        light: 1342,
      }
    ],
  }),
  methods: {
    logout() {
      // TODO: stuff
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
        <div class="card mb-3 shadow-sm" v-for="(plant, i) in plants" :key="i">
          <div class="card-header">
            <a class="d-flex align-items-center" data-bs-toggle="collapse" href="#plant1">
              <i class="fa-solid fa-chevron-right ms-1"></i>
              <h3 class="ms-4 mb-0 mt-2">Plant {{ i + 1 }}</h3>
            </a>
          </div>
          <div id="plant1" class="collapse m-4 card-body">
            <div class="d-flex flex-column gap-4">
              <div>
                <div class="d-flex flex-row justify-content-between align-items-center">
                  <h2>Grondvochtigheid</h2>
                  <h2>(hoger is vochtiger)</h2>
                </div>
                <div class="d-flex flex-row gap-4 align-items-center">
                  <input type="number" class="rounded" v-model="plant.moisture" />
                  <input type="number" class="rounded" disabled value="678" />
                </div>
              </div>
              <div>
                <div class="d-flex flex-row justify-content-between align-items-center">
                  <h2>Hoeveelheid licht</h2>
                  <h2>(hoger is intenser)</h2>
                </div>
                <div class="d-flex flex-row gap-4 align-items-center">
                  <input type="number" class="rounded" v-model="plant.light" />
                  <input type="number" class="rounded" disabled value="2200" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End foreach -->
      </section>
      <section>
        <h1>Overige instellingen</h1>
        <hr>
        <div class="d-flex flex-column gap-4 pb-2 pt-2">
          <div>
            <h2>Meet interval</h2>
            <div class="d-flex flex-row gap-4 align-items-center">
              <input name="measurementInterval" type="number" class="rounded" value="20" />
              <p class="mb-0">Seconden</p>
            </div>
          </div>
          <div>
            <h2>Spelduur</h2>
            <div class="d-flex flex-row gap-4 align-items-center">
              <input name="gameDuration" type="number" class="rounded" value="30" />
              <p class="mb-0">Seconden</p>
            </div>
          </div>
          <div>
            <h2>Waterverbruik</h2>
            <div class="d-flex flex-row gap-4 align-items-center">
              <input name="waterUsage" type="number" class="rounded" value="0.25" />
              <p class="mb-0">Liter per uur</p>
            </div>
          </div>
          <div>
            <h2>Stroomverbruik</h2>
            <div class="d-flex flex-row gap-4 align-items-center">
              <input name="powerUsage" type="number" class="rounded" value="5" />
              <p class="mb-0">Procent per uur</p>
            </div>
          </div>
          <div>
            <h2>Data verzend interval</h2>
            <div class="d-flex flex-row gap-4 align-items-center">
              <input name="dataTransmitInterval" type="number" class="rounded" value="5" />
              <p class="mb-0">Minuten</p>
            </div>
          </div>
        </div>
      </section>
      <button id="save-button" type="submit" class="btn btn-success rounded-circle shadow">
        <i class="fa-solid fa-check"></i>
      </button>
    </form>
  </div>
</template>
