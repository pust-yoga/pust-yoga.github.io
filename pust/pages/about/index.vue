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
        <NuxtLink to="/contact" class="contact-button">Contact Us</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
  padding-bottom: 100px;
  padding-left: 50px;
  padding-right: 50px;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 100px;
  background: var(--light-yellow, rgba(255, 241, 213, 0.90));
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

/* FIRST CARD */
.first-card {
  display: flex;
  height: 516px;
  width: 1166px;
  padding: 50px;
  align-items: flex-start;
  gap: 75px;
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  /* width: 100%;
  max-width: 1166px; */
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
  height: 620px;
  width: 1166px;
  padding: 50px 100px 156px 50px;
  gap: 10px;
  border-radius: 16px;
  background: url('https://rrginxykskmhdqduxshx.supabase.co/storage/v1/object/public/images//aboutUs_2.png') lightgray 50% / cover no-repeat;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  /* width: 100%;
  max-width: 1166px; */
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
  width: 1166px;
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
  width: 910px;
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
  text-decoration: none;
}

.contact-button:hover {
  background: #ba7a62;
}

@media (max-width: 768px) {
  .about-page {
    flex-direction: column;
    padding: 20px 5px 60px 5px;
    gap: 40px;
  }
  .page-title {
    width: 100%;
    font-size: 28px;
    text-align: center;
    height: auto;
  }
  .first-card,
  .second-card,
  .third-card {
    width: 100%;
    min-width: 0;
    max-width: 100%;
    padding: 20px 10px;
    box-sizing: border-box;
    height: auto;
  }
  .first-card {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    height: auto;
    padding: 20px 10px;
  }
  .card-image {
    width: 100%;
    max-width: 320px;
    height: 180px;
    margin: 0 auto;
    background-size: cover;
  }
  .card-text {
    gap: 10px;
  }
  .second-card {
    padding: 20px 10px;
    height: auto;
    background-size: cover;
  }
  .second-card .card-description {
    max-width: 100%;
    font-size: 13px;
  }
  .third-card {
    height: 220px;
    padding: 0;
    background-size: cover;
  }
  .card-overlay {
    width: 90%;
    height: auto;
    gap: 15px;
    padding: 10px 0;
  }
  .third-card-title {
    font-size: 22px;
    letter-spacing: 2px;
  }
  .contact-button {
    width: 100%;
    max-width: 200px;
    height: 44px;
    font-size: 14px;
    padding: 10px 0;
  }
}
</style>
