<template>
  <div class="container">
    <h2 class="title">Đơn ứng tuyển</h2>
    <Stepper :stepIndex="currentStep" />

    <FormInfomation v-if="firtActive" @onChangeStep="handleChangStep" />
    <FormExpensive v-if="secondeActive" @onChangeStep="handleChangStep" />
    <FormConfirm v-if="thirdActive" @onChangeStep="handleChangStep" />
    <!-- <keep-alive>
     <components  :is="FormExpensive"></components>
  </keep-alive> -->
  </div>
</template>
<script>
import FormExpensive from "./FormExpensive/FormExpensive.vue";
import FormInfomation from "./FormInfomation/FormInfomation.vue";
import FormConfirm from "./FormConfirm/FormConfirm.vue";

import Stepper from "./Stepper.vue";
export default {
  data() {
    return {
      currentStep: 1,
      initialInfoUser: {
        name: "",
        dob: "",
        city: "",
        wordPossition: "",
        description: "",
        avatar: [],
      },
      expensives: [],
      confirm: {
        reasonJoin: "",
        rangeSalary: 0,
      },
    };
  },
  components: {
    FormExpensive,
    FormInfomation,
    FormConfirm,
    Stepper,
  },
  methods: {
    handleChangStep({indexStep,value}) {
      console.log(indexStep);
      this.currentStep = indexStep;
    },
  },
  computed: {
    firtActive() {
      return this.currentStep === 1;
    },
    secondeActive() {
      return this.currentStep === 2;
    },
    thirdActive() {
      return this.currentStep === 3;
    },
  },
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

.addTitle {
  color: #48647f;
}
</style>
