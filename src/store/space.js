const state = () => ({
  spaces: [],
});

const mutations = {
  setSpaces(state, spaces) {
    state.spaces = spaces;
  },
};
const actions = {
  async getSpaces({ dispatch, commit }) {
    console.log("this.state.config.api", this.state.config.api);
    const spaces = await dispatch(
      "axios/get",
      {
        url: `${this.state.config.api}/Space/${this.state.config.env}/List`,
      },
      { root: true }
    );
    console.log("spaces", spaces);
    commit("setSpaces", spaces);
  },
  async getSpaceQuestions({ dispatch }, { assetId }) {
    const txs = await dispatch(
      "axios/get",
      {
        url: `${this.state.config.api}/Space/${this.state.config.env}/${assetId}/Questions`,
      },
      { root: true }
    );
    return { transactions: txs };
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
