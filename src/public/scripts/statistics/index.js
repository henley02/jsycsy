/**
 * 百度统计代码
 * */

export default {
  install(Vue) {
    Vue.prototype._hmt = window._hmt = window._hmt || [];
    window.onload = function() {
      setTimeout(function() {
        (function() {
          var hm = document.createElement('script');
          hm.src = `//hm.baidu.com/hm.js?12fb69ea507996139da58422768e10d4`;
          hm.onload = () => {
            Vue.prototype._hmt = window._hmt = window._hmt || [];
          };
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(hm, s);
        })();
      }, 500);
    };
  }
};
