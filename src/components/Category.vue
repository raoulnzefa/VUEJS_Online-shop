<template>
    <div class="container">
        <div class="col-lg-12 cl-md-12 col-sm-12">
            <div class="row">
                
                <main role="main">

                    <div class="album bg-light">
                        <div class="container">
                            <h2 class="text-center">{{ allproducts }}</h2>
                            <br>
                            <div class="row">
                                
                                <div class="col-md-4" v-for="post in posts" :key="post.value" :id="post.productName" @click="goTopage($event)">
                                    <div class="card mb-4 box-shadow post-cards">
                                        <div class="card-body">
                                            <img class="card-img-top" :src="post.image" alt="Card image cap">
                                            <h5 class="capitalize">{{post.productTitle}}</h5>
                                            <!-- <p class="card-text">{{post.url}}...</p> -->
                                            <!-- <div class="d-flex justify-content-between align-items-center">
                                                <div class="btn-group">
                                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> 
                                                </div>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
          
                            <div class="clearfix btn-group col-md-2 offset-md-5" v-if="posts.length > 6">
                                <button type="button" class="btn btn-sm btn-outline-secondary" v-if="page != 1" @click="page--"> &larr; </button>
                                <button type="button" class="btn btn-sm btn-outline-secondary" v-for="pageNumber in pages" :key="pageNumber.value" @click="page = pageNumber"> {{pageNumber}} </button>
                                <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-outline-secondary"> &rarr; </button>
                            </div>

                            

                        </div>
                    </div>

                </main>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
//import {paginate} from '../main'

//productblock == post


export default {

    data() {
        return {
            posts: [],
            page: 1,
            perPage: 9,
            pages: [],
            pro_id:this.$route.params.Newcat,
            allproducts: 'All Products'
        }
        
    },
    methods: {
        getPosts () {
            axios.get('/static/allproducts.json')
                .then(response => {
                    this.posts = response.data['posts'];
                    console.log(this.posts)
                })
                .catch(e => {
                  console.log(e)
                })
        },
        goTopage(cat_id) {
            var ca_id = cat_id.currentTarget.id;
            this.$router.push({name: "postss", params: {Newpro: ca_id}});
            console.log('cat id', ca_id);
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
}
</script>

<style scoped>
.post-cards {
    min-height: 200px;
}

.active {
  background: tomato;
}

h5 {
    color: red;
}
</style>
