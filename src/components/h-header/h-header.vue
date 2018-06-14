<template>
  <el-header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
             background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">茶道培训</template>
        <el-menu-item index="2-1">初级</el-menu-item>
        <el-menu-item index="2-2">中级</el-menu-item>
        <el-menu-item index="2-3">高级</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-header>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'h-header',
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    created() {
    },
    mounted() {
    }
  };
</script>
<style scoped>
  .el-header {
    padding: 0;
  }
</style>
