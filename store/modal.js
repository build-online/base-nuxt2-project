export const state = () => ({
    component: null,
    initialData: {}
});
  
export const mutations = {
    open(state, payload) {
        state.component = payload.component;
        state.initialData = payload.initialData;
    }
};
  