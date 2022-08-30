<template>
  <div class="formInfomation">
    <div class="infomation">
      <div class="formControl">
        <Must title="Họ và tên" />
        <input class="positionJob" type="text" />
      </div>
      <div class="formControl">
        <Must title="Ngày sinh" />
        <div class="dob"><DatePicker /></div>
      </div>
      <p class="title">Thành phố</p>
      <select class="inputCompany">
        <option value="">Hà nội</option>
        <option value="">Mor</option>
        <option value="">Mor</option>
        <option value="">Mor</option>
      </select>
      <div class="formControl">
        <p class="title">Vị trí làm việc</p>
        <p class="title title-info">
          Có thể chọn nhiều vị trí mà bạn muốn làm việc
        </p>
        <SelectMulti />
      </div>
      <div class="formControl">
        <InputLarge title="Mô tả về bản thân" />
        <span class="letterSize">0/1000</span>
      </div>
    </div>
    <div class="formControl">
      <p class="title">Ảnh của bạn</p>
      <UploadFiles />
    </div>
    
  </div>
  <Button type="gray">Tiếp</Button>
</template>
<script>
import Must from "../Must.vue";
import DatePicker from "../DatePicker.vue";
import SelectMulti from "../Test1/SelectMulti.vue";
import InputLarge from "../InputLarge.vue";
import UploadFiles from "../UploadFiles/UploadFiles.vue";
import Button from "../Button.vue"
export default {
  components: {
    Must,
    DatePicker,
    SelectMulti,
    InputLarge,
    UploadFiles,
    Button
  },
};
</script>
<style scoped>
.formInfomation {
  width: 100%;
  padding: 24px;
  margin-bottom: 24px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
}
.infomation {
  max-width: 528px;
}
.dob {
  width: 200px;
  height: 40px;
}
.formControl {
  margin-bottom: 10px;
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
.inputCompany {
  padding: 8px 10px;
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  margin-bottom: 10px;
}
.inputCompany option {
  padding: 12px;
  font-size: 16px;
}
.inputCompany:focus {
  outline: none;
}
.title {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 6px 0;
  color: #333333;
}
.title-info {
  font-size: 12px;
  color: #666666;
  margin: 0;
}
.letterSize {
  color: #666666;
}
</style>
