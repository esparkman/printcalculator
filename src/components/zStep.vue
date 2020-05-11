<template>
  <div id="z-step-calculator">
    <div class="underline font-semibold text-sm text-black-300">XYZ-Step Calculator</div>
    <div class="flex flex-col">
      <div class="my-2">
        <label
          for="default-z-step"
          class="block text-sm font-medium leading-5 text-gray-700"
        >Default or Current X, Y or Z-Step Value</label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <input
            id="default-z-step"
            class="form-input block w-full sm:text-sm sm:leading-5"
            placeholder="i.e. 400"
            v-model="defaultZstep"
            aria-describedby="e-step-description"
            required
          />
        </div>
        <p
          class="mt-2 text-sm text-gray-500"
          id="estep-description"
        >This should be your default or current X, Y or Z-step value.</p>
      </div>
      <div class="my-2">
        <label
          for="expected-travel-distance"
          class="block text-sm font-medium leading-5 text-gray-700"
        >Expected X, Y or Z Distance to travel</label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <input
            id="expected-travel-distance"
            class="form-input block w-full sm:text-sm sm:leading-5"
            placeholder="i.e. 20"
            aria-describedby="expected-travel-distance-description"
            v-model="expectedDistance"
            required
          />
        </div>
        <p
          class="mt-2 text-sm text-gray-500"
          id="estep-description"
        >This is the expected distance to be traveled on the X, Y or Z Axis.</p>
      </div>
      <div class="my-2">
        <label
          for="actual-distance-traveled"
          class="block text-sm font-medium leading-5 text-gray-700"
        >Actual X, Y or Z Distance traveled</label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <input
            id="actual-travel-distance"
            class="form-input block w-full sm:text-sm sm:leading-5"
            placeholder="i.e. 70"
            v-model="actualDistance"
            aria-describedby="actual-distance-traveled-description"
            required
          />
        </div>
        <p
          class="mt-2 text-sm text-gray-500"
          id="estep-description"
        >This is the actual distance traveled on the X, Y or Z Axis.</p>
      </div>
    </div>
    <div class="my-2">
      <div v-if="zstepTotal">
        <div class="font-semibold text-black-300">New Value: {{ zstepTotal }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zStep',
  data() {
    return {
      defaultZstep: null,
      expectedDistance: null,
      actualDistance: null
    }
  },
  methods: {
    calculateZsteps() {
      return (this.defaultZstep * this.expectedDistance) / this.actualDistance
    }
  },
  computed: {
    zstepTotal() {
      return this.calculateZsteps()
    }
  }
}
</script>

<style lang="scss" scoped></style>
