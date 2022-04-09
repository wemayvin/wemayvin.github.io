<template>
  <div class="gallery-section">
    <div class="title">갤러리</div>
    <gallery class="gallery" :images="weddingInfo.img.gallery" :index="index" @close="index = null"></gallery>
    <div class="imageDiv">
      <div
        class="image"
        v-for="(image, imageIndex) in weddingInfo.img.gallery"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')', width: '30%', paddingBottom:'30%' }"
      ></div>
    </div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";
export default {
  props: ["weddingInfo"],
  data() {
    return {
      index: null
    };
  },
  components: {
    gallery: VueGallery
  }
};
</script>

<style scoped>
.title {
  font-size: 11px;
  letter-spacing: 3px;
  color: #333;
  margin-bottom: 25px;
}

.gallery-section {
  overflow: hidden;
  margin-top: 50px;
  margin-bottom: 80px;
}

.imageDiv {
  margin-left: 3.8%;
}

.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 1%;
}
</style>