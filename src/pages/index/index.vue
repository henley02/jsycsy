<template>
  <div>
    <banner></banner>
  </div>
</template>
<script type="text/ecmascript-6">
  import Banner from './components/banner/banner.vue';

  export default {
    name: 'Index',
    data() {
      return {};
    },
    methods: {},
    created() {
    },
    mounted() {
      console.log(1);
    },
    components: {
      Banner
    }
  };
</script>
