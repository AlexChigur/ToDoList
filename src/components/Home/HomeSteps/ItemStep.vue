<template lang="pug">

  .item-step
    .item-step-accompaniment
      .item-step-main
        .item-border
          .item-border__number
            | ÉTAPE {{activeIndex + 1}}
          .item-border__arrow
            .item-border__arrow__step(v-show="activeIndex === 0")
              | ÉTAPE 2
            .item-border__arrow__previous(v-show="activeIndex >= 1" @click="setStep(activeIndex - 1)")
              img(src="~/assets/picture/arrow-small-left.png")
            .item-border__arrow__next(:class="{'opacity': activeIndex >= stepsLength - 1}" @click="setStep(activeIndex + 1)")
              img(src='~/assets/picture/arrow-small-left.png')
        .item-content
          .item-content__title {{step.title}}
          .item-content__text(v-for="item in step.message")
            .item-content__text__bullet
              img(src='~/assets/picture/bullet.svg')
            .item-content__text__item {{item}}
        .item-content-mediabreakpoint
          .item-content-border
            img(src="~/assets/picture/path-9.svg")
          .item-content-resize(v-for="(titles, index) in stepTitle")
            .item-content-resize__title
              base-sphere(:index="index")
              .item-content-resize__title__main-title {{titles}}
            .item-content-resize__message(v-for="(item,text) in step.message")
              img(src="~/assets/picture/bullet.svg")
              .item-content-resize__message__text {{item}}

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import BaseSphere from '@/components/Base/BaseSphere.vue'
import { StepsType } from '../../../helpers/Steps'

@Component({
  components: { BaseSphere }
})
export default class ItemStep extends Vue {
  @Prop() activeIndex: number
  @Prop() step: StepsType
  @Prop() stepsLength: number
  @Prop() stepTitle: string[]
  @Prop() nameSteps: string[]
  index: number = 1
  setStep (activeIndex) {
    this.$emit('setStep', activeIndex)
  }
}
</script>

<style scoped lang="sass">
@import '../../../../node_modules/bootstrap/scss/functions'
@import '../../../../node_modules/bootstrap/scss/variables'
@import '../../../../node_modules/bootstrap/scss/mixins/breakpoints'
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&subset=cyrillic,cyrillic-ext,latin-ext,vietnamese')
$font: Montserrat, Helvetica, sans-serif

img
  width: 24px
  height: 24px
  +media-breakpoint-down(sm)
    height: 100%

.opacity
  opacity: 0.3
  pointer-events: none

.item-step-accompaniment
  display: flex
  align-items: flex-start

.item-border
  width: 436px
  display: flex
  align-items: center
  border: 1px #009fc1
  border-style: none none solid none
  justify-content: space-between
  margin-top: 63px
  font-family: $font
  font-size: 12px
  font-weight: bold
  letter-spacing: 1px
  +media-breakpoint-down(sm)
    display: none

  &__number
    color: #009fc1
    display: flex
    align-items: center
    margin-bottom: 4px

  &__arrow
    justify-content: space-between
    display: flex
    align-items: center
    cursor: pointer
    margin-bottom: 4px
    &__previous
      margin-right: 8px
    &__next
      img
        transform: rotate(180deg)

    &__step
      font-family: $font
      font-size: 12px
      font-weight: bold
      color: white
      white-space: nowrap
      cursor: default

.item-content
  width: 436px
  display: flex
  flex-direction: column
  margin-top: 16px
  font-family: $font
  font-size: 24px
  line-height: 1.58
  color: white
  text-align: left
  +media-breakpoint-down(sm)
    display: none

  &__text
    display: flex
    font-size: 16px
    line-height: 1.5
    margin-top: 16px
    &__bullet
      transform: translateX(-8px)

.item-content-mediabreakpoint
  position: relative
  +media-breakpoint-up(md)
    display: none

.item-content-border
  top: 50px
  left: 12px
  position: absolute
  height: 1000px
  width: 2px
  z-index: -1
  img
    width: 10px
    height: 1000px

.item-content-resize
  font-family: $font
  display: flex
  flex-direction: column
  color: white
  line-height: 1.5
  +media-breakpoint-down(sm)
    width: 272px

  &__title
    display: flex
    margin-top: 48px
    +media-breakpoint-down(sm)
      margin-top: 45px
    &__main-title
      margin-left: 16px
      font-weight: bold
      +media-breakpoint-down(sm)
        width: 220px

  &__message
    display: flex
    flex-direction: row
    margin-top: 16px

    &__text
      margin-left: 16px
    +media-breakpoint-down(sm)
      margin-top: 15px
</style>
