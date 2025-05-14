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
        <img src="https://rrginxykskmhdqduxshx.supabase.co/storage/v1/object/public/images//yoga-zen.png" 
             alt="Contact Us" class="contact-image"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: var(--background);
  font-family: Inter, Arial, sans-serif;
  display: flex;
  justify-content: center;
}

.page-container {
  padding: 100px;
  text-align: left;
}

h1 {
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 6px;
  margin-bottom: 60px;
}

.card-container {
  display: flex;
  background-color: white;
  border-radius: 15px;
  padding: 60px;
}

.contact-info {
  text-align: left;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-image {
  border-radius: 10%;
  object-fit: cover;
}
</style>