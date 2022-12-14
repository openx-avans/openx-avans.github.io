<script>
export default {
  props: {
    value: {
      required: true,
      type: Object,
    },
    index: {
      required: true,
      type: Number,
    },
  },
  watch: {
    plant: {
      deep: true,
      handler() {
        this.$emit('input', this.plant);
      },
    },
  },
  data() {
    return {
     plant: this.value,
    }
  },
};
</script>

<template>
  <div class="card mb-3 shadow-sm">
    <div class="card-header">
      <a class="d-flex align-items-center" data-bs-toggle="collapse" href="#plant1">
        <i class="fa-solid fa-chevron-right ms-1"></i>
        <h3 class="ms-4 mb-0 mt-2">Plant {{ index + 1 }}</h3>
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
</template>
