<template>
  <el-footer>
    <el-row>
      <el-col :span="24">
        <div>扫</div>
        <div>码</div>
        <div>关</div>
        <div>注</div>
        <i class="el-icon-arrow-down"></i>
        <div class="address">地址：苏州平江路曹胡徐巷55号</div>
        <div class="tel">报名电话（常年招生）：18662529367</div>
        <div>苏州首席专业茶道培训</div>
        <div>古琴·书法·花艺·香道</div>
        <div>
          <img :src="scanImg" width="280px"/>
        </div>
      </el-col>
      <el-col :span="24">&copy;2016-2018 苏州及时雨茶叶有限公司 版权所有</el-col>
      <el-col :span="24"><a target="_blank" href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action">备案：苏ICP备16018492号-1</a>
      </el-col>
    </el-row>
  </el-footer>
</template>
<script type="text/ecmascript-6">

  export default {
    name: 'h-footer',
    data() {
      return {
        scanImg: require('assets/images/sacn.jpg')
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
  .el-row {
    padding-bottom: 20px;
  }

  .el-footer {
    text-align: center;
  }

  .el-col, .el-col a {
    color: #909399;
  }
</style>
