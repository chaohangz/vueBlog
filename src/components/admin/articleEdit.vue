<template>
  <div>
    <div class="article_wrap">
      <span>标题：</span>
      <input type="text" v-model="title">
      <div class="edit_content">简介</div>
      <textarea cols="100" rows="5" draggable="false" v-model="gist"></textarea>
      <div class="edit_content">内容</div>
      <textarea cols="100" rows="20" draggable="false" v-model="content"></textarea>
      <div class="edit_save article_button article_all" @click="saveArticle()">保存</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'articleEdit',
    data() {
      return {
        title: '',
//        date: '',
        content: '',
        gist: ''
      }
    },
    mounted: function () {
      if (this.$route.params.id) {
        this.$http.get('/api/articleDetail/' + this.$route.params.id).then(
          response => {
            let article = response.body
            console.log(article)
            this.title = article.title
            this.content = article.content
            this.gist = article.gist
          },
          response => console.log(response)
        )
      }
    },
    methods: {
      // 保存文章
      saveArticle: function () {
        let self = this
        if (this.title.length === 0) {
          alert('请输入标题')
          return
        }
        if (this.content.length === 0) {
          alert('请输入内容')
          return
        }
        if (this.gist.length === 0) {
          alert('请输入简介')
          return
        }
        if (this.$route.params.id) {
          // 更新文章
          let obj = {
            _id: this.$route.params.id,
            title: this.title,
            content: this.content,
            gist: this.gist
          }
          this.$http.post('/api/admin/updateArticle', {
            articleInformation: obj
          }).then(
            response => {
              console.log('文章更新成功')
              // 更新完成后跳转至该文章的详情页
              self.$router.push('/articleDetail/' + self.$route.params.id)
            },
            response => console.log(response)
          )
        }else {
          // 新建文章
          let obj = {
            title: this.title,
            content: this.content,
            gist: this.gist
          }
          this.$http.post('/api/admin/saveArticle', {
            articleInformation: obj
          }).then(
            response => {
              console.log('文章发布成功')
              self.refreshArticleList()
            },
            response => console.log(response)
          )
        }
      },
      // 保存成功后跳转至文章列表页
      refreshArticleList: function () {
        console.log('刷新成功')
        this.$router.push('/admin/articleList')
      }
    }
  }
</script>

<style>
  .edit_content {
    padding: 20px 0;
    text-align: left;
  }

  .edit_save {
    margin: 20px;
    border: 1px solid #222;
    cursor: pointer;
  }
</style>