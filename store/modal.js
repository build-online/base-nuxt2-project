export const state = () => ({
  component: null,
  initialData: {},
  visible: false,
  title: '',
  titleIcon: null,
  titleIconClasses: '',
  padding: '',
  maxWidth: '',
  maxHeight: '',
});

export const getters = {
  visible: state => state.visible,
  initialData: state => state.initialData,
  title: state => state.title,
  titleIcon: state => state.titleIcon,
  titleIconClasses: state => state.titleIconClasses,
  padding: state => state.padding,
  maxWidth: state => state.maxWidth,
  maxHeight: state => state.maxHeight,
};

export const mutations = {
  SHOW(state, payload) {
    state.visible = true;
    state.component = payload.component;
    if (payload.maxWidth) {
      state.maxWidth = payload.maxWidth;
    }
    if (payload.maxHeight) {
      state.maxHeight = payload.maxHeight;
    }
    state.initialData = payload.initialData;
    state.title = payload.title;
    state.titleIcon = payload.titleIcon;
    state.titleIconClasses = payload.titleIconClasses;
    state.padding = payload.padding;
  },

  HIDE(state) {
    state.visible = false;
    state.component = null;
    state.initialData = {};
    state.title = '';
    state.titleIcon = null;
    state.titleIconClasses = '';
    state.padding = 'p-6';
    state.maxWidth = '446px';
    state.maxHeight = '247px';
  },
};
