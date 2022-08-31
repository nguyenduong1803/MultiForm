<template>
  <div class="selected__item">
    <p>{{selectItem.jobName}}</p>
      <img @click="handleDelete" :src="close" class="selected__item-close">

  </div>
</template>

<script>
import close from "../../assets/svg/close.svg"
export default {
 data(){
    return {
      close
    }
  },  props:{
    selectItem:{
      type:String,
      default:""
    },
    index:{
      type:Number,
      required:true
    }
  },
  methods:{
    handleDelete(){
      this.$emit("onDelete",this.index)
    }
  }
};
</script>

<style  scoped>
.selected__item {
  margin: 6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 8px;
  min-width: 83px;
  height: 32px;
  background: #f0f4f8;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  color:#486581;
}
.selected__item-close{
  cursor: pointer;
  color:#ccc;
}
</style>