<!--
 * @Date: 2021-05-03 14:03:05
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2021-05-07 10:40:21
 * @FilePath: /xiuer/src/App.vue
-->
<template>
  <div id="app">
      <div class="box"  >
        <div class="content left">
          <el-card class="box-card">
            <el-form :inline="true" :model="params" class="demo-form-inline">
                <el-form-item label="背景">
                  <el-select v-model="params.bg" placeholder="选择背景">
                    <el-option 
                      v-for="(item, index) in selectParams.bg" 
                      :key="index"
                      :label="item.name" 
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="标题">
                  <el-input v-model="params.title" clearable placeholder="标题"></el-input>
                </el-form-item>
                <el-form-item label="大标题">
                  <el-input v-model="params.subTitle" clearable placeholder="大标题"></el-input>
                </el-form-item>
                <el-form-item label="人员">
                  <el-select v-model="params.region" @change="changeUser" @clear="clearUser" clearable  filterable placeholder="选择人员">
                    <el-option 
                      v-for="(item, index) in selectParams.user" 
                      :key="index"
                      :label="item.userName" 
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="saveImg">保存</el-button>
                </el-form-item>
              </el-form>
          </el-card>
        </div>
        <div class="content right">
          <div class="imgBox" :class="[params.bg]" id="capture"  >
            <div class="left">
                <span class="title">{{params.title}}</span>
                <div class="subTitle">{{params.subTitle}}</div>
                <div class="bxot">
                  <div class="tag">{{params.tag}}</div>
                  <div class="xian"></div>
                  <div class="tag">{{params.userName}}</div>
                </div>
            </div>
            <div class="right">
                <img :src="params.bgUrl" alt="">
            </div>
          </div>
        </div>
      </div>
     
     
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import html2canvas from 'html2canvas';
import bg from './dataBase/bg.json'
import user from './dataBase/user.json'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      params: {
        bg: 'bg_0',
        bgUrl: '',
        title: '标题',
        subTitle: '大标题',
        tag: "标签",
        userName: "名字"
      },
      selectParams: {
        bg: [],
        user: []
      }
    }
  },
  methods: {
    getJson() {
      console.log(bg);
      console.log(user);
      this.selectParams.bg = bg
      this.selectParams.user = user
    },
    
    changeUser(item) {
      this.params.bgUrl = require(`${this.selectParams.user[item].imageUrl}`)
      this.params.tag = this.selectParams.user[item].tag
      this.params.userName = this.selectParams.user[item].userName
    },
    clearUser() {
      this.params.bgUrl = ''
      this.params.tag = ''
      this.params.userName = ''
    },
    saveImg() {
      html2canvas(document.querySelector("#capture")).then(canvas => {
          // document.body.appendChild(canvas)
          var imgUri = canvas.toDataURL("image/png");
          console.log(imgUri);
          let A = document.createElement('a')
          A.href = imgUri
          A.download= `${this.params.userName}.png`
          A.click()
          A.remove(A)
      });
    }
  },
  mounted () {
    this.getJson();
  },
}
</script>

<style lang="less" >
/* 清除内外边距 */
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
pre, /* text formatting elements 文本格式元素 */
fieldset, lengend, button, input, textarea, /* form elements 表单元素 */
th, td { /* table elements 表格元素 */
    margin: 0;
    padding: 0;
}
.box {
  display: flex;
  height: 100%;
  flex-direction: column;
  & > .content {
    // width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  & > .left {
    margin: 0 auto;
    margin-top: 100px;
  }
  & > .right {
    margin: 0 auto;
    margin-top: 100px;
    & > .imgBox {
      display: flex;
      justify-content: space-between;
      width: 986px;
      height: 485px;
      border-radius: 27px;
      background-size: cover;
      padding: 0 100px 0 60px;
      & > .left {
        padding-top: 189px;
        // display: flex;
        // flex-direction: column;
        & > .title {
          display: inline-block;
          width: auto;
          height: 50px;
          line-height: 50px;
          border-radius: 10px;
          background-color: rgb(255, 255, 255);
          padding: 0 20px;
          font-size: 32px;
          font-family: "SourceHanSansCN";
          color: rgb(157, 167, 178);
        }
        & > .subTitle {
          font-family: "SourceHanSansCN";
          font-size: 60px;
          color: rgb(255, 255, 255);
          margin-bottom: 40px;
          margin-top:10px;
        }
        & > .bxot {
          display: flex;
          align-items: center;
          & > .xian {
            width: 5px;
            height: 34px;
            border-left:1px solid rgba(253, 253, 253, 0.6);
            margin: 0 10px;
          }
          & > .tag {
            font-size: 36px;
            font-family: "SourceHanSansCN";
            color: rgba(253, 253, 253, 0.6);
          }
        }
        
        
      }
      & > .right {
        height: 100%;
        display: flex;
        align-items: flex-end;
        // padding-top: 60px;
        & > img {
          // width: 300px;
          // height: 100%;
          margin-bottom: 0;
        }
      }
    }
  } 
}
.bg_0 {
  background-image: url(./assets/img/shigongbg.png);
}
.bg_1 {
  background-image: url(./assets/img/cailiaobg.png);
}
.bg_2 {
  background-image: url(./assets/img/IPBG.png);
}


</style>
