const state = {
    starships: []
};

const getters = {
    starships(state) {
        return state.starships;
    }
};

const mutations = {
    addStarships(state, {starships}) {
        starships.map(el => {
            state.starships.push(el)
        });
    }
};

const actions = {
    addStarships({commit}, starships) {
        commit("addStarships", starships)
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}