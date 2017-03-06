
import Vue from "vue";
import VueRouter from "vue-router";
import Axios from "axios";
import App from './app.vue';
import childA from './components/childA.vue';
import enjoyPart from './components/childB.vue';
import partA from './components/partA.vue';
import partB from './components/partB.vue';

Vue.config.debug = true;
Vue.use(VueRouter);
Vue.prototype._axios = Axios;

var router = new VueRouter({
    routes :[
        {
            path: '/navOne',
            name: 'navOne',
            component: childA,
            children: [
                {
                    path: 'menuA',
                    name: 'menuA',
                    component: partA
                },
                {
                    path: 'menuB',
                    name: 'menuB',
                    component: partB
                },
                {
                    path: '',
                    redirect: { name: 'menuA' }
                }
            ]
        },
        {
            path: '/enjoy',
            name: 'enjoyPart',
            component: enjoyPart
        },
        {
            path: '/*',
            redirect: { name: 'enjoyPart' }
        }
    ]
});

var app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

router.push('enjoyPart');

