<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <router-link to="/" replace>根</router-link><br>
    <router-link to="/a/profile">profile</router-link>
    <router-link to="/m">a</router-link>
    <router-view></router-view>
    <router-view name="a"></router-view>
    <button @click="a=!a">a</button><br>
    <p v-if="a">s</p>
    <input v-model="msg"/><br><br>
    <span class="btn btn-info">info</span><br>
    未使用计算属性："{{ msg.split('').reverse().join('') }}"
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <div class="panel-group table-responsive" role="tablist">
      <div class="panel panel-primary">
        <div id="p" class="panel-heading" data-toggle="collapse" data-target="#a" role="tab" @click="change($event.currentTarget)">
            <h4 class="panel-title">
            说明 <span class="glyphicon glyphicon-chevron-up right"></span>
            </h4>
        </div>
        <div id="a" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="p">
            <ul class="list-group">
              <li class="list-group-item ">
                <a href="javascript:void(0)">1</a>
              </li>
              <li class="list-group-item">
                <a href="javascript:void(0)">2</a>
              </li>
              <li class="list-group-item select">
                <a href="javascript:void(0)">3</a>
              </li>
              <li class="list-group-item">
                <a href="javascript:void(0)">4</a>
              </li>
            </ul>
        </div>
      </div>
      <div class="panel panel-primary">
        <div id="d" class="panel-heading" data-toggle="collapse" data-target="#b" role="tab">
            <h4 class="panel-title">
            说明 <span class="glyphicon glyphicon-chevron-up right"></span>
            </h4>
        </div>
        <div id="b" class="panel-collapse collapse" role="tabpanel" aria-labelledby="d">
            <ul class="list-group">
              <li class="list-group-item ">
                <a href="javascript:void(0)">1</a>
              </li>
              <li class="list-group-item">
                <a href="javascript:void(0)">2</a>
              </li>
              <li class="list-group-item select">
                <a href="javascript:void(0)">3</a>
              </li>
              <li class="list-group-item">
                <a href="javascript:void(0)">4</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'word',
      a: true
    }
  },
  methods: {
    change: function (obj) {
      console.log($(obj))
      $(obj).find('span').toggleClass('glyphicon-chevron-down')
      $(obj).find('span').toggleClass('glyphicon-chevron-up')
    }
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.msg.split('').reverse().join('')
    }
  },
  watch: {
    a: function (ne, ol) {
      alert($('.hello h1').text())
    },
    msg: function (ne, ol) {
      console.log(ne)
      console.log(ol)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
h1, h2 {
  font-weight: normal;
}

.hello {
  width: 30%;
  margin: 20px auto;
  padding: 0px;
  text-align: right;
  border: 20px solid yellow;
  overflow: hidden;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /*display: inline-block;*/
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
