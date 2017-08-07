<template>
  <div>
    我是用户
    <div class="user-list center">
      <router-link style="padding: 0 20px" :to="{path:'/user/'+item.tip+'/'+item.id,query:{info:'follow'}}" key="index" v-for="item,index in userList">{{item.userName}}</router-link>
    </div>
    <div class="user-info center" v-if="userInfo.userName" style="font-size: 18px; padding: 5px; border: 1px solid green">
      <p>姓名：{{userInfo.userName}}</p>
      <p>性别：{{userInfo.sex}}</p>
      <p>爱好：{{userInfo.hobby}}</p>
    </div>
    <hr>
    <div class="info-list center" v-if="userInfo.userName" style="font-size: 18px">
      <!--<router-link exact to="?info=follow">他的关注</router-link>-->
      <!--<router-link exact to="?info=share">他的分享</router-link>-->
      <router-link exact :to="{path:'',query:{info:'follow'}}">他的关注</router-link>
      <router-link exact :to="{path:'',query:{info:'share'}}">他的分享</router-link>
      <div>
        {{$route.query}}
      </div>
    </div>
  </div>
</template>

<script>
  let data = [
    {
      id: 1,
      userName: 'leo1',
      tip: 'vip',
      sex: '男',
      hobby: '写代码'
    },
    {
      id: 2,
      userName: 'leo2',
      tip: 'vip',
      sex: '男',
      hobby: '唱歌'
    },
    {
      id: 3,
      userName: 'leo3',
      tip: 'common',
      sex: '男',
      hobby: '看电视'
    }
  ]
  export default {
    data () {
      return {
        userList: data,
        userInfo: []
      }
    },
    watch: {
      // 路径发生变化，$route会重新赋值，监控了这个属性，会执行这个函数
      $route () {
        this.getData()
      }
    },
    created () {
      // 渲染这个组件会调用一次这个生命周期函数
      // 复用这个组件，这个函数不会再次被调用了
      // 地址一旦发生变化，$route会重新生成一个路由信息
      this.getData()
    },
    methods: {
      getData () {
        let id = Number(this.$route.params.userId)
        if (id) {
          this.userInfo = this.userList.filter((item) => {
            return item.id === id
          })[0]
        } else {
          this.userInfo = {}
        }
      }
    }
  }
</script>
<style>

</style>
