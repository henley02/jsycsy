<template>
  <div>
    <div class="title">
      <div class="line"></div>
      <div class="text">精&nbsp;品&nbsp;班</div>
      <div class="line"></div>
    </div>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <i class="icon-point-right"></i>{{item}}
      </li>
    </ul>
    <div class="ps"><i class="icon-pacman"></i>备注：每一讲为2个课时，每个课时60分钟，此班共30课时（学费6000元）</div>
    <div class="line"></div>
  </div>
</template>
<script type='text/ecmascript-6'>
  /**
   * 精品班
   */
  export default {
    name: 'boutique-class',
    data() {
      return {
        list: [
          '第一讲：茶史——茶与道的关系',
          '第二讲：习茶六要素——行茶规范',
          '第三讲：绿茶的概论——识茶器',
          '第四讲：绿茶的冲泡技巧——看茶识茶',
          '第五讲：红茶的概论——冲泡技巧',
          '第六讲：乌龙茶的概论——冲泡技巧',
          '第七讲：普洱茶的概论——冲泡技巧、识别年份及收藏',
          '第八讲：白茶的概论——冲泡技巧与保健功效',
          '第九讲：黄茶的概论——冲泡技巧',
          '第十讲：黑茶的概论——冲泡技巧及养生',
          '第十一讲：茶叶基础知识——茶区分布',
          '第十二讲：茶叶审评基础知识',
          '第十三讲：乌龙十八道（茶艺表演）',
          '第十四讲：茶叶主要成分及保健功效',
          '第十五讲：茶叶贮藏基础知识'
        ]
      };
    }
  };
</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  @import "../../../../assets/stylus/mixin.styl";
  h3 {
    text-align: center;
    padding: 10px
  }

  .line {
    padding-top: 10px;
    border-1px(rgba(7, 17, 27, 0.1));
  }

  li {
    padding: 5px 0;
    color: #303133;
  }

  i {
    color: darkred;
    padding: 0 5px;
  }

  .ps {
    padding: 10px 0;
    text-indent: 20px;
    color:darkred
  }
</style>
