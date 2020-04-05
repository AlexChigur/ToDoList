<template lang="pug">
  .base-checkbox
    input(
      type="checkbox"
      v-model="selectedItems"
      v-bind:value="value"
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
}
</script>

<style lang="sass" scoped>
.base-checkbox
  display: flex
  align-items: center

  &__label
    padding-left: 14px
</style>
