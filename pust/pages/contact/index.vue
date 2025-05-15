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

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 4px;
  margin-bottom: 50px;
  color: #333;
  padding: 60px;
  margin-bottom: 20px;
}

.contact-details-title {
  margin-top: 0;
  padding-top: 0;
}

.contact-info h2 {
  font-size: 32px;
  margin-bottom: 24px;
  color: #000000;
}

.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 60px;
  border-radius: 24px;
  width: 90%;
  max-width: 1000px;
  gap: 60px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.contact-info {
  display: flex;
  flex-direction: column;
}

.contact-details {
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
  border-radius: 10%;
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