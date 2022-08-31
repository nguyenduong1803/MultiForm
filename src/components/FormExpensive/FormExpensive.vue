<template>
  <div>
    <div class="expensives">
      <FormItem v-for="item in countForm" :key="item"/>
   
    </div>
    <div class="formControl">
      <Button type="outline"
        ><img class="addIcon" :src="add" />
        <span @click="handleAddForm" class="addTitle">Thêm công ty</span></Button
      >
    </div>
    <Button @click="handleNextStep">Tiếp</Button>
    <Button @click="handlePrevStep" type="outline">Quay lại</Button>
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
      countForm:[1,2],
      listFormItem:[
        
      ]
    };
  },
  methods: {
    handleNextStep() {
      this.$emit("onChangeStep", {value:"",indexStep:3});

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handlePrevStep() {
          this.$emit("onChangeStep", {value:"",indexStep:1});
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleAddForm(){
      this.countForm.push(this.countForm.lenght+1)
    }
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
.addIcon {
  width: 16px;
  margin-right: 12px;
}
</style>
