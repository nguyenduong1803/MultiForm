<template>
  <div class="formConfirm">
    <div class="confirm">
   <div class="formControl">
       <Must title="Lý do muốn ứng tuyển vào công ty"/>
      <textarea class="description"> </textarea>
        <span class="letterSize">0/1000</span>
   </div>
   <div class="formControl">
       <Must title="Mức lương mong muốn"/>

   </div>
    </div>
  </div>
    <Button type="gray">Hoàn thành</Button>

</template>
<script>
import Must from "../Must.vue";
import Button from "../Button.vue"
export default {
  components: {
    Must,
    Button
  },
};
</script>

<style scoped>
.formConfirm {
  width: 100%;
  padding: 24px;
  margin-bottom: 24px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
}
.confirm{
  max-width: 528px;

    }
.titleMust {
  font-weight: 400;
  font-size: 14px;
  color: #333333;
  margin-bottom: 6px;
}
.description {
  width: 100%;
  resize: none;
  height: 152px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
}
.description:focus {
  outline: none;
}
.letterSize {
  color: #666666;
}
.formControl {
  margin-bottom: 10px;
}
</style>
