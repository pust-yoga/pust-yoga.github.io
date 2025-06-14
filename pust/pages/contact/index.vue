<script setup>
const { $supabase } = useNuxtApp();
</script>

<template>
  <h1>CONTACT US</h1>
  <div class="page-container">
    <div class="card-container">
      <div class="contact-info">
        <div class="contact-details-title">
          <h2>Where to Find Us</h2>
        </div>
        <div class="contact-details">
          <div class="contact-address">
            <img
              class="icon"
              src="https://rrginxykskmhdqduxshx.supabase.co/storage/v1/object/public/images/icon-map.png"
              alt="Map icon"
            />
            <div class="address-text">
              <p>Viale Politecnico 5</p>
              <p>20123 Milano</p>
              <p>Italia</p>
            </div>
          </div>
          <div class="contact-phone">
            <img
              class="icon"
              src="https://rrginxykskmhdqduxshx.supabase.co/storage/v1/object/public/images/icon-phone.png"
              alt="Phone icon"
            />
            <p>+39 123 45 678</p>
          </div>
        </div>
      </div>
      <div class="image-container">
        <img
          src="https://rrginxykskmhdqduxshx.supabase.co/storage/v1/object/public/images/yoga-zen.png"
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
  font-family: 'Inter', Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  padding-left: 50px;
  padding-right: 50px;
}

h1 {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 40px;
  letter-spacing: 0%;
  color: #271E0B;
  padding: 50px;
  line-height: 150%;
}


.contact-details-title {
  margin-top: 0;
  padding-top: 0;
}

.contact-info h2 {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 36px;
  line-height: 175%;
  letter-spacing: 5%;
  color: #000000;
}

.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 50px;
  border-radius: 16px;
  width: 90%;
  max-width: 1000px;
  gap: 50px;
}

.contact-info {
  display: flex;
  flex-direction: column;
}

.contact-details {
  font-family: 'Inter', sans-serif;
  line-height: 150%; 
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.contact-address,
.contact-phone {
  display: flex;
  align-items: center;
}

.icon {
  width: 24px;
  height: 24px;
  margin-right: 20px;
}

.address-text p,
.contact-phone p {
  margin: 2px 0;
  font-size: 18px;
  color: #666;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-image {
  max-height: 400px;
  width: auto;
  border-radius: 16px;
  object-fit: cover;
}

@media only screen and (max-width: 768px) {
  .card-container {
    flex-direction: column;
    padding: 30px;
    gap: 30px;
    align-items: center;
    justify-content: center;
    display: flex;

  }

  h1 {
    font-size: 36px;
    letter-spacing: 2px;
    padding: 30px;
  }

  .contact-info h2 {
    font-size: 24px;
    text-align: center;
  }

  .contact-details {
    gap: 30px;
  }

  .contact-address,
  .contact-phone {
    flex-direction: column;
    text-align: center;
  }

  .icon {
    margin-bottom: 10px;
  }

  .contact-image {
    max-height: 250px;
    width: 80%;
    border-radius: 8%;
  }
}
</style>