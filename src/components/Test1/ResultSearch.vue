<template>
  <div class="search__output">
    <ul class="wrapResult">
      <li
        v-for="(item) in list"
        @click="handleChoose(item)"
        class="search__output-item"
        :key="item.id"
      >
        {{ item.jobName }}
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleChoose(item) {
      this.$emit("onSelect", item);
    },
  },
  props: {
    list: {
      type: Object,
      default: {},
      required: true,
    },
    
  },
};
</script>

<style scoped>
.test1__search-wrap.active .search__output {
  display: block;
}
.search__output::-webkit-scrollbar {
  display: none;
}
.wrapResult{
  padding: 0;
  margin: 0;
}
.search__output {
  display: none;
  position: absolute;
  top: 100%;
  width: 100%;
  max-height: 128px;
  background-color: #f1f5f8;
  box-shadow: 0px 1px 8px rgb(102 102 102 / 25%);
  border-radius: 4px;
  z-index: 2;
  overflow: hidden;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  margin: 0;
  transition: 0.2s;
}
.search__output-item {
  text-align: left;
  padding-left: 10px;
  height: 40px;
  display: block;
  line-height: 40px;
  margin: 0;
  color: #486581;
}
.search__output-item:hover {
  background-color: #617d98;
  color: #fff;
  cursor: pointer;
}
</style>