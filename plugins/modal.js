export default ({ app, store }, inject) => {
    inject("modal", {
            open({ component = null, initialData = {} }) {
                store.commit("modal/open", { component, initialData });
            }
    });
};