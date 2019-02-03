import Vue from "vue";
import Vuex from "vuex";
import persons from "./modules/persons";
import planets from "./modules/planets";
import starships from "./modules/starships";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        persons,
        planets,
        starships
    }
});