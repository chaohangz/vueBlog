<template>
  <div>
    <div class="article_wrap" v-for="item in articleList">
      <div @click="articleEdit(item._id)" class="article_title">{{ item.title }}</div>
      <div class="article_gist">{{ item.gist }}</div>
      <div>
        <div @click="articleEdit(item._id)" class="article_button edit">修改</div>
        <div @click="deleteArticle(item._id)" class="article_button delete">删除</div>
      </div>
      <div class="article_underline"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'article',
    data() {
      return {
        articleList: []
      }
    },
    mounted: function () {
      // 获取文章列表
      this.$http.get('/api/articleList').then(
        response => this.articleList = response.body.reverse(),
        response => console.log(response)
      )
    },
    methods: {
      // 跳转至文章编辑页
      articleEdit: function (id) {
        this.$router.push('/admin/articleEdit/' + id)
      },
      // 删除文章
      deleteArticle: function (id) {
        this.$http.post('/api/admin/deleteArticle', {
          _id: id
        }).then(
          response => {
            console.log('删除文章成功')
            this.fetchData()
          },
          response => {
            console.log('文章删除失败')
            console.log(response)
          }
        )
      },
      // 更新数据
      fetchData: function () {
        this.$http.get('/api/articleList').then(
          response => this.articleList = response.body.reverse(),
          response => console.log(response)
        )
      }
    }
  }
</script>

<style>
  .edit:hover {
    background: limegreen;
    color: white;
    font-weight: 600;
  }

  .delete:hover {
    background: red;
    color: white;
    font-weight: 600;
  }
</style>