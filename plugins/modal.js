export default ({ store }, inject) => {
  inject('modal', {
    open({
      component = null,
      initialData = {},
      title = '',
      titleIcon = null,
      titleIconClasses = '',
      padding = 'p-6',
      maxWidth = '446px',
      maxHeight = '247px',
    }) {
      store.commit('modal/SHOW', {
        component,
        initialData,
        title,
        titleIcon,
        titleIconClasses,
        padding,
        maxWidth,
        maxHeight,
      });
    },

    close(payload = null) {
      store.commit('modal/HIDE', payload);
    },
  });
};
