<template lang="pug">
  component.button.base-button(
    :is="component"
    :href="link"
    :to="nuxtLink"
    :class="classes"
    @click="onClick"
    :disabled="isDisabled"
  )
    .icon-before
      slot(name="icon-before")
    .text(v-if="text") {{ text }}
    .icon-after
      slot(name="icon-after")
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    component: {
      type: String,
      default: 'div'
    },
    link: {
      type: String,
      default: '#'
    },
    nuxtLink: {
      type: [String, Object],
      default: '#'
    },
    text: {
      type: String,
      default: null
    },
    buttonClass: {
      type: String,
      default: ''
    },
    primary: {
      type: Boolean,
      default: false
    },
    accent: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    accentSm: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    iconSecondary: {
      type: Boolean,
      default: false
    },
    textButton: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        this.buttonClass,
        {
          'button--primary': this.primary,
          'button--accent': this.accent,
          'button--secondary': this.secondary,
          'button--accent-sm': this.accentSm,
          'button--icon': this.icon,
          'button--icon-secondary': this.iconSecondary,
          'button--text-button': this.textButton,
          'button--loading': this.isLoading,
          'button--no-border': this.noBorder,
          'inactive': this.isDisabled
        }
      ]
    }
  },
  methods: {
    onClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="sass" scoped>
  .button
    +flex-center
    cursor: pointer
    height: 48px
    padding: 0 24px
    font-size: 16px
    font-weight: 900
    text-transform: uppercase
    letter-spacing: 1.2px
    border-radius: 3px
    position: relative
    border: none
    outline: none
    //z-index: -1
    +transition

  .button--loading
    overflow: hidden
    cursor: default
    pointer-events: none
    &::after
      position: absolute
      z-index: 1
      content: ''
      top: 0
      left: 0
      width: 100%
      height: 100%
      animation: gradient 2s ease-in infinite
      background-image: linear-gradient(to left, rgba(#1790d6, .8) , #1790d6 5%, rgba(23, 144, 214, 0))

  .form-button
    color: white
    white-space: nowrap
    &.inactive
      background: $grey
      pointer-events: none
    &.active
      background: $accent-color
      box-shadow: 0 0 12px 0 rgba(37, 176, 255, 0.72)

  .button--accent,
  .button--accent-sm
    color: white
    background: $accent-color
    box-shadow: 0 0 12px 0 rgba(37, 176, 255, 0.72)
    white-space: nowrap
    &:hover
      box-shadow: 0 0 12px 0 rgba(37, 176, 255, 0.72)
      background-color: #279ce0
    &:active,
    &.button--loading
      background-color: #1790d6
      box-shadow: none
    &:disabled,
    &.inactive
      background-color: $grey
      pointer-events: none
      box-shadow: none

  .button--accent-sm
    height: 40px
    font-size: 14px

  .button--text-button
    color: $grey-darker
    &:hover
      color: #99a0a8
      background-color: $background-grey
    &:active,
    &.button--loading
      background-color: $background-grey
      color: $steel
      &::after
        background-image: linear-gradient(to right, rgba(242, 245, 249, 0), #f2f5f9)

  .button--icon
    padding: 0
    border-radius: 50%
    width: 32px
    height: 32px
    svg
      /deep/
      .icon,
      use
        +transition
        fill: #C8D2DD
    &:hover
      color: #99a0a8
      background-color: $background-grey
      svg
        /deep/
        .icon,
        use
          fill: $steel
    &:active,
    &.button--loading
      background-color: $background-grey
      color: $steel
      svg
        /deep/
        use
          fill: $steel
      &::after
        background-image: linear-gradient(to right, rgba(242, 245, 249, 0), #f2f5f9)

    &:disabled,
    &.inactive
      svg
        /deep/
        use
          fill: $steel
      pointer-events: none
      box-shadow: none

  @keyframes gradient
    0%
      transform: translateX(-100%)
    100%
      transform: translateX(100%)

  .button--secondary
    border: 2px solid $accent-color
    white-space: nowrap
    .text
      +transition
      color: $accent-color
      text-transform: uppercase
      font-weight: 900
    &:hover
      border-color: #279ce0
      .text
        color: #279ce0

  .button--primary
    white-space: nowrap
    background: $error-message
    font-size: 22px
    color: white
    height: 100%
    width: 100%
    box-shadow: 0 2px 12px 0 rgba(247, 149, 29, 0.64)
    .text
      letter-spacing: 2.2px
    &:hover
      background: #e1891e
    +media-breakpoint-down(lg)
      font-size: 16px
      .text
        letter-spacing: 1.2px

  .button--no-border
    border: unset

  .icon-before
    margin-right: 4px
</style>
