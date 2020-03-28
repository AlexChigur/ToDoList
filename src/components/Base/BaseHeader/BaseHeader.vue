<template lang="pug">

  .base-header.g-container
    .base-header-container
      .base-header-container__logo
        img(src="~/assets/logo.svg")
      a(href="#contacts").base-header-container__button
        .base-header-container__button__text
          | CONTACTEZ-NOUS
    .base-header-title
      | Boostez votre projet innovant
      br
      | avec un partenaire
    .block-particles
      vue-particles(
      color='#009fc1'

      )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class BaseHeader extends Vue {
}
</script>

<style lang="sass" scoped>
@import '../../../../node_modules/bootstrap/scss/functions'
@import '../../../../node_modules/bootstrap/scss/variables'
@import '../../../../node_modules/bootstrap/scss/mixins/breakpoints'
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&subset=cyrillic,cyrillic-ext,latin-ext,vietnamese')
$font: Montserrat, Helvetica, sans-serif

.base-header
  text-align: center
  display: flex
  flex-direction: column
  align-items: center
  margin-top: 32px

.base-header-container

  display: flex
  align-items: center
  justify-content: space-between
  font-size: 18px
  font-weight: bold
  font-family: $font
  letter-spacing: 1.5px
  color: #ffffff
  width: 100%
  +media-breakpoint-down(sm)
    justify-content: space-around
  +media-breakpoint-down(xs)
    justify-content: space-between
  &__logo img
    +media-breakpoint-down(sm)
      max-width: 150px
    +media-breakpoint-down(xs)
      max-width: 100px
      transform: translateX(-10px)
  &__button
    background-color: #009fc1
    border-radius: 2px
    width: 223px
    height: 48px
    display: flex
    align-items: center
    justify-content: center
    +media-breakpoint-down(sm)
      max-width: 149px
    cursor: pointer
    text-decoration: none
    +media-breakpoint-down(xs)
      min-width: 149px
      max-height: 32px
      transform: translateY(8px)
      margin-left: 30px

    &__text
      color: #ffffff
      +media-breakpoint-down(sm)
        font-size: 12px
        letter-spacing: 1px

.base-header-title
  font-family: $font
  font-size: 48px
  font-weight: 600
  line-height: 1.33
  color: #009fc1
  width: 896px
  margin-top: 113px
  margin-bottom: 101px
  +media-breakpoint-down(md)
    max-width: 700px
  +media-breakpoint-down(sm)
    max-width: 400px
    font-size: 32px
  +media-breakpoint-down(xs)
    width: 250px
    text-align: left
    font-size: 28px
    margin: 72px 10px 0 0
    line-height: normal

.block-particles
  width: 806px
  height: 703px
  position: absolute
  right: 0
  z-index: -1
  +media-breakpoint-down(sm)
    display: none

</style>
