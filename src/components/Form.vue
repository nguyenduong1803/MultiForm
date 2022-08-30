<template>
  <div class="container">
    <h2 class="title">Đơn ứng tuyển</h2>
    <Stepper :stepIndex="currentStep" />
   <FormInfomation v-if="currentStep===1"/>
   <FormExpensive v-if="currentStep===2"/>
   <FormConfirm v-if="currentStep===3"/>
  <!-- <keep-alive>
     <components  :is="FormExpensive"></components>
  </keep-alive> -->
  </div>
</template>
<script>

import FormExpensive from "./FormExpensive/FormExpensive.vue"
import FormInfomation from "./FormInfomation/FormInfomation.vue"
import FormConfirm from "./FormConfirm/FormConfirm.vue"

import Stepper from "./Stepper.vue"
export default {
  data(){
    return {
      currentStep:2
    }
  },
 components:{
  FormExpensive,
  FormInfomation,
  FormConfirm,
  Stepper
 }
 
};
</script>
<style scoped>
.container {
  max-width: 1026px;
  margin: 0 auto;
}
.title {
  font-weight: 400;
  font-size: 24px;
}
.addIcon {
  width: 16px;
  margin-right: 12px;
}
.addTitle {
  color: #48647f;
}
</style>
