<style scoped="scoped">

</style>

<template>
	<div id="menulay">
		<div style="width: 100%;"v-show="videoalert==true" >
			<video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"
			 :events="events" @fullscreenchange="onPlayerFullScreenchange($event)"></video-player>
		</div>




		<p v-for="(item , index) in videos" @click="playV(index)">
			{{item.title}}
		</p>


	</div>
</template>

<script>
	//document.getElementById("vjs_video_420").className="video-js vjs-fluid vjs_video_420-dimensions vjs-controls-enabled vjs-workinghover vjs-v6 vjs-has-started vjs-paused  vjs-user-inactive"

	export default {
		name: 'menulay',


		data() {

			return {
				events: ['play', 'fullscreenchange'],
				videoalert:false, //视频是否显示
				videos: [{
						imgs: "http://localhost:8080/static/img/1111.bb49197.jpg",
						vsrc: "http://localhost:8080/dev/videofile/4dyvv8n52ps0.mp4",
						"title": "视频一"
					},
					{
							imgs: "http://localhost:8080/static/img/1111.bb49197.jpg",
							vsrc: "http://localhost:8080/dev/videofile/4droidz391q8.mp4",
							"title": "视频二"
						},

				],



				playerOptions: {
					playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
					autoplay: false, //如果true,浏览器准备好时开始回放。
					muted: false, // 默认情况下将会消除任何音频。
					loop: false, // 导致视频一结束就重新开始。
					preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
					language: 'zh-CN',
					aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
					sources: [{
						type: "",
						src: "http://localhost:8080/dev/videofile/4droidz391q8.mp4" //url地址
					}],
					poster: "http://localhost:8080/static/img/1111.bb49197.jpg", //你的封面地址
					// width: document.documentElement.clientWidth,
					notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
					controlBar: {
						timeDivider: true,
						durationDisplay: true,
						remainingTimeDisplay: false,
						fullscreenToggle: true //全屏按钮
					}
				}



			}
		},


		components: {

		},

		methods: {


			playV: function(index) {
				this.playerOptions.sources[0].src = this.videos[index].vsrc
				this.playerOptions.poster = this.videos[index].imgs
				this.playerOptions.autoplay = true
				this.playerOptions.controlBar.remainingTimeDisplay=true
                this.videoalert=true
			},

           //监听视频全屏按钮
			onPlayerFullScreenchange: function(player) {
				/*  player.exitFullscreen()  */
                //判断浏览器是否为全屏播放
				if (!player.isFullscreen()) {
					this.videoalert=false
					this.playerOptions.autoplay = false
					player.pause()
				} else {
					

				}

			}

		},
		mounted: function() {

		}
		/**/

	}
</script>

<style scoped="scoped">
	.video-js.vjs-fluid,
	.video-js.vjs-16-9,
	.video-js.vjs-4-3 {
		position: relative;
		width: 100% !important;
		height: 100% !important;
		padding-top: 0 !important;
	}

	/* 
	
    video-js vjs-fluid vjs_video_420-dimensions vjs-controls-enabled vjs-workinghover vjs-v6 vjs-has-started vjs-paused vjs-user-inactive" */
</style>
