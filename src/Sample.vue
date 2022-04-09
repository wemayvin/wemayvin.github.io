<template>
  <MainTemplate :weddingInfo="weddingInfo" />
</template>

<script>
import MainTemplateVue from "./components/MainTemplate.vue";

const prefix =
  "https://firebasestorage.googleapis.com/v0/b/mhy-invi.appspot.com/o/sample%2F";
export default {
  created() {
    this.init();
  },
  data() {
    return {
      weddingInfo: {
        postfix: "/sample",
        weekday: ["일", "월", "화", "수", "목", "금", "토"],
        date: this.$moment("2020-09-12 13:30", "YYYY-MM-DD HH:mm"),
        invitationTitle: "초대합니다",
        invitationMessage:
          "아름다운 가을<br />\
      저희 두 사람이 부부가 됩니다.<br /><br />\
      첫걸음을 내딛는 일생의 가장 소중한 날<br />\
      그 시작의 자리에 함께하여 축복해 주시면<br />\
      더없는 기쁨으로 간직하겠습니다.",
        bride: {
          father: "김길동",
          fatherPhone: "010-0000-0001",
          mother: "이하늬",
          motherPhone: "010-0000-0002",
          relation: "장녀",
          lastName: "김",
          firstName: "태희",
          phone: "010-0000-0003",
        },
        groom: {
          father: "정철수",
          fatherPhone: "",
          mother: "김영희",
          motherPhone: "",
          relation: "차남",
          lastName: "정",
          firstName: "지훈",
          phone: "",
        },
        img: {
          header: prefix + "header.jpg?alt=media",
          gallery: [],
          galleryCount: 12,
          map: prefix + "map.jpg?alt=media",
          calendar: prefix + "calendar.jpg?alt=media",
          sns: prefix + "sns.jpg?alt=media",
        },
        location: {
          name: "대전 ICC 호텔",
          hall: "1층 그랜드볼룸홀",
          address: "대전광역시 유성구 엑스포로123번길 55 (도룡동 4-29)",
          tel: "042-111-2222",
          naver: "http://naver.me/GKmPv7m7",
          kakao: "http://kko.to/HlR82ucYo",
          noti:
            "전세버스에 탑승하시는 분께서는 인원 파악 및 간식 준비를 위해 미리 알려주시면 감사하겠습니다.",
          busDetails: [
            {
              title: "서울 전세버스 (충북71바2001)",
              descs: [
                "10시 20분 : 사당역 1번 출구 공영주차장 앞",
                "15시 : 예식장 출발 (당일 상황에 따라 변동 가능)",
                "비상연락처 : 010-1111-2222 (아무개)",
              ],
            },
            {
              title: "부산 전세버스 (부산70바5211)",
              descs: [
                "9시 30분 : 동래역 3번 출구 건너편",
                "9시 45분 : 덕천역 12번 출구",
                "15시 : 예식장 출발 (당일 상황에 따라 변동 가능)",
              ],
            },
          ],
          details: [
            {
              title: "기차 이용시",
              descs: [
                "대전역 (택시 약 30분 소요) : 1호선 대전역 승차 → 오룡역 하차 → 601번 승차(오룡역3번출구) → 도로교통공단 정류장 하차",
                "서대전역 (택시 약 20분 소요) : 601번 승차(태평1동주민센터) → 도로교통공단 정류장 하차",
              ],
            },
            {
              title: "시외버스 이용시",
              descs: [
                "대전터미널 (택시 약 30분 소요) : 601번 승차(복합터미널) → 도로교통공단 정류장 하차",
              ],
            },
            {
              title: "시내교통 이용시",
              descs: [
                "유성온천역 5번출구 → 115, 106, 706번 승차 → 흥도초등학교 정류장 하차 → 큰 길 따라 목대4거리방향 도보 → 목대4거리에서 우측방향 500M 도보",
              ],
            },
          ],
        },
      },
    };
  },
  methods: {
    init: function () {
      let gallery = [];

      for (let i = 1; i <= this.weddingInfo.img.galleryCount; i++) {
        gallery.push(`${prefix}${i}.jpg?alt=media`);
      }
      this.weddingInfo.img.gallery = gallery;
    },
  },

  components: {
    MainTemplate: MainTemplateVue,
  },
};
</script>
