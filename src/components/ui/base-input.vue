<template>
  <div class="base-input">
    <label v-if="labelText" :for="id" class="base-input__label">
      {{ labelText }}
    </label>

    <input
      :id="id"
      type="text"
      class="base-input__field"
      :value="value"
      @input="onInput"
    />
  </div>
</template>

<script>
  export default {
    name: "base-input",

    props: {
      value: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
      labelText: {
        type: String,
        required: false,
        default: "",
      },
      placeholder: {
        type: String,
        required: true,
      },
      debounce: {
        type: Number,
        required: false,
        default: 0,
      },
    },

    emits: ["input"],

    data() {
      return {
        debounceTimer: null,
      };
    },

    methods: {
      onDebounce(func, delay) {
        return (...args) => {
          clearTimeout(this.debounceTimer);

          this.debounceTimer = setTimeout(() => {
            func(...args);
          }, delay);
        };
      },

      onInput(event) {
        const value = event.target.value;

        if (this.debounce > 0) {
          this.debouncedEmit(value);
        } else {
          this.$emit("input", value);
        }
      },
    },

    created() {
      if (this.debounce > 0) {
        this.debouncedEmit = this.onDebounce((value) => {
          this.$emit("input", value);
        }, this.debounce);
      }
    },

    beforeDestroy() {
      clearTimeout(this.debounceTimer);
    },
  };
</script>

<style lang="scss">
  .base-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;

    font-size: 14px;
    font-weight: 400;
    line-height: 21px;

    color: #343030;

    &__label {
      padding-left: 16px;
      font-weight: 700;
      color: currentColor;
    }

    &__field {
      border: 1px solid #e1e1e1;
      color: currentColor;
      padding: 14px 16px;

      &:active,
      &:focus,
      &:focus-visible {
        border-color: #b5b5b5;
      }
    }
  }
</style>
