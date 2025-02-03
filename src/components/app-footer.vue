<template>
  <footer class="app-footer">
    <div class="app-footer__wrapper container">
      <app-nav class="app-footer__nav" />

      <div class="app-footer__contacts">
        <div class="app-footer__contact-item">
          <phone-icon />
          <a href="tel:+78125555555">+7 (812) 555-55-55</a>
        </div>

        <div class="app-footer__contact-item">
          <mark-icon />
          <span>г. Санкт-Петербург, ул. Ефимова, 3</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import AppNav from "@/components/app-nav.vue";

  export default {
    name: "app-footer",

    components: {
      AppNav,
    },
  };
</script>

<style lang="scss">
  .app-footer {
    background-color: #eceaea;

    &__wrapper {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      padding: 37px 0;
    }

    &__nav {
      flex: 1;
    }

    & .app-nav__item,
    &__contact-item {
      color: #555555;
    }

    &__contacts {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      gap: 51px;
    }

    &__contact-item {
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;

      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      gap: 8px;

      & a {
        color: currentColor;
      }
    }
  }
</style>
