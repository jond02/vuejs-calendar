import Vue from 'vue';
import "./style.scss";

import store from "./store/index";

import moment from "moment-timezone";
moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype, "$moment", {get() {return this.$root.moment}});

import App from "./components/App.vue";

let events = window.__INITIAL_STATE__.map(event => ({
      description: event.description,
      date: moment(event.date)
}));

let initialState = Object.assign({}, store.state, { events });

store.replaceState(initialState);

new Vue({
  el: '#app',
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
