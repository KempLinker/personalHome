<style lang="stylus" rel="stylesheet/stylus">
    @import './../common/stylus/variable.styl';
    .menu-box
        width 100%
        box-sizing border-box

        .menu-title
            margin-bottom 20px
            font-size 24px
            font-weight 200

        .menu-split-line
            width 100%
            height 1px
            background-color rgba(0,0,0,0.09)
            box-shadow 0 1px 4px rgba(0,0,0,0.04)

        ul

            li
                position relative
                width 100%
                margin 16px 0
                padding-left 16px
                line-height 32px
                opacity 1
                color $font-col-dark
                a
                    position relative
                    display inline-block
                    margin-left 0
                    line-height 32px
                    cursor pointer
                    transition .2s all 0s ease-in-out
                    &::after
                        content ''
                        position absolute
                        top 8px
                        right -40px
                        width 16px
                        height 16px
                        background url(./../static/icon/icon-arrow-left.png) 0 0 no-repeat
                        opacity 0
                        transition .4s all 0s ease-in-out

                &::before
                    content ''
                    position absolute
                    top 16px
                    left 0
                    width 2px
                    height 0
                    background $bg-col-green
                    transition .2s all 0s ease-in-out

                &.ignore
                    opacity .6
                    transition .2s all 0s ease-in-out

                &.active
                    opacity 1
                    &::before
                        top 4px
                        height 24px
                    a
                        color $font-col-green


                &:hover
                    opacity 1
                    &::before
                        top 4px
                        height 24px
                        transition .2s all 0s ease-in-out
                    a
                        margin-left 16px
                        color $font-col-green
                        transition .2s all 0s ease-in-out
                        &::after
                            opacity 1
                            right -24px
                            transition .4s all 0s ease-in-out

                &.disabled
                    cursor not-allowed
                    line-height normal
                    &::before
                        display none
                    a
                        color $font-col-disable
                        cursor not-allowed
                &.disabled:hover
                    cursor not-allowed
                    line-height normal
                    &::before
                        display none
                    a
                        margin-left 0
                        color $font-col-disable
                        cursor not-allowed
                        &::after

                            display none


</style>

<template lang="html">
    <div class="menu-box">
        <p class="menu-title">分类条目</p>
        <div class="menu-split-line"></div>
        <ul>
            <router-link :to="item.router" tag="li" v-for="item in menuList"
                         v-bind:class="{ disabled: item.disabled, active: activeRoute == item.name, ignore: !item.disabled && focusRoute && focusRoute != item.name }"
                         v-on:mouseover.native="ignoreAndHover(item)" v-on:mouseleave.native="resetHover()">
                <a>{{item.title}}</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['menuList','activeRoute'],
        data () {
            return {
                focusRoute: ''
            }
        },
        created () {
            this.$store.dispatch('learn/setActiveClassifyAsync',this.$route.name)
        },
        computed: {

        },
        methods: {
            ignoreAndHover: function( item ){
                this.focusRoute = item.name
            },
            resetHover: function(){
                this.focusRoute = ''
            }
        },
        components: {

        }
    }
</script>