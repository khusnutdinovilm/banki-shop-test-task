<template>
  <div class="base-image-slider">
    <div class="base-image-slider__image-item">
      <img :src="currentImage" alt="" class="base-image-slider__image" />
    </div>

    <div class="base-image-slider__prev" @click.prevent="prev">&#10094;</div>
    <div class="base-image-slider__next" @click.prevent="next">&#10095;</div>
  </div>
</template>

<script>
  export default {
    name: "base-image-slider",

    props: {
      images: {
        type: Array,
        required: true,
      },
    },

    data() {
      return {
        currentImageIdx: 0,
      };
    },

    computed: {
      currentImage() {
        return this.images[this.currentImageIdx];
      },
    },

    methods: {
      next() {
        if (this.currentImageIdx === this.images.length - 1) {
          this.currentImageIdx = 0;
        } else {
          this.currentImageIdx += 1;
        }
      },

      prev() {
        if (this.currentImageIdx === 0) {
          this.currentImageIdx = this.images.length - 1;
        } else {
          this.currentImageIdx -= 1;
        }
      },
    },
  };
</script>

<style lang="scss">
  .base-image-slider {
    max-width: 1000px;
    max-height: 600px;
    position: relative;
    overflow: hidden;

    &__wrapper {
      display: flex;
    }

    &__image-item {
      flex: 1;
      width: 100%;
    }

    &__image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    &__prev,
    &__next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      padding: 16px;
      margin-top: -22px;
      color: #ffffff;
      background-color: #000000cc;
      font-weight: bold;
      font-size: 18px;
      transition: 0.6s ease;
      border-radius: 0 3px 3px 0;
      user-select: none;

      &:hover {
        background-color: #000000;
      }
    }

    &__next {
      right: 0;
      border-radius: 3px 0 0 3px;
    }
  }
</style>
