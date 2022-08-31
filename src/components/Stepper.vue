<template l>
  <div class="wrap">
    <div v-for="(item, index) in steps" class="step" :key="index">
      <span
        :class="stepIndex >= item.step && 'active'"
        :style="[
          stepIndex === item.step && { width: '40px', height: '40px' },
        ]"
        class="stepNumber"
        >{{ item.step }}</span
      >
      <p class="name">{{ item.name }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      steps: [
        { name: "Thông tin cá nhân", step: 1 },
        { name: "Kinh nghiệm làm việc", step: 2 },
        { name: "Xác nhận thông tin", step: 3 },
      ],
    };
  },
  props:{
    stepIndex:{
      type:Number,
      default:1,
      required:true,
    }
  }
};
</script>
<style scoped>
.wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 460px;
}

.step {
  position: relative;
  flex: 1;
}
.stepNumber {
  position: relative;
  font-weight: 700;
  margin: 0 auto;
  font-size: 14px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: #dbdbdb;
  border-radius: 50%;
  z-index: 2;
}
.stepNumber.active {
  background-color: #617d98;
}
.stepNumber:before {
  content: "";
  position: absolute;
  border-left: 1px solid #dbdbdb;
  background-color: #dbdbdb;
  width: 118px;
  height: 1px;
  z-index: 1;
  right: 100%;
}

.name {
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
}
.step:first-child .stepNumber::before {
  height: unset;
}
</style>
