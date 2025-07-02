<script setup>
  import Header from '@/components/Header.vue';
  import Card from '@/components/Card.vue';
  import ErrorMessage from '@/components/ErrorMessage.vue';
  import Message from '@/components/Message.vue';

  import useVuelidate from '@vuelidate/core'
  import { required, minLength, maxLength } from '@vuelidate/validators'
  import { reactive, computed } from 'vue';
  import { useRouter, RouterLink } from 'vue-router';
  import axios from 'axios';
  import { useGlobalStore } from "@/stores/state.js";

const router = useRouter();
  const globalStore = useGlobalStore();

  const form = reactive({
	logger: '@benchanan08',
    password: 'J4k9V8tB'
  });

  const rules = computed(() => {
    return {
      logger: { required },
      password: { required, minLength: minLength(8), maxLength: maxLength(16) }
    }
  })

  const v$ = useVuelidate(rules, form);

  const handleFormSubmit = async () => {
    const result = await v$.value.$validate();
    if(result){
      try{
        axios.post(`${globalStore.host}/api/user/login`, form, {
          headers: {
            'Content-Type': 'application/json',
            'Accept-Origin': '*'
          }
        }).then((response) => {
          let dataValues = response.data,
              successMsg = response.data.message,
              msg = new Msg('.alerts');
          localStorage.setItem('token', dataValues.token);

          msg.init({
            type: 'success',
            mode: 'dark',
            autoClose: true,
            msg: successMsg,
          });

          setTimeout(() => {
			      router.go();
          }, 5000);

        }).catch(error => {
          console.log(error)
          let errorMsg = !error.hasOwnProperty('response') ? error.message : error.response.data.message,
              msg = new Msg('.alerts');
          msg.init({
            type: 'error',
            mode: 'dark',
            autoClose: true,
            msg: errorMsg,
          });
        });
      } catch (error){
        console.log(error);
      }
    }
  }
</script>

<template>
  <Message />
  <div class="flex flex-col justify-center items-center h-screen">
    <form @submit.prevent="handleFormSubmit" class="flex justify-center p-8">
      <Card class-name="rounded-lg">
        <Header class-name="mt-8">Hi there, Welcome Back!</Header>
        <p class="text-center">Login in to your account and pick up where you left off 🙂.</p>
        <div class="px-8 mb-8 mt-8">
          <p class="font-bold"><i class="far fa-key-skeleton mr-2"></i>Credentials</p>
          <div class="flex mt-2">
            <div>
              <input v-model="form.logger" type="text" placeholder="Email or Username" class="block text-white focus:outline-none bg-transparent py-2"/>
            </div>
            <div class="mb-4 px-8">
              <input v-model="form.password" type="password" placeholder="Password" class="block text-white focus:outline-none bg-transparent py-2"/>
            </div>
          </div>
          <div v-for="error in v$.$errors">
            <ErrorMessage :message="error.$message"/>
          </div>
        </div>
        <div class="w-full mt-8 flex">
          <button type="submit" class="w-[94%] mx-auto btn">Login</button>
        </div>
      </Card>
    </form>
    <p class="pb-3 text-center">Don't have an account? <RouterLink to="/account/register" class="text-green-500">Create an account</RouterLink></p>
  </div>
</template>

<style scoped>
  input{
    border-bottom: 1px solid #ffff;
  }
</style>
