<template>
	<div>
		<form @submit.prevent>
			<div>
				<label for="email">email</label>
				<input id="email" type="text" v-model="email" />
			</div>
			<div>
				<label for="password">password</label>
				<input id="password" type="text" v-model="password" />
			</div>
			<div>
				<label for="userName">담당자 이름</label>
				<input id="userName" type="text" v-model="userName" />
			</div>
			<div>
				<label for="companyName">회사 상호</label>
				<input id="companyName" type="text" v-model="companyName" />
			</div>
			<div>
				<label for="companyRegiNum">사업자등록번호</label>
				<input id="companyRegiNum" type="text" v-model="companyRegiNum" />
			</div>
			<div>
				<label for="telephoneNum">전화번호</label>
				<input id="telephoneNum" type="text" v-model="telephoneNum" />
			</div>
			<div>
				<label for="companyAddress">회사 주소</label>
				<input id="companyAddress" type="text" v-model="companyAddress" />
			</div>
			<div>
				<label for="businessType">업태</label>
				<input id="businessType" type="text" v-model="businessType" />
			</div>
			<div>
				<label for="businessItem">업종</label>
				<input id="businessItem" type="text" v-model="businessItem" />
			</div>

			<button @click="signup">회원가입</button>
			<!-- <p>{{ logMessage }}</p> -->
		</form>
	</div>
</template>
<script>
// import axios from 'axios';
import { registerUser } from '@/api/user';
export default {
	components: {},
	data() {
		return {
			userName: '',
			email: '',
			password: '',
			companyName: '',
			companyRegiNum: '',
			telephoneNum: '',
			companyAddress: '',
			businessType: '',
			businessItem: '',
		};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		async signup() {
			const userObj = {
				userName: this.userName,
				email: this.email,
				password: this.password,
				companyName: this.companyName,
				companyRegiNum: this.companyRegiNum,
				telephoneNum: this.telephoneNum,
				companyAddress: this.companyAddress,
				businessType: this.businessType,
				businessItem: this.businessItem,
			};
			const response = await registerUser(userObj);
			console.log(response.data);
			this.$router.push({ name: 'main' });
		},
	},
};
</script>
