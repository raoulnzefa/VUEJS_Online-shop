import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
//import Products from '@/views/Products'
import AllProducts from '@/views/AllProducts'
import CategoriesList from '@/views/CategoriesList'
import ProductsList from '@/views/ProductsList.vue';
import About from '@/views/About.vue';
import ContactUs from '@/views/ContactUs.vue';
import Product from '@/views/Product.vue';


Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/products',
    //   name: 'Products',
    //   component: Products
    // },
    {
      path: '/allproducts',
      name: 'allproducts',
      component: AllProducts
    },
    {
      path: '/categories/:Pid',
      name: 'categorieslist',
      component: CategoriesList
    },
    {
      path: '/categories/:Pid/:Newcat',
      name: 'categories',
      component: ProductsList
    },
    {
      path: '/categories/:Pid/:Newcat/:Newpro',
      name: 'posts',
      component: Product
    },
    {
      path: '/allproducts/:Newpro',
      name: 'postss',
      component: Product
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: ContactUs
    }
  ],
  mode: 'history'
})
