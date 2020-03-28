<template lang="pug">

  .sending-form
    .sending-form__title
      | Discutons de votre projet
    .sending-form__content
      | Nous reviendrons vers vous dans les prochaines 24h.
    .block-input
      block-input(
      label="Votre nom"
      v-model="form.name"
      placeholder="Name"
      )
      block-input(
      label="Votre email"
      v-model="form.email"
      placeholder="Email"
      )
      text-area(
      label="Votre message"
      v-model="form.message"
      placeholder="Message"
      )
    .sending-checkbox
      .sending-checkbox__custom(@click="check")
        .sending-checkbox__custom__checked(v-if='checked')
          | &#10004
      .sending-checkbox__agreement
        | J’accepte la
        a.sending-checkbox__agreement__email(href='') Politique de confidentialité
    .sending-button(@click="successSend")
      .sending-button__indent(
        :class="{'active' : isValid}"
        :disabled="!isValid"
      )
        .sending-button__indent__text
          | Envoyer ma demande
        .sending-button__indent__arrow
          img(src='~/assets/Picture/arrow-small.svg')

</template>

<script lang="ts">
import BlockInput from './BlockInput.vue'
import TextArea from '@/components/Base/BaseFooter/TextArea.vue'
import { emailCheckRegex } from '@/helpers/strings'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Form } from '../../../helpers/TypesForm'

const nameCheckRegex = /[a-zA-Z-\s]/

@Component({
  components: {
    BlockInput,
    TextArea
  }
})
export default class SendingForm extends Vue {
  hasFocus: boolean = true
  checked: boolean = false
  form: Form = new Form()

  get isValid () {
    return emailCheckRegex.test(this.form.email) &&
      nameCheckRegex.test(this.form.name) &&
      this.checked
  }
  check () {
    this.checked = !this.checked
  }
  async successSend () {
    if (this.isValid) {
      try {
        this.$axios.$post('/mail', {
          form: this.form
        })
      } catch (e) {
        console.log(e)
      }
    } this.$emit('successSend')
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
  opacity: 0.6

.sending-form
  color: white
  font-family: $font
  width: 344px
  +media-breakpoint-down(md)
    display: flex
    flex-direction: column
    margin: 50px 0 0 0
    align-items: center
  +media-breakpoint-down(sm)
    width: 280px
  +media-breakpoint-down(xs)
    align-items: normal

  &__title
    white-space: nowrap
    font-size: 32px
    line-height: 1.31
    +media-breakpoint-down(lg)
      white-space: normal
    +media-breakpoint-down(md)
      text-align: center
      width: 344px
    +media-breakpoint-down(sm)
      font-size: 24px
      width: 280px

  &__content
    width: 340px
    font-size: 16px
    line-height: 1.5
    margin-top: 12px
    margin-bottom: 27px
    +media-breakpoint-down(md)
      width: 344px
      margin-top: 30px
      text-align: center
    +media-breakpoint-down(sm)
      margin-top: 16px
      width: 344px
    +media-breakpoint-down(xs)
      text-align: center
      width: 280px

.block-input
  margin-bottom: 22px

.sending-checkbox
  display: flex
  align-items: center
  font-size: 12px
  color: white

  &__custom
    text-align: center
    width: 18px
    height: 18px
    border: solid 1px
    cursor: pointer
  &__agreement
    margin-left: 7px
    &__email
      text-decoration: none
      color: #009fc1
      border-bottom: dotted 1px
      margin-left: 1px

.sending-button
  display: flex
  align-items: center
  justify-content: center
  margin-top: 34px
  width: 344px
  height: 56px
  border: dotted 2px gray
  border-radius: 4px
  cursor: default
  font-size: 12px
  letter-spacing: 1px
  font-weight: bold
  pointer-events: none
  +media-breakpoint-down(xs)
    width: 280px
  &__indent
    opacity: 0.2
    border-radius: 4px
    display: flex
    align-items: center
    justify-content: flex-start
    margin: 4px auto
    width: 336px
    height: 48px
    background-color: gray
    transition: 2s ease
    &__text
      margin-left: 32px
    &__arrow
      margin-left: 10px

.active
  background-color: #009fc1
  opacity: 1
  cursor: pointer
  box-shadow: 0 0 8px 0 #009fc1
  pointer-events: auto
  transition: 2s ease
  img
    transition: 1s ease
  &:hover
    img
      transform: translateX(25px)
      transition: 1s

</style>
