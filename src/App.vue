<template>
  <div id="app">
    <app-header>
      <template v-slot:header-right>
        <app-search v-model="searchQuery" />
      </template>
    </app-header>

    <main>
      {{ searchQuery }}
    </main>

    <app-footer />
  </div>
</template>

<script>
  import AppFooter from "@/components/app-footer.vue";
  import AppHeader from "@/components/app-header.vue";
  import AppSearch from "@/components/app-search.vue";

  export default {
    name: "App",

    components: {
      AppHeader,
      AppSearch,
      AppFooter,
    },

    data() {
      return {
        searchQuery: "",
      };
    },
  };
</script>

<style lang="scss">
  #app {
    display: flex;
    flex-direction: column;
    height: 100dvh;

    & main {
      flex: 1;
    }
  }
</style>
