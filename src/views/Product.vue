<template>
  <div>
    
    <div class="container">
      <h1>Product</h1>
    <div class="row">
      <!-- <h1>{{ category_title() }}</h1> -->
      <div class="col-md-12 box-shadow post-cards shadow-lg" :id="single.productName" v-for="(single, index) in productone" :key="index">
        <div class="card-body">
          <div class="col-md-6 float-left">
            <img class="card-img-top" :src="single.image">
          </div>
          <div class="col-md-6 description float-right">
            <h3>Descrption</h3>
            <h5 class="capitalize">{{single.productTitle}}</h5>
          </div>
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
    product: [],
    productone: [],
    productone_id:this.$route.params.Newpro
   }
  },

  mounted() {
    axios
      .get("/static/json.json")
      .then(response => {
        this.productone = response.data["posts"][this.productone_id];
       
      })
      .catch(e => {
        console.log(e);
      });
  }
 }
</script>

<style scoped>
.title {
  bottom: 12px;
  background: #ffffff80;
  display: block;
  width: 89%;
  color: #fff;
  text-align: center;
  padding: 5px 0;
}
.description {
  background: gray;
}
h5 {
  color: red;
}
</style>