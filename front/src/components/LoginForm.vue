<template>
	<form @submit.prevent>
		<div>
			<label for="email">email</label>
			<input id="email" type="text" v-model="email" />
		</div>
		<div>
			<label for="password">password</label>
			<input id="password" type="text" v-model="password" />
		</div>
		<button @click="login">로그인</button>
		<p>{{ logMessage }}</p>
	</form>
</template>
<script>
// import axios from 'axios';
import { loginUser } from '@/api/user';
export default {
	components: {},
	data() {
		return {
			email: '',
			password: '',
			logMessage: '',
		};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		async login() {
			try {
				const userObj = {
					email: this.email,
					password: this.password,
				};
				const response = await loginUser(userObj);
				console.log(response.data);
				this.logMessage = response.data.message;
				this.$router.push({ name: 'main' });
			} catch (error) {
				console.log(error.response.data.message);
				this.logMessage = error.response.data.message;
			}
		},
	},
};
</script>
