<template>
  <div :class="classButton" >
    <slot></slot>
  </div>
</template>
<script>
export default {
  computed: {
    classButton() {
      if (this.type === "primary") {
        return "button primary";
      } else if (this.type === "outline") {
        return "button outline";
      } else if (this.type === "gray") {
        return "button gray";
      }
    },
  },
  props: {
    type: {
      type: String,
      default: "primary",
    },
    
  },
};
</script>
<style scope>
.button {
  min-width: 102px;
  height: 40px;
  display: inline-flex;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
}
.button.primary {
  background-color: #627d98;
  font-weight: 700;

}
.button.gray {
  background-color: #dcdcdc;
}
.button.outline {
  background-color: #fff;
 border: 1px solid #DCDCDC;
 color:#666666;
}
.button+.button{
margin-left: 24px;
    }
</style>
