<template>
  <div class="container mx-auto" style="max-width: 1200px;">
    <div class="text-center font-semibold text-blue-500 uppercase">
      <div class="flex flex-col justify-center items-center">
        Print Calculators
        <span class="text-xs italic">All values are considered to be MM</span>
      </div>
    </div>
    <div class="flex justify-around items-center mt-8">
      <eStep />
      <zStep />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import eStep from '@/components/eStep'
import zStep from '@/components/zStep'
export default {
  name: 'Home',
  components: {
    eStep,
    zStep
  }
}
</script>
