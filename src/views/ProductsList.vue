<template>
  <div>
    
    <div class="container">
      <h1>Products List</h1>
    <div class="row">
      <!-- <h1>{{ category_title() }}</h1> -->
      <div class="col-md-4 box-shadow post-cards shadow-lg" :id="product.productName" @click="goTopage($event)" v-for="(product, index) in product_categories" :key="index">
        <div class="card-body position-relative">
          <img class="card-img-top" :src="product.image">
          <h5 class="title capitalize position-absolute">{{product.productTitle}}</h5>
          <!-- {{index}} -->
        </div>
      </div>
    </div>
    </div>
    
    </div>
</template>

<script>
import axios from "axios";

 export default{
  data(){
   return{
    productcategories: [],
    product_categories: [],
    pro_id:this.$route.params.Newcat,
   }
  },
  methods: {
    goTopage(cat_id) {
        var ca_id = cat_id.currentTarget.id;
        this.$router.push({name: "posts", params: {Newpro: ca_id}});
        //console.log('cat id', cat_id);
    }
  },

  mounted() {
    axios
      .get("/static/json.json")
      .then(response => {
        this.product_categories = response.data["productcategories"][this.pro_id];
         //console.log('product',this.product_categories);
         //console.log('ruoter',this.pro_id);
         console.log('products list')
      })
      .catch(e => {
        console.log(e);
      });
  }
 }
</script>

<style>
.title {
  bottom: 12px;
  background: #ffffff80;
  display: block;
  width: 89%;
  color: #fff;
  text-align: center;
  padding: 5px 0;
}
</style>