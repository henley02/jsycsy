<template>
  <el-header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
             background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <template v-for="(item,index) in $router.options.routes">
        <template v-if="item.component">

          <el-submenu :index="item.name" v-if="item.children && item.children.length>0" :key="index">
            <template slot="title">{{item.props.label}}</template>
            <el-menu-item :index="children.name" v-for="(children,cIndex) in item.children"
                          :key="cIndex"
                          @click="jump(children.name)">{{children.props.label}}
            </el-menu-item>
          </el-submenu>

          <el-menu-item v-else :key="index" :index="item.name" @click="jump(item.name)">{{item.props.label}}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-header>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'h-header',
    data() {
      return {
        activeIndex: 'Index',
        teaList: []
      };
    },
    methods: {
      jump(name) {
        this.$router.push({name: name});
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    created() {
      console.log(this.$router.options.routes);
      this.teaList = this.$router.options.routes.filter(item => item.name === 'temTrain')[0];
      console.log(this.teaList);
    }
  };
</script>
<style scoped>
  .el-header {
    padding: 0;
  }
</style>
