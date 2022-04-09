<template>
  <div class="topimg-wrap">
    <article id="top-article">
      <div id="name">MHY-INVI</div>
      <div id="desc">
        <br />여러분의 행복한 날을 축복합니다
        <br />
        <br />
        <a href="https://weddinginvi-mhy.com/sample" target="_blank">[샘플보기]</a>
        <br />
        <br />문의:
        <a href="mailto:sinhwa2k@gmail.com">sinhwa2k@gmail.com</a>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "MHY-INVI",
      meta: [
        {
          property: "og:title",
          id: "ogtitle",
          content: `MHY-INVI`,
        },
        {
          property: "og:description",
          id: "ogdesc",
          content: "MHY-INVI",
        },
        {
          property: "og:image",
          id: "ogimg",
          // content: this.weddingInfo.img.sns,
        },
      ],
    };
  },
};
</script>

<style scoped>
#name {
  margin: auto;
  width: 130px;
  color: #585858;
  border-top: 1px solid #585858;
  padding-top: 10px;
  font-size: 23px;
  line-height: 20px;
}
#desc {
  font-size: 13px;
  margin-top: 20px;
  line-height: 30px;
}
#top-article {
  position: relative;
  margin: 0 10%;
  padding-top: 50px;
  margin-bottom: 20px;
}

.topimg-wrap {
  position: relative;
  width: 100%;
  color: #666;
  min-height: 400px;
}
a {
  color: #444;
  text-decoration: none;
}
</style>