<template>
  <div id="app">
    <div class="black_line"></div>
    <div id="main">
      <div id="left_menu">
        <div class="menu_name">
          <h1>ChaoHang'S NOTES</h1>
          <h5>不如吃茶去</h5>
        </div>
        <nav>
          <ul>
            <router-link to="/article">
              <li class="nav">
                <i class="menu-item-icon fa fa-fw fa-home"></i>
                <span>首页</span>
              </li>
            </router-link>
            <router-link to="/about">
              <li class="nav">
                <i class="menu-item-icon fa fa-fw fa-home"></i>
                <span>关于</span>
              </li>
            </router-link>
            <router-link to="/admin/articleList">
              <li class="nav">
                <i class="menu-item-icon fa fa-fw fa-home"></i>
                <span>管理</span>
              </li>
            </router-link>
            <router-link to="/admin/articleEdit">
              <li class="nav">
                <i class="menu-item-icon fa fa-fw fa-home"></i>
                <span>写文章</span>
              </li>
            </router-link>
          </ul>
        </nav>
        <div class="info">
          <img src="./assets/head.jpg" alt="head">
          <div class="info_name">CHAOHANG</div>
          <div class="archive">
            <ul>
              <router-link to="/article">
                <li>
                  <span class="archive_count">{{ articleNumber }}</span>
                  <span class="archive_name">日志</span>
                </li>
              </router-link>
            </ul>
          </div>
          <ul class="communication">
            <li class="communication_item">
              <a href="#">
                <i class="menu-item-icon fa fa-fw fa-home"></i>
                <span>GitHub</span>
              </a>
            </li>
            <li class="communication_item">
              <a href="#">
                <i class="menu-item-icon fa fa-fw fa-home"></i>
                <span>GitHub</span>
              </a>
            </li>
            <li class="communication_item">
              <a href="#">
                <i class="menu-item-icon fa fa-fw fa-home"></i>
                <span>GitHub</span>
              </a>
            </li>
            <li class="communication_item">
              <a href="#">
                <i class="menu-item-icon fa fa-fw fa-home"></i>
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        articleNumber: ''
      }
    },
    mounted: function () {
      this.$http.get('/api/articleList').then(
        response => this.articleNumber = response.body.length,
        response => console.log(response)
      )
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

  a {
    color: #545455;
    cursor: pointer;
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    font-weight: bold;
    line-height: 1.5;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 20px 0 15px;
  }

  h1 {
    font-size: 22px;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 18px;
    }
  }

  h2 {
    font-size: 20px;
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 16px;
    }
  }

  h3 {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    h3 {
      font-size: 14px;
    }
  }

  h4 {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    h4 {
      font-size: 12px;
    }
  }

  h5 {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    h5 {
      font-size: 10px;
    }
  }

  h6 {
    font-size: 12px;
  }

  @media (max-width: 767px) {
    h6 {
      font-size: 8px;
    }
  }

  p {
    margin: 0 0 25px 0;
  }

  body {
    background-color: #f5f7f9;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
  }

  .black_line {
    width: 100%;
    height: 2px;
    background: #000;
  }

  #main {
    overflow: hidden;
    width: 960px;
    text-align: center;
    margin: auto;
  }

  #left_menu {
    float: left;
    width: 240px;
    margin-right: 20px;
  }

  #left_menu a:hover {
    color: #222;
    background: #f5f7f9;
  }

  .menu_name {
    background: rgb(38, 42, 48);
    color: white;
    padding: 10px 0;
  }

  nav {
    background: white;
    padding: 20px 0;
  }

  .nav {
    padding: 8px 20px;
    text-align: left;
  }

  .info {
    margin-top: 10px;
    padding: 20px;
    background: white;
  }

  .info_name {
    font-weight: 600;
    padding: 5px;
  }

  .info img {
    width: 120px;
    height: 120px;
  }

  .archive {
    padding-top: 20px;
  }

  .archive .archive_count {
    display: block;
    color: #222;
    font-weight: 600;
    font-size: 16px;
  }

  .archive .archive_name {
    display: block;
    color: #999;
    font-size: 14px;
  }

  .communication {
    padding-top: 20px;
  }

  .communication_item {
    display: inline-block;
    width: 40%;
    font-size: 14px;
    font-weight: 600;
    padding: 5px;
  }

  #content {
    width: 700px;
    float: left;
    background: white;
  }
</style>