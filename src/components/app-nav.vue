<template>
  <nav class="app-nav">
    <div class="app-nav__item">Каталог</div>
    <div class="app-nav__item">Доставка</div>
    <div class="app-nav__item">Оплата</div>
    <div class="app-nav__item">Контакты</div>
    <div class="app-nav__item">О компании</div>
  </nav>
</template>

<script>
  export default {
    name: "app-nav",
  };
</script>

<style lang="scss">
  .app-nav {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    gap: 48px;

    @media (max-width: 996px) {
      align-items: flex-start;
      flex-direction: column;
      gap: 20px;
    }

    &__item {
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;

      color: #343030;
    }
  }
</style>
