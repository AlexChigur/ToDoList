<template lang="pug">

  .block-input
    .block-input__name(v-if="hasFocus") {{label}}
    input.block-input__data(
    :class="{'active': hasFocus}"
    v-model="inputValue"
    v-bind="{...$attrs}"
    @focus="hasFocus = true"
    @blur="hasFocus = false"
    )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class BlockInput extends Vue {
  @Prop() label: string
  @Prop() value: string
  hasFocus: boolean = false
  get inputValue (): string {
    return this.value
  }
  set inputValue (value) {
    this.$emit('input', value)
  }
}
</script>

<style lang="sass" scoped>
  @import '../../../../node_modules/bootstrap/scss/functions'
  @import '../../../../node_modules/bootstrap/scss/variables'
  @import '../../../../node_modules/bootstrap/scss/mixins/breakpoints'
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&subset=cyrillic,cyrillic-ext,latin-ext,vietnamese')
  $font: Montserrat, Helvetica, sans-serif

  ::placeholder
    color: white
    opacity: 0.2
    font-family: $font

  .block-input
    font-family: $font
    position: relative
    &__name
      position: absolute
      color: #009fc1
      font-size: 11px
      font-weight: bold
    &__data
      margin-top: 9px
      background-color: transparent
      border: none
      height: 40px
      border-bottom: solid 1px gray
      +media-breakpoint-down(xs)
        width: 272px
      &:focus::placeholder
        color: transparent
      width: 344px
      outline: none
      color: white

  .active
    border-color: #009fc1

</style>
