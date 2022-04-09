import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vueMoment from 'vue-moment';
import vueMeta from 'vue-meta';

Vue.use(vueMoment);
Vue.use(vueMeta);

new Vue({
	el: '#app',
	render: (h) => h(App),
	router
});


