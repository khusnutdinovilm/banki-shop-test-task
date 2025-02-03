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
  </div>
</template>

<script>
  import AppHeader from "@/components/app-header.vue";
  import AppSearch from "@/components/app-search.vue";

  export default {
    name: "App",

    components: {
      AppHeader,
      AppSearch,
    },

    data() {
      return {
        searchQuery: "",
      };
    },
  };
</script>

<style lang="scss"></style>
