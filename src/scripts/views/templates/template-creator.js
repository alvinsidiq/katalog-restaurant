import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="post_detail">
    <h2 class="resto-info_name">${restaurant.name}</h2>
    <img
      class="resto-info_img"
      src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}" alt="${restaurant.name}"/>
    <div class="resto-info">
      <p tabindex="0" class="resto-info_city">Location: ${restaurant.city}</p>
      <p tabindex="0" class="resto-info_description">${restaurant.description}</p>
      <p tabindex="0" class="resto-info_address">Address : ${restaurant.address}</p>
      <p class="menu_title">Menu</p>
      
        <div class="resto-menu_foods">
          <p class="menu_category">Foods</p>
          <ul class="menu_category_list">${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}</ul>
        </div>
      </div>
      <div claas "resto-info_menu">
        <div class="resto-menu_drink">
        <p class="menu_category">Drinks</p>
        <ul class="menu_category_list">${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</ul>
        </div>
    

      
      <p class="reviews_title">Customer Reviews</p>
      <div class="reviews">
        ${restaurant.customerReviews.map((review) => `
          <div class="resto_reviews">
            <p class="name_customer">${review.name}</p>
            <p class="review_customer">${review.review}</p>
            <p class="review_date">${review.date}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div tabindex="0" class="post-item">
    <img
      tabindex="0"
      class="post-item_thumbnail"
      src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name}"
    />
    <div class="post-item_content">
      <p tabindex="0" class="post-item_rating">⭐️ Rating: ${restaurant.rating}</p>
      <h1 tabindex="0" class="post-item_title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
      <p tabindex="0" class="post-item_description">${restaurant.description}</p>
      <p tabindex="0" class="post-item_city">Location: ${restaurant.city}</p>
    </div>
  </div>
`;

const createRestoReviewTemplate = (reviews) => `
  <div class="review">
    <p>
    <span class="name">${reviews.name}</span> &bull; <span class="date">${reviews.date}</span>
    </p>
    <p>${reviews.review}</p>
  </div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;


export { createRestaurantDetailTemplate, createRestaurantItemTemplate,
  createRestoReviewTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,  

};
