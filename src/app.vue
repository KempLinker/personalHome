<style lang="stylus" rel="stylesheet/stylus">
    @import './static/reset';
    @import './common/stylus/variable.styl';
    @import './common/stylus/base.styl';

    body
        color $font-col-base
        background-color $bg-col-body
        background-image url('./static/img/bg_block.png')

    .icon-calendar
       icon-url('icon-calendar')

    .app-container
        width 100%
        height 100%

    .header-hidden-block
        position absolute
        top 0
        left 0
        width 100%
        height 56px
        display block

    .main-container
        position relative
        max-width 1000px
        margin 0 auto
        padding 36px 0 0 0

    .right-side-bar
        position absolute
        top 0
        right 0
        width 340px
        padding 0 0 60px 60px
        margin-top 36px
        border none
        box-sizing border-box

</style>

<template lang="html">
    <div class="app-container">
        <myb-header></myb-header>
        <div class="header-hidden-block"></div>
        <router-view></router-view>
    </div>
</template>

<script>
    import header from './components/header.vue'
    export default {
        props: {

        },
        data () {
            return {

            }
        },
        computed: {

        },
        methods: {

        },
        components: {
            'myb-header': header
        }
    }
</script>