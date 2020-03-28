<template lang="pug">
  .default
    base-header
    .content
      nuxt
    base-footer
</template>

<script>
import BaseFooter from '@/components/Base/BaseFooter/BaseFooter'
import BaseHeader from '@/components/Base/BaseHeader/BaseHeader'
export default {
  // name: 'default',
  components: { BaseHeader, BaseFooter }
}
</script>

<style scoped>

</style>
