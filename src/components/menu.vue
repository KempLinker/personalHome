<style lang="stylus" rel="stylesheet/stylus">
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
                width 100%
                margin 8px 0
                line-height 32px
                cursor pointer
</style>

<template lang="html">
    <div class="menu-box">
        <p class="menu-title">分类列表</p>
        <div class="menu-split-line"></div>
        <ul>
            <router-link :to="item.router" tag="li" v-for="item in menuList">{{item.name}}</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['menuList'],
        data () {
            return {

            }
        },
        computed: {

        },
        methods: {

        },
        components: {

        }
    }
</script>