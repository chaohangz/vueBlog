<template>
  <div id="content">
    <div class="article_wrap" v-for="item in articleList">
      <div @click="articleEdit(item._id)" class="article_title">{{ item.title }}</div>
      <div class="article_info">
        <span class="article_info_date">发表于：{{ item.date }}</span>
        <span class="article_info_label">标签：
        <span v-if="item.labels.length === 0">未分类</span>
        <el-tag v-else class="tag_margin" type="primary" v-for="tag in item.labels">{{ tag }}</el-tag>
        </span>
      </div>
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
        articleList: [],
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
        let self = this
        this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          self.$http.post('/api/admin/deleteArticle', {
            _id: id
          }).then(
            response => {
              self.$message({
                type: 'success',
                message: '删除成功!'
              });
              self.fetchData()
            },
            response => {
              console.log(response)
            }
          )
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
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