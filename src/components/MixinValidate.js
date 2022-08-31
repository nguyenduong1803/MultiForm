import { compareAsc, format } from "date-fns";
export const MixinValidate = {
  data() {
    return {
      notifyName: "",
      noptifyDate: "",
      notifyDescription: "",
    };
  },
  methods: {
    isRequired(value, name) {
      if (!value || (value && value.trim().length === 0)) {
        return `Vui lòng nhập ${name}`;
      } else {
        return "";
      }
    },
    limitLength(value, length, name) {
      if (value.length > length) {
        return `Vui lòng nhập ${name} tối đa ${length} ký tự`;
      } else {
        return "";
      }
    },
    isPastTime(value) {
      const dates = [new Date(), new Date(value)];
      if (
        format(dates.sort(compareAsc)[0], "dd-MM-yyyy") !==
        format(new Date(value), "dd-MM-yyyy")
      ) {
        return "Vui lòng chọn thời gian trong quá khứ";
      }
      return "";
    },
  },
};
