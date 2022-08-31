export default function isRequired(value, name) {
    if (!value && value.trim().length===0) {
      return `Vui lòng nhập ${name}`
    } else {
      return "";
    }
  }