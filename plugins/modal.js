export default ({ app, store }, inject) => {
    inject("modal", {
            open({ component = null }) {
                store.commit("modal/open", { component });
            }
    });
};