<template>
  <input v-model="date" class="date" type="date" />
</template>

<script>
import { format } from "date-fns";

export default {
  data() {
    return {
      date: "2000-01-01",
    };
  },
  watch: {
    date(newValue) {
      // const newDate = format(new Date(newValue), "dd-MM-yyyy");
      this.$emit("onChangedate",newValue)
    },
  },
};
</script>

<style>
.date {
  width: 118px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 2px;
  padding: 0 6px;
}
.date:focus {
  outline: none;
}
</style>
