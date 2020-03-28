<template lang="pug">

  .our-clients
    .our-clients-title
      | Ils nous font confiance
    .our-clients-list
      .our-clients-list__logo-item(v-for="image in images")
        img(:src='image')
    .border-line
      .border-line__text
        | Notre partenaire
    .border-line__image
      img(src='~/assets/picture/client-images/logo-bpi-france.png')
    .poligon

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OurClientsImages, { ImagesType } from '../../helpers/OurClientsImages'
@Component({})
export default class OurClients extends Vue {
  images: ImagesType = OurClientsImages
}
</script>

<style lang="sass" scoped>
@import '../../../node_modules/bootstrap/scss/functions'
@import '../../../node_modules/bootstrap/scss/variables'
@import '../../../node_modules/bootstrap/scss/mixins/breakpoints'
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&subset=cyrillic,cyrillic-ext,latin-ext,vietnamese')
$font: Montserrat, Helvetica, sans-serif

.our-clients
  text-align: center
  font-family: $font
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  border-bottom: white solid 1px

.our-clients-title
  font-size: 32px
  line-height: 1.41
  color: #383c3d
  margin-top: 112px
  margin-bottom: 64px
  +media-breakpoint-down(xs)
    font-size: 24px
    margin-top: 74px
    margin-bottom: 16px

.our-clients-list
  display: flex
  align-items: center
  justify-content: center
  flex-wrap: wrap

  &__logo-item
    padding: 0 36px 48px 36px
    img
      width: 100%
    +media-breakpoint-down(xs)
      width: 50%
      padding: 0 32px 22px 22px
      &:nth-child(2)
        width: 40%

.border-line
  border-top: dotted 1.5px #7e7f80
  font-size: 24px
  line-height: 1.58
  width: 344px
  margin-top: 66px
  +media-breakpoint-down(sm)
    width: 272px
  +media-breakpoint-down(xs)
    margin-top: 80px
  &__text
    margin-top: 16px
  &__image
    margin-top: 40px
    align-items: center
    margin-bottom: 40px
    +media-breakpoint-down(xs)
      margin-top: 25px
      margin-bottom: 3px
      img
        width: 50%

</style>
