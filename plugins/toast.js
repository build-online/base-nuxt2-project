export default ({ store }, inject) => {
  inject('toast', {
    showMessage({ title = '', message = '', type = '', duration = 4000 }) {
      store.commit('toast/showMessage', { title, message, type, duration });
    },
  });
};
