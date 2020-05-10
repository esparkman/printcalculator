<template>
  <div id="e-step-calculator">
    <div class="underline font-semibold text-sm text-black-300">
      E-Step Calculator
    </div>
    <div class="flex flex-col">
      <div class="my-2">
        <label
          for="default-e-step"
          class="block text-sm font-medium leading-5 text-gray-700"
          >Default or Current E-Step Value
        </label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <input
            id="default-e-step"
            class="form-input block w-full sm:text-sm sm:leading-5"
            placeholder="i.e. 93"
            v-model="defaultEstep"
            aria-describedby="e-step-description"
          />
        </div>
        <p class="mt-2 text-sm text-gray-500" id="estep-description">
          This should be your default or current e-step value.
        </p>
      </div>
      <div class="my-2">
        <label
          for="expected-extruded-amount"
          class="block text-sm font-medium leading-5 text-gray-700"
        >
          Expected Amount of filament extruded
        </label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <input
            id="expected-extruded-amount"
            class="form-input block w-full sm:text-sm sm:leading-5"
            placeholder="100"
            aria-describedby="extruded-amount-description"
            v-model="expectedAmount"
            disabled
          />
        </div>
        <p class="mt-2 text-sm text-gray-500" id="estep-description">
          This is the expected amount of filament we want to extrude.
        </p>
      </div>
      <div class="my-2">
        <label
          for="actual-extruded-amount"
          class="block text-sm font-medium leading-5 text-gray-700"
        >
          Actual Amount of filament extruded
        </label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <input
            id="actual-extruded-amount"
            class="form-input block w-full sm:text-sm sm:leading-5"
            placeholder="i.e. 70"
            v-model="actualAmount"
            aria-describedby="extruded-amount-description"
          />
        </div>
        <p class="mt-2 text-sm text-gray-500" id="estep-description">
          This is the actual amount of filament that was extruded.
        </p>
      </div>
    </div>
    <div class="my-2">
      <div v-if="estepTotal">
        <div class="font-semibold text-black-300">
          {{ estepTotal }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'eStep',
  data() {
    return {
      defaultEstep: null,
      expectedAmount: 100,
      actualAmount: null
    }
  },
  methods: {
    calculateEsteps() {
      return (this.defaultEstep * this.expectedAmount) / this.actualAmount
    }
  },
  computed: {
    estepTotal() {
      return this.calculateEsteps()
    }
  }
}
</script>
