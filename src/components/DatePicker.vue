<template>
    <Datepicker v-model="date">
      <template #calendar-header="{ index, day }">
        <div :class="index === 5 || index === 6 ? 'red-color' : ''">
          {{ day }}
        </div>
      </template>
    </Datepicker>
</template>

<script>
import { ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default {
    setup() {
        const date = ref(new Date());
      
        return {
            date,
        }
    },
    components:{
      Datepicker
    }
}
</script>

<style>
    .red-color {
        color: red;
    }
</style>