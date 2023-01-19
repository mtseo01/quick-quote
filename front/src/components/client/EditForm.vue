<template>
	<form @submit.prevent>
		<div>
			<input
				placeholder="상호명(*필수)"
				type="text"
				v-model="client.companyName"
			/>
		</div>
		<div>
			<input
				placeholder="담당자 이름"
				type="text"
				v-model="client.clientName"
			/>
		</div>
		<div>
			<input
				placeholder="사업자등록번호"
				type="text"
				v-model="client.companyRegiNum"
			/>
		</div>
		<div><input placeholder="이메일" type="text" v-model="client.email" /></div>
		<div>
			<input placeholder="전화번호" type="text" v-model="client.telephoneNum" />
		</div>
		<div>
			<input placeholder="주소" type="text" v-model="client.companyAddress" />
		</div>

		<button type="submit" @click="update">변경하기</button>
	</form>
	<p>{{ logMessage }}</p>
</template>
<script>
import { getClinet, updateClient } from '@/api/client';
export default {
	components: {},
	data() {
		return {
			client: [
				{
					companyName: '',
					clientName: '',
					companyRegiNum: '',
					email: '',
					telephoneNum: '',
					companyAddress: '',
					_id: '',
				},
			],
			logMessage: '',
		};
	},
	setup() {},
	created() {
		this.fetch();
	},
	mounted() {},
	unmounted() {},
	methods: {
		async fetch() {
			const clientId = this.$route.params.id;
			const { data } = await getClinet(clientId);

			this.client = data.doc;
		},
		async update() {
			let clientId = this.client._id;
			const clientObj = this.client;
			const { data } = await updateClient(clientId, clientObj);

			this.logMessage = data.message;
		},
	},
};
</script>
