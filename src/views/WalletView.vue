<script setup>
    let bankData = reactive({});
    import { useGlobalStore } from '@/stores/state.js'
    import Navbar from '@/components/Navbar.vue'
    import DebitCard from '@/components/DebitCard.vue'
    import HeadText from '@/components/HeadText.vue'
    import { onMounted, computed, toRaw, reactive, ref } from 'vue'
    import axios from 'axios'
    import moment from 'moment'
    import Card from '@/components/Card.vue'
    import '@splidejs/vue-splide/css';

    let show = ref(false);
    let password = ref(null);

    onMounted(() => {
        axios.get(`${useGlobalStore().host}/api/bank-account/${useGlobalStore().token.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${useGlobalStore().userToken}`
            }
        }).then(response => {
            if(response){
                Object.assign(bankData, response?.data);
            }
        }).catch((e) => console.log({e}));
    });    

    const showPass = () => {
        show.value = !show.value
    }
    
</script>

<template>
    <Navbar />
    <div class="flex gap-2 m-8">
        <i class="fal fa-coins"></i>
        <HeadText>My Account</HeadText>
    </div>
    <div class="grid grid-cols-1/3 gap-4 mx-4">
        <div v-for="bank in bankData" class="">
            <div class="w-[400px]">
                <DebitCard 
                :noTransaction="false" 
                :type="bank[0].Card?.card_type"
                :date="moment(bank[0].Card?.exp_date).format('MM/YY')"
                :balance="bank[0].Card?.balance[0].amount"
                :number="bank[0].Card?.card_number"
                />
            </div>
        </div>
        <div>
            <HeadText className="mb-6">Bank Info</HeadText>
            <Card className="rounded-lg">
                <div class="grid gap-y-4 grid-cols-3">
                    <div>
                        <p>Account Number</p>
                        <span class="font-semibold" v-for="bank in bankData">{{ bank[0].account_number }}</span>
                    </div>
                    <div>
                        <p>Card Type</p>
                        <span class="font-semibold uppercase" v-for="bank in bankData">{{ bank[0].Card.card_type }}</span>
                    </div>
                    <div>
                        <p>Institution Number</p>
                        <span class="font-semibold uppercase" v-for="bank in bankData">{{ bank[0].institution_number }}</span>
                    </div>
                     <div>
                        <p>Transit Number</p>
                        <span class="font-semibold uppercase" v-for="bank in bankData">{{ bank[0].transit_number }}</span>
                    </div>
                    <div class="col-span-2">
                        <p>Password</p>
                        <div class="flex justify-between border-b-2 border-b-slate-100">
                            <input :type="show ? 'text' : 'password'" v-model="password" v-for="bank in bankData" :value="bank[0].account_password" name="password" id="" class="bg-transparent p-2 focus:outline-none"/>
                            <i :class="`far hover:cursor-pointer ${show ? 'fa-eye' : 'fa-eye-alt'}`" @click="showPass"></i>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>