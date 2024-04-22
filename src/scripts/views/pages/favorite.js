import FavoriteRestaurantDB from '../../data/favorite-restaurant';
import { createRestoItemTemplate } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="content">
      <div class="katalog">
        <h1 tabindex="0" class="katalog_label">Favorite Restaurants</h1>
        <div class="resto-list">
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantDB.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.resto-list');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });

    this._hideHero();
  },

  _hideHero() {
    const heroContent = document.querySelector('hero-section');
    heroContent.style.display = 'none';
  },
};

export default Favorite;
