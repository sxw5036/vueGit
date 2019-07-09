<template>
	<div>
		<textarea id="editor" :value="value"></textarea> {{value}}
	</div>

</template>

<script>
	import axios from 'axios'
	import tinymce from 'tinymce/tinymce';
	import 'tinymce/themes/modern/theme';
	import 'tinymce/plugins/paste';
	import 'tinymce/plugins/link';
	import 'tinymce/plugins/image';

	/*const INIT = 0;
	const CHANGED = 2;
	var EDITOR = null;*/
	export default {
		props: {
			value: {
				type: String,
				required: true
			},
			setmsg: {}
		},
		watch: {

		},
		data: function() {
			return {
				status: 0,

			}
		},
		methods: {},
		
		watch:{
        value(val){
        	
        	
              //更新外部数据  编辑器内同步更新
            
              if(this.setmsg.status=="change"){
              	tinymce.get('editor').setContent(val);
              }
              
           
        }
    },
		
		mounted: function() {
			var that = this;

			/*Object.assign(setmsg, that.setmsg)*/
			tinymce.init({
				selector: '#editor',
				language_url: 'static/tinymce/zh_CN.js',
				language: 'zh_CN',

				plugins: [
					"advlist autolink lists link image charmap print preview anchor",
					"searchreplace visualblocks code fullscreen",
					"insertdatetime media table contextmenu paste imagetools wordcount"
				],
				toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image ",

				images_upload_handler: function(blobInfo, success, failure) {

					let formData = new FormData()

					formData.append('multipartFileList', blobInfo.blob(), blobInfo.filename())

					var upurl = that.setmsg.images_upload_url

					axios({
						method: 'post',
						url: upurl,
						data: formData

					}).then(function(res) {

						var verify = [{
								"name": "multipartFileList",
								"note": "图片资源 "
							},

						]

						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						var data = res.data.data

						for(var i = 0; i < data.length; i++) {
							const img = data[i].path
							success(img)
						}

					}).catch(function(err) {

					})

				},

				init_instance_callback: function(editor) {
					editor.on('input change undo redo', () => {
                        that.setmsg.status=""
						var content = editor.getContent()
						that.$emit('change', content);
					});
				},

				/*setup: (editor) => {
					// 初次化编辑器
					editor.on('init', () => {
						// 设置默认值
						editor.setContent(that.value);

					});
				}*/

			});

			/*  var4 _this = this;
			  const setting =
			      {
			         
			          language:"zh_CN",
			          init_instance_callback:function(editor) {
			              EDITOR = editor;
			              console.log("Editor: " + editor.id + " is now initialized.");
			              editor.on('input change undo redo', () => {
			                  var content = editor.getContent()
			                  _this.$emit('input', content);
			              });
			          },
			          plugins:[]
			      };*/
			/* Object.assign(setting,_this.setting)*/

		},
		/*beforeDestroy: function () {
		    tinymce.get(this.id).destroy()
		}*/
	}
</script>

<style src="../../static/tinymce/skins/lightgray/skin.min.css">

</style>