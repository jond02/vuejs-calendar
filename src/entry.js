import Vue from 'vue';

import store from "./store/index";

import moment from "moment-timezone";
moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype, "$moment", {get() {return this.$root.moment}});

import App from "./components/App.vue";

export default function(events) {

    let initialState = Object.assign({}, store.state, { events });
    store.replaceState(initialState);

    return new Vue({
        data: {
            moment
        },
        components: {
            App
        },
        store,
        render(createElement) {
            //replaces div with id app in index.html
            return createElement(
                "div",
                { attrs: {id: "app"} },
                [createElement("app")]
            );
        }
    });
}
