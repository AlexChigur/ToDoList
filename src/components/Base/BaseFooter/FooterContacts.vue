<template lang="pug">

    .footer-contacts
      .footer-contacts__title
        | Contactez-nous
      .main-contact-information(v-for="contact in contacts")
        .main-contact-information__image
          img(:src="contact.image")
        .contact-data
          .contact-data__name {{contact.name}}
          .contact-data__post {{contact.post}}
          a.contact-data__email(:href="`mailto:`+ contact.email") {{contact.email}}
          .contact-data__shape
            img(:src="contact.shape")

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Contacts, { ContactImages } from '../../../helpers/Contacts'
@Component({})
export default class FooterContacts extends Vue {
  contacts: ContactImages = Contacts
}
</script>

<style lang="sass" scoped>
@import '../../../../node_modules/bootstrap/scss/functions'
@import '../../../../node_modules/bootstrap/scss/variables'
@import '../../../../node_modules/bootstrap/scss/mixins/breakpoints'
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&subset=cyrillic,cyrillic-ext,latin-ext,vietnamese')
$font: Montserrat, Helvetica, sans-serif

.footer-contacts
  max-width: 381px
  font-family: $font
  color: white
  +media-breakpoint-down(md)
    text-align: center
  &__title
    font-size: 32px
    +media-breakpoint-down(sm)
      font-size: 24px

.main-contact-information
  display: flex
  margin-top: 40px
  +media-breakpoint-down(md)
    flex-direction: column
  +media-breakpoint-down(sm)
    margin-top: 49px

.contact-data
  display: flex
  flex-direction: column
  margin-left: 24px
  +media-breakpoint-down(md)
    margin-left: 0

  &__name
    margin-top: 9px
    line-height: 1.5
    font-size: 16px
  +media-breakpoint-down(sm)
    margin-top: 2px

  &__post
    letter-spacing: 1px
    margin-top: 5px
    font-size: 12px
    font-weight: bold

  &__email
    letter-spacing: 1px
    margin-top: 9px
    font-size: 12px
    font-weight: bold
    color: #009fc1
    text-decoration: none
  &__shape
    margin-top: 13px

</style>
