<template>
	<div id="afterdep">
		<div style="padding:0.5rem 0.5rem">
			<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
				<ul class="after_sale_title">
					<li style="width: 1rem; height: 1rem;"><img style="width: 100%;" src="../../assets/img/aftersale/as_as.png"></li>
					<li style="line-height: 1rem; text-align: center; font-size: 0.8rem;  font-weight: 600;">售后单信息</li>
					<div class="clearfix"></div>
				</ul>
				<ul class="after_sale_content">
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_type.png">
							<span style="font-weight: 600;">售后类型：</span>
						</div>
						<div style="width: 11rem; margin-right: 0; border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;">
							<span v-show="aftersaleApply.type==5">反馈单</span>
							<span v-show="aftersaleApply.type==4">补料单</span>
						</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_no.png">
							<span style="font-weight: 600;">编号：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;">{{aftersaleApply.no}}&nbsp</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_time.png">
							<span style="font-weight: 600;">创建时间：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;">{{aftersaleApply.created}}&nbsp</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_creat.png">
							<span style="font-weight: 600;">创建人：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;">{{aftersaleApply.creatorName}}&nbsp</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left; padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_desc.png">
							<span style="font-weight: 600;">问题描述：</span>
						</div>
						<div style="float: right; padding: 0.8rem 0.5rem; width:11rem; height:auto;  border-bottom: 1px solid #dcdee2; word-break: break-all; ">
							{{aftersaleApply.notes}}&nbsp
						</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left; padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_option.png">
							<span style="font-weight: 600;">处理意见：</span>
						</div>
						<div style="float: right; padding: 0.8rem 0.5rem; width:11rem; height:auto;  border-bottom: 1px solid #dcdee2; word-break: break-all; ">
							{{aftersaleApply.result}}&nbsp
						</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left; padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_option.png">
							<span style="font-weight: 600;">附件：</span>
						</div>
						<div style="float: right; padding: 0.8rem 0.5rem; width:11rem; height:auto;  word-break: break-all; ">
							<ul class="as_fj_tu">
								<li v-for="item in aftersaleApplyFilesList"><img style="width: 100%;" :src="item"></li>
								
							</ul>
						</div>
						<div class="clearfix"></div>
					</li>
				</ul>
			</div>
		</div>
	<!-- 	源订单信息 -->
		<div style="padding:0.5rem 0.5rem">
			<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
				<ul class="after_sale_title">
					<li style="width: 1rem; height: 1rem;"><img style="width: 100%;" src="../../assets/img/aftersale/as_y_me.png"></li>
					<li style="line-height: 1rem; text-align: center; font-size: 0.8rem;  font-weight: 600;">源订单信息</li>
					<div class="clearfix"></div>
				</ul>
				<ul class="after_sale_content">
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_y_jxs.png">
							<span style="font-weight: 600;">经销商：</span>
						</div>
						<div style="width: 11rem; margin-right: 0; border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;">小伙子</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.5rem;height: 0.7rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_y_tel.png">
							<span style="font-weight: 600;">电话：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; color: #bdaf89;">13254646446 <span><img style="width:0.6rem ;height: 0.9rem; margin-left: 0.2rem;" src="../../assets/img/aftersale/as_y_tels.png"></span></div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_y_cus.png">
							<span style="font-weight: 600;">客户：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;">含蓄花</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_y_jdy.png">
							<span style="font-weight: 600;">接单员：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;">韩 雪</div>
						<div class="clearfix"></div>
					</li>

				</ul>
			</div>
		</div>	
		
		<div style="padding:0.5rem 0.5rem">
			<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
				
				<ul class="after_sale_content">
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_no.png">
							<span style="font-weight: 600;">订单编号：</span>
						</div>
						<div style="width: 11rem; margin-right: 0; border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; color: #6699be; text-decoration:underline">J 163541654565</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_type.png">
							<span style="font-weight: 600;">订单类型：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;">正常</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_time.png">
							<span style="font-weight: 600;">创建时间：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;">2019-01-01</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_jq_time.png">
							<span style="font-weight: 600;">计划交期：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;">2019-01-01</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_sy_time.png">
							<span style="font-weight: 600;">剩余时间：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; ">23：31 <span><img style="width:1.93rem ;height: 0.83rem;  margin-left: 0.2rem; " src="../../assets/img/aftersale/as_ls_time.png"></span></div>
						<div class="clearfix"></div>
					</li>
					
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_sj_time.png">
							<span style="font-weight: 600;">实际交期：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;">--</div>
						<div class="clearfix"></div>
					</li>
		
				</ul>
			</div>
		</div>	
		
		
	</div>
</template>

<script>
	export default {
		name: 'afterdep',

		data() {

			return {
              aftersaleId:'',
			  aftersaleApply:{},
              aftersaleApplyFilesList:[],
			}

		},


		methods: {
		
            	getafterdep(){			
            	   let that = this;
            	   this.axios({
            		method: 'get',
            		headers: {
            			'X-Requested-With': 'XMLHttpRequest',
            			'ContentType': 'application/json;charset=UTF-8'
            		},
            		url: '/wxapi/f/aftersales/' + that.aftersaleId,
            	}).then(res => {
            	       console.log(res)
            	       that.aftersaleApply=res.data.data.aftersaleApply;
					   that.aftersaleApplyFilesList=res.data.data.aftersaleApply.aftersaleApplyFilesList;
            		   // console.log(that.customdes)
            		  //  that.customLists=[];
            	   //     for (var i=0;i<data.length;i++){
            			 //  
            	   //       that.customLists.push(data[i]);
            	   //    } 
            		  // console.log(that.customLists)
            	   
            	   
            	   
            	  
            	   
            	 })
            },

		},
		mounted: function() {
                 this.aftersaleId = this.$route.query.aftersaleId
                  this.getafterdep();
		}


	}
</script>


<style>
	ul li {

		margin: 0;
		padding: 0;
		list-style: none;
	}

	.clearfix {
		clear: both;
	}

	.after_sale_title li {
		float: left;
		margin-left: 0.5rem;
		margin-bottom: 0.5rem;
		
	}
	.after_sale_content li{
		width: 100%;
		
	}
	.as_fj_tu li{
		width: 4.5rem; height: 4.5rem;
		padding: 0.2rem;
		float: left;
	}
	..as_fj_tu li img{
		width: 100%;
	}
</style>
