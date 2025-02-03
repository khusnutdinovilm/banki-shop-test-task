<template>
  <div class="app-search">
    <base-input
      v-model="searchQuery"
      id="search"
      placeholder="Поиск по названию картины"
      :debounce="300"
    />

    <base-button label-text="Поиск">
      <template v-slot:prepend>
        <loupe-icon />
      </template>
    </base-button>
  </div>
</template>

<script>
  export default {
    name: "app-search",

    props: {
      value: {
        type: String,
        required: true,
      },
    },

    emits: ["input"],

    data() {
      return {
        searchQuery: "",
      };
    },

    watch: {
      searchQuery(newValue) {
        this.$emit("input", newValue);
      },
    },
  };
</script>

<style lang="scss">
  .app-search {
    display: flex;
    flex-flow: row nowrap;

    & .base-input {
      flex: 1;
    }

    & .base-input__field {
      border-right: none;
    }

    & .base-button {
      width: 122px;

      @media (max-width: 576px) {
        width: 48px;
      }
    }

    & .base-button__prepend {
      display: none;

      @media (max-width: 576px) {
        @include flex-center;
      }
    }

    & .base-button__content {
      @media (max-width: 576px) {
        display: none;
      }
    }
  }
</style>
