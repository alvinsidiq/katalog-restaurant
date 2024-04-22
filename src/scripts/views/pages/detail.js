
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <section class="content">
      <div class="katalog">
        <h1 tabindex="0" class="katalog_label">Detail Restaurant</h1>
        <div class="resto-detail">
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestaurantDbSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('.resto-detail');
    detailContainer.innerHTML = createRestaurantDetailTemplate(detail);

    this._hideHero();
  },

  _hideHero() {
    const heroContent = document.querySelector('hero-section');
    heroContent.style.display = 'none';
  },
};



// FavoriteButtonInitiator.init({
//   favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
//   restaurant: {
//     id: detail.id,
//     name: detail.name,
//     city: detail.city,
//     description: detail.description,
//     pictureId: detail.pictureId,
//     rating: detail.rating,
//   },
// });


export default Detail;
