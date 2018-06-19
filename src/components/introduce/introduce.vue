<template>
  <div>
    <div class="school-wrapper">
      <div class="title">
        <div class="line"></div>
        <div class="text">书院简介</div>
        <div class="line"></div>
      </div>
      <div class="desc">
        <span class="school">及时雨茶书院</span>秉承"志于道，据于德，依于仁，游于艺。为教学宗旨。借茶为媒，以茶养德，旨在通过传播茶学教育，将一杯茶的智慧融入生活，达到内外兼修、滋养心灵、明心见性的目的。
      </div>
    </div>
    <div class="teacher-wrapper">
      <div class="title">
        <div class="line"></div>
        <div class="text">讲师简介</div>
        <div class="line"></div>
      </div>
      <div class="desc">
        <span class="teacher">孟茗</span>，国家茶艺技师，茶叶审评师，茶届资深茶道专家。早在2012创办茶艺队获得全国十佳茶艺师之星，从2013年至今一直从事茶艺教学，有着丰富教学经验，面授学生初、中、高级茶艺师数千人。潜心专研茶道，走遍了各大茶山和拜访无数民间茶人，熟读《经》、《史》、《子》、《集》，汇聚了中国特有的茶文化知识。一茶一人生，她的言语无不是哲理。
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  /*
  *  书院介绍
  */
  export default {
    name: 'introduce',
    data() {
      return {};
    },
    methods: {},
    created() {
    },
    mounted() {
    }
  };
</script>
<style scoped>
  .school-wrapper {
    padding: 10px 0 0 0;
  }

  .desc {
    text-indent: 20px;
  }

  .school, .teacher {
    font-size: 16px;
    font-weight: 900;

  }

  .title {
    display: flex;
    width: 80%;
    margin: 12px auto 12px auto;
  }

  .title .line {
    flex: 1;
    position: relative;
    top: -10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .title .text {
    padding: 0 12px;
    color: #000;
    font-weight: 700;
    font-size: 16px;
  }
</style>
