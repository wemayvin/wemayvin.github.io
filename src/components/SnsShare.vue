<template>
  <div class="sns-share-section">
    <div>
      <a ref="kakaoLinkBtn" class="kakaotalk" @click="sendKakao">
        <img class="kakaotalkImg" src="../assets/kakao_icon.png" />
        <span class="kakaotalkLabel">카카오톡 공유하기</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["weddingInfo"],
  created() {
    Kakao.init("8036616466e4a28916f55d214a95950f");
  },
  methods: {
    sendKakao: function () {
      Kakao.Link.sendDefault({
        objectType: "location",
        address: this.weddingInfo.location.address,
        addressTitle: `${this.weddingInfo.location.name} ${this.weddingInfo.location.hall}`,
        content: {
          title: `${this.weddingInfo.bride.firstName},${this.weddingInfo.groom.firstName} 결혼합니다`,
          description: `${this.getWeddingDateStr()}\n${
            this.weddingInfo.location.name
          }`,
          imageUrl: this.weddingInfo.img.sns,
          link: {
            mobileWebUrl: "https://mhy-invi.web.app" + this.weddingInfo.postfix,
            webUrl: "https://mhy-invi.web.app" + this.weddingInfo.postfix,
          },
          imageHeight: 300,
        },
        buttons: [
          {
            title: "자세히 보기",
            link: {
              mobileWebUrl:
                "https://mhy-invi.web.app" + this.weddingInfo.postfix,
              webUrl: "https://mhy-invi.web.app" + this.weddingInfo.postfix,
            },
          },
        ],
      });
    },

    getWeddingDateStr: function () {
      let weddingDateStr = "";
      let weekday = this.weddingInfo.weekday[this.weddingInfo.date.format("d")];

      weddingDateStr =
        this.weddingInfo.date.format("YYYY년 MM월 DD일") +
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
.sns-share-section {
  padding: 50px 0 30px 0;
}

.kakaotalk {
  position: relative;
  display: inline-block;
  border: 1px solid #dedede;
  text-align: center;
  text-shadow: none;
  padding: 10px 25px;
}
.kakaotalk:hover {
  background-color: #ffeb00;
  border: 1px solid #f4d400;
  text-decoration: none;
}

.kakaotalkImg {
  width: 15px;
}

.kakaotalkLabel {
  position: relative;
  top: -2px;
  color: #666;
  font-family: "Apple SD Gothic Neo", "roboto", "Malgun Gothic", "Dotum",
    "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  margin-left: 3px;
}
</style>