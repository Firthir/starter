// A boiler plate
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

//to handle state
const state = {
    poems: [],
};

//to handle state
const getters = {
    doneTodos: (state) => {
        return state.poems.filter((todo) => todo.gsx$mood.$t.toLowerCase());
    },
    // filterByMood: (state) => (mood) => {
    //     return state.poems.filter((poem) => !poem.gsx$mood.$t.toLowerCase().indexOf(mood));
    // },
};

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
