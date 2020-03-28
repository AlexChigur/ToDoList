<template lang="pug">

  .successfully-sent
    .successfully-sent__picture
      img(src='~/assets/Picture/contacts-images/fly-container.svg')
    .successfully-sent__message
      | Nous avons reçu votre demande
    .successfully-sent__consideration
      | Merci. Nous reviendrons vers vous dans les prochaines 24h.

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class SuccessfullySent extends Vue {
}
</script>

<style lang="sass" scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&subset=cyrillic,cyrillic-ext,latin-ext,vietnamese')
  $font: Montserrat, Helvetica, sans-serif

  .successfully-sent
    font-family: $font
    color: white
    align-items: center
    text-align: center
    display: flex
    flex-direction: column
    width: 436px
    &__picture
      margin-top: 24px
    &__message
      font-size: 32px
      line-height: 1.41
      margin-top: 20px
    &__consideration
      width: 273px
      font-size: 16px
      line-height: 1.5
      margin-top: 8px

</style>
