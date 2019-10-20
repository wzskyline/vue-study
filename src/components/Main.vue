<template>
  <div class="Main">
    <div class="main">
      <div v-show="this.page[0]" class="page1 page">
        0 文件夹风格
      </div>
      <div v-show="this.page[1]" class="page2 page">
        1 瀑布流风格
      </div>
      <div v-show="this.page[2]" class="page3 page">
        2 PPT 风格
      </div>
    </div>
  </div>
</template>

<script>
  import common from '../assets/common.js';
  export default {
    name: 'Main',
    data() {
      return {
        page: [true, false, false, false]
      }
    },
    created() {
      common.$on('changeStyle', res => {
        console.log(res)
        console.log(this.$data.page)
        var tmp = [false, false, false, false]
        tmp[res] = true;
        this.page = tmp;
        console.log(this.$data.page)
      })
    },
    methods: {

    },
  }

</script>
 
<style scoped>
  .main {
    width: 100%;
    height: 700px;
  }

  .page {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .page1 {
    background-color: aquamarine;
  }

  .page2 {
    background-color: cadetblue;
  }

  .page3 {
    background-color: coral;
  }

</style>
