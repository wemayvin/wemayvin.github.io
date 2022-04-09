<template>
  <div class="calendar-section">
    <div>
      <img v-bind:src="weddingInfo.img.calendar" class="calendar-img" />
    </div>
    <span class="calendar-month">{{ weddingInfo.date.format("M") }}월</span>
    <div class="calendar-week">
      <ul>
        <li
          v-bind:class="{ sunday:index == 0 }"
          v-for="(day, index) in weddingInfo.weekday"
          v-bind:key="index"
        >{{ day }}</li>
      </ul>
    </div>

    <div class="calendar-line" />
    <div>
      <ul v-for="(row, rowIndex) in rows" v-bind:key="rowIndex">
        <li v-bind:class="{ sunday:index == 0 }" v-for="(date, index) in row" v-bind:key="index">
          <div v-if="checkDDay(date)">
            <div class="d-day-background">
              <div class="width-100">
                <div class="d-day-heart">
                  <img src="../assets/heart.png" />
                </div>
              </div>
              <div class="d-day-time">{{ timeStr }}</div>
            </div>
            <div class="d-day-text">{{ weddingInfo.date.format("D") }}</div>
          </div>
          <div v-else>{{ date }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["weddingInfo"],
  data() {
    return {
      rows: [],
      timeStr: "",
    };
  },
  mounted() {
    this.init();
    this.initDateStr();
  },
  methods: {
    init: function () {
      let rows = [];
      let row = [];
      let calendarDate = this.$moment(this.weddingInfo.date);
      calendarDate.startOf("month");
      let startDay = calendarDate.format("d");
      calendarDate.endOf("month");
      let endDate = calendarDate.format("DD");

      for (let i = 0; i < startDay; i++) {
        row.push("");
      }

      for (let i = 1; i <= endDate; i++) {
        row.push(i.toString());
        if (row.length == 7) {
          rows.push(row);
          row = [];
        }
      }

      if (row.length > 0 && row.length < 7) {
        for (let i = row.length; i < 7; i++) {
          row.push("");
        }
        rows.push(row);
      }

      this.rows = rows;
    },
    initDateStr: function () {
      let timeStr = "";
      timeStr =
        (this.weddingInfo.date.format("a") == "am" ? "오전 " : "오후 ") +
        this.weddingInfo.date.format("h:mm");
      this.timeStr = timeStr;
    },
    checkDDay: function (day) {
      return day == this.weddingInfo.date.format("D");
    },
  },
};
</script>

<style scoped>
.calendar-section {
  padding: 40px 0px 40px 0px;
}

.calendar-img {
  width: 100%;
  height: auto;
  display: block;
}

.calendar {
  width: 100%;
}

.sunday {
  color: #ecb8b7;
}

ul {
  font-size: 0;
  list-style-type: none;
  width: 320px;
}

li {
  text-align: center;
  width: 45px;
  padding: 13px 0px 13px 0px;
  font-size: 12px;
  color: #707070;
  vertical-align: middle;
}

.calendar-month {
  color: #707070;
  width: 320px;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  margin-top: 50px;
}

.calendar-week {
  margin-top: 15px;
  font-weight: 500;
}

.calendar-line {
  height: 1px;
  background-color: #c5c5c5;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
}

.sunday {
  color: #ecb8b7;
}

.d-day-background {
  position: relative;
  z-index: 1;
}

.d-day-text {
  position: relative;
  z-index: 2;
  color: #fff;
}

.d-day-background > div {
  position: absolute;
  top: -2px;
}

.d-day-time {
  left: -10%;
  width: 120%;
  margin-top: 25px;
  color: #ecb8b7;
  font-size: 10px;
  font-weight: 500;
  -webkit-transform: scale(0.9);
}

.width-100 {
  width: 100%;
}

.d-day-heart {
  height: 25px;
}

.d-day-heart > img {
  width: 28px;
}
</style>