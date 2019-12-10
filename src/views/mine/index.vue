<template>
  <div id="main">
  <Header title="我的空间"></Header>
  <Mine/>
  <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Tabbar from '@/components/Tabbar';
import Mine from '@/components/Mine';
export default {
  name:'mine',
  components:{
    Header,Tabbar,Mine
  }
}
</script>

<style>

</style>