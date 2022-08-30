<template >
    <div>
         <span class="titleMust">{{title}}</span>
        <textarea
          class="description"
        >
        </textarea>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
        }
    }
}
</script>
<style scoped>
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
  border: 1px solid #DCDCDC;
  border-radius: 4px;
}
.description:focus{
  outline:none;
}
</style>