<template>
	<div>
		<div class="Breadcrumb">

			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>内容分类管理</BreadcrumbItem>

			</Breadcrumb>
		</div>

        <div>
        	<Tree :data="treeData" :render="renderContent"></Tree>
        </div>
		

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
                 treeData: [
                    {
                        title: 'parent 1',
                        expand: true,
                        render: (h, { root, node, data }) => {
                            return h('span', {
                                style: {
                                    display: 'inline-block',
                                    width: '100%'
                                }
                            }, [
                                h('span', [
                                    
                                    h('span', data.title)
                                ]),
                                h('span', {
                                    style: {
                                        display: 'inline-block',
                                        float: 'right',
                                        marginRight: '32px'
                                    }
                                }, [
                                    h('Button', {
                                        props: Object.assign({}, this.buttonProps, {
                                            icon: 'ios-add',
                                            type: 'primary'
                                        }),
                                        style: {
                                            width: '64px'
                                        },
                                        on: {
                                            click: () => { this.append(data) }
                                        }
                                    })
                                ])
                            ]);
                        },
                        children: [
                            {
                                title: 'child 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        expand: true
                                    }
                                ]
                            },
                            {
                                title: 'child 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    }
                                ]
                            }
                        ]
                    }
                ],
                buttonProps: {
                    type: 'default',
                    size: 'small',
                },
                
                operation:{}

			};
		},

		methods: {
           renderContent (h, { root, node, data }) {
                return h('span', {
                    style: {
                        display: 'inline-block',
                        width: '100%'
                    }
                }, [
                    h('span', [
                      
                        h('span', data.title)
                    ]),
                    h('span', {
                        style: {
                            display: 'inline-block',
                            float: 'right',
                            marginRight: '32px'
                        }
                    }, [
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-add'
                            }),
                            style: {
                                marginRight: '8px'
                            },
                            on: {
                                click: () => { 
                                	
                                	var nodeKey=data.nodeKey
                                	
                                	if (nodeKey<2) {
                                		this.append(data) 
                                	}
                                
                                console.log( root, node, data)
                                
                                
                                }
                            }
                        }),
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-remove'
                            }),
                            on: {
                                click: () => { this.remove(root, node, data) }
                            }
                        })
                    ])
                ]);
            },
            append (data) {
                const children = data.children || [];
                children.push({
                    title: 'appended node',
                    expand: true
                });
                this.$set(data, 'children', children);
            },
            remove (root, node, data) {
                const parentKey = root.find(el => el === node).parent;
                const parent = root.find(el => el.nodeKey === parentKey).node;
                const index = parent.children.indexOf(data);
                parent.children.splice(index, 1);
            }
		},

		mounted: function() {
			
			axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"

			var keydata = this.$route.query.key
			var operation = this.operation
			Isjurisdiction.user_jurisdiction(keydata, operation)

			this.tableHeight = (document.body.clientHeight - 420)

			var that = this
		
		/*	this.axios({
				method: 'get',
				url: '/api/f/productcategories',

			}).then(function(res) {
				that.loading = false
				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}
				var data = res.data.data

				for(var i = 0; i < data.length; i++) {

					var type = data[i].type

					if(type == 0) {
						data[i].typeName = "原材料"
					} else if(type == 1) {
						data[i].typeName = "尾料"
					} else if(type == 2) {
						data[i].typeName = "废料"
					} else if(type == 3) {
						data[i].typeName = "退料"
					} else if(type == 4) {
						data[i].typeName = "退货"
					} else if(type == 5) {
						data[i].typeName = "成品"
					}

				}

				that.productCategory = data

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');
				that.loading = false

			})*/

		}

	}
</script>

<style>
	.Drawer_op {
		margin-left: 100px;
	}
</style>