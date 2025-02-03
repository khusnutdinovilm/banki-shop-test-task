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

    created() {
      document.body.style.overflow = "hidden";
    },

    beforeDestroy() {
      document.body.style.overflow = "scroll";
    },

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
      max-height: 80%;
      max-width: 700px;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 20px;
      cursor: default;
      display: flex;
      flex-direction: column;
      gap: 20px;

      @media (max-width: 768px) {
        border-radius: 0;
      }
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
    }

    &__content {
      overflow-y: scroll;
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
