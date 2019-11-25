<template>
    <div>
        
        <app-slider></app-slider>
        <app-categories-block></app-categories-block>
        <app-video-block></app-video-block>
    </div>
</template>

<script>

import Slider from '../components/Slider.vue';
import CategoriesBlock from '../components/CategoriesBlock.vue';
import VideoBlock from '../components/VideoBlock.vue';

export default {
    components: {
        appSlider: Slider,
        appCategoriesBlock: CategoriesBlock,
        appVideoBlock: VideoBlock
    }
}
</script>

<style>

</style>
