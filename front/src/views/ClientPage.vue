<template>
	<div class="container">
		<div class="nav">
			<p>목록</p>
			<p class="p-btn" @click="post">거래처 정보 입력</p>
			<p class="p-btn" @click="get">거래처 조회</p>
		</div>
		<div v-if="clientPost" class="component"><CreateForm /></div>
		<div v-else-if="clinetRead" class="component"><GetClients /></div>
		<!-- <CreateForm></CreateForm> -->
	</div>
</template>
<script>
import CreateForm from '@/components/client/CreateForm.vue';
import GetClients from '@/components/client/GetClients.vue';
export default {
	components: { CreateForm, GetClients },
	data() {
		return {
			clientPost: false,
			clinetRead: false,
		};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		post() {
			this.clinetRead = false;
			return (this.clientPost = true);
		},
		get() {
			this.clientPost = false;
			return (this.clinetRead = true);
		},
	},
};
</script>

<style scoped>
.container {
	display: flex;
}
.nav {
	position: relative;
	left: 0;
	width: 200px;
}
.p-btn:hover {
	cursor: pointer;
}
</style>
