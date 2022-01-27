import Vue from 'vue';
import Vuex from 'vuex'
import events from './module/events';
import calendars from './module/calendars'; 

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        events,
        calendars, 
    }
});