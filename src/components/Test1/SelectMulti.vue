<template>
  <div>
    <div class="test1__search-wrap" :class="[isShowSearch ? 'active' : '']">
      <div class="overlay" @click="handleToggleSearch"></div>
      <div class="border">
        <div class="wrap_input">
          <div class="search">
            <img class="test1__search-icon" :src="searchIcon" alt="" />
          </div>
          <div class="selected__wrap" ref="selected">
            <SelectedItem
              v-for="item in listSelect"
              :key="item.id"
              :selectItem="item"
              @onDelete="handleDelete"
            />
          </div>
          <input
            type="text"
            class="tes1__search-provinces"
            :placeholder="placeholder"
            @focus="handleToggleSearch"
            v-model="debounceSearch"
          />
          <ResultSearch
            v-if="hasResult"
            @onSelect="handleAdd"
            :list="list"
            :listSelect="listSelect"
          />
          <div
            class="search__output"
            v-else-if="emptyOutput"
          >
            <p class="notify">Không tìm thấy</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchIcon from "../../assets/svg/search-svgrepo-com.svg";
import ResultSearch from "./ResultSearch.vue";
import SelectedItem from "./SelectedItem.vue";

export default {
  data() {
    return {
      searchIcon,
      isShowSearch: false,
      list: [],
      listSelect: [],
      keySearch: "",
      debounceSearch: "",
      timeoutID: null,
    };
  },
  computed: {
    hasResult() {
      return this.debounceSearch !== '' && this.list.length > 0
    },
    emptyOutput(){
      return this.keySearch !== '' && this.list.length === 0
    },
   
  },
  components: {
    ResultSearch,
    SelectedItem,
  },
  methods: {
    handleDelete(index) {
          this.listSelect.splice(index, 1);
    },
    handleAdd(value) {
      if (!this.listSelect.some((item) => item.jobName ===value)) {
        this.listSelect.push(value);
      }
      this.$emit("onSelectMulti",this.listSelect)
    },
     handleToggleSearch(){
      this.isShowSearch= !this.isShowSearch
    },
    debounce(value, delay) {
      clearTimeout(this.timeoutID);
      if (value) {
        this.timeoutID = setTimeout(() => {
          this.keySearch = value;
        }, delay);
      }
    },
  },
  watch: {
     keySearch(newValue) {
      this.list=this.listJob.filter(job=>{
       return job.jobName.toLowerCase().indexOf(newValue) > -1; 
      })
      
    },
    debounceSearch(newValue) {
      this.debounce(newValue, 200);
    },
  },
  props:{
    listJob:{
      type:Array,
      required:true,
      default:[],
    },
    placeholder:{
      type:String,
      default:""
    }
  },
  destroyed() {
    clearTimeout(this.timeoutID);
  },
};
</script>

<style scoped>
.test1__search-wrap {
  position: relative;
  width: 100%;
  height: auto;
}
.border {
  width: 100%;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  background-color: #fff;
}
.tes1__search-provinces {
  position: relative;
  top: -1px;
  min-width: 200px;
  flex: 1;
  height: 40px;
  padding: 8px 10px 8px 10px;
  border: none;
  border-top: 1px solid #dbdbdb;
  border-collapse: separate;
  background-color: #fff;
  overflow-y: auto;
  z-index: 10;
}
.tes1__search-provinces:focus {
  outline: none !important;
  border-radius: 4px;
}
.tes1__search-provinces::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #bfbfbf;
}
.test1__search-icon {
  width: 18px;
  height: 16px;
  fill: #dbdbdb;
  z-index: 10;
}
.search {
  padding: 8px;
  background-color: rgba(230, 249, 255, 0.2);
}
.tes1__search-provinces:focus {
  outline: 1px solid #1991d2;
}

.tes1__search-provinces:focus ~ .search__output {
  opacity: 1;
  visibility: visible;
}
.selected__wrap {
  display: block;

  gap: 8px;
  z-index: 12;
}
.selected__wrap::-webkit-scrollbar {
  display: none;
}
.wrap_input {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
}
.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.active .overlay {
  display: block;
}
.search__output {
  position: absolute;
  top: 100%;
  width: 400px;
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
.notify {
  padding: 12px;
}
</style>
