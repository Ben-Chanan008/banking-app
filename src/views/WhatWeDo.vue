<script setup>
  import Navbar from '@/components/Navbar.vue';
  import Header from '@/components/Header.vue';
  import MissionAndVision from '@/components/MissionandVision.vue';
  import HeroPack from '@/components/HeroPack.vue';
  import Card from '@/components/Card.vue'
  import Footer from '@/components/Footer.vue'
</script>

<template>
  <Navbar />
  <HeroPack>
    <p class="font-bold text-3xl text-center text-green-600">What We Do</p>
  </HeroPack>
  <section class="mt-8 mx-8">
    <p class="font-bold mb-3 text-3xl text-green-500">Unlock Your Financial Future with Pixlr</p>
    <p>At Pixlr Bank we make sure that your financial well being is secured. We are not just any other bank, we provide tools that help you improve your financial status and increase your social and mental confidence every where you go, becuase when you are financially secure, we are secure.</p>
    <br>
    <p>Pixlr bank provides you with more than enough tools to improve your life. These many tools have been carefully, empathetically made for you to use and improve your quality of life. Starting an account with us is the first step to your bright financial future.</p>
  </section>
  <section class="mt-16">
    <Header>What we Stand For</Header>
    <p class="text-center">Here at <span class="text-primary">Pixlr</span>, we believe in a core set of values and these values define our mission and vision for the future.</p>
    <MissionAndVision />
  </section>
  <section class="mx-8 mt-16">
    <Header class-name="mb-8">What Makes Us Different?</Header>
    <div class="grid gap-3 grid-cols-3">
      <Card class-name="rounded-lg">
        <div class="flex flex-col">
          <i class="far mb-0 fa-2x text-primary font-bold mr-3 fa-user-group"></i>
          <Header class-name="text-start mb-3">Reliable Customer Service</Header>
          <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, beatae! Mollitia animi iusto, consequatur eaque dolorem rerum magni est quod earum iure! Laudantium ipsa eveniet sit asperiores mollitia, ratione dolorum facilis nostrum non odio placeat voluptatum quis nobis ipsam voluptates!</p>
        </div>
      </Card>
      <Card class-name="rounded-lg">
        <div class="flex flex-col">
          <i class="far mb-0 fa-2x text-primary font-bold mr-3 fa-lock-keyhole"></i>
          <Header class-name="text-start mb-3">Secure Financial Future</Header>
          <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, beatae! Mollitia animi iusto, consequatur eaque dolorem rerum magni est quod earum iure! Laudantium ipsa eveniet sit asperiores mollitia, ratione dolorum facilis nostrum non odio placeat voluptatum quis nobis ipsam voluptates!</p>
        </div>
      </Card>
      <Card class-name="rounded-lg">
        <div class="flex flex-col">
          <i class="far mb-0 fa-2x text-primary font-bold mr-3 fa-smile-beam"></i>
          <Header class-name="text-start mb-3">Great User Experience</Header>
          <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, beatae! Mollitia animi iusto, consequatur eaque dolorem rerum magni est quod earum iure! Laudantium ipsa eveniet sit asperiores mollitia, ratione dolorum facilis nostrum non odio placeat voluptatum quis nobis ipsam voluptates!</p>
        </div>
      </Card>
      <Card class-name="rounded-lg">
        <div class="flex flex-col">
          <i class="far mb-0 fa-2x text-primary font-bold mr-3 fa-camera-security"></i>
          <Header class-name="text-start mb-3">R2S Secured Transactions</Header>
          <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, beatae! Mollitia animi iusto, consequatur eaque dolorem rerum magni est quod earum iure! Laudantium ipsa eveniet sit asperiores mollitia, ratione dolorum facilis nostrum non odio placeat voluptatum quis nobis ipsam voluptates!</p>
        </div>
      </Card>
      <Card class-name="rounded-lg">
        <div class="flex flex-col">
          <i class="far mb-0 fa-2x text-primary font-bold mr-3 fa-business-time"></i>
          <Header class-name="text-start mb-3">24/7 Transaction Time</Header>
          <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, beatae! Mollitia animi iusto, consequatur eaque dolorem rerum magni est quod earum iure! Laudantium ipsa eveniet sit asperiores mollitia, ratione dolorum facilis nostrum non odio placeat voluptatum quis nobis ipsam voluptates!</p>
        </div>
      </Card>
      <Card class-name="rounded-lg">
        <div class="flex flex-col">
          <i class="far mb-0 fa-2x text-primary font-bold mr-3 fa-cloud-bolt"></i>
          <Header class-name="text-start mb-3">Great Opportunities</Header>
          <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, beatae! Mollitia animi iusto, consequatur eaque dolorem rerum magni est quod earum iure! Laudantium ipsa eveniet sit asperiores mollitia, ratione dolorum facilis nostrum non odio placeat voluptatum quis nobis ipsam voluptates!</p>
        </div>
      </Card>
    </div>
  </section>
  <section class="mt-16">
    <Header>Ready to Start Your Financial Growth?</Header>
    <p class="text-center mb-3">Don't waste any more time! Get started now!</p>
    <div class="flex">
      <button class="mx-auto btn">Get Started Now</button>
    </div>
  </section>
  <Footer />
</template>