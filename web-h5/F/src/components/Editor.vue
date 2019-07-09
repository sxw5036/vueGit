<template>



	<div>



		<span @click="windowBig">打开全屏</span>
		<span @click="windowSmall">退出全屏</span>

		<input type="file" @change="upimg()" class="ac-uploader" ></input>
		<quill-editor :content="content" ref="myQuillEditor" :options="editorOption" @change="onEditorChange($event)">
		</quill-editor>

		{{content}}

		<span @click="getcontent">获取内容</span>



		<div>
			<!-- <Upload class="text-uploader" 
			ref="upload" 
			:show-upload-list="false" 
			:format="['jpg','jpeg','png']" 
			:max-size="2048"
			 multiple type="drag" 
			 @change="upimg()" 
			 style="display: inline-block;width:58px;">
				<div style="width: 58px;height:58px;line-height: 58px;">
					<Icon type="camera" size="20"></Icon>
				</div>
			</Upload> -->
		</div>

	</div>




</template>

<script>
		
	
	// 工具栏配置
	const toolbarOptions = [
		['bold', 'italic', 'underline', 'strike'], // toggled buttons
		['blockquote', 'code-block'],

		[{
			'header': 1
		}, {
			'header': 2
		}], // custom button values
		[{
			'list': 'ordered'
		}, {
			'list': 'bullet'
		}],
		[{
			'script': 'sub'
		}, {
			'script': 'super'
		}], // superscript/subscript
		[{
			'indent': '-1'
		}, {
			'indent': '+1'
		}], // outdent/indent
		[{
			'direction': 'rtl'
		}], // text direction

		[{
			'size': ['small', false, 'large', 'huge']
		}], // custom dropdown
		[{
			'header': [1, 2, 3, 4, 5, 6, false]
		}],

		[{
			'color': []
		}, {
			'background': []
		}], // dropdown with defaults from theme
		[{
			'font': []
		}],
		[{
			'align': []
		}],
		['link', 'image', 'video'],
		['clean'] // remove formatting button
	]



	import 'quill/dist/quill.core.css'
	import 'quill/dist/quill.snow.css'
	import 'quill/dist/quill.bubble.css'
	import {
		quillEditor
	} from 'vue-quill-editor'

	export default {
		data() {
			return {
				upisShow: false,
				content: '',
				editorOption: {
					placeholder: '',
					theme: 'snow', // or 'bubble'
					modules: {
						toolbar: {
							container: toolbarOptions, // 工具栏
							handlers: {
								'image': function(value) {
									if (value) {
										document.querySelector('.ac-uploader').click()
									} else {
										this.quill.format('image', false);
									}
								}
							}
						}
					}
				}

			};

		},


		components: {
			quillEditor
		},

		computed: {
			editor() {
				return this.$refs.myQuillEditor.quill
			}
		},

		methods: {

			onEditorChange: function({
				quill,
				html,
				text
			}) {
				this.content = html
			},



			getcontent: function() {
				alert(this.content)
			},


			isup: function() {
				this.upisShow = !this.upisShow

			},

			upimg: function() {
				// res为图片服务器返回的数据
				// 获取富文本组件实例
				let quill = this.$refs.myQuillEditor.quill


				// 获取光标所在位置
				let length = quill.getSelection().index;
				// 插入图片  res.info为服务器返回的图片地址
				
				var imgData=[
					" http://www.htjjsc.com/template/pc/rainbow/static/images/index/ordericon1.png",
					
				]
				
				var ImgLen=imgData.length - 1
				var minImgLen=(-1)
				
				
				
				for(var i=ImgLen ; i>minImgLen;i--){
					
				
				
					quill.insertEmbed(length, 'image',
					imgData[i]
						)
					// 调整光标到最后
					
				}
				quill.setSelection(length + 1)


			},



			handleView(name) {
				this.imgName = name;
				this.visible = true;
			},
			handleRemove(file) {
				const fileList = this.$refs.upload.fileList;
				this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
			},
			handleSuccess(res, file) {
				this.upimg()
			},
			handleFormatError(file) {
				this.$Notice.warning({
					title: 'The file format is incorrect',
					desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
				});
			},
			handleMaxSize(file) {
				this.$Notice.warning({
					title: 'Exceeding file size limit',
					desc: 'File  ' + file.name + ' is too large, no more than 2M.'
				});
			},
			handleBeforeUpload() {
				const check = this.uploadList.length < 5;
				if (!check) {
					this.$Notice.warning({
						title: 'Up to five pictures can be uploaded.'
					});
				}
				return check;
			}









			,


			windowBig: function() {

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




		}
	}
</script>

<style>

</style>
