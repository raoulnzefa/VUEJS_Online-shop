<template>
  <div class="container">
    <div class="col-lg-12 cl-md-12 col-sm-12">
      <div class="row">
        <!-- <div class="card col-lg-3 col-md-3 col-sm-6" v-for="categoria in categorias" :key="categoria.id">
                    <img class="card-img-top" :src="categoria.url" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text">{{ categoria.title }}</p>
                    </div>
        </div>-->
        <main role="main">
          <div class="album py-5 bg-light">
            <div class="container">
              <h1>Category Block</h1>
              <div class="row">
                
                <div
                  class="col-md-4"
                  v-for="category in categories"
                  :key="category.value"
                  :id="category.cat_name"
                  @click="goTolist($event)"
                >
                  <div class="card mb-4 box-shadow post-cards shadow-lg">
                    <div class="card-body position-relative">
                      <img class="card-img-top" :src="category.cat_images" alt="Card image cap">
                      <h5 class="title capitalize position-absolute">{{category.cat_title}}</h5>
                      
                      
                      <!-- <rate :length="5" :value="value" @rating-selected="rate = $event" :rate="rate"  :showcount="true" /> -->
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      categories: []
    };
  },
  methods: {
    goTolist(prod_id) {
      var pro_id = prod_id.currentTarget.id;
      this.$router.push({ name: "categorieslist", params: {Pid: pro_id } });
    }
  },
  mounted() {
    axios
      .get("/static/json.json")
      .then(response => {
        this.categories = response.data["categories"];
        console.log('categories block');
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style>
button.Rate__star {
  outline: none;
}

.post-cards {
  min-height: 210px;
}

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
