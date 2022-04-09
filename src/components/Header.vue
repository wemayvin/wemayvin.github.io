<template>
  <div class="topimg-wrap">
    <article id="top-article">
      <div id="name">
        {{ weddingInfo.bride.lastName + weddingInfo.bride.firstName }}
        <br />
        <span class="dot">•</span>
        <br />
        {{ weddingInfo.groom.lastName + weddingInfo.groom.firstName }}
      </div>
    </article>
    <div>
      <div class="header-img-div">
        <img v-bind:src="weddingInfo.img.header" class="header-img" />
      </div>
      <div class="wedding-day">
        {{ getWeddingDateStr() }}
        <br />
        {{ weddingInfo.location.name }}
        <br />
        {{ weddingInfo.location.hall }}
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: `${this.weddingInfo.bride.firstName},${this.weddingInfo.groom.firstName} 결혼합니다`,
      meta: [
        {
          property: "og:title",
          id: "ogtitle",
          content: `${this.weddingInfo.bride.firstName},${this.weddingInfo.groom.firstName} 결혼합니다`,
        },
        {
          property: "og:description",
          id: "ogdesc",
          content: this.getWeddingDateStr(),
        },
        {
          property: "og:image",
          id: "ogimg",
          content: this.weddingInfo.img.sns,
        },
      ],
    };
  },

  props: ["weddingInfo"],
  methods: {
    getWeddingDateStr: function () {
      let weddingDateStr = "";
      let weekday = this.weddingInfo.weekday[this.weddingInfo.date.format("d")];

      weddingDateStr =
        this.weddingInfo.date.format("YYYY년 MM월 DD일") +
        `(${weekday})` +
        (this.weddingInfo.date.format("a") == "am" ? " 오전 " : " 오후 ") +
        this.weddingInfo.date.format("h시") +
        (this.weddingInfo.date.format("mm") == "00"
          ? ""
          : this.weddingInfo.date.format(" mm분"));
      return weddingDateStr;
    },
  },
};
</script>

<style scoped>
#name {
  width: 70px;
  color: #585858;
  border-top: 1px solid #585858;
  padding-top: 10px;
  font-size: 23px;
  line-height: 20px;
}
.header-img-div {
  min-height: 150px;
}
.header-img {
  width: 100%;
  height: auto;
  display: block;
}
#top-article {
  position: relative;
  margin: 0 10%;
  padding-top: 38px;
  margin-bottom: 20px;
}

.topimg-wrap {
  position: relative;
  width: 100%;
  color: #666;
  min-height: 355px;
}

.wedding-day {
  background-color: #00000005;
  padding: 15px;
  font-size: 14px;
  line-height: 25px;
  word-break: keep-all;
}

.dot {
  color: #ccc;
  font-size: 15px;
  position: relative;
  bottom: 1px;
}
</style>