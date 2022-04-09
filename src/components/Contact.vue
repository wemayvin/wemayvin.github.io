<template>
  <div class="contact-section">
    <div class="name-info">
      <span v-if="weddingInfo.bride.fatherPhone.length > 0">
        <a v-bind:href="'tel:' + weddingInfo.bride.fatherPhone">{{ weddingInfo.bride.father }}</a>
      </span>
      <span v-else>{{ weddingInfo.bride.father }}</span>
      <span class="dot">•</span>
      <span v-if="weddingInfo.bride.motherPhone.length > 0">
        <a v-bind:href="'tel:' + weddingInfo.bride.motherPhone">{{ weddingInfo.bride.mother }}</a>
      </span>
      <span v-else>{{ weddingInfo.bride.mother }}</span>
      <span class="relation">의 {{ weddingInfo.bride.relation }}</span>
      <span v-if="weddingInfo.bride.phone.length > 0">
        <a v-bind:href="'tel:' + weddingInfo.bride.phone">{{ weddingInfo.bride.firstName }}</a>
      </span>
      <span v-else>{{ weddingInfo.bride.firstName }}</span>
      <br />
      <span v-if="weddingInfo.groom.fatherPhone.length > 0">
        <a v-bind:href="'tel:' + weddingInfo.groom.fatherPhone">{{ weddingInfo.groom.father }}</a>
      </span>
      <span v-else>{{ weddingInfo.groom.father }}</span>
      <span class="dot">•</span>
      <span v-if="weddingInfo.groom.motherPhone.length > 0">
        <a v-bind:href="'tel:' + weddingInfo.groom.motherPhone">{{ weddingInfo.groom.mother }}</a>
      </span>
      <span v-else>{{ weddingInfo.groom.mother }}</span>
      <span class="relation">의 {{ weddingInfo.groom.relation }}</span>
      <span v-if="weddingInfo.groom.phone.length > 0">
        <a v-bind:href="'tel:' + weddingInfo.groom.phone">{{ weddingInfo.groom.firstName }}</a>
      </span>
      <span v-else>{{ weddingInfo.groom.firstName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["weddingInfo"]
};
</script>

<style scoped>
.contact-section {
  margin: 40px 0 40px 0;
}
.name-info {
  display: inline-block;
  padding: 12px 20px;
  border: 1px solid #dedede;
  border-left: 0;
  border-right: 0;
  color: #333;
  line-height: 30px;
  font-size: 15px;
  word-break: keep-all;
}

.dot {
  color: #ccc;
  font-size: 10px;
  bottom: 3px;
  position: relative;
}

.relation {
  font-size: 13px;
  margin-right: 5px;
}

a {
  color: #333;
  text-decoration: none;
}
</style>