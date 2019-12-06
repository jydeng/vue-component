<template>
  <div>
    <datetime type="datetime" v-model="date" class="theme-orange"></datetime>
  </div>
</template>
<script>
import { Datetime } from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";
import { Settings } from "luxon";
Settings.defaultLocale = "zh-CN";

export default {
  data() {
    return {
      date: "2019-10-18 15:30:00"
    };
  },
  components: {
    Datetime
  }
};
</script>
<style>
.theme-orange .vdatetime-popup__header,
.theme-orange .vdatetime-calendar__month__day--selected > span > span,
.theme-orange .vdatetime-calendar__month__day--selected:hover > span > span {
  background: #2cbfbe;
}

.theme-orange .vdatetime-year-picker__item--selected,
.theme-orange .vdatetime-time-picker__item--selected,
.theme-orange .vdatetime-popup__actions__button {
  color: #2cbfbe;
}
</style>
