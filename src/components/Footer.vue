<template>
    <div class="container-fluid bg-dark text-white">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="footer-menu">

                </div>
                <p class="text-center">
                    © {{ new Date().getFullYear() }} - {{ msg }}
                </p> 
            </div>
        </div>
        
    </div>
    
</template>

<script>
export default {
    data () {
        return {
            msg: 'All Right Reserved'
        }
    }
}
</script>

<style>

</style>
