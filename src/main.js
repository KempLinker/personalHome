
import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from 'vuex'
import Axios from "axios";
import App from './app.vue';
import learnPart from './components/learnPart.vue';
import articlePart from './components/articlePart.vue';
import enjoyPart from './components/enjoyPart.vue';
import jsPart from './components/jsPart.vue';
import cssPart from './components/cssPart.vue';

Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.prototype._axios = Axios;

const router = new VueRouter({
    routes :[
        {
            path: '/learn',
            name: 'learnPart',
            component: learnPart,
            children: [
                {
                    path: 'js',
                    name: 'jsPart',
                    component: jsPart
                },
                {
                    path: 'css',
                    name: 'cssPart',
                    component: cssPart
                },
                {
                    path: '',
                    redirect: { name: 'cssPart' }
                }
            ]
        },
        {
            path: '/article/:articleId',
            name: 'articlePart',
            component: articlePart
        },
        {
            path: '/enjoy',
            name: 'enjoyPart',
            component: enjoyPart,
            children: [
                /*
                {
                    path: 'collection',
                    name: 'collectionPart',
                    component: collectionPart
                },
                {
                    path: 'photo',
                    name: 'photoPart',
                    component: photoPart
                }
                */
            ]
        },
        {
            path: '/*',
            redirect: { name: 'learnPart' }
        }
    ]
});

const navStore = {
    state: {
        activeRoute: 'default'
    },
    mutations: {
        'nav/setActive' (state, value) {
            state.activeRoute = value
        }
    },
    actions: {
        'nav/setActiveAsync' (state, value) {
            state.commit('nav/setActive',value)
        }
    },
    getters: {
        activeState: state => {
            return state.activeRoute
        }
    }
};
const learnStore = {
    state: {
        isArticle: false,
        activeClassify: 'default'
    },
    mutations: {
        'learn/setActiveClassify' (state, value) {
            state.activeRoute = value
        },
        'learn/isArticle' (state, value) {
            state.isArticleAsync = value
        }
    },
    actions: {
        'learn/setActiveClassifyAsync' (state, value) {
            state.commit('learn/setActiveClassify',value)
        },
        'learn/isArticleAsync' (state, value) {
            state.commit('learn/isArticle',value)
        }
    },
    getters: {

    }
};

const store = new Vuex.Store({
    modules: {
        nav: navStore,
        learn: learnStore
    }

});
var app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

router.beforeEach((to, from, next) => {
    if( to.fullPath.indexOf('/learn/') >= 0 ){
        store.state.learn.activeClassify = to.name
    }
    next()
});


