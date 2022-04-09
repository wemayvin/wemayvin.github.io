<template>
  <div class="invitation-wrap">
    <div class="article">
      <p class="married_text">{{ weddingInfo.invitationTitle }}</p>
      <p class="invitation-message" v-html="weddingInfo.invitationMessage"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["weddingInfo"]
};
</script>

<style scoped>
.invitation-wrap .article {
  font-size: 12px;
  color: #bd9692;
  line-height: 21px;
  padding-top: 10%;
  word-break: break-all;
  margin: 0 auto;
}

.invitation-wrap .article .married_text {
  font-size: 19px;
  background-size: 100%;
  margin-bottom: 30px;
  font-weight: 500;
  background-repeat: no-repeat;
  background-position: center center;
}

.invitation-message {
  font-size: 14px;
  word-break: keep-all;
  width: 75%;
  line-height: 30px;
  color: #666;
  font-weight: 200;
  margin: 0 auto;
  padding-bottom: 25px;
}
</style>