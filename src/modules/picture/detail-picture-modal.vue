<template>
  <app-modal
    :is-modal-open="isModalOpen"
    :modal-title="picture.title"
    class="detail-picture-modal"
    @close-modal="$emit('close-detail-modal')"
  >
    <base-image-slider
      :images="picture.images"
      class="detail-picture-modal__header"
    ></base-image-slider>

    <div class="detail-picture-modal__description">
      {{ picture.description }}
    </div>

    <div class="detail-picture-modal__price">
      <div v-if="picture.oldPrice" class="detail-picture-modal__price-old">
        {{ getOldPrice }}
      </div>
      <div class="detail-picture-modal__price-actual">
        {{ getPrice }}
      </div>
    </div>
  </app-modal>
</template>

<script>
  import AppModal from "@/components/app-modal.vue";
  import BaseImageSlider from "@/components/ui/base-image-slider.vue";
  import mixin from "./mixin";

  export default {
    name: "detail-picture-modal",

    components: {
      AppModal,
      BaseImageSlider,
    },

    props: {
      picture: {
        type: Object,
        required: true,
      },
    },

    emits: ["close-detail-modal"],

    data() {
      return {
        isModalOpen: false,
      };
    },

    mixins: [mixin],

    created() {
      this.isModalOpen = true;
    },
  };
</script>

<style lang="scss">
  .detail-picture-modal {
    & .app-modal__content {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &__header {
      width: 100%;
    }

    &__price {
      display: flex;
      flex-direction: column;
      align-self: flex-end;

      &-old {
        font-size: 14px;
        font-weight: 300;
        line-height: 21px;
        text-decoration: line-through;
        color: #a0a0a0;
      }

      &-actual {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        color: #343030;
      }
    }
  }
</style>
