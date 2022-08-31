<template>
  <div class="container">
    <h2 class="title">Đơn ứng tuyển</h2>
    <Stepper :stepIndex="currentStep" />

    <KeepAlive>
      <component :is="componentInit" @onChangeStep="handleChangStep" />
    </KeepAlive>
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
      initialInfoUser: {},
      expensives: [],
      confirm: {
        reasonJoin: "",
        rangeSalary: 0,
      },
      componentInit: FormInfomation,
    };
  },
  components: {
    FormExpensive,
    FormInfomation,
    FormConfirm,
    Stepper,
  },
  methods: {
    handleChangStep({ indexStep, value }) {
      if (indexStep === 1) {
        this.componentInit = FormInfomation;
      } else if (indexStep === 2) {
        this.componentInit = FormExpensive;
        this.initialInfoUser = value;
        console.log(this.initialInfoUser);
      } else if (indexStep === 3) {
        this.componentInit = FormConfirm;
      }
      this.currentStep = indexStep;
    },
  },
  computed: {
  
  },
};
</script>
<style scoped>
.container {
  max-width: 1026px;
  margin: 0 auto;
  margin-bottom: 100px;
}
.title {
  font-weight: 400;
  font-size: 24px;
}

.addTitle {
  color: #48647f;
}
</style>
