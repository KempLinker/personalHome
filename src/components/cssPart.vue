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
        box-shadow 0 2px 4px 0px rgba(0,0,0,.06)
        border 1px solid rgba(0,0,0,.09)
        padding 10px 20px
        margin-bottom 24px
        cursor pointer
        transition .2s box-shadow 0s ease-in-out

        &:hover
            box-shadow 0 2px 10px 6px rgba(0,0,0,.08)
            transition .2s box-shadow 0s ease-in-out

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
            position relative
            margin-left 32px
            margin-top 8px
            font-size 18px
            &::after
                content '详情'
                position absolute
                top 8px
                right 0
                display block
                color $font-col-green
                font-size 12px
                text-decoration underline
                opacity 0
                transition .4s all 0s ease-in-out
        &:hover .content-caption
            &::after
                opacity 1
                top 4px
                transition .4s all 0s ease-in-out
        .content-sub-info
            position absolute
            left 0
            bottom 0
            width 100%
            height 32px
            border-top 1px solid rgba(0,0,0,.05)

            &::before
                content ''
                position absolute
                top -1px
                left 0
                width 0
                height 1px
                background $bg-col-green

            ^[0]:hover .content-sub-info::before
                width 100px
                -webkit-animation: hoverLineSliceLeft .6s ease-in-out 0s 1 normal;
                -webkit-animation-fill-mode: forwards;

            &::after
                content ''
                position absolute
                top -1px
                right 0
                width 0px
                height 1px
                background $bg-col-green

            ^[0]:hover .content-sub-info::after
                width 100px
                -webkit-animation: hoverLineSliceRight .6s ease-in-out 0s 1 normal;
                -webkit-animation-fill-mode: forwards;
            .time
                display inline-block
                width 100px
                line-height 32px
                margin-left 52px
                font-size 12px
                color $font-col-sub
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
            display -webkit-box
            height 54px
            margin-left 32px
            margin-top 8px
            overflow hidden
            color $font-col-sub
            font-size 13px
            font-weight 300
            text-overflow ellipsis
            -webkit-line-clamp 3
            -webkit-box-orient vertical

    @keyframes hoverLineSliceLeft{
        0%{  left: 0;  width: 0;  }
        25%{  left: 0;  width: 15%;  }
        50%{  width: 30%;  }
        75%{  left: 50%;  width: 5%;  }
        100%{  left: 50%; width: 0;  }
    }
    @keyframes hoverLineSliceRight{
        0%{  right: 0;  width: 0;  }
        25%{  right: 0;  width: 15%;  }
        50%{  width: 30%;  }
        75%{  right: 50%;  width: 5%;  }
        100%{ right: 50%;  width: 0;    }
    }

</style>

<template lang="html">
    <div class="article-container">
        <p class="content-list-title">
            列表 - CSS
        </p>
        <div class="content-box" v-for="article in articleList">
            <span class="content-tip">{{article.category}}</span>
            <div class="content-caption" v-on:click="goDetail">{{article.name}}</div>
            <div class="content-abstract">{{article.abstract}}</div>
            <div class="content-sub-info">
                <span class="time">
                    <i class="kl-icon-mini icon-calendar mr-8"></i>{{article.createTimeFormat}}</span>
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
            goDetail: function(){
                this.$router.push({ name: 'articlePart', params: { articleId: 123 }})
            }
        },
        components: {

        }
    }
</script>