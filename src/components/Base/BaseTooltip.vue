<template lang="pug">
  .base-tooltip(v-if="toolTip")
    .base-tooltip__question {{ text }}
    .base-tooltip__positive-response(@click="$emit('onClick', index)")
      | YES
    .base-tooltip__negative-answer(@click="$emit('hideTooltip')")
      | NO

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class BaseTooltip extends Vue {
@Prop() index: number
@Prop({ default: 'Are you sure you want to delete the note?' }) text: string
@Prop({ default: false }) toolTip: boolean
}
</script>

<style scoped lang="sass">
.base-tooltip
  width: fit-content
  padding: 6px
  text-align: center
  background-color: black
  color: white
  font-size: 12px
  display: flex
  justify-content: space-between
  &__positive-response,
  &__negative-answer
    font-weight: bold
    cursor: pointer
    padding-left: 6px

</style>
