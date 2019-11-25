// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex';
import VueAwesomeSwiper from 'vue-awesome-swiper'

import rate from 'vue-rate';

Vue.use(rate)


/*
Vue.component('paginate', {
  template: '<div class="clearfix btn-group col-md-2 offset-md-5" v-if="posts.length > 9">'+
  '<button type="button" class="btn btn-sm btn-outline-secondary" v-if="page != 1" @click="page--"> &larr; </button>'+
  '<button type="button" class="btn btn-sm btn-outline-secondary" v-for="pageNumber in pages" :key="pageNumber.value" @click="page = pageNumber"> {{pageNumber}} </button>'+
  '<button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-outline-secondary"> &rarr; </button>'+
  '</div>',
  data() {
    return {
        posts: [],
        page: 1,
        perPage: 9,
        pages: []
    }
  },
  methods: {
    getPosts () {
        axios.get('./static/json.json')
            .then(response => {
                this.posts = response.data['posts'];
            })
            .catch(e => {
              console.log(e)
            })
    },
    setPages () {
        let numberOfPages = Math.ceil(this.posts.length / this.perPage);
        for (let index = 1; index <= numberOfPages; index++) {
            this.pages.push(index);
        }
    },
    paginate (posts) {
        let page = this.page;
        let perPage = this.perPage;
        let from = (page * perPage) - perPage;
        let to = (page * perPage);
        return  posts.slice(from, to);
    },
  },
  computed: {
    displayedPosts () {
        return this.paginate(this.posts);
    }
  },
  watch: {
    posts () {
        this.setPages();
    }
  },
  created () {
    this.getPosts();
  }
})
*/

Vue.use(Vuex);
 
Vue.use(VueRouter)

Vue.use(VueAxios, axios)

import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
