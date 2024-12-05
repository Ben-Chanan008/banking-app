import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import router from '../router';

const userToken = ref(localStorage.getItem('token'));
const decodedToken = ref(null);

if (userToken.value)
	decodedToken.value = jwtDecode(userToken.value);

export const useGlobalStore = defineStore('global', {
	state: () => ({
		host: 'http://localhost:3001',
		token: decodedToken.value,
		userObj: reactive({})
	}),

	getters: {
		async fetchUser (state) {
			return new Promise(async (resolve, reject) => {
				try {
					let dataValues;
					const response = await axios.get(`${state.host}/api/user/get-user/${state.token.id}`, {
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${userToken.value}`
						}
					}).catch(error => {
						localStorage.removeItem('token');
						router.push('/user/login');
					});
					resolve(response.data);
				} catch (error) {
					reject(error);
				}
			});
		},

		user () {
			this.fetchUser.then(res => {
				this.userObj = res.data
			});
			return this.userObj;
		},

		fullName () { return this.user.first_name + ' ' + this.user.last_name },

		initials () {
			const nameParts = this.fullName.trim().split(' ');
			const initials = nameParts.filter((part) => part.length > 0)
				.map(part => part[0].toUpperCase())
				.join('')

			return initials
		}

	},

	actions: {
		setHost (newHost) {
			this.host = newHost;
		},
		async verifyToken () {
			// console.log(localStorage.getItem('token'));
			// next();
			let tokenValue;
			try {
				if (!userToken.value)
					return false;
				else {
					const response = await axios.get(`${this.host}/api/user/auth/verify`, {
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${userToken.value}`
						}
					}).catch(error => {
						console.log(error)
						if (error.response.data.is_verified === false) {
							localStorage.clear();
							return false;
						}
					});

					if (response.data.is_verified)
						return true;
				}

			} catch (error) {
				console.log(error);
			}
		},
		logout () {
			axios.get(`${this.host}/api/user/auth/logout/${this.token.id}`).then((res) => {
				if (res) {
					localStorage.clear();
					router.go();
				}
			}).catch((error) => { console.log(error) })
		}
	}
});
