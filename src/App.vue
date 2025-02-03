<template>
  <div id="app">
    <app-header>
      <template v-slot:header-right>
        <app-search v-model="searchQuery" />
      </template>
    </app-header>

    <main class="page container" :class="pageClasses">
      <div class="page__title">Картины эпохи Возрождения</div>

      <div class="page__content">
        <template v-if="isContentLoading">
          <div class="page__loader"></div>
        </template>
        <template v-else-if="isContentEmpty"> Ничего не найдено </template>
        <template v-else>
          <div class="pictures-list">
            <picture-card
              v-for="picture in picturesItems"
              :key="picture.id"
              :picture="picture"
              class="pictures-list__item"
              @open-detail-info="openDetailInfo"
            />
          </div>
        </template>
      </div>
    </main>

    <app-footer />

    <detail-picture-modal
      v-if="!!detailPicture"
      :picture="detailPicture"
      @close-detail-modal="onCloseDetailModal"
    />
  </div>
</template>

<script>
  import AppFooter from "@/components/app-footer.vue";
  import AppHeader from "@/components/app-header.vue";
  import AppSearch from "@/components/app-search.vue";
  import PictureCard from "@/modules/picture/picture-card.vue";

  import AppModal from "@/components/app-modal.vue";
  import DetailPictureModal from "@/modules/picture/detail-picture-modal.vue";
  import { mapActions, mapGetters } from "vuex";

  export default {
    name: "App",

    components: {
      AppHeader,
      AppSearch,
      AppFooter,
      AppModal,
      PictureCard,
      DetailPictureModal,
    },

    data() {
      return {
        searchQuery: "",
        isContentLoading: false,
        isModalOpen: true,
        detailPicture: null,
      };
    },

    computed: {
      ...mapGetters(["pictures"]),

      picturesItems() {
        return this.pictures.filter((picture) =>
          picture.title
            .toLocaleLowerCase()
            .includes(this.searchQuery.toLocaleLowerCase())
        );
      },

      isContentEmpty() {
        return this.pictures.length === 0;
      },

      pageClasses() {
        return {
          "page--no-data": this.isContentEmpty || this.isContentLoading,
        };
      },
    },

    async created() {
      this.isContentLoading = true;

      try {
        await this.fetchPictures();
      } catch (error) {
        console.error(error);
      } finally {
        this.isContentLoading = false;
      }
    },

    methods: {
      ...mapActions(["fetchPictures"]),

      openDetailInfo(id) {
        this.detailPicture = this.pictures.find((picture) => picture.id === id);
      },

      onCloseDetailModal() {
        this.detailPicture = null;
      },
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

  .page {
    display: flex;
    flex-direction: column;
    gap: 39px;
    padding-top: 45px;
    padding-bottom: 45px;

    &__title {
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      color: #343030;

      @media (max-width: 596px) {
        font-size: 18px;

        line-height: 24px;
      }
    }

    &--no-data &__content {
      @include flex-center;
      height: 100%;
    }

    &:has(.page--no-data) &__content {
      flex: 1;
    }

    &__loader {
      width: 100px;
      height: 100px;
      border: 3px solid #343030;
      border-bottom-color: transparent;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
  }

  .pictures-list {
    display: flex;
    flex-flow: row wrap;
    gap: 32px;

    @media (max-width: 768px) {
      gap: 20px;
    }

    @media (max-width: 596px) {
      justify-content: center;
    }

    &__item {
      flex: 1 calc(280px - 32px);

      @media (max-width: 768px) {
        flex: 1 calc(280px - 20px);
      }
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
