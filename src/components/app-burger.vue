<template>
  <div class="app-burger" @click.prevent="isOpen = !isOpen">
    <transition name="fade" mode="out-in">
      <cross-icon v-if="isOpen" />
      <burger-icon v-else />
    </transition>
  </div>
</template>

<script>
  export default {
    name: "app-burger",

    props: {
      value: {
        type: Boolean,
        required: true,
      },
    },

    data() {
      return {
        isOpen: this.value,
      };
    },

    emits: ["input"],

    watch: {
      isOpen(newValue) {
        this.$emit("input", newValue);
      },
    },
  };
</script>

<style lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
