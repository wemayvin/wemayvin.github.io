import Vue from 'vue';
import VueRouter from 'vue-router';
import SampleVue from '../Sample.vue';
import IntroVue from '../Intro.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', component: IntroVue},
		{ path: '/sample', component: SampleVue}
	]
});

export default router;
