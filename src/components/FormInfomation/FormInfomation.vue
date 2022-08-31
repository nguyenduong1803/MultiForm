<template>
  <div class="formInfomation">
    <div class="infomation">
      <div class="formControl">
        <Must title="Họ và tên" />
        <input v-model="name" class="positionJob" type="text" />
        <p class="notify">{{ notifys.name }}</p>
      </div>
      <div class="formControl">
        <Must title="Ngày sinh" />
        <div class="dob"><DatePicker @onChangedate="handleChangeDate" /></div>
        <p class="notify">{{ notifys.dob }}</p>
      </div>
      <p class="title">Thành phố</p>
      <select v-model="city" class="inputCompany">
        <option value="" disabled>Chọn thàn phố</option>
        <option v-for="city in listCity" :value="city" :key="city">
          {{ city }}
        </option>
      </select>

      <div class="formControl">
        <p class="title">Vị trí làm việc</p>
        <p class="title title-info">
          Có thể chọn nhiều vị trí mà bạn muốn làm việc
        </p>
        <SelectMulti
          @onSelectMulti="handleSelectPosition"
          :listJob="listJob"
          placeholder="Chọn các vị trí mà bạn muốn"
        />
      </div>
      <div class="formControl">
        <InputLarge
          @changeValue="handleChangDescrip"
          title="Mô tả về bản thân"
        />
        <span class="letterSize">0/1000</span>
        <p class="notify">{{ notifys.description }}</p>
      </div>
    </div>
    <div class="formControl">
      <p class="title">Ảnh của bạn</p>
      <UploadFiles @onChangeFiles="handleChangFiles" />
    </div>
  </div>
  <div @click="handleClick" class="click">click me</div>
  <Button @click="handleNextStep" type="gray">Tiếp</Button>
</template>
<script>
import Must from "../Must.vue";
import DatePicker from "../DatePicker.vue";
import SelectMulti from "../Test1/SelectMulti.vue";
import InputLarge from "../InputLarge.vue";
import UploadFiles from "../UploadFiles/UploadFiles.vue";
import Button from "../Button.vue";
import axios from "axios";
import { MixinValidate } from "../MixinValidate";
const listJob = [
  { id: 1, jobName: "Lập trình viên FrontEnd" },
  { id: 2, jobName: "Lập trình viên BackEnd" },
  { id: 3, jobName: "Lập trình viên Mobile" },
  { id: 4, jobName: "Lập trình viên Android" },
  { id: 5, jobName: "Lập trình viên Python" },
  { id: 6, jobName: "Trưởng phòng kinh doanh" },
  { id: 7, jobName: "Trưởng phòng Marketing" },
  { id: 8, jobName: "Kế toán trưởng" },
  { id: 9, jobName: "Nhân viên telesale" },
  { id: 10, jobName: "Kế toán" },
  { id: 11, jobName: "Giám đốc điều hành" },
  { id: 12, jobName: "Tester" },
];
const notifys = {
  name: "",
  dob: "",
  description: "",
};

export default {
  mixins: [MixinValidate],
  data() {
    return {
      name: "",
      dob: "2000-01-01",
      city: "",
      positionJob: [],
      description: "",
      files: "",
      listJob,
      listCity: [],
      notifys,
    };
  },
  emits: ["onChangeStep"],
  components: {
    Must,
    DatePicker,
    SelectMulti,
    InputLarge,
    UploadFiles,
    Button,
  },
  methods: {
    // assign value
    handleChangeDate(date) {
      this.dob = date;
    },
    handleChangFiles({ funcUpload, files }) {
      this.files = files;
    },
    handleSelectPosition(value) {
      this.positionJob = value;
    },
    handleChangDescrip(value) {
      this.description = value;
    },

    handleNextStep() {
      this.notifys.name =
        this.isRequired(this.name, "tên ứng viên") ||
        this.limitLength(this.name, 100, "tên ứng viên");
      this.notifys.description = this.limitLength(
        this.name,
        1000,
        "mô tả bản thân"
      );
      this.notifys.dob = this.isPastTime(this.dob);
      const hasErrorInput = Object.entries(this.notifys).every(
        (item) => item[1] === ""
      );

      if (hasErrorInput) {
        const value = {
          name: this.name,
          dob: this.dob,
          city: this.city,
          positionJob: this.positionJob,
          description: this.description,
          files: this.files,
        };
        this.$emit("onChangeStep", { value, indexStep: 2 });
      }
      console.log(this.name);
      console.log(this.files);
      console.log(this.city);
      console.log(this.positionJob);
      console.log(this.dob);
      console.log(this.description);
      // this.$emit("onChangeStep", { value: "", indexStep: 1 });

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  watch: {
    name(newValue) {
      console.log(this.isRequired(newValue, "tên ứng viên"));
    },
  },
  created() {
    const api = "https://provinces.open-api.vn/api/?depth=2";
    axios
      .get(api)
      .then((res) => {
        this.listCity = res.data.map((city) => city.name);
      })
      .catch(() => {
        this.listCity = [];
      });
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
