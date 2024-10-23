import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia';
import {jwtDecode} from "jwt-decode";
import axios from 'axios';

const userToken = ref(localStorage.getItem('token'));
const decodedToken = ref(null);

if(userToken.value)
	decodedToken.value = jwtDecode(userToken.value);

export const useGlobalStore = defineStore('global', {
	state: () => ({
		host: 'http://localhost:3001',
		token: decodedToken.value,
		userObj: ref(null)
	}),
	
	getters: {
		async fetchUser(state){
			return new Promise(async(resolve, reject) => {
				try{	
					let dataValues;
					const response = await axios.get(`${state.host}/api/user/get-user/${state.token.id}`, {
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${userToken.value}`
						}
					});
					resolve(response.data);
				} catch (error){
					reject(error);
				}			
			});
		},
		
		user(){
			this.fetchUser.then(res => {
				this.userObj = res.data
			});
			return this.userObj;
		},
	
		fullName(){
			return this.user.first_name + ' ' + this.user.last_name
		},
	},

	actions: {
		setHost(newHost){
			this.host = newHost;
		},
	}
});
