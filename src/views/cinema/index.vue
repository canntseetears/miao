<template>
  <div id="main">
  <Header title="影院"></Header>
      <div id="content">
        <div class="cinema_menu">
            <router-link tag="div" to="/cinema/city" class="city_switch">
                全城 <i class="iconfont icon-lower-triangle"></i>
            </router-link>
            <router-link tag="div" to="/cinema/brand" class="brand_swtich">
                品牌 <i class="iconfont icon-lower-triangle"></i>
            </router-link>
            <router-link tag="div" to="/cinema/feature" class="feature_switch">
                特色 <i class="iconfont icon-lower-triangle"></i>
            </router-link>
        </div>
        <keep-alive>
          <!-- 注意不要忘记添加存放的容器router-view -->
        <router-view></router-view>
        </keep-alive>
      </div>
  <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Tabbar from '@/components/Tabbar';
import Clist from '@/components/Clist';
export default {
  name:'cinema',
  components:{
    Header,Tabbar,Clist
  }
}
</script>
<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
.cinema_menu .brand_switch{font-size: 15px;
    color: #666;
    width: 80px;
    text-align: center;
    margin: 0 12px;
    font-weight: 700;}
.cenima_menu .brand_switch.router-link-active {
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
  }
/*   .cenima_menu .brand_switch.active {
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
  } */
  .cenima_menu .feature_switch.router-link-active {
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
  }
.cenima_menu .city_switch.router-link-active {
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
  }
/*#content .cinema_body{ flex:1; overflow:auto;}
.cinema_body ul{ padding:20px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(2){ float:right; }
.cinema_body .card{ display: flex;}
.cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;} */
</style>