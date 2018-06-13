export default {
  loading: state => {
    state.loading = true;
  },
  saveLoading: state => {
    state.saveLoading = true;
  },
  deleteLoading: state => {
    state.deleteLoading = true;
  },
  setDatas: (state, payload) => {
    state.datas = payload;
    state.loading = false;
  },
  editItem: (state, payload) => {
    state.editedIndex = state.datas.indexOf(payload);
    state.editedItem = Object.assign({}, payload);
  },
  deleteItem: (state, payload) => {
    state.datas.splice(payload, 1);
    state.deleteLoading = false;
  },
  save: (state, payload) => {
    if (state.editedIndex > -1) {
      // Edit Data
      Object.assign(state.datas[state.editedIndex], state.editedItem);
    } else {
      // Create New Data
      state.datas.push(state.editedItem);
    }

    state.saveLoading = false;
  },
  reset: () => {
    state.editedItem = Object.assign({}, state.defaultItem)
    state.editedIndex = -1
  }
}
