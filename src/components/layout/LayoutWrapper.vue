<template>
  <div>
    <layout-header></layout-header>
    <layout-sider class="left-menu"></layout-sider>
    <div class="right-content">
      <div class="bread-crumb">
        <Breadcrumb>
        <BreadcrumbItem :to="$route.path">{{$route.path.slice(1)}}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Card>
        <div class="content">
          <router-view/>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
import LayoutSider from './LayoutSider'
import LayoutHeader from './LayoutHeader'
export default {
  components: {
    LayoutSider, LayoutHeader
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.left-menu {
  position: fixed;
  top:65px;
  width: 200px!important;
  border-left: 1px solid #eee;
  box-sizing: border-box;
  border-radius:5px;
  overflow: hidden;
  bottom:2px;
  left:100px;
  box-shadow: 0 0 2px 0px #5cadff;
}
.left-menu:hover{
  box-shadow: 0 0 10px 0px #5cadff;
}
.right-content{
  border: 1px solid #eee;
  position: fixed;
  z-index: 1;
  left:305px;
  right:100px;
  top:65px;
  bottom:2px;
  border-radius:3px;
  background: #fff;
  overflow-y: auto;
  padding:15px;
  box-shadow: 0 0 2px 0px #5cadff;
}
.right-content:hover{
  box-shadow: 0 0 10px 0px #5cadff;
}
.bread-crumb{
  border-radius:4px;
  margin-bottom:15px;
}
</style>
