export const state = () => ({
    title: "",
    message: "",
    type: "",
    duration: 4000
});
  
export const mutations = {
    showMessage(state, payload) {
        state.title = payload.title;
        state.message = payload.message;
        state.type = payload.type;
        state.duration = payload.duration;
    }
};
  