<script setup>
const { $supabase } = useNuxtApp();
</script>

<template>
  <div class="page-container">
    <h1>CONTACT US</h1>
    <div class="card-container">
      <div class="contact-info">
        <h2>Where to Find Us</h2>
        <p>Viale Politecnico 5</p>
        <p>20123 Milano</p>
        <p>Italia</p>
        <p>+39 123 45 678</p>
      </div>
      <div class="image-container">
        <img
          src="https://rrginxykskmhdqduxshx.supabase.co/storage/v1/object/public/images//yoga-zen.png"
          alt="Contact Us"
          class="contact-image"
        />
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: var(--background, #f5f5f5);
  font-family: Inter, Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
.page-container {
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 6px;
  margin-bottom: 50px;
}

.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  padding: 60px;
  border-radius: 24px;
  width: 90%;
  max-width: 1000px;
  gap: 60px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.contact-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
}


.contact-info h2 {
  font-size: 28px;
  margin-bottom: 24px;
}

.contact-info p {
  margin: 10px 0;
  font-size: 18px;
  display: flex;
  align-items: center;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-image {
  height: 400px;
  width: auto;
  border-radius: 10%;
  object-fit: cover;
}
</style>
