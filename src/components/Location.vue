<template>
  <div>
    <div class="title">오시는 길</div>
    <div class="location-info">
      <div class="wedding-hall">
        {{ weddingInfo.location.name }}
        <br />
        {{ weddingInfo.location.hall }}
      </div>
      <div class="address">
        {{ weddingInfo.location.address }}
        <br />
        <a v-bind:href="'tel:' + weddingInfo.location.telRef">Tel. {{ weddingInfo.location.tel }}</a>
      </div>
    </div>
    <div class="mapDiv">
      <img v-bind:src="weddingInfo.img.map" class="map" />
    </div>
    <div>
      <div class="mapLink">
        <a v-bind:href="weddingInfo.location.naver" target="_blank" class="naver">네이버지도</a>
        <div class="divide" />
        <a v-bind:href="weddingInfo.location.kakao" target="_blank" class="kakao">카카오지도</a>
      </div>
      <div class="guide" v-if="weddingInfo.location.busDetails.length > 0">
        <div class="rent">전세버스 안내</div>
        <div class="location-info2">
          <div
            class="guideDetail"
            v-for="(detail, index) in weddingInfo.location.busDetails"
            v-bind:key="index"
          >
            <p class="guideDetailTitle2">{{ detail.title }}</p>
            <div class="guideDetailDescs">
              <p class="guideDetailDesc" v-for="(desc, index) in detail.descs" v-bind:key="index">
                <span class="dot">•</span>
                {{ desc }}
              </p>
            </div>
          </div>
          <p class="noti">{{ weddingInfo.location.noti }}</p>
        </div>
      </div>
      <div class="guide">
        <div class="location-info3">
          <div
            class="guideDetail"
            v-for="(detail, index) in weddingInfo.location.details"
            v-bind:key="index"
          >
            <p class="guideDetailTitle">{{ detail.title }}</p>
            <div class="guideDetailDescs">
              <p class="guideDetailDesc" v-for="(desc, index) in detail.descs" v-bind:key="index">
                <span class="dot">•</span>
                {{ desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["weddingInfo"],
};
</script>

<style scoped>
.title {
  font-size: 11px;
  letter-spacing: 3px;
  color: #333;
}

.location-info {
  margin: 30px 20px 40px 20px;
  padding: 15px 0;
  border: 1px solid #ccc;
}

.location-info2 {
  padding: 0px 15px;
  border: 1px solid #ccc;
}

.location-info3 {
  padding: 0px 15px;
}

.wedding-hall {
  font-size: 15px;
  line-height: 25px;
  color: #333;
}

.address {
  margin-top: 10px;
  line-height: 25px;
  font-size: 13px;
  color: #666;
  word-break: keep-all;
}

.mapDiv {
  padding-left: 20px;
  padding-right: 20px;
}
.map {
  width: 100%;
}

.mapLink {
  text-align: center;
}
.mapLink > a {
  display: inline-block;
  text-decoration: none;
  font-size: 13px;
  padding: 10px;
  color: #666;
  font-family: "Apple SD Gothic Neo", "roboto", "Malgun Gothic", "Dotum",
    "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.divide {
  display: inline-block;
  width: 1px;
  height: 10px;
  background-color: #ccc;
}

.guide {
  text-align: left;
  margin: 40px 8%;
}

.guideDetail {
  margin-bottom: 25px;
}

.guideDetailTitle {
  color: #666;
  font-size: 13px;
  margin-bottom: 0;
  word-break: keep-all;
}

.guideDetailTitle2 {
  color: #900;
  font-size: 13px;
  margin-bottom: 0;
  word-break: keep-all;
}

.rent {
  font-size: 12px;
  letter-spacing: 3px;
  color: #666;
  text-align: center;
  margin-bottom: 10px;
}

.noti {
  color: #900;
  font-size: 12px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 10px;
  line-height: 20px;
  word-break: keep-all;
}

.guideDetailDescs {
  margin-top: 5px;
}

.guideDetailDesc {
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 12px;
  word-break: keep-all;
}

.dot {
  color: #aaa;
  font-size: 10px;
  bottom: 1px;
  position: relative;
}

a {
  color: #444;
  text-decoration: none;
}
</style>