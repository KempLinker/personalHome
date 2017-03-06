<style lang="stylus" rel="stylesheet/stylus">


</style>
<template lang="html">
    <div class="main-container a-container">
        <div class="right-side-bar">
            <myb-menu :menu-list="menuList"></myb-menu>
            <myb-menu :menu-list="menuList" style="margin-top: 60px"></myb-menu>
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
                        router: 'menuA',
                        name: 'Javascript'
                    },
                    {
                        router: 'menuB',
                        name: 'CSS'
                    },
                    {
                        router: 'menuC',
                        name: 'Javascript'
                    },
                    {
                        router: 'menuD',
                        name: 'CSS'
                    }
                ]
            }
        },
        created (){

        },
        components: {
            'myb-menu': menu
        }
    }
</script>
