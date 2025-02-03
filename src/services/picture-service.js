import db from "./db.js";

class PictureService {
  async fetchPictures() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const pictures = db.map((picture) => {
          const images = picture.images.map(
            (image) => `/assets/images/${image}`
          );
          return {
            ...picture,
            images,
          };
        });

        resolve(pictures);
      }, 2000);
    });
  }
}

export default new PictureService();
