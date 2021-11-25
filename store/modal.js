export const state = () => ({
    component: null
});
  
export const mutations = {
    open(state, payload) {
        state.component = payload.component;
    }
};
  