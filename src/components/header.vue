<style lang="stylus" rel="stylesheet/stylus">
    @import './../common/stylus/variable.styl';
    .header
        position relative
        width 100%
        height 56px
        color $font-col-purple
        background-color $bg-col-header
        box-shadow 0px 0px 8px 0px rgba(54, 53, 30, 0.2), 0px 21px 12px 0px rgba(248, 248, 248, 0.2), inset 0px -1px 0px 0px rgba(255, 255, 255, 0.3)
        z-index 9999
        .main-nav
            max-width 1000px
            margin 0 auto
            line-height 56px
            .logo
                float left

            .router-box
                float right
                a
                    position relative
                    display inline-block
                    padding 0 16px
                    line-height 56px
                    color $font-col-purple
                    cursor pointer

                    &::before
                        position absolute
                        top 46px
                        left 16
                        content ''
                        width calc( 100% - 32px )
                        height 3px
                        opacity 0
                        background $bg-col-green
                        transition .2s all 0s ease-in-out
                    &:hover
                        color $font-col-white
                        &::before
                            opacity 1
                            top 53px
                            transition .2s all 0s ease-in-out




</style>

<template lang="html">
    <div class="header">
        <div class="main-nav">
            <div class="logo cur-pointer" v-on:click="goHome">
                Home
            </div>
            <div class="router-box">
                <router-link :to="navItem.router" v-for="navItem in headerNav">{{navItem.name}}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {

        },
        data () {
            return {
                headerNav : [
                    {
                        router: '/navOne',
                        name: 'Nav One'
                    },
                    {
                        router: '/navTwo',
                        name: 'Nav Two'
                    },
                    {
                        router: '/navThree',
                        name: 'Nav Three'
                    },
                    {
                        router: '/enjoy',
                        name: 'Enjoy'
                    }
                ]
            }
        },
        computed: {

        },
        methods: {
            goHome: function (event) {
                window.location.href = 'https://kemplinker.github.io/personalHome/home/latest.html'
            }
        },
        components: {

        }
    }
</script>
