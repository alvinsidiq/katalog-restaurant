import ListRestaurant from '../views/pages/list-restaurant';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
const routes = {
  '/': ListRestaurant, // default page
  '/list-restaurant': ListRestaurant,
  
  '/favorite': Favorite,
  '/detail/:id': Detail,
};


export default routes;
