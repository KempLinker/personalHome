<script>

    export default {
        data () {
            return {
                articleId: '',
                articleData: {},
                articleList: []
            }
        },
        created (){
            var articleId = this.articleId = this.$route.params.articleId;
            this._axios.get('/src/static/data/css_article.json').then((res) => {
                this.articleList = res.data.article_list;
                for( var i = 0, len = this.articleList.length; i < len; i ++ ){
                    if( this.articleList[i].id == articleId ){
                        this.articleData = this.articleList[i];
                    }
                }
            });
        }
    }
</script>

<template>
    <div class="article-container">
        <div class="article-title">世末歌者</div>
        <div class="article-box">
            <div class="article-paragraph" v-for="val in articleData.detail">{{val.text}}</div>
        </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
    @import './../common/stylus/variable.styl';
    .article-title
        position relative
        width 100%
        height 64px
        padding-top 8px
        padding-left 32px
        margin-left -34px
        line-height 56px
        font-size 20px
        border-left 2px solid $bg-col-green

        &::before
            content ''
            position absolute
            top 0
            left 0
            width 128px
            height 2px
            background $bg-col-green

        &::after
            content ''
            position absolute
            bottom 0
            left 0
            width 32px
            height 2px
            background $bg-col-green

    .article-box
        width 100%
        height auto
        min-height 400px
        padding 24px
        margin-top -2px
        background #fff
        box-shadow 0 2px 4px 0px rgba(0,0,0,.06)
        border-radius 4px
        .article-paragraph
            width 100%
            padding-bottom 8px
            font-size 14px
            line-height normal
            text-indent 32px
            color $font-col-article

</style>
