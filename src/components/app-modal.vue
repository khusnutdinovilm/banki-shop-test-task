<template>
  <transition name="fade" mode="out-in">
    <div v-if="isModalOpen" class="app-modal" @click.prevent="closeModal">
      <div class="app-modal__body" @click.stop>
        <div class="app-modal__header">
          <div class="app-modal__title">
            {{ modalTitle }}
          </div>

          <div class="app-modal__close-btn" @click.prevent="closeModal">
            <cross-icon />
          </div>
        </div>

        <div class="app-modal__content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "app-modal",

    props: {
      isModalOpen: {
        type: Boolean,
        required: true,
      },
      modalTitle: {
        type: String,
        required: true,
      },
    },

    emits: ["close-modal"],

    methods: {
      closeModal() {
        this.$emit("close-modal");
      },
    },
  };
</script>

<style lang="scss">
  .app-modal {
    @include flex-center;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    cursor: pointer;
    background-color: #000000a8;

    &__body {
      max-width: 700px;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 20px;
      cursor: default;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &__header {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      gap: 20px;
    }

    &__title {
      flex: 1;
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      line-height: 20px;
      color: #343030;
    }

    &__close-btn {
      cursor: pointer;
      // width: 30px;
      // height: 30px;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
