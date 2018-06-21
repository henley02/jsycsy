<template>
  <div id="app">
    <el-container :direction="'vertical'">
      <h-header></h-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <h-footer></h-footer>
    </el-container>
  </div>
</template>

<script>
  import HFooter from './components/h-footer/h-footer.vue';
  import HHeader from './components/h-header/h-header.vue';

  export default {
    name: 'App',
    components: {
      HFooter,
      HHeader
    }
  };
</script>
<style>
  .el-menu--horizontal {
    border-bottom: none
  }
</style>
