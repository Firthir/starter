// A boiler plate for our vuex store module.
// import dependency to handle HTTP request to our back end
import axios from 'axios';
import Vuex from 'vuex';
import Vue from 'vue';

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
    poems: [],
};

//to handle state
const getters = {};

//to handle actions
const actions = {
    async getPoems({ commit }) {
        const gsheet_url = 'https://spreadsheets.google.com/feeds/list/11Ij6ozLqyHr9DWnvI8RtR0zpbOhWb2XdrsvcmrWD4Jc/1/public/values?alt=json';
        try {
            const response = await axios.get(gsheet_url);
            // console.log(response.data.feed.entry);
            commit('setPoems', response.data.feed.entry.reverse());
        } catch (error) {
            console.error(error);
        }
    },
};

//to handle mutations
const mutations = {
    setPoems(state, poems) {
        state.poems = poems;
    },
};

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});
