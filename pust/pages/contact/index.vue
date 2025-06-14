<script setup>
const { $supabase } = useNuxtApp();

useHead({
  title: 'Contact Us | Pust Yoga',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with us. Find our address, phone number, and directions to our office in Milan, Italy.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      property: 'og:title',
      content: 'Contact Us | Pust Yoga'
    },
    {
      property: 'og:description',
      content: 'Reach out to our team via phone or visit us in Milan.'
    },

  ]
});
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
              loading="lazy"
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
              loading="lazy"
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
          loading="lazy"
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
  color: var(--dark-yellow, #271E0B);
  font-family: 'Inter', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 60px */
  font-size: 40px;
  padding: 50px;
}



.contact-info h2 {
  color: var(--Header-on-white, var(--Header-on-white, #2E3A59));
  font-family: 'Inter', sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 175%; /* 63px */
  letter-spacing: 1.8px;
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
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 25px;
  align-items: center;
  justify-content: center;
  color: var(--Text-on-white, #445277);
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
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