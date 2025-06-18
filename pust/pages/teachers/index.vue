<script setup>
const { $supabase } = useNuxtApp();

useHead({
  title: 'Meet the Team - Our Teachers',
  meta: [
    {
      name: 'description',
      content: 'Explore our dedicated team of teachers and read about their background and expertise.',
    },
    {
      property: 'og:title',
      content: 'Meet the Team - Our Teachers',
    },
    {
      property: 'og:description',
      content: 'Explore our dedicated team of teachers and read about their background and expertise.',
    },
  ],
});


const teachers = ref([]);

async function getTeachers() {
  const { data } = await $supabase.from('teacher').select();
  teachers.value = data; 
}

onMounted(() => {
  getTeachers();
});
</script>

<template>
  <div class="page-container">
    <h1>MEET THE TEAM</h1>
    <div class="teachers">
      <NuxtLink v-for="teacher in teachers" :key="teacher.id" class="teacher-card card-hover" :to="'/teachers/' + teacher.id">
        <div>
          <img :src="teacher.picture" alt="Teacher Picture" loading="lazy" class="teacher-image"/>
          <h2>{{ teacher.firstname}}</h2>
          <p class="teacher-cv">{{ teacher.CV }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 100px;
}

h1 {
  margin-bottom: 50px;

  color: var(--dark-yellow, #271E0B);
  font-family: 'Inter', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 60px */
}

.teachers {
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(3, 1fr); 
  gap: 50px;
  justify-items: center;
  justify-content: center;
}

.teacher-card {
  background-color: white;
  padding: 50px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;
  text-decoration: none; 
  color: unset; 
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
}

.teacher-card h2 {
  color: var(--Header-on-white, var(--Header-on-white, #2E3A59));
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: 0.8px;

  width: 100%; 
  text-align: left; 
  text-transform: uppercase;
}

.teacher-card p {
  color: var(--Text-on-white, #445277);
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: 0.7px;


  width: 100%; 
  text-align: left; 
}
.teacher-card h2 {
  color: #2B2B65;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
}
.teacher-card p {
  color: #2B2B65;
  font-size: 14px;
  line-height: 150%;
}

.teacher-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

@media (max-width: 768px) { 
  .teachers {
    grid-template-columns: repeat(1, 1fr); 
    gap: 30px;
  }
}

</style>