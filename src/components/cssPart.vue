<style lang="stylus" rel="stylesheet/stylus">
    @import './../common/stylus/variable.styl';
    @import './../common/stylus/content.styl';


</style>

<template lang="html">
    <div class="content-list-container">
        <p class="content-list-title">
            列表 - CSS
        </p>
        <div class="content-box" v-for="article in articleList">
            <span class="content-tip">{{article.category}}</span>
            <div class="content-caption" v-on:click="goDetail(article.category,article.id)">{{article.name}}</div>
            <div class="content-abstract">{{article.abstract}}</div>
            <div class="content-sub-info">
                <span class="time">
                    <i class="kl-icon-mini icon-calendar mr-8"></i>{{article.createTimeFormat}}
                </span>
                <span class="feature">
                    <span class="translated-block" v-if="!!article.feature.is_translated">译</span>
                    <span class="reprinted-block" v-if="!!article.feature.is_reprinted">转</span>
                    <span class="original-block" v-if="!!article.feature.is_original">原</span>
                    <span class="href-block" v-if="!!article.feature.is_href">链</span>
                    <span class="question-block" v-if="!!article.feature.is_question">问</span>
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
                var articleList = this.articleList;
                var allArticleList = res.data.article_list;
                allArticleList.forEach(function(article){
                    if( article.category == 'css' ){
                        article.createTimeFormat = new Date( Number(article.create_time) ).toLocaleDateString();
                        articleList.push(article)
                    }

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
            goDetail: function(articleType, articleId){
                this.$router.push({ name: 'articlePart', params: { articleType: articleType, articleId: articleId }})
            }
        },
        components: {

        }
    }
</script>