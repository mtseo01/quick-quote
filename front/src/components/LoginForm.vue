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
		<!-- <p>{{ logMessage }}</p> -->
	</form>
</template>
<script>
import axios from 'axios';
export default {
	components: {},
	data() {
		return {
			email: '',
			password: '',
		};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		async login() {
			const userObj = {
				email: this.email,
				password: this.password,
			};
			const response = await axios.post(
				'http://localhost:3000/user/login',
				userObj,
				{ withCredentials: true },
			);
			console.log(response.data);
			this.$router.push({ name: 'main' });
		},
	},
};
</script>
