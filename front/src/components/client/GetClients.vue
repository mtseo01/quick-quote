<template>
	<div>
		<div>{{ logMessage }}</div>
		<div v-for="client in clients" :key="client">
			{{ client.clientName }}
		</div>
	</div>
</template>
<script>
import { getClientAll } from '@/api/client';
export default {
	components: {},
	data() {
		return {
			clients: [],
			logMessage: '',
		};
	},
	setup() {},
	created() {
		this.getClients();
	},
	mounted() {},
	unmounted() {},
	methods: {
		async getClients() {
			const { data } = await getClientAll();
			this.clients = data.docs;
			this.logMessage = data.message;
		},
	},
};
</script>
