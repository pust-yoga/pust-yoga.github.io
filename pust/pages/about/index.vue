<script setup>
const { $supabase } = useNuxtApp();
</script>

<template>
  <div class="about-page">
    <h1 class="page-title">ABOUT US</h1>

    <!-- First Card -->
    <div class="card first-card">
      <div class="card-image" />
      <div class="card-text">
        <h2 class="card-title">A Sanctuary for Movement and Stillness</h2>
        <p class="card-description">
          At Pust Yoga, we offer more than just classes — we provide a sanctuary. Nestled in a calm and nurturing
          environment, our space invites you to slow down, breathe deeply, and reconnect with yourself. Whether
          you're new to yoga or a seasoned practitioner, we welcome you to explore the transformative power of breath,
          movement, and mindfulness.
          <br><br>
          Our mission is simple: to support your journey toward balance, strength, and inner peace. We believe yoga is
          for everyone, and our experienced instructors are here to guide you every step of the way — with warmth,
          knowledge, and deep presence.
        </p>
      </div>
    </div>

    <!-- Second Card -->
    <div class="card second-card">
      <h2 class="card-title center">Our Philosophy</h2>
      <p class="card-description">
        We hold space for growth, healing, and self-discovery, both on and off the mat. At the heart of our teaching
        is the belief that yoga is not about achieving the perfect pose, but about cultivating a deeper connection to
        your body, your breath, and your inner wisdom.
        <br><br>
        Classes at Pust Yoga are offered across a variety of styles and levels, so whether you’re looking to unwind,
        energize, stretch, or simply be — you’ll find a practice that meets you where you are.
      </p>
    </div>

    <!-- Last Card -->
    <div class="card third-card">
      <div class="card-overlay">
        <h2 class="third-card-title">ANY QUESTIONS?</h2>
        <button class="contact-button">Contact Us</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  background: var(--light-yellow, rgba(255, 241, 213, 0.90));
  padding-top: 50px;
  padding-bottom: 100px;
  padding-left: 50px;
  padding-right: 50px;
}

.page-title {
  width: 1166px;
  height: 59px;
  color: var(--dark-yellow, #271E0B);
  font-family: 'Inter', sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 150%;
}

.card {
  width: 100%;
  max-width: 1166px;
  min-width: 320px;
  box-sizing: border-box;
  margin-bottom: 50px;
}

/* FIRST CARD */
.first-card {
  display: flex;
  height: auto;
  min-height: 400px;
  height: 516px;
  padding: 50px;
  align-items: flex-start;
  gap: 75px;
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
}

.card-image {
  display: flex;
  width: 377px;
  height: 414px;
  padding: 10px;
  border-radius: 16px;
  background: url('https://rrginxykskmhdqduxshx.supabase.co/storage/v1/object/public/images//aboutUs_1.png') lightgray 50% / cover no-repeat;
}

.card-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card-title {
  height: 36px;
  color: var(--Header-on-white, #2E3A59);
  font-family: 'Inter', sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 150%;
}

.card-title.center {
  text-align: flex-start;
}

.card-description {
  color: var(--Text-on-white, #445277);
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 175%;
  letter-spacing: 0.8px;
}

/* SECOND CARD */
.second-card {
  display: flex;
  flex-direction: column;
  min-height: 400px;
  height: 620px;
  padding: 50px 100px 50px 50px;
  gap: 10px;
  border-radius: 16px;
  background: url('https://rrginxykskmhdqduxshx.supabase.co/storage/v1/object/public/images//aboutUs_2.png') lightgray 50% / cover no-repeat;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
}

.second-card .card-description {
  color: #000;
  font-size: 14px;
  letter-spacing: 0.7px;
  max-width: 702px;
  align-items: flex-start;
}

/* THIRD CARD */
.third-card {
  min-height: 400px;
  height: 786px;
  border-radius: 10px;
  background: url('https://rrginxykskmhdqduxshx.supabase.co/storage/v1/object/public/images//aboutUs_3.png') lightgray 50% / cover no-repeat;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  max-width: 910px;
  height: 208px;
  justify-content: center;
}

.third-card-title {
  color: #000;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 6px;
}

.contact-button {
  display: flex;
  width: 250px;
  height: 56px;
  padding: 14px 0;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #D49277;
  color: white;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  border: none;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: background 0.3s ease;
}

.contact-button:hover {
  background: #ba7a62;
}

/* Responsive: stack cards and make them full width on mobile */
@media (max-width: 900px) {
  .about-page {
    padding-left: 10px;
    padding-right: 10px;
    gap: 30px;
  }
  .card {
    max-width: 100%;
    min-width: 0;
    width: 100%;
    margin: 0;
  }
  .first-card, .second-card, .third-card {
    padding: 20px 10px;
    height: auto;
    min-height: 300px;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
  .card-overlay {
    max-width: 100%;
    height: auto;
    padding: 20px 0;
  }
}
</style>
