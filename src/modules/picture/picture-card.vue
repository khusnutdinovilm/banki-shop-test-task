<template>
  <div :class="pictureCardClasses" @click.prevent="openDetailInfo">
    <div class="picture-card__header">
      <img
        :src="firstPictureImg"
        :alt="fullPictureTitle"
        class="picture-card__image"
      />
    </div>

    <div class="picture-card__content">
      <div class="picture-card__title">
        {{ fullPictureTitle }}
      </div>

      <div v-if="picture.sold" class="picture-card__footer">
        <div class="picture-card__sold-label">Продана на аукционе</div>
      </div>
      <div v-else class="picture-card__footer">
        <div class="picture-card__price">
          <div v-if="picture.oldPrice" class="picture-card__price-old">
            {{ getOldPrice }}
          </div>

          <div class="picture-card__price-actual">
            {{ getPrice }}
          </div>
        </div>

        <base-button
          :label-text="cartButtonText"
          :type="cartButtonType"
          :loading="loading"
          @click="toggleCartItem"
        >
          <template v-if="isPictureInCart" v-slot:prepend>
            <tick-icon />
          </template>
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";
  import mixin from "./mixin";

  export default {
    name: "picture-card",

    props: {
      picture: {
        type: Object,
        required: true,
      },
    },

    emits: ["open-detail-info"],

    data() {
      return {
        loading: false,
      };
    },

    mixins: [mixin],

    computed: {
      ...mapGetters(["cartItems"]),

      pictureCardClasses() {
        return [
          "picture-card",
          {
            "picture-card--sold": this.picture.sold,
          },
        ];
      },

      isPictureInCart() {
        return this.cartItems.has(this.picture.id);
      },

      cartButtonText() {
        return this.isPictureInCart ? "В корзине" : "Купить";
      },

      cartButtonType() {
        return this.isPictureInCart ? "secondary" : "primary";
      },
    },

    methods: {
      ...mapActions(["addToCart", "removeFromCart"]),

      openDetailInfo() {
        this.$emit("open-detail-info", this.picture.id);
      },

      async toggleCartItem() {
        this.loading = true;

        try {
          if (this.isPictureInCart) {
            await this.removeFromCart(this.picture.id);
          } else {
            await this.addToCart(this.picture.id);
          }
        } catch (error) {
        } finally {
          this.loading = false;
        }
      },
    },
  };
</script>

<style lang="scss">
  .picture-card {
    border: 1px solid #e7e7e7;
    max-width: 280px;
    cursor: pointer;

    display: flex;
    flex-direction: column;

    &--sold {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background-color: #ffffff73;
      }
    }

    &__header {
      height: 160px;
      border-bottom: 1px solid #e7e7e7;
      overflow: hidden;
    }

    &__image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__content {
      padding: 20px 24px 24px;

      display: flex;
      flex-direction: column;
      gap: 22px;
      flex: 1;
      justify-content: space-between;
    }

    &__title {
      max-width: 220px;
      font-size: 18px;
      font-weight: 400;
      line-height: 27px;
      color: #343030;
    }

    &__footer {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      gap: 25px;
      flex: 1;

      & .base-button {
        flex: 1;
      }
    }

    &__sold-label {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;

      color: #343030;
    }

    &__price {
      display: flex;
      flex-direction: column;

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
