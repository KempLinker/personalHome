<style lang="stylus" rel="stylesheet/stylus">


</style>
<template lang="html">
    <div class="main-container a-container">
        <div class="right-side-bar">
            <myb-menu :menu-list="menuList" :active-route="activeClassify"></myb-menu>
        </div>
        <router-view></router-view>
    </div>

</template>
<script>
    import menu from './menu.vue'
    export default {
        data () {
            return {
                menuList: [
                    {
                        router: 'js',
                        name: 'jsPart',
                        title: 'Javascript'
                    },
                    {
                        router: 'css',
                        name: 'cssPart',
                        title: 'CSS'
                    },
                    {
                        router: 'design',
                        name: 'designPart',
                        title: 'Design'
                    },
                    {
                        router: '#',
                        name: '待添加',
                        title: '待添加',
                        disabled: true
                    }
                ]
            }
        },
        created (){
            this.$store.dispatch('nav/setActiveAsync','learnPart')
            this.$store.dispatch('learn/setActiveClassifyAsync','jsPart')
        },
        computed: {
            'activeClassify': function(){
                return this.$store.state.learn.activeClassify;
            }
        },
        methods: {

        },
        components: {
            'myb-menu': menu
        }
    }
</script>
