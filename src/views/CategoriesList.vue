<template>
  <div>
    
    <div class="container">
      <h1>Categories List</h1>
    <div class="row">
      <!-- <h1>{{ category_title() }}</h1> -->
      <div class="col-md-4 box-shadow post-cards shadow-lg" :id="product.prod_name" @click="goTopage($event)" v-for="(product,index) in accsess_category" :key="index">
        <div class="card-body position-relative">
          <img class="card-img-top" :src="product.image">
          <h5 class="title capitalize position-absolute">{{product.productTitle}}</h5>
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
    products: [],
    accsess_category:[],
    //categories: [],
    pro_id:this.$route.params.Pid,
    //pro_title:this.$route.params.ProductTitle
   }
  },
  methods: {
    goTopage(prod_id) {
      var pro_id = prod_id.currentTarget.id;
      //console.log(pro_id)
      this.$router.push({ name: "categories", params: {Newcat: pro_id } });
    }
  },

  mounted() {
    axios
      .get("/static/json.json")
      .then(response => {
        this.products = response.data["products"];
        this.accsess_category = response.data['products'][this.pro_id]
        //console.log(this.pro_id)
        console.log('categories list')
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