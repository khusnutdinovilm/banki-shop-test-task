<template>
  <button class="base-button" :class="buttonClasses" :disabled="disabled" @click.prevent.stop="onClick">
    <div v-if="$slots.prepend && !loading" class="base-button__prepend">
      <slot name="prepend" />
    </div>

    <div v-if="loading" class="base-button__loader"></div>
    <div v-else class="base-button__content">
      {{ labelText }}
    </div>

    <div v-if="$slots.append && !loading" class="base-button__append">
      <slot name="append" />
    </div>
  </button>
</template>

<script>
  export default {
    name: "base-button",

    props: {
      labelText: {
        type: String,
        required: true,
        default: "",
      },
      type: {
        type: String,
        required: false,
        default: "primary",
      },
      loading: {
        type: Boolean,
        required: false,
        default: false,
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      },
    },

    emits: ["click"],

    computed: {
      buttonClasses() {
        return {
          "base-button--primary": this.type === "primary",
          "base-button--secondary": this.type === "secondary",
        };
      },
    },

    methods: {
      onClick() {
        if (this.loading) return;

        this.$emit("click");
      },
    },
  };
</script>

<style lang="scss">
  .base-button {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 4px;

    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    color: #f4f6f9;

    height: 48px;

    transition: all 0.4s ease-in;

    &:hover:not(:has(.base-button__loader)) {
      background-color: #776763;
    }

    &:disabled {
      background-color: #c1b4b1;
    }

    &--primary {
      background-color: #403432;
    }

    &--secondary {
      background-color: #5b3a32;
    }

    &__loader {
      width: 21px;
      height: 21px;
      border: 3px solid #f4f6f9;
      border-bottom-color: transparent;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    &__prepend {
    }

    &__content {
    }

    &__append {
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
