<template>
  <div id="app">
   <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
	
		
	
export default {
  name: 'App',
	watch: {
	  '$route' (to, from) {
	   this.$Spin.hide();
	  }
	}
}


</script>

<style>

</style>
