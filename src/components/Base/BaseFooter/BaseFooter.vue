<template lang="pug">

  .base-footer#contacts
    .base-footer__poligon
    .footer-content.g-container
      .block-footer
        footer-contacts
      .sending-form
        sending-form(
        v-if='sendMessage'
        @successSend='successSend'
        )
        successfully-sent(v-if='!sendMessage'
        )
    .block-company.g-container
      .block-company-group
        .block-company-group__consulting
          | Ob’vious Consulting fait partie du groupe Ob'vious
        .block-company-group__portal
          .block-company-group__portal__text
            | PORTAIL OB’VIOUS
          .block-company-group__portal__image
            img(src='~/assets/picture/contacts-images/new-tab.svg')
      .block-company-confidentiality
        a.block-company-confidentiality__link(href='') Politique de confidentialité
        .block-company-confidentiality__year
          | © Ob-vious — 2019

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SendingForm from '@/components/Base/BaseFooter/SendingForm.vue'
import FooterContacts from '@/components/Base/BaseFooter/FooterContacts.vue'
import SuccessfullySent from '@/components/Base/BaseFooter/SuccessfullySent.vue'

@Component({
  components: {
    SendingForm,
    FooterContacts,
    SuccessfullySent
  }
})
export default class BaseFooter extends Vue {
  sendMessage: boolean = true
  successSend () {
    this.sendMessage = !this.sendMessage
  }
}
</script>

<style lang="sass" scoped>
@import '../../../../node_modules/bootstrap/scss/functions'
@import '../../../../node_modules/bootstrap/scss/variables'
@import '../../../../node_modules/bootstrap/scss/mixins/breakpoints'
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&subset=cyrillic,cyrillic-ext,latin-ext,vietnamese')
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&subset=cyrillic,cyrillic-ext,latin-ext,vietnamese')
$font: Montserrat, Helvetica, sans-serif

.base-footer
  background-image: linear-gradient(to bottom, #02343e, #001317)
  height: 100%
  border-top: white solid 2px

  &__poligon
    clip-path: polygon(50% 100%, 100% 0.5%, 100% 0, 0 0, 0 0.5%)
    height: 100px
    width: 100%
    background-color: white
    transform: translateY(-2px)
    +media-breakpoint-down(md)
      clip-path: polygon(50% 90%, 100% 78%, 100% 0, 0 0, 0 100%)

.footer-content
  margin-top: 112px
  display: flex
  justify-content: space-between
  width: 100%
  height: 100%
  +media-breakpoint-down(md)
    flex-direction: column
    align-items: center
  +media-breakpoint-down(xs)
    margin-top: 72px

.block-company
  font-family: $font
  font-size: 16px
  color: white
  margin-top: 128px
  display: flex
  justify-content: space-between
  +media-breakpoint-down(sm)
    flex-direction: column
    align-items: center
    text-align: center
    margin-top: 66px

.block-company-group
  display: flex
  flex-direction: column

  &__consulting
    +media-breakpoint-down(xs)
      font-size: 17px
  +media-breakpoint-down(sm)
    align-items: center
    justify-content: center
    width: 272px
    margin-top: 28px

  &__portal
    letter-spacing: 1px
    display: flex
    align-items: center
    color: #009fc1
    font-weight: bold
    +media-breakpoint-down(sm)
      transform: translateX(14px)
    +media-breakpoint-down(xs)
      transform: translateX(14px)
    &__text
      font-size: 12px

.block-company-confidentiality
  text-align: right
  margin-bottom: 32px
  +media-breakpoint-down(sm)
    margin-top: 66px
    text-align: center

  &__link
    color: #009fc1
  &__year
    margin-top: 10px
    +media-breakpoint-down(sm)
      margin-top: 8px

</style>
