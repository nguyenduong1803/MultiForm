<template>
  <div class="expensive">
    <div class="company">
      <div class="selectCompany">
        <select class="inputCompany">
          <option value="">MorSoftware</option>
          <option value="">Mor</option>
          <option value="">Mor</option>
          <option value="">Mor</option>
        </select>
        <img class="deleteIcon" :src="img" alt="" />
      </div>
    </div>
    <div class="formExpensive">
      <div class="formControl">
        <Must :title="'Vị trí từng làm'" />
        <input class="positionJob" type="text" />
      </div>
      <div class="formControl">
        <Must :title="'Thời gian làm việc'" />
        <div class="wrapDate">
          <DatePicker />
          <span class="line"></span>
          <DatePicker />
        </div>
      </div>
      <div class="formControl">
       <InputLarge title="Mô tả về công việc"/>
      </div>
    </div>
  </div>
</template>
<script>
import img from "../../assets/svg/garbage-trash-svgrepo-com.svg";
import Must from "../Must.vue";
import DatePicker from "../DatePicker.vue";
import InputLarge from "../InputLarge.vue"
export default {
  data() {
    return {
      img,
    };
  },
  components: {
    Must,
    DatePicker,
    InputLarge
  },
};
</script>
<style scoped>
.expensive {
  width: 100%;
  padding: 24px;
  margin-bottom:24px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
}
.company {
  margin-bottom: 24px;
}
.selectCompany {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  background-color: #f8f8f8;
}
.inputCompany {
  padding: 8px 10px;
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
}
.inputCompany option {
  padding: 12px;
  font-size: 16px;
}
.inputCompany:focus {
  outline: none;
}
.deleteIcon {
  width: 30px;
  margin: 0 12px;
  cursor: pointer;
}
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
.formExpensive {
  width: 50%;
}
.wrapDate {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 430px;
  height: 40px;
}
.line {
  width: 21px;
  background-color: #bfbfbf;
  height: 2px;
}

</style>
