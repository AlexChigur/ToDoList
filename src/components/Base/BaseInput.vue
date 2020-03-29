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

  ::placeholder
    color: black
    opacity: 0.2

  .block-input
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
      color: black

  .active
    border-color: #009fc1

</style>
