<!--
  Badge with an optional icon

  Usage:

    <Badge
      :color="red"           - Badge background color
      :icon="error_outline"  - Badge optional icon
      :icon-size="20px">     - Badge icon size
    </Badge>
-->

<template>
  <div
    class="ds-badge"
    @click="$emit('click')"
    :style="{
      backgroundColor,
      borderColor: active ? 'transparent' : '#E8ECEF'
    }"
  >
    <div v-if="mark" class="mark" :style="{ backgroundColor: markColor }" />

    <Icon
      v-else-if="icon"
      class="ds-icon"
      :source="icon"
      :color="iconColor"
      :size="iconSize"
      :style="{ padding: iconPadding }"
    />

    <slot></slot>
  </div>
</template>

<script>
import Icon from './Icon.vue';
import { COLORS } from '../styles/vars';

export default {
  name: 'Badge',
  components: { Icon },
  props: {
    icon: String,
    iconSize: String,
    iconColor: {
      type: String,
      default: 'white'
    },
    iconPadding: String,
    color: String,
    active: Boolean,
    mark: Boolean
  },
  data: () => ({
    COLORS
  }),
  computed: {
    markColor() {
      return this.COLORS[this.color] || this.color;
    },
    backgroundColor() {
      return this.active ? this.markColor + '19' : 'white';
    }
  }
};
</script>

<style lang="less" scoped>
@import '../styles/vars';

.ds-badge {
  display: inline-flex;
  align-items: center;
  width: auto;
  color: @color-dark;
  padding: @badge-padding;
  cursor: pointer;
  border: solid 1px @color-gray-300;
  border-radius: 100px;
  font-size: 14px;
  line-height: 16px;

  .ds-icon {
    margin-right: @badge-icon-margin;
  }

  .mark {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    margin-right: 11px;
  }
}
</style>
