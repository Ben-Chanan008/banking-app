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
		host: 'https://banking-api.tmaat.com',
		token: decodedToken.value,
		userObj: reactive({}),
		userToken,
		msg: new Msg('.alerts')
	}),

	getters: {
		async fetchUser (state) {
			return new Promise(async (resolve, reject) => {
				try {
					if (!userToken.value)
						reject('No token provided!');
					else {
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
					}
				} catch (error) {
					reject(error);
				}
			});
		},

		user () {
			this.fetchUser.then(res => {
				this.userObj = res.data
			}).catch((error => router.push({ name: 'login' })));
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
		runtest(data){
			console.log(data);
		},
		async verifyToken () {
			// console.log(localStorage.getItem('token'));
			// next();
			let tokenValue;
			try {
				if (!userToken.value)
					tokenValue = false;
				else {
					const response = await axios.get(`${this.host}/api/user/auth/verify`, {
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${userToken.value}`
						}
					}).catch(error => {
						console.log(error)
						if(!error.hasOwnProperty('response'))
							this.msg.init({
								mode: 'dark',
								duration: '5000',
								message: error.message,
								type: 'error'
							});					

						if (error.response.data.is_verified === false) {
							localStorage.clear();
							tokenValue = false;
							router.go();
						}
					});

					if (response.data.is_verified)
						tokenValue = true;
				}

			} catch (error) {
				console.log(error);
			}

			return tokenValue;
		},
		logout () {
			axios.get(`${this.host}/api/user/auth/logout/${this.token.id}`).then((res) => {
				if (res) {
					localStorage.clear();
					router.push({name: 'login'});
				}
			}).catch((error) => { console.log(error) })
		},
		runtest(){
			console.log('I want more');
		}
	}
});
