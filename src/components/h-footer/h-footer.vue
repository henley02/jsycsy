<template>
  <el-footer>
    <el-row>
      <el-col :span="24">
        <div>扫</div>
        <div>码</div>
        <div>关</div>
        <div>注</div>
        <i class="el-icon-arrow-down"></i>
        <div class="address">地址：苏州平江路菉葭巷14号申居茶屋</div>
        <div class="tel">报名电话（常年招生）：18662529367</div>
        <div>苏州首席专业茶道培训</div>
        <div>古琴·书法·花艺·香道</div>
        <div>
          <img :src="scanImg" width="280px"/>
        </div>
      </el-col>
      <el-col :span="24">&copy;2016-2018 苏州及时雨茶叶有限公司 版权所有</el-col>
      <el-col :span="24"><a target="_blank" href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action">备案：苏ICP备16018492号-1</a>
        <div style="width:300px;margin:0 auto; padding:20px 0;">
          <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32050802010847"
             style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img :src="require('assets/images/put-on-records.png')"
                                                                                                  style="float:left;"/>
            <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">
              苏公网安备 32050802010847号</p></a>
        </div>
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
