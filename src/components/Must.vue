<template>
  <div class="mustItem">
    <span class="must">Must</span> <span class="titleMust">{{ title }}</span>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>
<style scoped>
.mustItem {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 6px;
}
.must {
  display: inline-block;
  text-align: center;
  padding: 0px 8px;
  width: 45px;
  height: 20px;
  border-radius: 3px;
  background: #627d98;
  border-radius: 3px;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
}
.titleMust{
  font-weight: 400;
  font-size: 14px;
  color: #333333;
}
</style>
