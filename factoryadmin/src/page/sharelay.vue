<style scoped>
	.layout{
  
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}


.ivu-layout-header {
  z-index: 99 !important;
}


.ivu-layout-sider-children  .ivu-menu a{
	color: #495060;
}

.ivu-layout-sider-children  .ivu-menu-item.ivu-menu-item-active.ivu-menu-item-selected a{
	color: #2d8cf0;
}

.ivu-layout-header  .ivu-menu a{
	color: rgba(255,255,255,.7);
}

.ivu-layout-header  .ivu-menu-item.ivu-menu-item-active.ivu-menu-item-selected a{
	color: #fff;
}


.ivu-layout-header  .ivu-menu .ivu-dropdown .ivu-select-dropdown li a{
	color: #495060;

}

.lay_mIcon{
	margin-right: 40px;
}

.layout-nav{
	margin-right: 0px !important;
}
</style>
<template>
	<div class="layout" style="min-width: 500px; overflow: auto;">
		<Layout>
			<div style="height: 64px;">
				<Header :style="{position: 'fixed', width: '100%' ,paddingRight:'0px'}">
					<Menu mode="horizontal" theme="dark" active-name="">
						<div class="layout-logo" style="line-height: 30px;">设计师后台</div>
						<div class="layout-nav">
							<MenuItem name="1">
							<router-link to="/shareuser">
								<Icon type="ios-navigate"></Icon>
								Item 1
							</router-link>
							</MenuItem>
							<MenuItem name="2">
							<Icon type="ios-keypad"></Icon>
							Item 2
							</MenuItem>

							<!-- 	<MenuItem name="4">
							<Icon type="ios-paper"></Icon>
							Item 4
							</MenuItem> -->

							<MenuItem name="3" style="margin-right: 0px; padding-right: 0px;">

							<Icon class="lay_mIcon" type="qr-scanner" size="16" v-show="iswindowBig==false" @click="windowBig"></Icon>

							<Icon class="lay_mIcon" type="arrow-shrink" size="16" v-show="iswindowBig==true" @click="windowSmall">></Icon>


							<Dropdown trigger="click">
								<a href="javascript:void(0)">
									bamboo
									<Icon type="arrow-down-b"></Icon>
								</a>
								<!-- <a href="javascript:void(0)">
									<Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />

								</a> -->
								<DropdownMenu slot="list">
									<DropdownItem>
										<router-link to="/shareuser">个人信息</router-link>
									</DropdownItem>
									<DropdownItem>退出登录</DropdownItem>

								</DropdownMenu>
							</Dropdown>



							</MenuItem>
						</div>




					</Menu>
				</Header>
			</div>
			<Layout>
				<Breadcrumb>
					<!-- <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem> -->
				</Breadcrumb>
				<Content :style="{padding: '0px  ',  background: '#fff' ,border:'0px' }">
					<Layout>
						<div style="width: 200px;" class="layMu_sider">
							<!-- borderRight:'2px solid  rgb(221, 222, 225)', -->
							<Sider hide-trigger :style="{position: 'fixed', zIndex:'2', height: '100vh', left: '0px', overflow: 'auto',background: '#fff',boxSizing: 'border-box'} ">
								<Menu active-name="" theme="light" width="auto" :open-names="[]">
									<Submenu name="1">
										<template slot="title">
											<Icon type="ios-navigate"></Icon>
											Item 1
										</template>
										<MenuItem name="1-1">
										<router-link to="/sharehome">Option 1</router-link>
										</MenuItem>
										<MenuItem name="1-2" @click="path('user')">
										<router-link to="/sharehome">Option 2</router-link>
										</MenuItem>
										<MenuItem name="1-3">
										<router-link to="/sharehome">Option 3</router-link>

										</MenuItem>
									</Submenu>
									<Submenu name="2">
										<template slot="title">
											<Icon type="ios-keypad"></Icon>
											Item 2
										</template>
										<MenuItem name="2-1">Option 1</MenuItem>
										<MenuItem name="2-2">Option 2</MenuItem>
									</Submenu>
									<Submenu name="3">
										<template slot="title">
											<Icon type="ios-analytics"></Icon>
											Item 3
										</template>
										<MenuItem name="3-1">Option 1</MenuItem>
										<MenuItem name="3-2">Option 2</MenuItem>
									</Submenu>
								</Menu>
							</Sider>
						</div>
						<Content :style="{padding: '0px 24px 24px 24px', margin:'16px 16px 57px 16px' ,  background: '#fff'}">
							<router-view></router-view>
						</Content>
					</Layout>
				</Content>
			</Layout>
			<Footer class="layout-footer-center" style="position: fixed; width: 100%; bottom: 0px; left: 0px; padding: 10px; background:#EEEEEE;z-index: 3;">old
				house new house @老屋新房</Footer>
		</Layout>
	</div>
	
</template>
<script>
	export default {


		data() {

			return {
				iswindowBig: false,
			}

		},



		components: {

		},

		methods: {




			uesrgo: function() {
				this.$router.push({
					name: 'user',

				})

			},

			windowBig: function() {
				this.iswindowBig = true

				var e = document.documentElement

				if (e.requestFullScreen) {
					e.requestFullScreen()
				} else if (e.webkitRequestFullScreen) {
					e.webkitRequestFullScreen()
				} else if (e.mozRequestFullScreen) {
					e.mozRequestFullScreen()
				} else if (e.msRequestFullscreen) {
					e.msRequestFullscreen()
				}
			},

			windowSmall: function() {
				this.iswindowBig = false
				var e = document

				if (e.exitFullscreen) {
					e.exitFullscreen()
				} else if (e.webkitCancelFullScreen) {
					e.webkitCancelFullScreen()
				} else if (e.mozCancelFullScreen) {
					e.mozCancelFullScreen()
				} else if (e.msExitFullscreen) {
					e.msExitFullscreen()
				}

			},
		},
		mounted: function() {
			var cfg = window.lwxfPreload;
	
console.log(cfg)
console.log(!cfg)
	
			if (!cfg) {

				this.$Spin.show({
					render: (h) => {
						return h('div', '抱歉，你当前未登录')
					}
				});

				return false

			} else if (cfg.nameType != 1) {

				this.$Spin.show({
					render: (h) => {
						return h('div', '抱歉，你没有权限访问')
					}
				});

				return false

			} else {
				this.$Spin.hide();
			}


		},

		created: function() {
			
		}

	}
	
	
	
</script>
