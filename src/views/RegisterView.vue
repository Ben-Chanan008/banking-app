<script setup>
    import Header from '@/components/Header.vue';
    import Card from '@/components/Card.vue';
    import ErrorMessage from '@/components/ErrorMessage.vue';
    import Message from '@/components/Message.vue';
    
    import useVuelidate from '@vuelidate/core'
    import { required, email, sameAs, minLength, maxLength } from '@vuelidate/validators'
    import { reactive, computed } from 'vue';
    import { useRouter, RouterLink } from 'vue-router';
    import axios from 'axios';

    const router = useRouter();

    const form = reactive({
        fullName: {
            firstname: '',
            lastname: '',
        },
        social: {
            email: '',
            phone: '',
            username: '',
            address: '',
        },
        secure: {
            password: '',
            confirm: ''
        }
    }); 

    const rules = computed(() => {
        return {
            fullName: {
                firstname: { required },
                lastname: { required },
            },
            social: {
                email: { required, email },
                username: { required },
                address: { required },
                phone: { required },
            },
            secure: {
                password: { required, minLength: minLength(8), maxLength: maxLength(16) },
                confirm: { required, sameAs: sameAs(form.secure.password), minLength: minLength(8), maxLength: maxLength(16) } 
            }
        }
    });

    const v$ = useVuelidate(rules, form);

    async function handleFormSubmit(){
        const result = await v$.value.$validate()
        if(result){
            try{
                axios.post('http://localhost:3001/api/user/register', {
                    first_name: form.fullName.firstname,
                    last_name: form.fullName.lastname,
                    email: form.social.email,
                    password: form.secure.password,
                    phone: form.social.phone,
                    username: '@' + form.social.username
                }, {
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }).then((response) => {
                  let dataValues = response.data,
                      token = dataValues.token,
                      errorMsg = response.data.message,
                      msg = new Msg('.alerts');
                  localStorage.setItem('token', token);

                  msg.init({
                    type: 'success',
                    mode: 'dark',
                    autoClose: true,
                    msg: errorMsg,
                  });

                  setTimeout(() => {
                    router.push('/dashboard');
                  }, 5000);
                }).catch(error => {
                    let errorMsg = error.response.data.message,
                        msg = new Msg('.alerts');
                    msg.init({
                        type: 'error',
                        mode: 'dark',
                        autoClose: true,
                        msg: errorMsg,
                    });
                });
            } catch(error){
                console.log(error)
            }
        }
    }
</script>

<template>
    <Message />
    <form @submit.prevent="handleFormSubmit" class="flex justify-center p-8">
        <Card class-name="rounded-lg">
            <Header class-name="mt-8">Create Your Account!</Header>
            <p class="text-center">Fill out the following information carefully.</p>
            <div class="px-8 mb-8 mt-8">
                <p class="font-bold"><i class="far fa-user mr-2"></i>Full Name</p>
                <div class="flex mt-2">
                    <div>
                        <input v-model="form.fullName.firstname" type="text" placeholder="First Name" class="block text-white focus:outline-none bg-transparent py-2"/>
                    </div>
                    <div class="mb-4 px-8">
                        <input v-model="form.fullName.lastname" type="text" placeholder="Last Name" class="block text-white focus:outline-none bg-transparent py-2"/>
                    </div>
                </div>
                <div v-for="error in v$.fullName.$errors">
                    <ErrorMessage :message="error.$message"/>
                </div>
            </div>
            <div class="mt-8 px-8">
                <p class="font-bold"><i class="far fa-address-card mr-2"></i>Social Information</p>
                <div class="flex mt-2">
                    <div>
                        <div class="mb-4">
                            <input v-model="form.social.email" type="email" placeholder="Email address" class="block text-white focus:outline-none bg-transparent py-2"/>
                        </div>
                        <div class="mb-4">
                            <input v-model="form.social.username" type="text" placeholder="Username" class="block text-white focus:outline-none bg-transparent py-2"/>
                        </div>
                    </div>
                    <div class="px-8">
                        <div class="mb-4">
                            <input v-model="form.social.phone" type="tel" placeholder="Phone Number" class="block text-white focus:outline-none bg-transparent py-2"/>
                        </div>
                        <div>
                            <input v-model="form.social.address" type="text" placeholder="Address" class="block focus:outline-none bg-transparent py-2 text-white"/>
                        </div>
                    </div>
                </div>
                <div v-for="error in v$.social.$errors">
                    <ErrorMessage :message="error.$message"/>
                </div>
            </div>
            <div class="mt-8 px-8">
                <p class="font-bold"><i class="mr-2 far fa-lock"></i>Secure Your Account</p>
                <div class="flex mt-2">
                    <div class="w-full">
                        <input v-model="form.secure.password" type="password" placeholder="Password" class="block text-white w-full focus:outline-none bg-transparent py-2"/>
                    </div>
                    <div class="w-full px-8">
                        <input v-model="form.secure.confirm" type="password" placeholder="Confirm Password" class="block text-white w-full focus:outline-none bg-transparent py-2"/>
                    </div>
                </div>
                <div v-for="error in v$.secure.$errors">
                    <ErrorMessage :message="error.$message"/>
                </div>
            </div>
            <div class="w-full mt-8 flex">
                <button type="submit" class="w-[94%] mx-auto btn">Create My Account</button>
            </div>
        </Card>
    </form>
    <p class="pb-3 text-center">Already have an account? <RouterLink to="/user/login" class="text-green-500">Login</RouterLink></p>
</template>

<style scoped>
    input{
        border-bottom: 1px solid #ffff;
    }
</style>
