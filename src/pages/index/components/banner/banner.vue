<template>
  <el-carousel :interval="3000" arrow="always" height="200px">
    <el-carousel-item v-for="(item,index) in list" :key="index">
      <img :src="item.url"/>
    </el-carousel-item>
  </el-carousel>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'banner',
    data() {
      return {
        list: [
          {url: require('assets/images/DSC_4291.jpg')},
          {url: require('assets/images/DSC_4295.jpg')},
          {url: require('assets/images/DSC_4297.jpg')},
          {url: require('assets/images/DSC_4305.jpg')}
        ]
      };
    },
    methods: {},
    created() {
    },
    mounted() {
    }
  };
</script>
<style scoped>
  .el-carousel-item {
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
  }
</style>
