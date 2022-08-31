export default function limitLength(value, length, name) {
  if (value.length > length) {
    return `Vui lòng nhập ${name} tối đa ${length} ký tự`;
  } else {
    return "";
  }
}
