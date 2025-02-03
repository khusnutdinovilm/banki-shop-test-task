import db from "./db.js";

class PictureService {
  async fetchPictures() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(db)
      }, 2000);
    })
  }
}

export default new PictureService();