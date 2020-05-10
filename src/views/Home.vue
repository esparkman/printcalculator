<template>
  <div class="container mx-auto" style="max-width: 1200px;">
    <div class="text-center font-semibold text-blue-500 uppercase">
      Print Calculators
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
