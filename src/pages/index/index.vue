<template>
  <div>
    <banner></banner>
    <introduce></introduce>
    <div class="line"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Banner from './components/banner/banner.vue';
  import Introduce from './../../components/introduce/introduce.vue';

  export default {
    name: 'Index',
    data() {
      return {};
    },
    methods: {},
    created() {
    },
    mounted() {
    },
    components: {
      Banner,
      Introduce
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped="">
  @import "../../assets/stylus/mixin.styl"
  .line {
    padding-top: 10px;
    border-1px(rgba(7, 17, 27, 0.1))
  }
</style>
