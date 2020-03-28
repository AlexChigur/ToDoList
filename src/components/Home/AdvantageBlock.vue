<template lang="pug">

  .advantage-block
    .advantage-block-title
      | Pourquoi collaborer avec un partenaire ?
    .advantage-block-main
      .advantage-block-item(v-for="advantage in advantages")
        .advantage-block-item__logo
          img(:src="advantage.logo")
        .advantage-block-item__content
          .advantage-block-item__content__title {{ advantage.title }}
          .advantage-block-item__content__advantage {{ advantage.content}}
    .advantage-block-footer
      .advantage-block-footer__content
        | COMMENT S’Y PRENDRE ?
      .advantage-block-footer__logo
        img(src='~/assets/picture/scroll-down.svg')

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Advantages, { AdvantageType } from '../../helpers/Advantages'

@Component({})
export default class AdvantageBlock extends Vue {
  advantages: AdvantageType[] = Advantages
}
</script>

<style lang="sass" scoped>
@import '../../../node_modules/bootstrap/scss/functions'
@import '../../../node_modules/bootstrap/scss/variables'
@import '../../../node_modules/bootstrap/scss/mixins/breakpoints'
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&subset=cyrillic,cyrillic-ext,latin-ext,vietnamese')
$font: Montserrat, Helvetica, sans-serif

.advantage-block
  display: flex
  align-items: center
  flex-direction: column

.advantage-block-title
  font-family: $font
  font-size: 32px
  color: #ffffff
  display: flex
  line-height: 1.41
  margin-top: 196px
  text-align: center
  margin-bottom: 84px
  +media-breakpoint-down(sm)
    width: 266px
    font-size: 24px
    margin-bottom: 30px
    margin-top: 72px

.advantage-block-main
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  max-width: 896px
  +media-breakpoint-down(md)
    justify-content: space-evenly
    flex-direction: column
    align-items: center

.advantage-block-item
  display: flex
  font-family: $font
  font-size: 16px
  line-height: 1.63
  color: #009fc1
  font-weight: bold
  margin-bottom: 64px

  +media-breakpoint-down(md)
    margin-bottom: 32px
  +media-breakpoint-down(sm)
    flex-direction: column
    align-items: center

  &__logo
    text-align: center
    width: 120px
    height: 119px
    margin-right: 24px

  &:nth-child(1)
    +media-breakpoint-down(md)
      transform: translateX(-10px)
    +media-breakpoint-down(sm)
      transform: translateX(4px) translateY(2px)

    img
      transform: translateY(-6px) translateX(3px)
      +media-breakpoint-down(sm)
        transform: translateY(12px) translateX(15px)

  &:nth-child(2)
    transform: translateX(-12px)
    +media-breakpoint-down(sm)
      transform: translateX(2px)
    img
      +media-breakpoint-down(sm)
        transform: translateY(20px) translateX(12px)

  &:nth-child(3)
    transform: translateX(2px)
    +media-breakpoint-down(md)
      transform: translateX(-12px) translateY(-12px)
    +media-breakpoint-down(sm)
      transform: translateY(1px) translateX(2px)
    img
      +media-breakpoint-down(md)
        transform: translateX(12px)
      +media-breakpoint-down(sm)
        transform: translateY(22px) translateX(14px)

  &:nth-child(4)
    transform: translateX(-12px)
    +media-breakpoint-down(sm)
      transform: translateX(2px) translateY(4px)
    img
      +media-breakpoint-down(md)
        transform: translateX(12px)
      +media-breakpoint-down(sm)
        transform: translateY(14px) translateX(14px)

  &__content
    font-size: 16px
    font-family: $font
    +media-breakpoint-down(sm)
      text-align: center

    &__title
      font-weight: bold
      line-height: 1.63
      color: #009fc1
      margin-bottom: 4px

    &__advantage
      line-height: 1.5
      color: white
      font-weight: normal
      width: 277px

.advantage-block-footer
  display: flex
  flex-direction: column
  align-items: center
  margin-top: 22px
  +media-breakpoint-down(xs)
    margin-top: 49px
  &__content
    font-family: $font
    font-size: 14px
    font-weight: bold
    letter-spacing: 1.2px
    text-align: center
    color: #009fc1

</style>
