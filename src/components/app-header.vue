<template>
  <header class="app-header">
    <div class="app-header__wrapper container">
      <div class="app-header__left">
        <app-burger v-model="isNavOpen" class="app-header__burger" />
        <app-nav
          class="app-header__nav"
          :class="{ 'app-header__nav--open': isNavOpen }"
        />
      </div>

      <slot name="header-right" />
    </div>
  </header>
</template>

<script>
  import AppBurger from "@/components/app-burger.vue";
  import AppNav from "@/components/app-nav.vue";
  import AppSearch from "@/components/app-search.vue";

  export default {
    name: "app-header",

    components: {
      AppSearch,
      AppNav,
      AppBurger,
    },

    data() {
      return {
        searchQuery: "",
        isNavOpen: false,
      };
    },
  };
</script>

<style lang="scss">
  .app-header {
    border-bottom: 1px solid #e1e1e1;
    padding: 24px 0;

    &__wrapper {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
    }

    &__nav {
      @media (max-width: 996px) {
      }
    }

    &__burger {
      display: none;

      @media (max-width: 996px) {
        display: block;
      }
    }

    &__left {
      flex: 1;
      min-width: 44px;
      position: relative;
    }

    &__nav {
      @media (max-width: 996px) {
        display: none;
        position: absolute;
        left: 44px;
        width: 200px;
        background-color: #ffffff;
        border: 1px solid #e1e1e1;
        border-radius: 10px;
        padding: 10px 30px;

        &--open {
          display: block;
        }
      }
    }

    & .app-search {
      width: 416px;

      @media (max-width: 576px) {
        width: auto;
      }
    }
  }
</style>
