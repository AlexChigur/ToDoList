<template lang="pug">
  .base-checkbox
    input(
      type="checkbox"
      v-model="selectedItems"
      :value="value"
    )
    .base-checkbox__label {{ label }}
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({})
export default class BaseCheckbox extends Vue {
@Prop() value: string
@Prop() label: string

  selectedItems = []
  @Watch('selectedItems')
  handler (task) {
    console.log(task)
  }
}
</script>

<style lang="sass" scoped>
.base-checkbox
  display: flex
  align-items: center

  &__label
    padding-left: 14px
</style>
