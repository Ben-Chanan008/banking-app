<script setup>
import Navbar from '@/components/Navbar.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import BackGround from '@/assets/images/blackman.png';
import Happy from '@/assets/images/happy.png';
import Money from '@/assets/images/money.png';
import TrustedPartners from '@/components/TrustedPartners.vue';
import MissionandVision from '@/components/MissionandVision.vue';
</script>

<template>
  <Navbar />
  <section id="hero" class="h-[75vh] flex justify-center items-center flex-col">
    <div class="flex items-center justify-center">
      <div class="w-1/2">
        <h1 class="text-5xl font-bold mb-2 text-center">Safeguarding Your Financial Future with <span class="text-primary">Pixlr</span></h1>
        <!-- <img :src="BackGround" alt=""> -->
        <p class="text-center">The next big thing in the financial world.</p>
      </div>
      <img :src="BackGround" alt="blackman-on-phone">
    </div>
  </section>
  <TrustedPartners />
  <section id="hero" class="h-[75vh] mt-16 flex justify-center items-center flex-col">
    <div class="flex items-center justify-center">
      <div class="w-1/2">
        <h1 class="text-5xl font-bold mb-2 text-center">At <span class="text-primary">Pixlr</span>,</h1>
        <!-- <img :src="BackGround" alt=""> -->
        <p class="text-center mt-3">We prioritize our customers' financial wellbeing and experience. Pixlr Bank loves good feedback from happy customers. Leaving a smile on your face each time you use our bank is a major priority for us. Our incredibly experienced team keeps you at the center of their of everything they do. Everything we do, we do for <span class="text-primary font-bold">you</span>. None of our competitors can match our competence and fire for happy customers, that's what makes us unique.</p>
      </div>
      <img :src="Happy" width="450px" alt="happy-man">
    </div>
  </section>
  <section class="mt-16">
    <div class="flex items-center justify-center">
      <div class="w-1/2">
        <h1 class="text-5xl font-bold mb-2 text-center">Get <span class="text-primary">$100</span> on a new account,</h1>
        <!-- <img :src="BackGround" alt=""> -->
        <p class="text-center mt-3">Like you can tell already, we love you. To show our love to our customers, we are giving a <span class="text-primary font-bold">$100</span> gift to every new customer at Pixlr. Hurry up now and register with us.</p>
        <div class="flex mt-4">
          <button class="btn mx-auto">Get Started</button>
        </div>
      </div>
      <img :src="Money" width="450px" alt="happy-man">
    </div>
  </section>
  <Footer />
</template>

<style scoped>

</style>