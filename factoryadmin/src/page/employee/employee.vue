<template>
	<div style="padding-bottom:30px ;">
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/home">首页</BreadcrumbItem>
				<BreadcrumbItem>组织管理</BreadcrumbItem>
			</Breadcrumb>
		</div>
		<div class="employee_operation">
			<Row>

				<Col span="20" style="text-align: left;">
				<span class="touinfo">名称:</span>
				<Input v-model="searchvalue" placeholder="请输入员工的名称..." style="width: 12%" />
				<span class="touinfo">编号:</span>
				<Input v-model="searchvalueone" placeholder="请输入员工编号..." style="width: 12%" />
				<span class="touinfo">手机号:</span>
				<Input v-model="searchvaluetwo" placeholder="请输入员工的手机号..." style="width: 12%" />
				<span class="touinfo">状态:</span>
				<Select v-model="modelstatus" style="width:10%">
					<Option v-for="item in emstatus" :value="item.label" :key="item.label">{{ item.value }}</Option>
				</Select>
				<Button icon="ios-search" @click="searchemployeedata">搜索</Button>

				</Col>
				<Col span="4" style="text-align: right;">

				<Button type="primary" @click.native="addemployees" v-if="ifshow">新建部门员工</Button>
				<Button type="primary" @click.native="addemployee" v-if="ifshows">新建员工</Button>
				</Col>
			</Row>
		</div>
		<div class="employee_contain">
			<Row>
				<!-- 	折叠菜单 -->
				<Col span="4">
				<div>
					<template>
						<!-- @on-open-change="existdata"-->
						<Menu @on-select="existchilddata" height="auto" style="z-index: 0; width: 98%;" active-name="0" :accordion="true">
							<MenuItem name="0">全部员工</MenuItem>
							<MenuItem :name="index+1" v-for="(item,index) in nochild" :key='item.name'>{{item.name}}</MenuItem>
							<Submenu :name="childnum+index" v-for="(item,index) in existchild" :key='item.name'>
								<template slot="title">{{item.name}}</template>
								<MenuItem :name="childnum+index+'-'+indexs" v-for="(items,indexs) in item.childs" :key='items.name'>{{items.name}}</MenuItem>
							</Submenu>
						</Menu>
					</template>
				</div>
				</Col>
				<!-- 	折叠菜单 -->
				<Col span="20" style="padding-bottom: 10px; ">
				<Table :columns="columns1" :data="data1" border></Table>
				</Col>
			</Row>
			<div class="fenye" style="margin-top: 5px;">
				<Page :total="totalpage" :page-size="pageSize" show-total @on-change="changepage" :transfer='ifs' />
			</div>
		</div>
		<!-- 修改开始-->
		<Modal v-model="remodal" title="修改员工信息" width="800">

			<div class="emsg_center">
				<div class="emsg_Mu">
					<ul>
						<li @click="EmuIndex=0" :class="{ac:EmuIndex==0}">员工信息</li>
						<li @click="EmuIndex=1" :class="{ac:EmuIndex==1}">工作经历</li>
						<li @click="EmuIndex=2" :class="{ac:EmuIndex==2}">考核信息</li>
						<li @click="EmuIndex=3" :class="{ac:EmuIndex==3}">教育经历</li>
						<li @click="EmuIndex=4" :class="{ac:EmuIndex==4}">证书信息</li>
					</ul>
				</div>

				<div class="emsg_itemNav">
					<div v-show="EmuIndex==0">
						<Form :label-width="100">

							<!---->

							<FormItem label="员工编号">
								<Input disabled="disabled" v-model="emsg.employeeDeptDto.no" placeholder="请输入员工编号..."></Input>
							</FormItem>

							<FormItem label="员工姓名">
								<Input v-model="emsg.employeeDeptDto.userName" placeholder="请输入员工姓名..."></Input>
							</FormItem>

							<FormItem label="员工手机号">
								<Input disabled="disabled" v-model="emsg.employeeDeptDto.mobile" placeholder="请输入员工手机号..."></Input>
							</FormItem>

							<FormItem label="员工身份证">
								<Input v-model="emsg.userBasis.identityNumber" placeholder="请输入员工身份证..."></Input>
							</FormItem>
							
							<FormItem label="员工QQ号">
								<Input v-model="emsg.userBasis.qqNumber" placeholder="请输入员工QQ号..."></Input>
							</FormItem>
							
							<FormItem label="员工微信号">
								<Input v-model="emsg.userBasis.wechatNumber" placeholder="请输入员工微信号..."></Input>
							</FormItem>

							<FormItem label="员工性别">
								<RadioGroup v-model="emsg.employeeDeptDto.sex">
									<Radio label="0">男</Radio>
									<Radio label="1">女</Radio>
								</RadioGroup>
							</FormItem>

							<FormItem label="员工生日">
								<DatePicker type="date" @on-change="getuserbirthday" placeholder="请选择员工生日" :value="emsg.employeeDeptDto.birthday"></DatePicker>
							</FormItem>

							<FormItem label="员工住址">
								<Input v-model="emsg.userBasis.address" placeholder="请输入员工住址..."></Input>
							</FormItem>

							<FormItem label="员工邮箱">
								<Input v-model="emsg.employeeDeptDto.email" placeholder="请输入员工邮箱..."></Input>
							</FormItem>

							<FormItem label="员工学历">
								<Select style="width: 300px;" v-model="emsg.userBasis.education" placeholder="请选择员工学历...">
									<Option value="0">硕士</Option>
									<Option value="1">本科</Option>
									<Option value="2">大专</Option>
									<Option value="3">高中</Option>
									<Option value="4">中专</Option>
									<Option value="5">初中</Option>

								</Select>

							</FormItem>
							
							
							<FormItem label="政治面貌">
								<Select  style="width: 300px;" v-model="emsg.userBasis.politicalOutlook" placeholder="请选择政治面貌...">
									<Option value="0">中共党员</Option>
									<Option value="1">共青团员</Option>
									<Option value="2">群众</Option>								

								</Select>

							</FormItem>
																					

							<FormItem label="员工职位">
								<Input v-model="emsg.userBasis.work" placeholder="请输入员工职位..."></Input>
							</FormItem>

							<FormItem label="工作单位">
								<Input v-model="emsg.userBasis.workUnit" placeholder="请输入员工工作单位..."></Input>
							</FormItem>
							
							<FormItem label="员工收入">
							
								<Select  style="width: 300px;" v-model="emsg.userBasis.income" placeholder="请选择员工收入范围...">
									<Option value="0">2000~4000</Option>
									<Option value="1">4000~6000</Option>
									<Option value="2">6000~8000</Option>								
                                    <Option value="3">8000~10000</Option>		
								</Select>
							</FormItem>
							
							<FormItem label="员工民族">
								<Input v-model="emsg.userBasis.nation " placeholder="请输入员工所属民族..."></Input>
							</FormItem>

							<FormItem label="员工角色">
								<Select v-model="emsg.employeeDeptDto.roleId" placeholder="请选择员工角色...">
									<Option v-for="item in allrole" :value="item.id" :key="item.id">{{ item.name }}</Option>
								</Select>
							</FormItem>
							
							

							<FormItem label="员工部门">

								<Select v-model="emsg.employeeDeptDto.deptList" multiple placeholder="请选择员工部门...">
									<Option v-for="item in deptdata" :value="item.id" :key="item.id">{{ item.name }}</Option>
								</Select>
							</FormItem>

							<FormItem label="员工账号状态">
								<RadioGroup v-model="emsg.employeeDeptDto.status">
									<Radio label="0">正常</Radio>
									<Radio label="1">禁用</Radio>
									<!--<Radio label="2">离职</Radio>-->
								</RadioGroup>
							</FormItem>
							<!---->

							<FormItem label="员工工号">
								<Input v-model="emsg.employeeInfo.no" placeholder="请输入员工工号..."></Input>
							</FormItem>

							<FormItem label="毕业院校">
								<Input v-model="emsg.employeeInfo.universityGraduated" placeholder="请输入员工毕业院校..."></Input>
							</FormItem>

							<FormItem label="毕业时间">
								<DatePicker type="date" @on-change="getusergraduationTime" placeholder="请选择毕业时间" :value="emsg.employeeInfo.graduationTime"></DatePicker>
							</FormItem>

							<FormItem label="身体状况">
								<Input v-model="emsg.employeeInfo.physicalCondition " placeholder="请输入员身体状况..."></Input>
							</FormItem>

							<FormItem label="员工职级">
								<RadioGroup v-model="emsg.employeeInfo.rank">
									<Radio label="1">一级</Radio>
									<Radio label="2">二级</Radio>
									<Radio label="3">三级</Radio>
								</RadioGroup>
							</FormItem>

							<FormItem label="员工来源">
								<RadioGroup v-model="emsg.employeeInfo.source">
									<Radio label="0">社会招聘</Radio>
									<Radio label="1">员工推荐</Radio>
									<Radio label="2">中介机构</Radio>
									<Radio label="3">其它</Radio>
								</RadioGroup>
							</FormItem>

							<FormItem label="在职状态">
								<RadioGroup v-model="emsg.employeeInfo.status">
									<Radio label="0">正常</Radio>
									<Radio label="1">即将离职</Radio>
									<Radio label="2">劝退</Radio>
									<Radio label="3">辞退</Radio>
									<Radio label="4">离职</Radio>
								</RadioGroup>
							</FormItem>

							<FormItem label="入职时间">
								<DatePicker type="date" @on-change="getuserentryTime" placeholder="请选择入职时间" :value="emsg.employeeInfo.entryTime"></DatePicker>
							</FormItem>

							<FormItem label="转正时间">
								<DatePicker type="date" @on-change="getusercorrectionTime" placeholder="请选择转正时间" :value="emsg.employeeInfo.correctionTime"></DatePicker>
							</FormItem>

							<FormItem label="离职时间">
								<DatePicker type="date" @on-change="getuserdepartureTime" placeholder="请选择离职时间" :value="emsg.employeeInfo.departureTime"></DatePicker>
							</FormItem>

							<FormItem label="是否住宿">
								<RadioGroup true-value v-model="emsg.employeeInfo.accommodation">
									<Radio label="true">不住宿</Radio>
									<Radio label="false">住宿</Radio>
								</RadioGroup>
							</FormItem>

							<FormItem label="是否缴纳社保 ">
								<RadioGroup true-value v-model="emsg.employeeInfo.paySocialSecurity">
									<Radio label="true">是</Radio>
									<Radio label="false">否</Radio>
								</RadioGroup>
							</FormItem>

							<FormItem label="是否已婚">
								<RadioGroup true-value v-model="emsg.employeeInfo.marry">
									<Radio label="true">未婚</Radio>
									<Radio label="false">已婚</Radio>
								</RadioGroup>
							</FormItem>

							<FormItem label="是否驾车">
								<RadioGroup true-value v-model="emsg.employeeInfo.drive">
									<Radio label="true">不驾车</Radio>
									<Radio label="false">驾车</Radio>
								</RadioGroup>
							</FormItem>

							<FormItem label="车牌号" v-show="emsg.employeeInfo.drive==1">
								<Input v-model="emsg.employeeInfo.licensePlateNum" placeholder="请输入员工车牌号..."></Input>
							</FormItem>

							<FormItem label="是否领取工装">
								<RadioGroup true-value v-model="emsg.employeeInfo.receiveWorkClothes">
									<Radio label="true">未领取</Radio>
									<Radio label="false">已领取</Radio>
								</RadioGroup>
							</FormItem>

							<FormItem label="工装领取时间" v-show="emsg.employeeInfo.receiveWorkClothes==1">
								<DatePicker type="date" placeholder="请选择工装领取时间" :value="emsg.employeeInfo.receiveWorkClothesTime"></DatePicker>
							</FormItem>

							<FormItem label="工资信息">
								<Input type="textarea" v-model="emsg.employeeInfo.wageInformation" placeholder="请输入员工工资信息..."></Input>
							</FormItem>

							<FormItem label="员工工资">
								<Input v-model="emsg.employeeInfo.wages" placeholder="请输入员工工资..."></Input>
							</FormItem>

							<FormItem label="自我评价">
								<Input type="textarea" v-model="emsg.employeeInfo.selfEvaluation" placeholder="请输入自我评价..."></Input>
							</FormItem>

							<FormItem label="领导意见">
								<Input type="textarea" style="font-size: 12px;" v-model="emsg.employeeInfo.leadershipComments" placeholder="请输入领导意见..."></Input>
							</FormItem>

							<FormItem label="人事评价">
								<Input type="textarea" v-model="emsg.employeeInfo.personnelEvaluation " placeholder="请输入人事评价..."></Input>
							</FormItem>

							<FormItem label="主管评价">
								<Input type="textarea" v-model="emsg.employeeInfo.supervisorEvaluation" placeholder="请输入主管评价..."></Input>
							</FormItem>

							<FormItem label="">
								<Button type="primary" @click="sureputemsg">确认</Button>
							</FormItem>

						</Form>
					</div>

					<div v-show="EmuIndex==1">
						<div class="operation_box">
							<div class="active">
								<div class="ui_operateRight">
									<Button type="primary" @click="newExperience">新增工作经历</Button>
								</div>
							</div>

						</div>
						<Table border height="455" :columns="employeeExhead" :data="emsg.employeeExperienceList" ref="table"></Table>

					</div>

					<div v-show="EmuIndex==2">
						<div class="operation_box">
							<div class="active">
								<div class="ui_operateRight">
									<Button type="primary" @click="newAssessment">新增考核信息</Button>
								</div>
							</div>

						</div>
						<Table border height="455" :columns="employeeAssessmentHead" :data="emsg.employeeAssessmentList" ref="table"></Table>

					</div>

					<div v-show="EmuIndex==3">
						<div class="operation_box">
							<div class="active">
								<div class="ui_operateRight">
									<Button type="primary" @click="newEducation">新增教育信息</Button>
								</div>
							</div>

						</div>
						<Table border height="455" :columns="employeeEducationHead" :data="emsg.employeeEducationExperienceList" ref="table"></Table>

					</div>

					<div v-show="EmuIndex==4">
						<div class="operation_box">
							<div class="active">

								<div class="ui_operateRight">
									<Button type="primary" @click="newCertificate">新增证书信息</Button>
								</div>
							</div>

						</div>
						<Table border height="455" :columns="employeeCertificateHead" :data="emsg.employeeCertificateList" ref="table"></Table>

					</div>

				</div>
			</div>

			<div slot="footer"></div>

		</Modal>

		<!--新增工作经历-->

		<Drawer v-model="employeeExModel" title="新增员工工作经历" width="500" @on-close="employeeExModel = false,remodal=true">

			<Form :label-width="100">
				<FormItem label="公司名称">
					<Input v-model="employeeExperienceList.companyName" placeholder="请输入员工曾任职的公司名称..."></Input>
				</FormItem>

				<FormItem label="公司职位">
					<Input v-model="employeeExperienceList.position" placeholder="请输入员工曾任职的公司职位..."></Input>
				</FormItem>

				<FormItem label="公司职责">
					<Input v-model="employeeExperienceList.duty" placeholder="请输入员工曾任职的公司职责..."></Input>
				</FormItem>

				<FormItem label="主要成就 ">
					<Input v-model="employeeExperienceList.achievement" placeholder="请输入员工曾任职的公司主要成就 ..."></Input>
				</FormItem>

				<FormItem label="开始时间 ">
					<DatePicker type="date" @on-change="getExperienceListstartTime" placeholder="请选择开始时间" :value="employeeExperienceList.startTime"></DatePicker>
				</FormItem>

				<FormItem label="结束时间 ">
					<DatePicker type="date" @on-change="getExperienceListendTime" placeholder="请选择结束时间" :value="employeeExperienceList.endTime"></DatePicker>
				</FormItem>

				<FormItem label="证明人">
					<Input v-model="employeeExperienceList.prove" placeholder="请输入员工曾任职的公司职责..."></Input>
				</FormItem>

				<FormItem label="证明人电话 ">
					<Input v-model="employeeExperienceList.proveTel" placeholder="请输入员工曾任职的公司主要成就 ..."></Input>
				</FormItem>

			</Form>
			<div class="demo-drawer-footer">
				<Button type="primary" @click="sureaddExperience">确认添加</Button>
			</div>
		</Drawer>

		<!--新增工作经历-end-->

		<!--修改员工工作经历-s-->

		<Drawer v-model="setemployeeExModel" title="编辑员工工作经历" width="500" @on-close="setemployeeExModel = false,remodal=true">

			<Form :label-width="100">
				<FormItem label="公司名称">
					<Input v-model="employeeExperienceList.companyName" placeholder="请输入员工曾任职的公司名称..."></Input>
				</FormItem>

				<FormItem label="公司职位">
					<Input v-model="employeeExperienceList.position" placeholder="请输入员工曾任职的公司职责..."></Input>
				</FormItem>

				<FormItem label="公司职责">
					<Input v-model="employeeExperienceList.duty" placeholder="请输入员工曾任职的公司职责..."></Input>
				</FormItem>

				<FormItem label="主要成就 ">
					<Input v-model="employeeExperienceList.achievement" placeholder="请输入员工曾任职的公司主要成就 ..."></Input>
				</FormItem>

				<FormItem label="开始时间 ">
					<DatePicker type="date" @on-change="getExperienceListstartTime" placeholder="请选择开始时间" :value="employeeExperienceList.startTime"></DatePicker>
				</FormItem>

				<FormItem label="结束时间 ">
					<DatePicker type="date" @on-change="getExperienceListendTime" placeholder="请选择结束时间" :value="employeeExperienceList.endTime"></DatePicker>
				</FormItem>

				<FormItem label="证明人">
					<Input v-model="employeeExperienceList.prove" placeholder="请输入员工曾任职的公司职责..."></Input>
				</FormItem>

				<FormItem label="证明人电话 ">
					<Input v-model="employeeExperienceList.proveTel" placeholder="请输入员工曾任职的公司主要成就 ..."></Input>
				</FormItem>

			</Form>
			<div class="demo-drawer-footer">
				<Button type="primary" @click="sureputExperience">确认修改</Button>
			</div>
		</Drawer>

		<!--修改员工工作经历-end-->

		<!--删除员工工作经历-->

		<Modal v-model="pdel" width="360">
			<p slot="header" style="color:#f60;text-align:center">
				<Icon type="ios-information-circle"></Icon>
				<span>删除提示</span>
			</p>
			<div style="text-align:center">
				<p>您正在执行删除员工工作经历操作</p>
				<p>是否继续执行？</p>
			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="delTabData">删除</Button>
			</div>
		</Modal>

		<!--删除员工工作经历-->

		<!--新增考核信息-s-->

		<Drawer v-model="employeeAssessmentModel" title="新增员工考核信息" width="500" @on-close="employeeAssessmentModel = false,remodal=true">

			<Form :label-width="100">
				<FormItem label="考核人">
					<Input v-model="employeeAssessment.assessor" placeholder="请输入考核人姓名..."></Input>
				</FormItem>

				<FormItem label="员工部门">
					<Select v-model="employeeAssessment.deptId" placeholder="请选择员工部门...">
						<Option v-for="item in deptdata" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>
				</FormItem>

				<FormItem label="开始时间 ">
					<DatePicker type="date" @on-change="getemployeeAssessmentstartTime" placeholder="请选择开始时间" :value="employeeAssessment.startTime"></DatePicker>
				</FormItem>

				<FormItem label="结束时间 ">
					<DatePicker type="date" @on-change="getemployeeAssessmentendTime" placeholder="请选择结束时间" :value="employeeAssessment.endTime"></DatePicker>
				</FormItem>

				<FormItem label="考核评价">
					<Input type="textarea" v-model="employeeAssessment.evaluate " placeholder="请输入考核评价..."></Input>
				</FormItem>

				<FormItem label="自我评价">
					<Input type="textarea" v-model="employeeAssessment.selfEvaluation" placeholder="请输入自我评价 ..."></Input>
				</FormItem>

			</Form>
			<div class="demo-drawer-footer">
				<Button type="primary" @click="sureaddAssessment">确认添加</Button>
			</div>
		</Drawer>
		<!--新增考核信息-end-->

		<!--修改考核信息-s-->

		<Drawer v-model="setemployeeAssessmentModel" title="修改员工考核信息" width="500" @on-close="setemployeeAssessmentModel = false,remodal=true">

			<Form :label-width="100">
				<FormItem label="考核人">
					<Input v-model="employeeAssessment.assessor" placeholder="请输入考核人姓名..."></Input>
				</FormItem>

				<FormItem label="员工部门">
					<Select v-model="employeeAssessment.deptId" placeholder="请选择员工部门...">
						<Option v-for="item in deptdata" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>
				</FormItem>

				<FormItem label="开始时间 ">
					<DatePicker type="date" @on-change="getemployeeAssessmentstartTime" placeholder="请选择开始时间" :value="employeeAssessment.startTime"></DatePicker>
				</FormItem>

				<FormItem label="结束时间 ">
					<DatePicker type="date" @on-change="getemployeeAssessmentendTime" placeholder="请选择结束时间" :value="employeeAssessment.endTime"></DatePicker>
				</FormItem>

				<FormItem label="考核评价">
					<Input type="textarea" v-model="employeeAssessment.evaluate " placeholder="请输入考核评价..."></Input>
				</FormItem>

				<FormItem label="自我评价">
					<Input type="textarea" v-model="employeeAssessment.selfEvaluation" placeholder="请输入自我评价 ..."></Input>
				</FormItem>

			</Form>
			<div class="demo-drawer-footer">
				<Button type="primary" @click="sureputAssessment">确认修改</Button>
			</div>
		</Drawer>
		<!--修改考核信息-end-->

		<!--删除员工考核-->

		<Modal v-model="pdelAssessment" width="360">
			<p slot="header" style="color:#f60;text-align:center">
				<Icon type="ios-information-circle"></Icon>
				<span>删除提示</span>
			</p>
			<div style="text-align:center">
				<p>您正在执行删除员工考核信息操作</p>
				<p>是否继续执行？</p>
			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="delAssessment">删除</Button>
			</div>
		</Modal>

		<!--删除员工考核-->

		<!--新增员工教育信息-s-->

		<Drawer v-model="employeeEducationModel" title="新增员工教育信息" width="500" @on-close="employeeEducationModel = false,remodal=true">

			<Form :label-width="100">
				<FormItem label="学习单位">
					<Input v-model="employeeEducation.name" placeholder="请输入学习单位..."></Input>
				</FormItem>

				<FormItem label="所学专业">
					<Input v-model="employeeEducation.major" placeholder="请选择员工专业..."></Input>
				</FormItem>
				、
				<FormItem label="所学课程">
					<Input v-model="employeeEducation.curriculum" placeholder="请输入所学课程..."></Input>
				</FormItem>

				<FormItem label="教育级别">
					<RadioGroup true-value v-model="employeeEducation.level">
						<Radio label="0">小学/初中</Radio>
						<Radio label="1">高中</Radio>
						<Radio label="2">大学</Radio>
						<Radio label="3">成教</Radio>
						<Radio label="4">培训机构</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="开始时间 ">
					<DatePicker type="date" @on-change="getemployeeEducationstartTime" placeholder="请选择开始时间" :value="employeeEducation.startTime"></DatePicker>
				</FormItem>

				<FormItem label="结束时间 ">
					<DatePicker type="date" @on-change="getemployeeEducationendTime" placeholder="请选择结束时间" :value="employeeEducation.endTime"></DatePicker>
				</FormItem>

				<FormItem label="所获荣誉">
					<Input v-model="employeeEducation.achievement " placeholder="请输入员工所获荣誉 ..."></Input>
				</FormItem>

			</Form>
			<div class="demo-drawer-footer">
				<Button type="primary" @click="sureaddEducation">确认添加</Button>
			</div>
		</Drawer>
		<!--新增员工教育信息-end-->

		<!--修改员工教育信息-s-->

		<Drawer v-model="setemployeeEducationModel" title="修改员工教育信息" width="500" @on-close="setemployeeEducationModel = false,remodal=true">

			<Form :label-width="100">
				<FormItem label="学习单位">
					<Input v-model="employeeEducation.name" placeholder="请输入学习单位..."></Input>
				</FormItem>

				<FormItem label="所学专业">
					<Input v-model="employeeEducation.major" placeholder="请选择员工专业..."></Input>
				</FormItem>
				、
				<FormItem label="所学课程">
					<Input v-model="employeeEducation.curriculum" placeholder="请输入所学课程..."></Input>
				</FormItem>

				<FormItem label="教育级别">
					<RadioGroup true-value v-model="employeeEducation.level">
						<Radio label="0">小学/初中</Radio>
						<Radio label="1">高中</Radio>
						<Radio label="2">大学</Radio>
						<Radio label="3">成教</Radio>
						<Radio label="4">培训机构</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="开始时间 ">
					<DatePicker type="date" @on-change="getemployeeEducationstartTime" placeholder="请选择开始时间" clearable :value="employeeEducation.startTime"></DatePicker>
				</FormItem>

				<FormItem label="结束时间 ">
					<DatePicker type="date" @on-change="getemployeeEducationendTime" placeholder="请选择结束时间" clearable :value="employeeEducation.endTime"></DatePicker>
				</FormItem>

				<FormItem label="所获荣誉">
					<Input v-model="employeeEducation.achievement " placeholder="请输入员工所获荣誉 ..."></Input>
				</FormItem>

			</Form>
			<div class="demo-drawer-footer">
				<Button type="primary" @click="sureputEducation">确认修改</Button>
			</div>
		</Drawer>
		<!--修改员工教育信息-end-->

		<!--删除员工教育信息-->

		<Modal v-model="pdelEducation" width="360">
			<p slot="header" style="color:#f60;text-align:center">
				<Icon type="ios-information-circle"></Icon>
				<span>删除提示</span>
			</p>
			<div style="text-align:center">
				<p>您正在执行删除员工教育经历数据操作</p>
				<p>是否继续执行？</p>
			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="delEducation">删除</Button>
			</div>
		</Modal>

		<!--删除员工教育信息-->

		<!--新增员工证书信息-s-->

		<Drawer v-model="employeeCertificateModel" title="新增员工证书信息" width="500" @on-close="employeeCertificateModel = false,remodal=true">

			<Form :label-width="100">
				<FormItem label="证书名称">
					<Input v-model="employeeCertificate.name" placeholder="请输入证书名称..."></Input>
				</FormItem>

				<FormItem label="发证单位">
					<Input v-model="employeeCertificate.company" placeholder="请输入发证单位..."></Input>
				</FormItem>

				<FormItem label="证书级别">
					<RadioGroup true-value v-model="employeeCertificate.level">
						<Radio label="0">一级</Radio>
						<Radio label="1">二级</Radio>
						<Radio label="2">三级</Radio>
						<Radio label="3">特级</Radio>

					</RadioGroup>
				</FormItem>

				<!--<FormItem label="证书附件">
					<div class="demo-upload-list" v-for="(item,index) in employeeCertificate.file">

						<img :src="item.path">
						<div class="demo-upload-list-cover">
							<Icon type="ios-eye-outline" @click.native="handleView(item.path)"></Icon>
							<Icon  type="ios-trash-outline" @click.native="handleRemove(item.path)"></Icon>
						</div>

					</div>

					<Upload  multiple ref="upload" :show-upload-list="false"  :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="5120" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" multiple type="drag" :action="uploadpathdata" name="multipartFile" style="display: inline-block;width:58px;">
						<div style="width: 58px;height:58px;line-height: 58px;">
							<Icon type="ios-camera" size="20"></Icon>
						</div>
					</Upload>
				</FormItem>-->

				<FormItem label="获取时间 ">
					<DatePicker type="date" @on-change="getemployeeCertificateawardTime" placeholder="请选择获取时间" :value="employeeCertificate.awardTime"></DatePicker>
				</FormItem>
			</Form>
			<div class="demo-drawer-footer">
				<Button type="primary" @click="sureaddCertificate">确认添加</Button>
			</div>
		</Drawer>
		<!--新增员工证书信息-end-->

		<!--修改员工证书信息-s-->

		<Drawer v-model="setemployeeCertificateModel" title="修改员工证书信息" width="500" @on-close="setemployeeCertificateModel = false,remodal=true">

			<Form :label-width="100">
				<FormItem label="证书名称">
					<Input v-model="employeeCertificate.name" placeholder="请输入证书名称..."></Input>
				</FormItem>

				<FormItem label="发证单位">
					<Input v-model="employeeCertificate.company" placeholder="请输入发证单位..."></Input>
				</FormItem>

				<FormItem label="证书级别">
					<RadioGroup true-value v-model="employeeCertificate.level">
						<Radio label="0">一级</Radio>
						<Radio label="1">二级</Radio>、
						<Radio label="2">三级</Radio>
						<Radio label="3">特级</Radio>

					</RadioGroup>
				</FormItem>

				<FormItem label="获取时间 ">
					<DatePicker type="date" @on-change="getemployeeCertificateawardTime" placeholder="请选择获取时间" :value="employeeCertificate.awardTime"></DatePicker>
				</FormItem>

				<FormItem label="证书附件">
					<div class="demo-upload-list" v-for="(item,index) in employeeCertificate.file">

						<img :src="item.path">
						<div class="demo-upload-list-cover">
							<Icon type="ios-eye-outline" @click.native="handleView(item.path)"></Icon>
							<Icon type="ios-trash-outline" @click.native="handleRemove(item.id,index)"></Icon>
						</div>

					</div>

					<Upload multiple ref="upload" :show-upload-list="false" :data="uparry" :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="5120" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" multiple type="drag" :action="uploadpathdata" name="multipartFiles" style="display: inline-block;width:58px;">
						<div style="width: 58px;height:58px;line-height: 58px;">
							<Icon type="ios-camera" size="20"></Icon>
						</div>
					</Upload>
				</FormItem>

			</Form>
			<div class="demo-drawer-footer">
				<Button type="primary" @click="sureputCertificate">确认修改</Button>
			</div>
		</Drawer>
		<!--修改员工证书信息-end-->

		<!--删除员工教育信息-->

		<Modal v-model="pdelCertificate" width="360">
			<p slot="header" style="color:#f60;text-align:center">
				<Icon type="ios-information-circle"></Icon>
				<span>删除提示</span>
			</p>
			<div style="text-align:center">
				<p>您正在执行删除员工教育经历数据操作</p>
				<p>是否继续执行？</p>
			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="delCertificate">删除</Button>
			</div>
		</Modal>

		<!--删除员工教育信息-->

		<!--新增员工信息-->
		<Drawer v-model="modaladd" title="新增员工信息" width="500">
			<Form :label-width="60">
				<FormItem label="名称">
					<Input v-model="addname" placeholder="请输入员工的名称..."></Input>
				</FormItem>
				<FormItem label="编号">
					<Input v-model="addcode" placeholder="请输入员工的编号..."></Input>
				</FormItem>
				<FormItem label="电话">
					<Input v-model="addtel" placeholder="请输入员工的电话..."></Input>
				</FormItem>
				<FormItem label="角色">
					<Select v-model="rolevalue">
						<Option v-for="item in allrole" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>
				</FormItem>
			</Form>
			<div class="demo-drawer-footer">
				<Button type="primary" @click="SetdealerIsOk">确认添加</Button>
			</div>
		</Drawer>
		<!--新增员工信息结束-->
		<!--新增部门员工信息-->
		<Drawer v-model="modaladds" title="新增部门下员工信息" width="500">
			<Form :label-width="60">
				<FormItem label="名称">
					<Input v-model="addnames" placeholder="请输入员工的名称..."></Input>
				</FormItem>
				<FormItem label="编号">
					<Input v-model="addcodes" placeholder="请输入员工的姓名..."></Input>
				</FormItem>
				<FormItem label="电话">
					<Input v-model="addtels" placeholder="请输入员工的电话..."></Input>
				</FormItem>
				<FormItem label="角色">
					<Select v-model="rolevalues">
						<Option v-for="item in allrole" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>
				</FormItem>
			</Form>
			<div class="demo-drawer-footer">
				<Button type="primary" @click="SetdealerIsOks">确认添加</Button>
			</div>
		</Drawer>
		<!--新增部门员工信息结束-->
		<Modal v-model="peledel" width="360">
			<p slot="header" style="color:red;text-align:center;">
				<Icon type="md-alert"></Icon>
				<span>移除员工信息</span>
			</p>
			<div style="text-align:center">
				<p>您正在执行移除员工操作</p>
				<p>确定要移除吗?</p>
			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="deleteemployee()">移除</Button>
			</div>
		</Modal>
		
		<Modal title="查看大图" v-model="visible">
			<div class="show_img">
				<img :src="imgName" style="width: 100%">
			</div>

			<div slot="footer" style="border: none;"></div>

		</Modal>
		
	</div>
</template>

<script>
	import goodurl from '@/assets/js/goodurl.js'
	export default {
		data() {
			return {
                current:1,
				EmuIndex: 0,
				modelstatus: '',
				emstatus: [{
						value: '全部',
						label: '-1'
					},
					{
						value: '正常',
						label: '0'
					},
					{
						value: '禁用',
						label: '1'
					},
					{
						value: '离职',
						label: '2'
					}
				],
				searchvaluetwo: '',
				searchvalueone: '',
				ifs: false,
				totalpage: 0,
				pageSize: 20,
				btnifshow: '',
				rerolevalue: '',
				rolevalues: '',
				rolevalue: '',
				allrole: [],
				reid: '',
				ifdeftment: false,
				resex: '0',
				rebriday: '',
				reemail: '',
				alldeftment: [],
				deftment: [],
				restatus: '0',
				modaladds: false,
				ifshow: true,
				ifshows: true,
				addcode: '',
				addcodes: '',
				childnum: '',
				departmentvalue: '',
				addtel: '',
				addtels: '',
				email: '',
				addname: '',
				addnames: '',
				modaladd: false,
				updata: '',
				searchvalue: '',
				address: '',
				remodal: false,

				rename: '',
				retel: '',
				recode: '',
				resex: '',

				rebrithday: '',
				address: '',
				repairdept: '',
				secondlevel: [],
				departmentList: [],
				deptdata: [],
				newdeptdata: [],
				existchild: [],
				nochild: [],

				departmentvalues: '',
				created: '',
				email: '',
				birthday: '',
				columns1: [{
						title: '昵称',
						key: 'userName',
						align: 'center',
						fixed: 'left',
						width: 150,
					},
					{
						title: '角色',
						key: 'roleName',
						align: 'center',
						ellipsis: true,
					},
					{
						title: '编号',
						key: 'no',
						align: 'center',
						ellipsis: true,
					},
					{
						title: '电话',
						key: 'mobile',
						align: 'center',
						ellipsis: true,
					},

					{
						title: '性别',
						key: 'sex',
						align: 'center',
						render: (h, params) => {
							const row = params.row;
							var color
							var text
							if(row.sex == 0) {
								color = 'blue';
								text = '男'
							} else if(row.sex == 1) {
								color = 'red';
								text = '女'

							}
							return h('Tag', {
								props: {
									type: 'border',
									color: color
								}
							}, text);
						}
					},

					{
						title: '生日',
						key: 'birthday',
						align: 'center',
						ellipsis: true,
						render: (h, params) => {
							return('div', [
								h('span', {
									attrs: {
										title: this.birthday
									},
									on: {
										mouseenter: () => {
											//实现点击用户姓名然后显示其电话号码等功能，原来是通过动态路由，现在直接写在model里面
											let currenIndex = params.index;
											var obj = this.data1[currenIndex];
											let mouseId = obj.birthday;
											this.birthday = mouseId;
										}
									}
								}, params.row.birthday)

							])
						}
					},

					{
						title: '邮箱',
						key: 'email',
						align: 'center',
						ellipsis: true,
						render: (h, params) => {
							return('div', [
								h('span', {
									attrs: {
										title: this.email
									},
									on: {
										mouseenter: () => {
											//实现点击用户姓名然后显示其电话号码等功能，原来是通过动态路由，现在直接写在model里面
											let currenIndex = params.index;
											var obj = this.data1[currenIndex];
											let mouseId = obj.email;
											this.email = mouseId;
										}
									}
								}, params.row.email)

							])
						}
					},

					{
						title: '状态',
						key: 'status',
						align: 'center',
						render: (h, params) => {
							const row = params.row;
							var color
							var text
							if(row.status == 0) {
								color = 'green';
								text = '正常'
							} else if(row.status == 1) {
								color = 'red';
								text = '禁用'

							} else if(row.status == 2) {
								color = 'blue';
								text = '离职'
							}
							return h('Tag', {
								props: {
									type: 'border',
									color: color
								}
							}, text);
						}
					},

					{
						title: '创建时间',
						key: 'created',
						align: 'center',
						ellipsis: true,
						render: (h, params) => {
							return('div', [
								h('span', {
									attrs: {
										title: this.created
									},
									on: {
										mouseenter: () => {
											//实现点击用户姓名然后显示其电话号码等功能，原来是通过动态路由，现在直接写在model里面
											let currenIndex = params.index;
											var obj = this.data1[currenIndex];
											let mouseId = obj.created;
											this.created = mouseId;
										}
									}
								}, params.row.created)

							])
						}
					},
					{
						title: '操作',
						align: 'center',
						fixed: 'right',
						width: 150,

						render: (h, params) => {

							if(this.start == false) {
								return h('div', [
									h('Button', {
										props: {
											type: 'primary',
											size: 'small'
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {
												this.repairemployee(params.index)
											}
										}
									}, '编辑'),

									//								h('Poptip', {
									//									props: {
									//										confirm: true,
									//										title: '您确定要删除这条数据吗?',
									//										transfer: true
									//									},
									//									style: {
									//										display: this.btnifshow
									//									},
									//									on: {
									//										'on-ok': () => {
									//											this.deleteemployee(params.index)
									//										}
									//									}
									//								}, [
									//									h('Button', {
									//										props: {
									//											type: 'error',
									//											size: 'small'
									//										}
									//									}, '删除')
									//								])
								]);
							} else {
								return h('div', [
									h('Button', {
										props: {
											type: 'primary',
											size: 'small'
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {
												this.repairemployee(params.index)
											}
										}
									}, '编辑'),
									h('Button', {
										props: {
											type: 'error',
											size: 'small',
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {
												this.peledel = true;
												this.setIndex = params.index
											}
										}
									}, '移除'),
									//								h('Poptip', {
									//									props: {
									//										confirm: true,
									//										title: '您确定要删除这条数据吗?',
									//										transfer: true
									//									},
									//									style: {
									//										display: this.btnifshow
									//									},
									//									on: {
									//										'on-ok': () => {
									//											this.deleteemployee(params.index)
									//										}
									//									}
									//								}, [
									//									h('Button', {
									//										props: {
									//											type: 'error',
									//											size: 'small'
									//										}
									//									}, '删除')
									//								])
								]);
							}

						}
					}
				],
				data1: [],
				setindex: "",
				peledel: false,
				start: "",

				emsg: {
					employeeDeptDto: {
						no: "",
						roleId: "",
						status: ""
					},
					employeeAssessmentList: [],
					employeeEducationExperienceList: [],
					employeeExperienceList: [],
					employeeInfo: {
						"no": "",
						"universityGraduated": "",
						"graduationTime": "",
						"physicalCondition": "",
						"rank": "",
						"source": "",
						"status": "",
						"entryTime": "",
						"correctionTime": "",
						"departureTime": "",
						"accommodation": "",
						"paySocialSecurity": "",
						"marry": "",
						"drive": "",
						"licensePlateNum": "",
						"receiveWorkClothes": "",
						"receiveWorkClothesTime": "",
						"selfEvaluation": "",
						"leadershipComments": "",
						"personnelEvaluation": "",
						"supervisorEvaluation": "",
					},
					
					userBasis:{
						address:"",
						contactNumber:"",
						education:"",
						id:"",
						identityNumber:"",
						income:"",
						nation:"",
						politicalOutlook:"",
						qqNumber:"",
						userId:"",
						wechatNumber:"",
						work:"",
						workUnit:"",
						
						
					}
				}, //员工基本信息
				addExperience: false,

				employeeExhead: [{
						title: '单位名称',
						key: 'companyName',
						fixed: 'left',
						width: 150,
					},
					{
						title: '职位 ',
						key: 'position',
						width: 150,

					},
					{
						title: '职责',
						key: 'duty',
						width: 150,

					},
					{
						title: '主要成就 ',
						key: 'achievement',
						width: 150,

					},

					{
						title: '开始时间 ',
						key: 'startTime',
						width: 150,

					},

					{
						title: '结束时间 ',
						key: 'endTime',
						width: 150,
					},

					{
						title: '证明人 ',
						key: 'prove',
						width: 150,
					},
					{
						title: '证明人电话 ',
						key: 'proveTel',
						width: 150,
					},

					{
						title: '操作 ',
						key: 'proveTel',
						width: 150,
						fixed: 'right',
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.setemployeeExModel = true
											this.remodal = false
											var data = this.emsg.employeeExperienceList[params.index]

											this.employeeExperienceList.companyName = data.companyName
											this.employeeExperienceList.duty = data.duty
											this.employeeExperienceList.achievement = data.achievement
											this.employeeExperienceList.startTime = data.startTime
											this.employeeExperienceList.endTime = data.endTime
											this.employeeExperienceList.prove = data.prove
											this.employeeExperienceList.proveTel = data.proveTel
											this.setIndexs = params.index
										}
									}
								}, '编辑'),
								h('Button', {
									props: {
										type: 'error',
										size: 'small',
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.pdel = true;
											this.setIndexs = params.index
										}
									}
								}, '删除'),

							]);
						}
					},

				],
				employeeExModel: false,
				employeeExperienceList: {
					"companyName": "",
					"position": "",
					"duty": "",
					"achievement": "",
					"startTime": "",
					"endTime": "",
					"prove": "",
					"proveTel": "",

				}, //新增员工工作经历

				setemployeeExModel: false,

				///
				employeeAssessmentModel: false,
				setemployeeAssessmentModel: false,
				employeeAssessmentHead: [{
						title: '考核姓名',
						key: 'assessor',
						fixed: 'left',
						width: 150,
					},
					{
						title: '考核评价 ',
						key: 'evaluate',
						width: 300,

					},
					{
						title: '自我评价',
						key: 'selfEvaluation',
						width: 300,

					},

					{
						title: '开始时间 ',
						key: 'startTime',
						width: 150,

					},

					{
						title: '结束时间 ',
						key: 'endTime',
						width: 150,
					},

					{
						title: '操作 ',
						key: 'proveTel',
						width: 150,
						fixed: 'right',
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.setemployeeAssessmentModel = true
											this.remodal = false
											var data = this.emsg.employeeAssessmentList[params.index]

											this.employeeAssessment.assessor = data.assessor
											this.employeeAssessment.deptId = data.deptId
											this.employeeAssessment.startTime = data.startTime
											this.employeeAssessment.endTime = data.endTime
											this.employeeAssessment.evaluate = data.evaluate
											this.employeeAssessment.selfEvaluation = data.selfEvaluation

											this.setIndexs = params.index
										}
									}
								}, '编辑'),
								h('Button', {
									props: {
										type: 'error',
										size: 'small',
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.pdelAssessment = true;
											this.setIndexs = params.index
										}
									}
								}, '删除'),

							]);
						}
					},

				],
				employeeAssessment: {
					"assessor": "",
					"deptId": "",
					"startTime": "",
					"endTime": "",
					"evaluate": "",
					"selfEvaluation": ""
				},
				employeeEducationModel: false,
				employeeEducationHead: [{
						title: '学习单位',
						key: 'name',
						fixed: 'left',
						width: 150,
					},
					{
						title: '专业 ',
						key: 'major',
						width: 200,

					},
					{
						title: '课程',
						key: 'curriculum',
						width: 300,

					},

					{
						title: '开始时间 ',
						key: 'startTime',
						width: 180,

					},

					{
						title: '结束时间 ',
						key: 'endTime',
						width: 180,
					},

					{
						title: '教育级别 ',
						key: 'level',
						width: 150,
						render: (h, params) => {

							var level = params.row.level

							if(level == 0) {

								var texts = '小学/初中'
							} else if(level == 1) {

								var texts = '高中'
							} else if(level == 2) {

								var texts = '大学'
							} else if(level == 3) {

								var texts = '成教'
							} else if(level == 4) {

								var texts = '培训机构'
							}

							return h('div', texts)
						}
					},

					{
						title: '所获荣誉',
						key: 'achievement',
						width: 150,
					},

					{
						title: '操作 ',
						key: 'proveTel',
						width: 150,
						fixed: 'right',
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.setemployeeEducationModel = true
											this.remodal = false
											var data = this.emsg.employeeEducationExperienceList[params.index]

											this.employeeEducation.name = data.name
											this.employeeEducation.major = data.major
											this.employeeEducation.curriculum = data.curriculum
											this.employeeEducation.level = data.level + ""
											this.employeeEducation.achievement = data.achievement
											this.employeeEducation.startTime = data.startTime
											this.employeeEducation.endTime = data.endTime

											this.setIndexs = params.index
										}
									}
								}, '编辑'),
								h('Button', {
									props: {
										type: 'error',
										size: 'small',
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.pdelEducation = true;
											this.setIndexs = params.index
										}
									}
								}, '删除'),

							]);
						}
					},
				],
				employeeEducation: {
					"name": "",
					"major": "",
					"curriculum": "",
					"level": "",
					"achievement": "",
					"startTime": "",
					"endTime": "",
				},

				setemployeeEducationModel: false,
				/*            */
				employeeCertificateHead: [

					{
						title: '证书名称',
						key: 'name',
						width: 300,

					}, {
						title: '发证单位',
						key: 'company',
						width: 200,
					},

					{
						title: '获取时间 ',
						key: 'awardTime',
						width: 200,
					},
					{
						title: '级别 ',
						key: 'level',
						width: 150,
						render: (h, params) => {

							var level = params.row.level

							if(level == 0) {

								var texts = '一级'
							} else if(level == 1) {

								var texts = '二级'
							} else if(level == 2) {

								var texts = '三级'
							} else if(level == 3) {

								var texts = '特级'
							}

							return h('div', texts)
						}
					},

					{
						title: '操作 ',
						key: 'proveTel',
						width: 150,
						fixed: 'right',
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.setemployeeCertificateModel = true
											this.remodal = false
											var data = this.emsg.employeeCertificateList[params.index]
											this.employeeCertificate.name = data.name
											this.employeeCertificate.company = data.company
											this.employeeCertificate.awardTime = data.awardTime
											this.employeeCertificate.level = data.level + ""
											this.employeeCertificate.file = data.uploadFilesList
											this.setIndexs = params.index
											this.uploadpathdata = "/api/f/depts/members/" + this.reid + "/files/" + data.id

										}
									}
								}, '编辑'),
								h('Button', {
									props: {
										type: 'error',
										size: 'small',
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.pdelCertificate = true;
											this.setIndexs = params.index
										}
									}
								}, '删除'),

							]);
						}
					},
				],

				employeeCertificateModel: false,
				setemployeeCertificateModel: false,
				employeeCertificate: {
					"company ": "",
					"name": "",
					"level": "",
					"awardTime": "",
					"file": []
				},

				//证书

				uploadpathdata: '',
				defaultList: [],
				imgName: '',
				visible: false,
				uparry: {
					multipartFileList: []
				},

				setIndex: 0,
				setIndexs: 0,
				pdel: false,
				pdelAssessment: false,
				pdelEducation: false,
				pdelCertificate: false,
			};
		},
		methods: {

			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},
			handleRemove(fid, index) {
				this.delfile(this.reid, fid, index)
			},

			///

			//员工证书

			handleCaseSuccess(res, file) {

				this.SetGetData.covers = []
				this.SetGetData.covers.push(res.data)
			},

			handleSuccess(res, file) {

				var data = res.data
				for(var i = 0; i < data.length; i++) {
					this.employeeCertificate.file.push(data[i])
					/*this.emsg.employeeCertificateList[this.setIndexs].uploadFilesList.push(data[i])*/
				}

				/*var Res = res.data
				this.SetGetData.designContentList[this.centerindex].contentImage = Res.path*/
			},
			handleFormatError(file) {
				this.$Notice.warning({
					title: '文件格式不正确',
					desc: '' + file.name + '文件格式不正确，请选择jpg,jpeg或png'
				});
			},
			handleMaxSize(file) {
				this.$Notice.warning({
					title: '超过文件大小限制',
					desc: '' + file.name + '文件太大，不超过5M'
				});
			},
			handleBeforeUpload(file) {

				this.file = file
				this.uparry.multipartFileList.push(this.file)

			},

			handleChange(data) {
				this.rebrithday = data;
			},

			delfile: function(eid, fid, index) {

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var dsDataCache = this.dsDataCache

				var that = this
				//                    /
				this.axios({
					method: 'delete',
					url: '/api/f/depts/members/' + eid + '/files/' + fid,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.employeeCertificate.file.splice(index, 1)
					/*this.emsg.employeeCertificateList[this.setIndexs].uploadFilesList.splice(index, 1)*/

					that.$Message.success("删除成功")

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);

				})
			},

			changepage(index) {
				var currents = index;
				var pageSizes = this.pageSize;
				if(this.departmentvalues == "" && this.departmentvalue == "") { //获取全部员工分页
					let that = this;
					//					this.ifshows = true;
					//					this.ifshow = false;
					this.axios({
						method: 'get',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/depts/members?pageNum=' + currents + '&pageSize=' + pageSizes + '&name=' + that.searchvalue +
							'&no=' + that.searchvalueone + '&mobile=' + that.searchvaluetwo + '&status=' + that.modelstatus
					}).then(res => {
						if(res != false) {
							that.data1 = res.data.data;
							that.pageSize = res.data.pagination.pageSize;
							that.pageNum = res.data.pagination.pageNum;
							that.totalpage = res.data.pagination.total;
						}
					})
				} else if(this.departmentvalues != "" && this.departmentvalue == "") {
					let that = this;
					//					this.ifshows = false;
					//					this.ifshow = true;
					let url = '/api/f/depts/members?pageNum=' + currents + '&deptId=' + that.departmentvalue + '&pageSize=' + pageSizes +
						'&name=' + that.searchvalue + '&no=' + that.searchvalueone + '&mobile=' + that.searchvaluetwo + '&status=' +
						that.modelstatus
					url = goodurl(url)
					this.axios({
						method: 'get',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: url
					}).then(res => {
						if(res != false) {
							that.data1 = res.data.data;
							that.pageSize = res.data.pagination.pageSize;
							that.pageNum = res.data.pagination.pageNum;
							that.totalpage = res.data.pagination.total
						}
					})
				} else if(this.departmentvalues == "" && this.departmentvalue != "") {
					let that = this;
					//					this.ifshows = false;
					//					this.ifshow = true;
					let url = '/api/f/depts/members?pageNum=' + currents + '&deptId=' + that.departmentvalue + '&pageSize=' + pageSizes +
						'&name=' + that.searchvalue + '&no=' + that.searchvalueone + '&mobile=' + that.searchvaluetwo + '&status=' +
						that.modelstatus
					url = goodurl(url)
					this.axios({
						method: 'get',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: url
					}).then(res => {
						if(res != false) {
							that.data1 = res.data.data;
							that.pageSize = res.data.pagination.pageSize;
							that.pageNum = res.data.pagination.pageNum;
							that.totalpage = res.data.pagination.total
						}
					})
				}
			},
			searchemployee() {
				alert(123)
			},
			//一级部门的员工数据
			existdata(name) {

				if(name == 0) {

					this.start = false
				} else {
					this.start = true
				}

				this.departmentvalue = ""
				this.departmentvalues = ""
				if(!name.length == 0) {
					this.departmentvalues = this.existchild[name - this.nochild.length - 1].id

					console.log(this.departmentvalues)

					this.getemployeedatas();
					this.btnifshow = '';
				} else {
					/* this.getemployeedatas(); */
					this.btnifshow = '';
				}

			},
			//获取二级部门下员工数据
			existchilddata(name) {
				this.departmentvalue = ""
				this.departmentvalues = ""
				console.log(name, "222")
				if(name == 0) {
					this.getemployeealldata();
					this.btnifshow = 'none';
					this.start = false
				} else {
					this.start = true;

					if(!isNaN(name)) {
						this.departmentvalue = this.nochild[name - 1].id
						this.getemployeedata();
						this.btnifshow = '';
					} else {
						let arr = []
						arr = name.split("-")
						console.log(arr)
						this.departmentvalue = this.existchild[arr[0] - this.childnum].childs[arr[1]].id;
						this.getemployeedata();
						this.btnifshow = '';
					}
				}

			},
			//获取员工的数据
			getemployeedata() {
				let that = this;
				this.ifshows = false;
				this.ifshow = true;
				let url = '/api/f/depts/members?&deptId=' + that.departmentvalue + '&name=' + that.searchvalue + '&no=' + that.searchvalueone +
					'&mobile=' + that.searchvaluetwo + '&status=' + that.modelstatus
				url = goodurl(url)
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: url
				}).then(res => {
					if(res != false) {
						that.data1 = res.data.data;
						that.pageSize = that.pageSize;
						that.pageNum = res.data.pagination.pageNum;
						that.totalpage = res.data.pagination.total
					}
				})
			},
			//全部员工中找人
			searchemployeedata() {
				let that = this;
				var currents = this.current;
				var pageSizes = this.pageSize;
				let url = '/api/f/depts/members?name=' + that.searchvalue + '&no=' + that.searchvalueone + '&mobile=' + that.searchvaluetwo + '&status=' + that.modelstatus
				url = goodurl(url)
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: url
				}).then(res => {
					if(res != false) {
						that.data1 = res.data.data;
						that.pageSize = that.pageSize;
						that.pageNum = res.data.pagination.pageNum;
						that.totalpage = res.data.pagination.total
					}
				})
			},
			//获取一级部门的员工数据
			getemployeedatas() {
				let that = this;
				this.ifshows = false;
				this.ifshow = true;
				var url = '/api/f/depts/members?deptId=' + that.departmentvalues + '&name=' + that.searchvalue + '&no=' + that.searchvalueone + '&mobile=' + that.searchvaluetwo + '&status=' + that.modelstatus
				url = goodurl(url);
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: url
				}).then(res => {
					if(res != false) {
						that.data1 = res.data.data;
						that.pageSize = that.pageSize;
						that.pageNum = res.data.pagination.pageNum;
						that.totalpage = res.data.pagination.total
					}
				})
			},
			//页面渲染时获取全部员工的数据		
			getemployeealldata() {
				let that = this;
				this.ifshows = true;
				this.ifshow = false;
				let url = '/api/f/depts/members?'+ '&pageNum=' + that.current + '&pageSize=' + that.pageSize
				url = goodurl(url)
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: url
				}).then(res => {
					if(res != false) {
						that.data1 = res.data.data
						that.pageSize = that.pageSize;
						that.pageNum = res.data.pagination.pageNum;
						that.totalpage = res.data.pagination.total
					}
				})
			},
			//新建员工的数据		
			postemployeealldata() {
				let that = this;
				if(that.addname == null || that.addname == ""){
					this.$Message.error('员工姓名不能为空');
				}else if(that.addtel == null || that.addtel == ""){
					this.$Message.error('员工电话不能为空');
				}else if(that.rolevalue ==null || that.rolevalue == ""){
					this.$Message.error('员工角色不能为空');
				}else if(!(/^1(3|4|5|7|8)\d{9}$/.test(that.addtel))){
					this.$Message.error('员工电话号码格式不正确');
				}
				 else {
					this.axios({
						method: 'post',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/depts/members',
						data: {
							name: that.addname,
							mobile: that.addtel,
							no: that.addcode,
							roleId: that.rolevalue
						}
					}).then(res => {

						var verify = [{
								"name": "name",
								"note": "员工姓名"
							},
							{
								"name": "mobile",
								"note": "员工电话 "
							},
							{
								"name": "no",
								"note": "员工编号 "
							},
							{
								"name": "roleId",
								"note": "员工角色"
							},

						]

						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						that.$Message.success("新建成功")

						if(res != false) {
							that.modaladd = false;
							that.getemployeealldata();
						}
					})
				}
			},
			//新建部门下员工数据
			postemployeedata() {
				let that = this;
				if(that.addnames == null || that.addnames == ""){
					this.$Message.error('员工姓名不能为空');
				}else if(that.addtels == null || that.addtels == ""){
					this.$Message.error('员工电话不能为空');
				}else if(that.rolevalues ==null || that.rolevalues == ""){
					this.$Message.error('员工角色不能为空');
				}else if(!(/^1(3|4|5|7|8)\d{9}$/.test(that.addtels))){
					this.$Message.error('员工电话号码格式不正确');
				} else {
					this.axios({
						method: 'post',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/depts/' + that.departmentvalue + '/members',
						data: {
							name: that.addnames,
							mobile: that.addtels,
							no: that.addcodes,
							roleId: that.rolevalues
						}
					}).then(res => {

						var verify = [{
								"name": "name",
								"note": "员工姓名"
							},
							{
								"name": "mobile",
								"note": "员工电话 "
							},
							{
								"name": "no",
								"note": "员工编号 "
							},
							{
								"name": "roleId",
								"note": "员工角色"
							},

						]

						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						if(res != false) {
							that.modaladds = false;
							that.getemployeealldata();
						}
					})
				}

			},
			//获取全部的部门two(给select塞进数据)
			getdepartmentdatas() {
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/depts'
				}).then(res => {
					that.alldeftment = res.data.data
				})
			},
			//修改部门员工数据
			repairemployeedata() {

				/* if(that.reemail !== null||that.reemail !==""){
						if(email.test(that.reemail)==false){
						       this.$Message.error('必须输入正确的邮箱');
					     }
					}else if(that.reemail == null){
						return;
					}else*/
				let that = this;
				var reemail = that.reemail.trim()
				var email = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,4})$/

				if(that.restatus == null || that.restatus == "" || that.rerolevalue == null || that.rerolevalue == "") {
					this.$Message.error('必须存在角色ID和员工状态');
				} else if(email.test(that.reemail) == false && reemail.length > 0) {
					this.$Message.error('必须输入正确的邮箱');
				} else {
					this.axios({
						method: 'put',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/depts/members/' + that.reid,
						data: {
							userInfo: {
								name: that.rename,
								sex: that.resex,
								email: that.reemail,
								birthday: that.rebrithday
							},
							deptIds: that.deftment,
							roleId: that.rerolevalue,
							status: that.restatus
						}
					}).then(res => {

						console.log(res)
						let result = _.find(that.data1, function(o) {
							return o.id == res.data.data.id;
						});
						result.deptList = res.data.data.deptList;
						result.name = res.data.data.name
						result.sex = res.data.data.sex
						result.email = res.data.data.email
						result.birthday = res.data.data.birthday
						result.roleId = res.data.data.roleId
						result.id = res.data.data.id
						result.status = res.data.data.status
						that.data1.splice(1, 0)

						that.data1[that.setindex].userName = res.data.data.userName
						that.data1[that.setindex].roleName = res.data.data.roleName
						that.data1[that.setindex].sex = res.data.data.sex
						that.data1[that.setindex].status = res.data.data.status
						that.data1[that.setindex].no = res.data.data.no
						that.data1[that.setindex].mobile = res.data.data.mobile
						that.data1[that.setindex].created = res.data.data.created

					})
				}
			},
			//获取全部的角色
			getallrole() {
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/roles?type=' + 0
				}).then(res => {
					that.allrole = res.data.data;
				})
			},
			//获取全部的部门
			getdepartmentdata() {
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/depts'
				}).then(res => {
					if(res != false) {
						let deptdata = res.data.data;

						that.deptdata = deptdata

						for(let i = 0; i < deptdata.length; i++) {
							if(!deptdata[i].parentId == "") {
								that.secondlevel.push(deptdata[i])
							}
						}
						//处理二级部门	    
						var map = {},
							dest = [];
						for(var i = 0; i < that.secondlevel.length; i++) {
							var ai = that.secondlevel[i];
							if(!map[ai.parentId]) {
								dest.push({
									parentId: ai.parentId,
									data: [ai]
								});
								map[ai.parentId] = ai;
							} else {
								for(var j = 0; j < dest.length; j++) {
									var dj = dest[j];
									if(dj.parentId == ai.parentId) {
										dj.data.push(ai);
										break;
									}
								}
							}
						}
						for(let a = 0; a < dest.length; a++) {
							for(let i = 0; i < deptdata.length; i++) {
								if(deptdata[i].parentId == "") {
									if(deptdata[i].id == dest[a].parentId) {
										deptdata[i].childs = dest[a].data
									}
								}
							}
						}
						let newdeptdata = [];
						for(let s = 0; s < deptdata.length; s++) {
							if(deptdata[s].parentId == "") {
								newdeptdata.push(deptdata[s])
							}
						}
						let existchild = [];
						let nochild = [];
						for(let c = 0; c < newdeptdata.length; c++) {
							if(newdeptdata[c].childs) {
								existchild.push(newdeptdata[c])
							} else if(!newdeptdata[c].childs) {
								nochild.push(newdeptdata[c])
							}
						}
						that.existchild = existchild;
						that.nochild = nochild;
						that.newdeptdata = newdeptdata;
						that.childnum = nochild.length + 1

						//处理二级部门结束
						/* 	that.departmentList = res.data.data
							that.departmentvalue = res.data.data[0].id
							that.getemployeedata(); */
					}
				})
			},
			addemployee() {
				this.modaladd = true;
				this.addname = ""
				this.addtel = ""
				this.addcode = ""
				this.rolevalue = ""
			},
			addemployees() {
				this.modaladds = true;
				this.addnames = ""
				this.addtels = ""
				this.addcodes = ""
				this.rolevalues = ""
			},
			deleteemployee() {
				var index = this.setIndex;
				let that = this;
				this.axios({
					method: 'delete',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/depts/' + that.departmentvalue + '/members/' + that.data1[index].id
				}).then(res => {
					this.peledel = false;
					if(res != false) {
						that.data1.splice(index, 1);
						this.peledel = false;
					}
				})
			},

			repairemployee(index) {
				this.EmuIndex = 0
				this.setIndex = index

				var that = this

				this.reid = this.data1[index].id;
				var eid = this.data1[index].id;

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/depts/members/' + eid + '/info'
				}).then(res => {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
					this.remodal = true;
					this.emsg = data;
					this.emsg.employeeDeptDto.status = data.employeeDeptDto.status + '';
					this.emsg.employeeDeptDto.sex = data.employeeDeptDto.sex + '';
					this.emsg.employeeInfo.rank= data.employeeInfo.rank+'',
					this.emsg.employeeInfo.source= data.employeeInfo.source+'',
					
					this.emsg.employeeInfo.drive = data.employeeInfo.drive + '';
					this.emsg.employeeInfo.marry = data.employeeInfo.marry + '';
					this.emsg.employeeInfo.receiveWorkClothes = data.employeeInfo.receiveWorkClothes + '';
					this.emsg.employeeInfo.paySocialSecurity = data.employeeInfo.paySocialSecurity + '';
					this.emsg.employeeInfo.accommodation = data.employeeInfo.accommodation + '';
					
					this.emsg.userBasis.education = data.userBasis.education + '';
					this.emsg.userBasis.income = data.userBasis.income + '';
					this.emsg.userBasis.politicalOutlook = data.userBasis.politicalOutlook + '';
					
					
					
					var deptList = data.employeeDeptDto.deptList
					this.emsg.employeeDeptDto.deptList = []
					for(var i = 0; i < deptList.length; i++) {

						this.emsg.employeeDeptDto.deptList.push(deptList[i].id)
					}

				}).catch(function(err) {

					setTimeout(msg, 100);

				})
				/*	
					this.reid = this.data1[index].id;
					this.rename = this.data1[index].userName;
					this.recode = this.data1[index].no;
					this.restatus = this.data1[index].status + "";
					this.resex = this.data1[index].sex + "";
					this.reemail = this.data1[index].email;
					this.rebrithday = this.data1[index].birthday;
					this.rerolevalue = this.data1[index].roleId;
					let data1arr = [];
					this.deftment = [];
					data1arr = this.data1[index].deptList;
					for (let i = 0; i < data1arr.length; i++) {
						this.deftment.push(data1arr[i].id)
					}
					this.setindex=index*/
			},
			modelok() {
				this.$Message.info('Clicked ok');
			},
			modelcancel() {
				this.$Message.info('Clicked cancel');
			},
			SetdealerIsOk() {
				this.postemployeealldata();
			},
			SetdealerIsOks() {
				this.postemployeedata();
			},
			reSetdealerIsOk() {
				this.remodal = false;
				this.repairemployeedata();
			},

			//打开新增窗口

			newExperience: function() {
				this.employeeExModel = true;
				this.remodal = false;
				this.employeeExperienceList = {
					"companyName": "",
					"position": "",
					"duty": "",
					"achievement": "",
					"startTime": "",
					"endTime": "",
					"prove": "",
					"proveTel": "",

				}
			},

			newAssessment: function() {
				this.employeeAssessmentModel = true;
				this.remodal = false;
				this.employeeAssessment = {
					"assessor": "",
					"deptId": "",
					"startTime": "",
					"endTime": "",
					"evaluate": "",
					"selfEvaluation": ""
				}
			},

			newEducation: function() {
				this.employeeEducationModel = true;
				this.remodal = false;
				this.employeeEducation = {
					"name": "",
					"major": "",
					"curriculum": "",
					"level": "",
					"achievement": "",
					"startTime": "",
					"endTime": "",
				}
			},

			newCertificate: function() {
				//this.uploadpathdata="/api";
				this.employeeCertificateModel = true;
				this.remodal = false;
				this.employeeCertificate = {
					"company ": "",
					"name": "",
					"level": "",
					"awardTime": "",
					"file": []

				}
			},

			/*补全员工信息*/

			getuserbirthday: function(val) {
				this.emsg.employeeDeptDto.birthday = val.indexOf(" 00:00:00")!=-1?val:val+" 00:00:00" 
			},

			getuserbirthday: function(val) {
				this.emsg.employeeDeptDto.birthday = val.indexOf(" 00:00:00")!=-1?val:val+" 00:00:00" 
			},

			getusergraduationTime: function(val) {
				this.emsg.employeeInfo.graduationTime = val.indexOf(" 00:00:00")!=-1?val:val+" 00:00:00"
			},

			//入职
			getuserentryTime: function(val) {
				this.emsg.employeeInfo.graduationTime = val.indexOf(" 00:00:00")!=-1?val:val+" 00:00:00" 
			},
			//转正
			getusercorrectionTime: function(val) {
				this.emsg.employeeInfo.correctionTime = val.indexOf(" 00:00:00")!=-1?val:val+" 00:00:00" 
			},

			//离职
			getuserdepartureTime: function(val) {
				this.emsg.employeeInfo.departureTime = val.indexOf(" 00:00:00")!=-1?val:val+" 00:00:00" 
			},

			//新增时开始时间
			getExperienceListstartTime: function(val) {
				this.employeeExperienceList.startTime = val.indexOf(" 00:00:00")!=-1?val:val+" 00:00:00" 
			},

			getExperienceListendTime: function(val) {
				this.employeeExperienceList.endTime = val.indexOf(" 00:00:00")!=-1?val:val+" 00:00:00" 
			},

			//考核开始时间
			getemployeeAssessmentstartTime: function(val) {
				this.employeeAssessment.startTime = val.indexOf(" 00:00:00")!=-1?val:val+" 00:00:00" 
			},
			//考核结束时间
			getemployeeAssessmentendTime: function(val) {
				this.employeeAssessment.endTime = val.indexOf(" 00:00:00")!=-1?val:val+" 00:00:00" 
			},

			//员工教育考开始时间
			getemployeeEducationstartTime: function(val) {
				this.employeeEducation.startTime = val.indexOf(" 00:00:00")!=-1?val:val+" 00:00:00" 
			},
			//员工教育考结束时间
			getemployeeEducationendTime: function(val) {
				this.employeeEducation.endTime = val.indexOf(" 00:00:00")!=-1?val:val+" 00:00:00" 
			},

			//证书获取时间
			getemployeeCertificateawardTime: function(val) {
				this.employeeCertificate.awardTime = val.indexOf(" 00:00:00")!=-1?val:val+" 00:00:00"
				
				
			},

			//修改员工基本信息

			sureputemsg: function() {

				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var emali = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,4})$/;

				var emsgdata = this.emsg

				var employeeInfo = emsgdata.employeeInfo
				var infoNo = employeeInfo.no
				var infoUniversityGraduated = employeeInfo.universityGraduated
				var infoGraduationTime = employeeInfo.graduationTime
				var infoPhysicalCondition = employeeInfo.physicalCondition
				var infoRank = employeeInfo.rank
				var infoSource = employeeInfo.source
				var infoStatus = employeeInfo.status
				var infoEntryTime = employeeInfo.entryTime
				var infoCorrectionTime = employeeInfo.correctionTime
				var infoDepartureTime = employeeInfo.departureTime
				var infoAccommodation = employeeInfo.accommodation
				var infoPaySocialSecurity = employeeInfo.paySocialSecurity
				var infoMarry = employeeInfo.marry
				var infoDrive = employeeInfo.drive
				var infoLicensePlateNum = employeeInfo.licensePlateNum
				var infoReceiveWorkClothes = employeeInfo.receiveWorkClothes
				var infoReceiveWorkClothesTime = employeeInfo.receiveWorkClothesTime
				var infoSelfEvaluation = employeeInfo.selfEvaluation
				var infoLeadershipComments = employeeInfo.leadershipComments
				var infoPersonnelEvaluation = employeeInfo.personnelEvaluation
				var infoSupervisorEvaluation = employeeInfo.supervisorEvaluation
				var infoWageInformation = employeeInfo.wageInformation
				var infoWages = employeeInfo.wages
				
			
				
				
				//

				var employeeDeptDto = emsgdata.employeeDeptDto
				

				var deptList = employeeDeptDto.deptList
				var status = employeeDeptDto.status
				var dtoNo = employeeDeptDto.no
				var dtoUserName = employeeDeptDto.userName
				
				var dtoSex = employeeDeptDto.sex
				var dtoBirthday = employeeDeptDto.birthday
				
				var dtoEmail = employeeDeptDto.email

				var dtoRoleId = employeeDeptDto.roleId
				
				var dtoqqNumber =employeeDeptDto.qqNumber 
				
		
				var dtoincome=employeeDeptDto.income
				var dtopoliticalOutlook=employeeDeptDto.politicalOutlook				
				var dtomobile=employeeDeptDto.mobile
				
				//
				var userBasis= emsgdata.userBasis
				
				var basisEducation = userBasis.education
				var basisAddress = userBasis.address
				/*var basisMobile = userBasis.contactNumber	*/			
				var basisWork = userBasis.work
				var basisWorkUnit = userBasis.workUnit
				var basisIdentityNumber = userBasis.identityNumber				
				var basisqqNumber = userBasis.qqNumber				
				var basisWechatNumber = userBasis.wechatNumber				
				var basisNation = userBasis.nation				
				var basisIncome = userBasis.income				
				var basisPoliticalOutlook = userBasis.politicalOutlook

				

				var obj = {
					"deptIds": deptList,
					"employeeInfo": {
						"no": (infoNo == "") ? undefined : infoNo,
						"universityGraduated": (infoUniversityGraduated == "") ? undefined : infoUniversityGraduated,
						"graduationTime": (infoGraduationTime == "") ? undefined : infoGraduationTime,
						"physicalCondition": (infoPhysicalCondition == "") ? undefined : infoPhysicalCondition,
						"rank": (infoRank == "") ? undefined : infoRank,
						"source": (infoSource == "") ? undefined : infoSource,
						"status": (infoStatus == "") ? undefined : infoStatus,
						"entryTime": (infoEntryTime == "") ? undefined : infoEntryTime,
						"correctionTime": (infoCorrectionTime == "") ? undefined : infoCorrectionTime,
						"departureTime": (infoDepartureTime == "") ? undefined : infoDepartureTime,
						"accommodation": (infoAccommodation == "") ? undefined : infoAccommodation,
						"paySocialSecurity": (infoPaySocialSecurity == "") ? undefined : infoPaySocialSecurity,
						"marry": (infoMarry == "") ? undefined : infoMarry,
						"drive": (infoDrive == "") ? undefined : infoDrive,
						"licensePlateNum": (infoLicensePlateNum == "") ? undefined : infoLicensePlateNum,
						"receiveWorkClothes": (infoReceiveWorkClothes == "") ? undefined : infoReceiveWorkClothes,
						"receiveWorkClothesTime": (infoReceiveWorkClothesTime == "") ? undefined : infoReceiveWorkClothesTime,
						"selfEvaluation": (infoSelfEvaluation == "") ? undefined : infoSelfEvaluation,
						"leadershipComments": (infoLeadershipComments == "") ? undefined : infoLeadershipComments,
						"personnelEvaluation": (infoPersonnelEvaluation == "") ? undefined : infoPersonnelEvaluation,
						"supervisorEvaluation": (infoSupervisorEvaluation == "") ? undefined : infoSupervisorEvaluation,
						"wageInformation": (infoWageInformation == "") ? undefined : infoWageInformation,
						"wages": (infoWages == "") ? undefined : infoWages,
						//

					},
					"roleId": dtoRoleId,
					"status": status,
					"userInfo": {

						"name": dtoUserName,
						//
						"sex": dtoSex,
						"birthday": dtoBirthday,
						//
						"email": dtoEmail,

						
					},
					
					/*var dtoidentityNumber=employeeDeptDto.identityNumber
				var dtoqqNumber =employeeDeptDto.qqNumber 
				var dtowechatNumber=employeeDeptDto.wechatNumber
				var dtonation=employeeDeptDto.nation
				var dtoincome=employeeDeptDto.income
				var dtopoliticalOutlook=employeeDeptDto.politicalOutlook
				*/
					
					"userBasis":{
						"userId":this.reid,
						"education": (basisEducation == "") ? undefined : basisEducation,
						"address":(basisAddress == "") ? undefined : basisAddress,
						"contactNumber":(dtomobile == "") ? undefined : dtomobile,
						 "work":(basisWork == "") ? undefined : basisWork,
						 "workUnit":(basisWorkUnit == "") ? undefined : basisWorkUnit,
						 "identityNumber":(basisIdentityNumber == "") ? undefined : basisIdentityNumber,
						 "qqNumber":(basisqqNumber == "") ? undefined : basisqqNumber,
						 "wechatNumber":(basisWechatNumber=="") ? undefined : basisWechatNumber,
						 "nation":(basisNation == "") ? undefined : basisNation,
						 "income":(basisIncome == "") ? undefined : basisIncome,
						 "politicalOutlook":(basisPoliticalOutlook == "") ? undefined : basisPoliticalOutlook,
						 
					}
					
				}

				if(dtoUserName == "" || dtoUserName == null || dtoUserName.trim().length == 0) {

					this.$Message.error('员工姓名不能为空！');
					return false;
				} else if(dtomobile.trim().length > 0 && tel.test(dtomobile) == false) {
					this.$Message.error('员工电话格式不能为空！');
					return false;
				}
				/*else if(dtoEmail.trim().length > 0 && emali.test(dtoEmail) == false) {
					this.$Message.error('员工电话格式不能为空！');
					return false;
				} */
				else {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					//                    /
					this.axios({
						method: 'put',
						url: '/api/f/depts/members/' + this.reid,

						data: obj

					}).then(function(res) {

						var verify = []

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						var data = res.data.data
						that.data1[that.setIndex].userName = data.employeeDeptDto.userName
						that.data1[that.setIndex].roleId = data.employeeDeptDto.roleId
						that.data1[that.setIndex].roleName = data.employeeDeptDto.roleName
						that.data1[that.setIndex].no = data.employeeDeptDto.no
						that.data1[that.setIndex].mobile = data.employeeDeptDto.mobile
						that.data1[that.setIndex].email = data.employeeDeptDto.email
						that.data1[that.setIndex].birthday = data.employeeDeptDto.birthday
						that.data1[that.setIndex].sex = data.employeeDeptDto.sex
						that.data1[that.setIndex].status = data.employeeDeptDto.status
						that.$Message.success("修改成功")
						/*that.remodal=false*/

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);

					})
				}

			},

			//添加员工经历
			sureaddExperience: function() {

				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				var exdata = this.employeeExperienceList

				var companyName = exdata.companyName
				var position = exdata.position
				var duty = exdata.duty
				var achievement = exdata.achievement
				var startTime = exdata.startTime
				var endTime = exdata.endTime
				var prove = exdata.prove
				var proveTel = exdata.proveTel

				if(companyName == "" || companyName == null || companyName.trim().length == 0) {

					this.$Message.error('公司名称不能为空！');
					return false;
				} else if(proveTel.trim().length > 0 && tel.test(proveTel) == false) {
					this.$Message.error('证明人电话格式不正确！');
					return false;
				} else {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					//                    /
					this.axios({
						method: 'post',
						url: '/api/f/depts/members/' + this.reid + '/experiences',

						data: {
							"companyName": companyName,
							"position": position,
							"duty": duty,
							"achievement": achievement,
							"startTime": (startTime == "") ? undefined : startTime,
							"endTime": (endTime == "") ? undefined : endTime,
							"prove": prove,
							"proveTel": proveTel,
						}

					}).then(function(res) {

						var verify = [{
								"name": "companyName",
								"note": "公司名称"
							},
							{
								"name": "position",
								"note": "职位 "
							},
							{
								"name": "duty",
								"note": "职责 "
							},
							{
								"name": "achievement",
								"note": "主要成就 "
							},
							{
								"name": "startTime",
								"note": "开始时间"
							},
							{
								"name": "endTime",
								"note": "结束时间"
							},
							{
								"name": "prove",
								"note": "证明人姓名"
							},
							{
								"name": "proveTel",
								"note": "证明人电话"
							},
						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}
						var data = res.data.data

						that.emsg.employeeExperienceList.push(data)
						that.$Message.success("添加成功")

						that.employeeExModel = false
						that.remodal = true

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.employeeExModel = false
						that.remodal = true
					})

				}

			},

			//修改员工工作经历

			sureputExperience: function() {
				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				var eid = this.emsg.employeeExperienceList[this.setIndexs].id
				var exdata = this.employeeExperienceList

				var companyName = exdata.companyName
				var position = exdata.position
				var duty = exdata.duty
				var achievement = exdata.achievement
				var startTime = exdata.startTime
				var endTime = exdata.endTime
				var prove = exdata.prove
				var proveTel = exdata.proveTel

				if(companyName == "" || companyName == null || companyName.trim().length == 0) {

					this.$Message.error('公司名称不能为空！');
					return false;
				} else if(proveTel.trim().length > 0 && tel.test(proveTel) == false) {
					this.$Message.error('证明人电话格式不能为空！');
					return false;
				} else {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					//                    /
					this.axios({
						method: 'put',
						url: '/api/f/depts/members/' + this.reid + '/experiences/' + eid,

						data: {
							"companyName": companyName,
							"position": position,
							"duty": duty,
							"achievement": achievement,
							"startTime": (startTime == "") ? undefined : startTime,
							"endTime": (endTime == "") ? undefined : endTime,
							"prove": prove,
							"proveTel": proveTel,
						}

					}).then(function(res) {

						var verify = [{
								"name": "companyName",
								"note": "公司名称"
							},
							{
								"name": "position",
								"note": "职位 "
							},
							{
								"name": "duty",
								"note": "职责 "
							},
							{
								"name": "achievement",
								"note": "主要成就 "
							},
							{
								"name": "startTime",
								"note": "开始时间"
							},
							{
								"name": "endTime",
								"note": "结束时间"
							},
							{
								"name": "prove",
								"note": "证明人姓名"
							},
							{
								"name": "proveTel",
								"note": "证明人电话"
							},
						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}
						var data = res.data.data
						that.emsg.employeeExperienceList[that.setIndexs].companyName = data.companyName
						that.emsg.employeeExperienceList[that.setIndexs].position = data.position
						that.emsg.employeeExperienceList[that.setIndexs].duty = data.duty
						that.emsg.employeeExperienceList[that.setIndexs].achievement = data.achievement
						that.emsg.employeeExperienceList[that.setIndexs].startTime = data.startTime
						that.emsg.employeeExperienceList[that.setIndexs].endTime = data.endTime
						that.emsg.employeeExperienceList[that.setIndexs].prove = data.prove
						that.emsg.employeeExperienceList[that.setIndexs].proveTel = data.proveTel

						that.$Message.success("修改成功")
						that.setemployeeExModel = false
						that.remodal = true

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.setemployeeExModel = false
						that.remodal = true
					})

				}
			},

			delTabData: function() {
				var index = this.setIndexs
				var eid = this.emsg.employeeExperienceList[index].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				//                    /
				this.axios({
					method: 'delete',
					url: '/api/f/depts/members/' + this.reid + '/experiences/' + eid,

				}).then(function(res) {

					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.emsg.employeeExperienceList.splice(index, 1)
					that.$Message.success("删除成功")
					that.setemployeeExModel = false
					that.pdel = false

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
					that.setemployeeExModel = false
					that.pdel = true
				})

			},

			//新增考核信息

			sureaddAssessment: function() {
				var assessment = this.employeeAssessment

				var assessor = assessment.assessor
				var deptId = assessment.deptId
				var startTime = assessment.startTime
				var endTime = assessment.endTime
				var evaluate = assessment.evaluate
				var selfEvaluation = assessment.selfEvaluation

				if(assessor == "" || assessor == null || assessor.trim().length == 0) {

					this.$Message.error('考核人姓名不能为空！');
					return false;
				} else if(deptId == "") {
					this.$Message.error('考核部门不能为空！');
					return false;
				} else {
					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					//                    /
					this.axios({
						method: 'post',
						url: '/api/f/depts/members/' + this.reid + '/assessment',

						data: {
							"assessor": assessor,
							"deptId": deptId,
							"startTime": (startTime == "") ? undefined : startTime,
							"endTime": (endTime == "") ? undefined : endTime,
							"evaluate": evaluate,
							"selfEvaluation": selfEvaluation

						}

					}).then(function(res) {

						var verify = [{
								"name": "assessor",
								"note": "考核人"
							},
							{
								"name": "deptId",
								"note": "部门 "
							},
							{
								"name": "startTime",
								"note": "开始时间 "
							},
							{
								"name": "endTime",
								"note": "结束时间 "
							},
							{
								"name": "evaluate",
								"note": "考核评价"
							},
							{
								"name": "selfEvaluation",
								"note": "自我评价"
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}
						var data = res.data.data

						that.emsg.employeeAssessmentList.push(data)
						that.$Message.success("添加成功")

						that.employeeAssessmentModel = false
						that.remodal = true

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.employeeAssessmentModel = false
						that.remodal = true
					})
				}

			},
			//修改员工考核
			sureputAssessment: function() {
				var assessment = this.employeeAssessment
				var index = this.setIndexs
				var eid = this.emsg.employeeAssessmentList[index].id

				var assessor = assessment.assessor
				var deptId = assessment.deptId
				var startTime = assessment.startTime
				var endTime = assessment.endTime
				var evaluate = assessment.evaluate
				var selfEvaluation = assessment.selfEvaluation

				if(assessor == "" || assessor == null || assessor.trim().length == 0) {

					this.$Message.error('考核人姓名不能为空！');
					return false;
				} else if(deptId == "") {
					this.$Message.error('考核部门不能为空！');
					return false;
				} else {
					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					//                    /
					this.axios({
						method: 'put',
						url: '/api/f/depts/members/' + this.reid + '/assessment/' + eid,

						data: {
							"assessor": assessor,
							"deptId": deptId,
							"startTime": (startTime == "") ? undefined : startTime,
							"endTime": (endTime == "") ? undefined : endTime,
							"evaluate": evaluate,
							"selfEvaluation": selfEvaluation

						}

					}).then(function(res) {

						var verify = [{
								"name": "assessor",
								"note": "考核人"
							},
							{
								"name": "deptId",
								"note": "部门 "
							},
							{
								"name": "startTime",
								"note": "开始时间 "
							},
							{
								"name": "endTime",
								"note": "结束时间 "
							},
							{
								"name": "evaluate",
								"note": "考核评价"
							},
							{
								"name": "selfEvaluation",
								"note": "自我评价"
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}
						var data = res.data.data

						/*that.emsg.employeeAssessmentList.push(data)*/
						that.emsg.employeeAssessmentList[index].assessor = data.assessor
						that.emsg.employeeAssessmentList[index].deptId = data.deptId
						that.emsg.employeeAssessmentList[index].startTime = data.startTime
						that.emsg.employeeAssessmentList[index].endTime = data.endTime
						that.emsg.employeeAssessmentList[index].evaluate = data.evaluate
						that.emsg.employeeAssessmentList[index].selfEvaluation = data.selfEvaluation

						that.$Message.success("修改成功")

						that.setemployeeAssessmentModel = false
						that.remodal = true

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.setemployeeAssessmentModel = false
						that.remodal = true
					})
				}

			},

			delAssessment: function() {

				var index = this.setIndexs
				var eid = this.emsg.employeeAssessmentList[index].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				//                    /
				this.axios({
					method: 'delete',
					url: '/api/f/depts/members/' + this.reid + '/assessment/' + eid,

				}).then(function(res) {

					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that, ) == false) {
						return false
					}
					var data = res.data.data

					that.emsg.employeeAssessmentList.splice(index, 1)
					that.$Message.success("删除成功")

					that.pdelAssessment = false

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
					that.pdelAssessment = false

				})
			},

			//新增教育信息

			sureaddEducation: function() {
				var education = this.employeeEducation

				var name = education.name
				var major = education.major
				var curriculum = education.curriculum
				var level = education.level
				var achievement = education.achievement
				var startTime = education.startTime
				var endTime = education.endTime

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('学习单位不能为空！');
					return false;
				} else if(level == "") {
					this.$Message.error('教育程度不能为空！');
					return false;
				} else {
					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					//                    /
					this.axios({
						method: 'post',
						url: '/api/f/depts/members/' + this.reid + '/education',

						data: {
							"name": name,
							"major": major,
							"curriculum": curriculum,
							"level": level,
							"achievement": achievement,
							"startTime": (startTime == "") ? undefined : startTime,
							"endTime": (endTime == "") ? undefined : endTime,
						}

					}).then(function(res) {

						var verify = [{
								"name": "name",
								"note": "学习单位"
							},
							{
								"name": "major",
								"note": "专业 "
							},
							{
								"name": "startTime",
								"note": "开始时间 "
							},
							{
								"name": "endTime",
								"note": "结束时间 "
							},
							{
								"name": "curriculum",
								"note": "课程"
							},
							{
								"name": "教育级别",
								"note": "level"
							},
							{
								"name": "achievement",
								"note": "自我评价"
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}
						var data = res.data.data

						that.emsg.employeeEducationExperienceList.push(data)
						that.$Message.success("添加成功")

						that.employeeEducationModel = false
						that.remodal = true

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.employeeEducationModel = false
						that.remodal = true
					})
				}
			},

			sureputEducation: function() {

				var index = this.setIndexs
				var id = this.emsg.employeeEducationExperienceList[index].id

				var education = this.employeeEducation

				var name = education.name
				var major = education.major
				var curriculum = education.curriculum
				var level = education.level
				var achievement = education.achievement
				var startTime = education.startTime
				var endTime = education.endTime

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('学习单位不能为空！');
					return false;
				} else if(level == "") {
					this.$Message.error('教育程度不能为空！');
					return false;
				}else if(startTime == "") {
					this.$Message.error('教育开始时间不能为空！');
					return false;
				}else if(endTime == "") {
					this.$Message.error('教育结束时间不能为空！');
					return false;
				}
				 else {
					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					//                    /
					this.axios({
						method: 'put',
						url: '/api/f/depts/members/' + this.reid + '/education/' + id,

						data: {
							"name": name,
							"major": major,
							"curriculum": curriculum,
							"level": level,
							"achievement": achievement,
							"startTime": (startTime == "") ? undefined : startTime,
							"endTime": (endTime == "") ? undefined : endTime,
						}

					}).then(function(res) {

						var verify = [{
								"name": "name",
								"note": "学习单位"
							},
							{
								"name": "major",
								"note": "专业 "
							},
							{
								"name": "startTime",
								"note": "开始时间 "
							},
							{
								"name": "endTime",
								"note": "结束时间 "
							},
							{
								"name": "curriculum",
								"note": "课程"
							},
							{
								"name": "教育级别",
								"note": "level"
							},
							{
								"name": "achievement",
								"note": "自我评价"
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}
						var data = res.data.data

						that.emsg.employeeEducationExperienceList[index].name = data.name
						that.emsg.employeeEducationExperienceList[index].major = data.major
						that.emsg.employeeEducationExperienceList[index].startTime = data.startTime
						that.emsg.employeeEducationExperienceList[index].endTime = data.endTime
						that.emsg.employeeEducationExperienceList[index].curriculum = data.curriculum
						that.emsg.employeeEducationExperienceList[index].level = data.level
						that.emsg.employeeEducationExperienceList[index].achievement = data.achievement

						that.$Message.success("修改成功")

						that.setemployeeEducationModel = false
						that.remodal = true

					}).catch(function(err) {

// 						that.$Message.error('出错了，请稍后重试！');
// 						setTimeout(msg, 100);
						that.setemployeeEducationModel = false
						that.remodal = true
					})
				}
			},

			delEducation: function() {

				var index = this.setIndexs
				var id = this.emsg.employeeEducationExperienceList[index].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'delete',
					url: '/api/f/depts/members/' + this.reid + '/education/' + id,

				}).then(function(res) {

					var verify = [{
							"name": "name",
							"note": "学习单位"
						},
						{
							"name": "major",
							"note": "专业 "
						},
						{
							"name": "startTime",
							"note": "开始时间 "
						},
						{
							"name": "endTime",
							"note": "结束时间 "
						},
						{
							"name": "curriculum",
							"note": "课程"
						},
						{
							"name": "教育级别",
							"note": "level"
						},
						{
							"name": "achievement",
							"note": "自我评价"
						},

					]

					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}
					var data = res.data.data
					that.emsg.employeeEducationExperienceList.splice(index, 1)
					that.$Message.success("删除成功")
					that.pdelEducation = false
					that.remodal = true

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
					that.pdelEducation = false
					that.remodal = true
				})

			},

			//新增证书

			sureaddCertificate: function() {
				var certificate = this.employeeCertificate

				var name = certificate.name
				var company = certificate.company
				var level = certificate.level
				var awardTime = certificate.awardTime

				if(name == "" || name == null || name.trim().length == 0) {
					this.$Message.error('证书名称不能为空！');
					return false;
				} else {
					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					//                    /
					this.axios({
						method: 'post',
						url: '/api/f/depts/members/' + this.reid + '/certificate',
						data: {
							"name": name,
							"company": company,
							"level": level,
							"awardTime": (awardTime == "") ? undefined : awardTime,
							"uploadFilesList":[]
						}

					}).then(function(res) {

						var verify = [{
								"name": "name",
								"note": "证书名称"
							},
							{
								"name": "company",
								"note": "发证单位 "
							},
							{
								"name": "level",
								"note": "证书级别"
							},
							{
								"name": "awardTime",
								"note": "获取时间 "
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}
						var data = res.data.data

						that.emsg.employeeCertificateList.push(data)
						that.$Message.success("添加成功")

						that.employeeCertificateModel = false
						that.remodal = true

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.employeeCertificateModel = false
						that.remodal = true
					})
				}
			},

			//修改证书信息
			sureputCertificate: function() {

				var index = this.setIndexs
				var id = this.emsg.employeeCertificateList[index].id

				var certificate = this.employeeCertificate

				var name = certificate.name
				var company = certificate.company
				var level = certificate.level
				var awardTime = certificate.awardTime

				if(name == "" || name == null || name.trim().length == 0) {
					this.$Message.error('证书名称不能为空！');
					return false;
				} else {
					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					//                    /
					this.axios({
						method: 'put',
						url: '/api/f/depts/members/' + this.reid + '/certificate/' + id,
						data: {
							"name": name,
							"company": company,
							"level": level,
							"awardTime": (awardTime == "") ? undefined : awardTime,
						}

					}).then(function(res) {

						var verify = [{
								"name": "name",
								"note": "证书名称"
							},
							{
								"name": "company",
								"note": "发证单位 "
							},
							{
								"name": "level",
								"note": "证书级别"
							},
							{
								"name": "awardTime",
								"note": "获取时间 "
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}
						var data = res.data.data

						that.emsg.employeeCertificateList[index].name = data.name
						that.emsg.employeeCertificateList[index].company = data.company
						that.emsg.employeeCertificateList[index].level = data.level
						that.emsg.employeeCertificateList[index].awardTime = data.awardTime

						that.$Message.success("修改成功")

						that.setemployeeCertificateModel = false
						that.remodal = true

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.setemployeeCertificateModel = false
						that.remodal = true
					})
				}
			},

			//删除证书信息

			delCertificate: function() {
				var index = this.setIndexs
				var id = this.emsg.employeeCertificateList[index].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				//                    /
				this.axios({
					method: 'delete',
					url: '/api/f/depts/members/' + this.reid + '/certificate/' + id,

				}).then(function(res) {

					var verify = [{
							"name": "name",
							"note": "证书名称"
						},
						{
							"name": "company",
							"note": "发证单位 "
						},
						{
							"name": "level",
							"note": "证书级别"
						},
						{
							"name": "awardTime",
							"note": "获取时间 "
						},

					]

					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}
					var data = res.data.data
					that.emsg.employeeCertificateList.splice(index, 1)
					that.$Message.success("删除成功")
					that.pdelCertificate = false
					that.remodal = true

				}).catch(function(err) {
					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
					that.pdelCertificate = false
					that.remodal = true
				})

			},

			sureAdd: function() {
				//reid
			},

		},
		mounted() {
			let that = this;
			this.axios.interceptors.response.use(
				response => {
					if(response.data.code && response.data.code == "20000") {
						this.$Message.error(JSON.stringify(response.data.error));
						return false;
					} else if(response.data.code && response.data.code != "200") {
						this.$Message.error(response.data.error);
						return false;
					} else {
						return response;
					}
				},
				error => {
					this.$Message.error(error.response);
					return Promise.reject(error.response) // 返回接口返回的错误信息
				});
			this.getemployeealldata();
			this.btnifshow = 'none';
			this.getdepartmentdata();
			//this.getdepartmentdatas();
			setTimeout(function() {
				that.getallrole();
			}, 0)
		}
	}
</script>

<style>
	@import url("employee.css")
</style>

<style type="text/css">
	.emsg_center {
		display: block;
		width: 100%;
		height: 500px;
		position: relative;
	}
	
	.emsg_center .emsg_Mu {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100px;
		height: 100%;
		box-sizing: border-box;
		border-right: solid 1px #EEEEEE;
	}
	
	.emsg_center .emsg_Mu ul {
		display: block;
	}
	
	.emsg_center .emsg_Mu ul li {
		display: block;
		line-height: 30px;
		cursor: pointer;
	}
	
	.emsg_center .emsg_Mu ul li:hover {
		color: #777;
	}
	
	.emsg_center .emsg_Mu ul li.ac {
		color: cornflowerblue;
	}
	
	.emsg_center .emsg_itemNav {
		display: block;
		padding-left: 120px;
		height: 500px;
		overflow: auto;
	}
	
	.emsg_itemOp {
		text-align: left;
		display: block;
		width: 100%;
	}
	
	.emsg_itemOp .add_op {
		font-size: 20px;
	}
	
	.demo-upload-list {
		display: inline-block;
		width: 60px;
		height: 60px;
		text-align: center;
		line-height: 60px;
		border: 1px solid transparent;
		border-radius: 4px;
		overflow: hidden;
		background: #fff;
		position: relative;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
		margin-right: 4px;
	}
	
	.demo-upload-list img {
		width: 100%;
		height: 100%;
	}
	
	.demo-upload-list-cover {
		display: none;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, .6);
	}
	
	.demo-upload-list:hover .demo-upload-list-cover {
		display: block;
	}
	
	.demo-upload-list-cover i {
		color: #fff;
		font-size: 20px;
		cursor: pointer;
		margin: 0 2px;
	}
	
	.textareaNav {
		margin-top: 20px;
	}
	
	.textarea.ivu-input{
		font-size: 12px;
	}
</style>