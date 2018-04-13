<template>
  <div id="app">

    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" v-if="blank">

			<el-menu-item index="1">
				<router-link to='/1'>星期一</router-link>
			</el-menu-item>
			<el-menu-item index="2">
				<router-link to='/2'>星期二</router-link>
			</el-menu-item>
			<el-menu-item index="3">
				<router-link to='/3'>星期三</router-link>
			</el-menu-item>
			<el-menu-item index="4">
				<router-link to='/4'>星期四</router-link>
			</el-menu-item>
			<el-menu-item index="5">
				<router-link to='/5'>星期五</router-link>
			</el-menu-item>
		</el-menu>
    <router-view/>
  </div>
</template>


<script>
	export default {
		data() {
			return {

				activeIndex2: '',
				blank: 'false',
				write: 'true',
				
			}
		},
		created() {
			if(this.$route.params.state == null) {
				this.activeIndex2 = "1"
			} else {
				this.activeIndex2 = parseInt(this.$route.params.state) + 1
			}
		},

		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
			
			
		},
	}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
