<template>
	<!-- <view class="content">
		<image class="logo" src="/static/logo2.jpg"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view> -->
	<swiper class="banner" indicator-dots circular :autoplay="false">
		<swiper-item v-for="(item) in urlList" :key='item'>
			<image mode="222" :src="item.url" alt="商品预览" @tap="onGoPageImg(item.url)">
			</image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				title: '食不食油饼啊',
				urlList: [{
						id: 1,
						url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_1.jpg'
					},
					{
						id: 2,
						url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_2.jpg'
					},
					{
						id: 3,
						url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_3.jpg'
					},
					{
						id: 4,
						url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_4.jpg'
					},
					{
						id: 5,
						url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_5.jpg'
					}
				]

			}
		},
		onLoad() {

		},
		methods: {
			onGoPageImg(url) {
				uni.previewImage({
					urls: this.urlList.map(item => {
						return item.url
					}),
					current:url
				})
			}
		}
	}
</script>

<style>
	.banner,
	.banner image {
		height: 750rpx;
		width: 750rpx;
	}
</style>