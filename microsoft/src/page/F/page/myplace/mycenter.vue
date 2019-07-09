<template>
	
	
	
	<div id="mycenter">
		
		<header class="mui-bar mui-bar-nav " data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">

			<a class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a>
			<h1 class="mui-title">个人信息</h1>
		</header>
		
	    <div style="margin-left: 0.5rem; margin-right: 0.5rem;" class="mui-content">
	   		   <div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0; margin-top: 0.5rem;">
	   			  <ul class="mui-table-view">
	   					<li class="mui-table-view-cell">
	   						<a class="mui-navigate-right">
	   							<div style="margin-bottom: 0.2rem; ">
									<img style="float: left; width: 0.8rem; height: 0.8rem; margin-top: 0.65rem; " src="../../assets/img/myplace/myplace_tx_s.png">
									<p style=" float: left;font-size: 0.8rem;color: black; margin-left: 0.5rem; line-height: 0.8rem; margin-top: 0.7rem; ">头像</p>
									<img style="float: right; margin-right: 1.5rem; width: 2.5rem; height: 2.5rem; border-radius: 50rem; " :src="dataimg">
									<input @click="updateimg" type="file" style="margin-left: 1rem;margin-top: 0.5rem; opacity:0;"></input>
									<div class="clearfix"></div>
	   							</div>
	   						</a>
	   					</li>
						<li class="mui-table-view-cell" @click="sexchanges(mycenter.sex)">
							<a class="mui-navigate-right">
								<div style="margin-bottom: 0.2rem; padding: 0.3rem 0;">
									<img style="float: left; width: 0.8rem; height: 0.8rem; margin-top: 0.4rem; " src="../../assets/img/myplace/myplace_xb.png">
									<p style=" float: left;font-size: 0.8rem;color: black; margin-left: 0.5rem; line-height: 0.8rem; margin-top: 0.3rem; ">性别</p>
									<p style=" float: right; margin-right: 1.5rem;font-size: 0.8rem; line-height: 1rem; margin-top: 0.3rem;">{{mycenter.sexValue}}</p>
									<div class="clearfix"></div>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell"  @click="birthday(mycenter.birthday)">
							<a class="mui-navigate-right">
								<div style="margin-bottom: 0.2rem;padding: 0.3rem 0;">
									<img style="float: left; width: 0.8rem; height: 0.8rem; margin-top: 0.4rem; " src="../../assets/img/myplace/myplace_nl.png">
									<p style=" float: left;font-size: 0.8rem;color: black; margin-left: 0.5rem; line-height: 0.8rem; margin-top: 0.3rem; ">生日</p>
									<p style=" float: right; margin-right: 1.5rem;font-size: 0.8rem; line-height: 1rem; margin-top: 0.3rem;">{{mycenter.birthday}}</p>
									<div class="clearfix"></div>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell">
							<a class="mui-navigate-right" @click="education(mycenter.education)">
								<div style="margin-bottom: 0.2rem; padding: 0.3rem 0;">
									<img style="float: left; width: 0.8rem; height: 0.8rem; margin-top: 0.4rem; " src="../../assets/img/myplace/myplace_xl.png">
									<p style=" float: left;font-size: 0.8rem;color: black; margin-left: 0.5rem; line-height: 0.8rem; margin-top: 0.3rem; ">学历</p>
									<p style=" float: right; margin-right: 1.5rem;font-size: 0.8rem; line-height: 1rem; margin-top: 0.3rem;">{{mycenter.educationValue}}</p>
									<div class="clearfix"></div>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell" @click="identiy(mycenter.identityNumber)">
							<a class="mui-navigate-right">
								<div style="margin-bottom: 0.2rem;padding: 0.3rem 0;">
									<img style="float: left; width: 0.8rem; height: 0.6rem; margin-top: 0.4rem; " src="../../assets/img/myplace/myplace_sfz.png">
									<p style=" float: left;font-size: 0.8rem;color: black; margin-left: 0.5rem; line-height: 0.8rem; margin-top: 0.3rem; ">身份证</p>
									<p style=" float: right; margin-right: 1.5rem;font-size: 0.8rem; line-height: 1rem; margin-top: 0.3rem;">{{mycenter.identityNumber}}</p>
									<div class="clearfix"></div>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell" @click="changemobile(mycenter.mobile)">
							<a class="mui-navigate-right">
								<div style="margin-bottom: 0.2rem; padding: 0.3rem 0;">
									<img style="float: left; width: 0.7rem; height: 1rem; margin-top: 0.25rem; margin-left: 0.2rem; " src="../../assets/img/myplace/myplace_sj.png">
									<p style=" float: left;font-size: 0.8rem;color: black; margin-left: 0.5rem; line-height: 0.8rem; margin-top: 0.3rem; ">手机</p>
									<p style=" float: right; margin-right: 1.5rem;font-size: 0.8rem; line-height: 1rem; margin-top: 0.3rem;">{{mycenter.mobile}}</p>
									<div class="clearfix"></div>
								</div>
							</a>
						</li>
	   				</ul>
	   		   </div>  
	   </div>
	   
	    <div style="padding:0 0.5rem; margin-top: 0.5rem;">
	   		   <div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0">
	   			  <ul class="mui-table-view">
	   						<li class="mui-table-view-cell">
	   							<a class="mui-navigate-right">
	   								<div style="margin-bottom: 0.2rem; padding:0 0 0.3rem 0;">
	   									<img style="float: left; width:0.8rem; height: 0.8rem; margin-top: 0.4rem; " src="../../assets/img/myplace/myplace_bm.png">
	   									<p style=" float: left;font-size: 0.8rem;color: black; margin-left: 0.5rem; line-height: 0.8rem; margin-top: 0.3rem; ">部门</p>
	   									<p v-for="item in mycenterdepts " style=" float: right; margin-right: 1.2rem;font-size: 0.7rem; line-height: 0.7rem; margin-top: 0.3rem;">{{item}}</p>
	   									<div class="clearfix"></div>
	   								</div>
	   							</a>
	   						</li>
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">
									<div style="margin-bottom: 0.2rem; padding: 0.3rem 0;">
										<img style="float: left; width: 0.6rem; height: 0.8rem; margin-top: 0.25rem; margin-left: 0.2rem; " src="../../assets/img/myplace/myplace_gw.png">
										<p style=" float: left;font-size: 0.8rem;color: black; margin-left: 0.5rem; line-height: 0.8rem; margin-top: 0.3rem; ">岗位</p>
										<p style=" float: right; margin-right: 1.5rem;font-size: 0.8rem; line-height: 1rem; margin-top: 0.3rem;">{{mycenter.roleName}}</p>
										<div class="clearfix"></div>
									</div>
								</a>
							</li>
	   						<li class="mui-table-view-cell">
	   							<a class="mui-navigate-right">
	   								<div style="margin-bottom: 0.2rem;padding: 0.3rem 0;">
	   									<img style="float: left; width: 0.8rem; height: 0.8rem; margin-top: 0.4rem; " src="../../assets/img/myplace/myplace_time.png">
	   									<p style=" float: left;font-size: 0.8rem;color: black; margin-left: 0.5rem; line-height: 0.8rem; margin-top: 0.3rem; ">入职时间</p>
	   									<p style=" float: right; margin-right: 1.5rem;font-size: 0.8rem; line-height: 1rem; margin-top: 0.3rem;">{{mycenter.created}}</p>
	   									<div class="clearfix"></div>
	   								</div>
	   							</a>
	   						</li>
	   						<li class="mui-table-view-cell">
	   							<a class="mui-navigate-right">
	   								<div style="margin-bottom: 0.2rem; padding: 0.3rem 0;">
	   									<img style="float: left; width: 0.8rem; height: 0.8rem; margin-top: 0.4rem; " src="../../assets/img/myplace/myplace_zt.png">
	   									<p style=" float: left;font-size: 0.8rem;color: black; margin-left: 0.5rem; line-height: 0.8rem; margin-top: 0.3rem; ">状态</p>
	   									<p style=" float: right; margin-right: 1.5rem;font-size: 0.8rem; line-height: 1rem; margin-top: 0.3rem;">{{mycenter.statusName}}</p>
	   									<div class="clearfix"></div>
	   								</div>
	   							</a>
	   						</li>
	   				</ul>
	   		   </div>  
	   </div>
			
	</div>
	
</template>

<script>
	
	export default {
		name: 'mycenter',

		data() {

			return {
                 mycenter:{},
				mycenterdepts:[],
				//上传图片
				accounts: {
					type: "",
					fund: "",
					funds: "",
					ways: "",
					secondfunds: "",
					thirdlyfunds: "",
					amount: "",
					operator: "",
					paymentDate: "",
					notes: "",
					files: [],
				
				},
				imgData: {
					accept: 'image/gif, image/jpeg, image/png, image/jpg',
				},
				dataimg: '',
				imgsId: '',
				
			}

		},

	
		methods: {
			  updateimg: function(e) {
			
				var that = this
			
				if (e.target.files.length == 0) {
			
					return false
				}
				var imgfiles = e.target.files
				var imgdata = e.target.files
				var formData = new FormData();
				for (var i = 0; i < imgdata.length; i++) {
					var imgsize = imgdata[i].size
					var imgstyle = imgdata[i].type
					if (this.imgData.accept.indexOf(imgstyle) == -1) {
			
						that.mui.toast("请选择正确的图片格式", {
							duration: 'long',
							type: 'div'
						})
			
						return false;
					} else if (imgsize > 5242880) {
			
						that.mui.toast("图片大小不能超过5M", {
							duration: 'long',
							type: 'div'
						})
			
						return false;
					} else {
			
						var datimg = imgdata[i]
						formData.append('multipartFile', datimg); // 多选文件数据
			
					}
			
				}
			
				var that = this
			
				that.axios({
					method: 'put',
			
					url: '/wxapi/f/branchs/users/updateavatar',
			
					data: formData
			
				}).then(function(res) {
					console.log(res)
					that.dataimg = res.data.data.avatar
					// that.imgsId = res.data.data.fileId
			
					console.log(that.imgsId)
			
				}).catch(function(err) {
					console.log(err)
			
					that.mui.toast("图片上传失败请稍后重试" + err, {
						duration: 'long',
						type: 'div'
					})
			
				})
			
			},
			birthday(birthday){
				this.$router.push({ name: 'Fbirthday', query: { birthday:birthday}})
			 },
			 education(education){
				this.$router.push({ name: 'Feducation', query: { education:education }})
			 },
			  sexchanges(sex){
				   this.$router.push({ name: 'Fsexchanges', query: { sex:sex }})
			   },
			   identiy(identityNumber){
				   this.$router.push({ name: 'Fchanges', query: { identityNumber:identityNumber }})
			   },
			   
			   changemobile(mobile){
//			   	 this.$router.push({ name: 'Frecount', query: { mobile:mobile }})
			   },
			 
				getmycenterdatas(){			
				   let that = this;
				   this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/wxapi/f/branchs/info'
				}).then(res => {
					   // mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
					  console.log(res)
			          
					   that.mycenter=res.data.data;
					   
					   that.mycenter.birthday=that.mycenter.birthday.substring(0,10)
					   that.mycenter.created=that.mycenter.created.substring(0,10)
					   
					   that.dataimg=res.data.data.avatar;
					   var data =res.data.data.depts;

				       for (var i=0;i<data.length;i++){
				         that.mycenterdepts.push(data[i].name);
				      } 
					//  
					//   var countdata=res.data.data.count;
					// 
					
			  
				 })
			},
			 
		},
		 computed : {
                    

				    },

		mounted: function() {
		          　  this.	getmycenterdatas()  

		}
		

	}
	
</script>

<style scoped="scoped">
	.mui-content{
		padding: 1.1rem 0 0 0;
	}
	 ul li {

            margin: 0;
            padding: 0;
            list-style: none;
        }
     
		.clearfix{
			clear: both;
		}
	
		.mui-table-view-cell.mui-active{
			background-color: #0062CC;
		}
		.mui-table-view-cell{
			padding: 0.5rem;
			margin-left: 0.5rem;
			margin-right: 0.5rem;
			border-bottom: 1px solid #e0e0e0;

		}
		.mui-table-view-cell:after{
			height: 0px;
		}
		.mui_ul_li li{
			width: 48%;
			margin-top: 0.3rem;
			color: #a4a4a4;
		}
		.mui-table-view:before{
			height: 0px;
		}
		.mui-table-view:after{
			height: 0px;
		}
		.mui-btn{
			position: relative;
		}
		.myplace_bg{
			padding: 0.5rem;
			position: relative;
		}
		.myplace_bg_b {
			width: 100%;
		} 
		.myplace_adress{
			position: absolute; 
			top: 1.5rem;
			right: 1rem;
			color: white;
			border-radius: 50rem;
			background-image: url(../../assets/img/myplace/address_bg.png);
			background-size: 100% 100%;
			padding: 0.2rem 0.5rem;
		}
		.myplace_message{
			position: absolute; 
			top: 4rem;
			left: 2rem;
		}
		
		
</style>