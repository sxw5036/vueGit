<template>
	<div>
		<textarea id="editor" :value="value"></textarea>

	</div>

</template>

<script>
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
		mounted: function() {
			var that = this;
			var setmsg = {
				selector: '#editor',
				
				language: 'zh_CN',
				plugins: [
					"advlist autolink lists link image charmap print preview anchor",
					"searchreplace visualblocks code fullscreen",
					"insertdatetime media table contextmenu paste imagetools wordcount"
				],
				toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image ",

				images_upload_handler: function(blobInfo, success, failure) {
					setTimeout(function() {
						// no matter what you upload, we will turn it into TinyMCE logo :)
						success('http://moxiecode.cachefly.net/tinymce/v9/images/logo.png');
					}, 2000);
				},

				init_instance_callback: function(editor) {
					editor.on('input change undo redo', () => {

						
						var content = editor.getContent()
						that.$emit('change', content);
					});
				}
			}
			Object.assign(setmsg, that.setmsg)
			tinymce.init(setmsg);

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

<style src="../skins/lightgray/skin.min.css">

</style>