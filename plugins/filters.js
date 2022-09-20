import Vue from 'vue';

export default () => {
  Vue.filter('currency', function (value) {
    if (isNaN(value)) return '';
    return `$${parseFloat(value).toFixed(2)}`;
  });

  Vue.filter('titleize', function (value) {
    return value
      .split('_')
      .map(function (item) {
        return item.charAt(0).toUpperCase() + item.substring(1);
      })
      .join(' ');
  });
};
