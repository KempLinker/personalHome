<script>

    export default {
        data () {
            return {
                articleId: '',
                articleType: '',
                articleData: {},
                articleList: [],
                categoryList: [
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
                    }
                ]
            }
        },
        created (){
            var articleId = this.articleId = this.$route.params.articleId;
            var articleType = this.articleType = this.$route.params.articleType;
            var url = '/src/static/data/' + articleType + '_article.json';
            this._axios.get(url).then((res) => {
                this.articleList = res.data.article_list;
                for( var i = 0, len = this.articleList.length; i < len; i ++ ){
                    if( this.articleList[i].id == articleId ){
                        var articleData = this.articleData = this.articleList[i];
                        articleData.create_time = new Date( Number(articleData.create_time) ).toLocaleDateString();
                        articleData.update_time = new Date( Number(articleData.update_time) ).toLocaleDateString();
                        break;
                    }
                }

                if( ['css','js'].indexOf(this.articleData.category) >= 0 ){
                    this.$store.dispatch('nav/setActiveAsync', 'learnPart')
                }
            });

        },
        methods: {
            goArticleCategory: function(category){
                this.$router.push({ name: category.name })
            }
        },
        computed: {
            articleName: function () {
                return require(`./articles/${this.articleId}.vue`)
            }
        },
    }
</script>

<template>
    <div class="main-container">
        <div class="article-decorate"></div>
        <div class="article-container">
            <div class="article-info">
                <div class="info-img"></div>
                <div class="info-row">
                    <label>创建时间</label>
                    <span>{{articleData.create_time}}</span>
                </div>
                <div class="info-row">
                    <label>修改时间</label>
                    <span>{{articleData.update_time}}</span>
                </div>
                <div class="info-row">
                    <label>分类标签</label>
                    <span class="article-tag" v-for="val in articleData.tags">{{val}}</span>
                </div>
                <div class="category-list">
                    <p>文章分类</p>
                    <ul>
                        <li v-for="val in categoryList" v-on:click="goArticleCategory(val)">{{val.title}}</li>
                    </ul>
                </div>
            </div>
            <div class="article-title">世末歌者</div>
            <div class="article-box">
                <component :is="articleName" class="article-paragraph"></component>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
    @import './../common/stylus/variable.styl';

    .article-decorate
        position absolute
        top 76px;
        left -1000px;
        width 4000px
        height 160px
        background $bg-col-green

    .article-container
        position relative
        top 40px
        max-width 700px
        padding 0
        margin-left 240px
        margin-bottom 32px
        border none
        box-sizing border-box

    .article-info
        position absolute
        top: -48px;
        left -240px;
        width 200px
        min-height 350px
        background #fff
        box-shadow 0 2px 4px 0px rgba(0,0,0,.06)
        border-radius 4px
        text-align left
        &::before
            content ''
            position absolute
            top 0
            left 0
            width 16px
            height 16px
            border-right 16px solid transparent
            border-top 16px solid #fff
            z-index 2

        &::after
            content ''
            position absolute
            top 0
            left 0
            width 28px
            height 28px
            border-right 28px solid transparent
            border-top 28px solid $bg-col-green
            z-index 1

        .info-img
            width 64px
            height 64px
            margin 32px auto
            background $bg-col-green

        .info-row
            padding 8px 16px
            font-size 12px
            color $font-col-article
            label
                display block
                margin-bottom 8px
            span
                padding-left 32px

            .article-tag
                display inline-block
                margin-bottom 8px
                margin-left 12px
                padding 2px 8px
                border 1px solid $bg-col-green
                border-radius 12px

        .category-list
            position absolute
            bottom: -240px;
            left 0;
            width 100%
            height 200px
            overflow hidden
            color $font-col-article
            p{
                width 100%
                padding 8px 0 8px 8px
                border-bottom 1px solid rgba(0,0,0,0.1)
                font-size 16px
                letter-spacing 2px
            }
            ul li
                margin-top 8px
                padding-left 8px
                line-height 32px
                font-size 14px
                cursor pointer
                opacity .8
                transition .2s all 0s ease-in-out
                &:hover
                    color $font-col-base
                    opacity 1
                    transition .2s all 0s ease-in-out


    .article-title
        position relative
        width 100%
        height 64px
        padding-top 8px
        line-height 56px
        font-size 20px
        color $font-col-white

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
            p
                font-size 14px
                line-height 24px
                text-indent 32px
                color $font-col-article
            pre
                padding-left 32px

</style>
