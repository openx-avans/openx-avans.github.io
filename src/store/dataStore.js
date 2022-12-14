import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
  state: () => ({
    plants: [
      {
        moisture: 580,
        light: 1342,
      },
    ],
    settings: {
      measureInterval: 20,
      gameDuration: 30,
      waterUsage: 0.25,
      powerUsage: 5,
      transmitInterval: 5,
    },
  }),
});
