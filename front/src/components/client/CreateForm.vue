<template>
	<form @submit.prevent>
		<div>
			<input placeholder="상호명(*필수)" type="text" v-model="companyName" />
		</div>
		<div>
			<input placeholder="담당자 이름" type="text" v-model="clientName" />
		</div>
		<div>
			<input
				placeholder="사업자등록번호"
				type="text"
				v-model="companyRegiNum"
			/>
		</div>
		<div><input placeholder="이메일" type="text" v-model="email" /></div>
		<div>
			<input placeholder="전화번호" type="text" v-model="telephoneNum" />
		</div>
		<div><input placeholder="주소" type="text" v-model="companyAddress" /></div>

		<button type="submit" @click="submit">등록하기</button>
	</form>
</template>
<script>
// import axios from 'axios';
import { registerClient } from '@/api/client';
export default {
	components: {},
	data() {
		return {
			companyName: '', // 필수
			clientName: '',
			companyRegiNum: '',
			email: '',
			telephoneNum: '',
			companyAddress: '',
		};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		async submit() {
			const clientObj = {
				companyName: this.companyName, // 필수
				clientName: this.clientName,
				companyRegiNum: this.companyRegiNum,
				email: this.email,
				telephoneNum: this.telephoneNum,
				companyAddress: this.companyAddress,
			};
			const { data } = await registerClient(clientObj);

			console.log(data);
		},
	},
};
</script>
<style scoped>
input {
	width: 500px;
}
</style>
