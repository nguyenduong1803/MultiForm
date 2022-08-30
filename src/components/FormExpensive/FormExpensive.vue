<template>
  <div>
    <div class="expensives">
      <FormItem />
      <FormItem />
    </div>
    <div class="formControl">
      <Button type="outline"
        ><img class="addIcon" :src="add" />
        <span class="addTitle">Thêm công ty</span></Button
      >
    </div>
    <Button>Tiếp</Button>
    <Button type="outline">Quay lại</Button>
  </div>
</template>
<script>
import FormItem from "./FormItem.vue";
import Button from "../Button.vue";
import add from "../../assets/svg/add.svg";

export default {
  data() {
    return {
      add,
    };
  },
  components: {
    FormItem,
    Button,
  },
};
</script>
<style scoped>
.formControl {
  margin-bottom: 24px;
}
.positionJob {
  padding: 0 10px;
  width: 100%;
  height: 40px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
}
.positionJob:focus {
  outline: none;
}
.addicon {
  width: 16px;
}
</style>
