<style lang="stylus" rel="stylesheet/stylus">
    @import './../common/stylus/variable.styl';

    .article-container
        padding 0
        border none

    .content-list-title
        margin-bottom 20px
        font-size 24px
        font-weight 200

    .content-box
        position relative
        max-width 660px
        height 160px
        background #fff
        box-shadow 0 1px 4px rgba(0,0,0,.06)
        border 1px solid rgba(0,0,0,.09)
        padding 10px 20px
        margin-bottom 16px

        .content-tip
            position absolute
            top 12px
            left -24px
            width 64px
            height 24px
            line-height 22px
            padding-left 12px
            color #f1f1f1
            background #5e5d5b
            box-shadow 1px 2px 6px 0px rgba(0,0,0,0.3)
            &:before
                content ""
                position absolute
                top 24px
                left 0
                border-left 24px solid transparent
                border-top 10px solid #484744

        .content-caption
            margin-left 32px
            margin-top 8px
            font-size 18px

        .content-sub-info
            position absolute
            left 0
            bottom 0
            width 100%
            height 32px
            border-top 1px solid rgba(0,0,0,.05)
            .time
                display inline-block
                width 100px
                line-height 32px
                margin-left 52px
                font-size 14px
            .feature
                float right
                display inline-block
                margin-right 24px
                font-size 12px
                line-height 32px
                vertical-align bottom

                span
                    width 20px
                    height 20px
                    display inline-block
                    line-height 20px
                    text-align center
                    border-radius 2px
                    color #fff
                    background $bg-col-dark



        .content-abstract
            margin-left 32px
            margin-top 8px
            font-size 13px
            height 54px
            overflow hidden
            color rgba(63,63,60,0.7)
            display -webkit-box
            text-overflow ellipsis
            -webkit-line-clamp 3
            -webkit-box-orient vertical

</style>

<template lang="html">
    <div class="article-container">
        <p class="content-list-title">
            文章列表 - Javascript
        </p>
        <div class="content-box" v-for="article in articleList">
            <span class="content-tip">{{article.category}}</span>
            <div class="content-caption">{{article.name}}</div>
            <div class="content-abstract">{{article.abstract}}</div>
            <div class="content-sub-info">
                <span class="time">{{article.createTimeFormat}}</span>
                <span class="feature">
                    <span class="translated-block">译</span>
                    <span class="reprinted-block">转</span>
                    <span class="original-block">原</span>
                    <span class="href-block">链</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {

        },
        created (){
            this._axios.get('/src/static/data/data.json').then((res) => {
                this.articleList = res.data.article_list;
                this.articleList.forEach(function(article){
                    article.createTimeFormat = new Date( Number(article.create_time) ).toLocaleDateString();
                });
            });
        },
        data () {
            return {
                articleList: []
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