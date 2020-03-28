<template lang="pug">

  .text-area
    .text-area__name(v-if="hasFocus") {{label}}
    textarea.text-area__message(
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
export default class TextArea extends Vue {
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
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&subset=cyrillic,cyrillic-ext,latin-ext,vietnamese')
$font: Montserrat, Helvetica, sans-serif

::placeholder
  opacity: 0.6

.text-area
  color: #009fc1
  position: relative

  &__name
    position: absolute
    font-weight: bold
    font-size: 11px

  &__message
    font-family: $font
    background-color: transparent
    border: none
    border-bottom: solid 1px gray
    color: white
    resize: none
    width: 344px
    height: 80px
    margin-top: 15px
    outline: none

    &:focus::placeholder
      color: transparent
    +media-breakpoint-down(xs)
      width: 272px

.active
  border-color: #009fc1

</style>
