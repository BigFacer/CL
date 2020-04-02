<template>
  <div>
    <div class="hand_div">
      <div class="hand_text_div">
        <el-row :gutter="24">
          <el-col :span="4"><div class="grid-content bg-purple">图片</div></el-col>
          <el-col :span="16">
            <el-row :gutter="24">
              <div class="grid-content bg-purple title">中国人民解放军总医院超声科</div>
            </el-row>
            <el-row :gutter="24">
               图片：10023
            </el-row>
          </el-col>
          <el-col :span="4"><div class="grid-content bg-purple" >图片</div></el-col>
        </el-row>

      </div>
    </div>
    <div class="el-item-div">
      <el-carousel height="30rem">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="img-div">
      图片
    </div>
    <div class="chose-list">
       <div class="list-item"></div>
      <div class="list-item"></div>
      <div class="list-item"></div>
      <div class="list-item"></div>
    </div>
  </div>
</template>
<style>
  .hand_div{
    height: 30rem;
    background-color: #349AB6;
    font-size: 1rem;
  }
  .hand_text_div{
    width: 80%;
    height: 15rem;
    padding-top: 10rem;
    /*line-height: 15rem;*/
    margin-left: 10%;
    color: #fff;
    text-align: left;
  }
  .title{
    font-size: 3rem;
  }
  .el-item-div{
    height: 30rem;
    width: 80%;
    margin-left: 10%;
    margin-top: -10rem;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 0.2rem;
    opacity: 0.75;
    line-height: 30rem;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .img-div{
    margin-top: 6rem;
    width: 80%;
    margin-left: 10%;
    height: 30rem;
    background-color:#349AB6 ;
  }
  .chose-list{
    width: 80%;
    margin-left: 10%;
    margin-top: 6rem;
  }
  .list-item{
    width: 100%;
    height:10rem ;
    background-color:#349AB6;
    margin-bottom: 4rem;
  }

</style>

<script>
export default {
  name: 'ZhuanQu',
  data () {
    return {
      xxxx: '头部'
    }
  }
}
</script>
