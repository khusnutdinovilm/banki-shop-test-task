export default {
  computed: {
    fullPictureTitle() {
      const { title, artist } = this.picture;
      return `«${title}» ${artist}`;
    },

    firstPictureImg() {
      return this.picture.images[0];
    },

    getOldPrice() {
      const { oldPrice } = this.picture;
      return `${oldPrice.toLocaleString("ru-RU")} $`;
    },

    getPrice() {
      const { price } = this.picture;
      return `${price.toLocaleString("ru-RU")} $`;
    },
  },
};
