<template>
  <div>
    <div class="article_wrap">
      <div class="article_title article_detail_title">{{ article.title }}</div>
      <div class="article_detail_content">{{ article.content }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'articleDetail',
    data() {
      return {
        article: {}
      }
    },
    mounted: function () {
      let id = this.$route.params.id
      this.$http.get('/api/articleDetail/' + id).then(
        response => this.article = response.body,
        response => console.log(response)
      )
    }
  }
</script>

<style>
  .article_detail_title {
    cursor: default;
    margin: 40px 0;
  }

  .article_detail_content {
    text-align: left;
    padding: 40px 0;
    font-size: 18px;
  }
</style>