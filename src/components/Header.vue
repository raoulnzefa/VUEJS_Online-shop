<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button @click="isActive = !isActive"  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <router-link v-for="items in menu" :key="items.id" tag="li" :to="items.path" class="nav-item">
                                <a class="nav-link">{{ items.name }}</a>
                            </router-link>

                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>



<script>
import axios from 'axios';
export default {
    data(){
        return {
            menu: [],
            isActive: true
        }
    },
    mounted(){
       axios.get('/static/json.json')
                .then(response => {
                    this.menu = response.data['menu'];
                })
                .catch(e => {
                  console.log(e)
                })
    }
}
</script>

<style>

</style>
