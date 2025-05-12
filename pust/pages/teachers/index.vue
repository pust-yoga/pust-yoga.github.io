<script setup>
const { $supabase } = useNuxtApp();

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
      <div v-for="teacher in teachers" :key="teacher.id" class="teacher-card">
        <img :src="teacher.picture" alt="Teacher Picture" class="teacher-image"/>
        <h2>{{ teacher.firstname}}</h2>
        <p class="teacher-cv">{{ teacher.CV }}</p>
        <!-- <NuxtLink :to="'/teachers/' + teacher.id" class="view-profile">View Profile</NuxtLink> -->
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: var(--background);
  font-family: Inter, Arial, sans-serif;
}
</style>

<style scoped>
.page-container {
  padding: 40px;
  text-align: left; 
}

h1 {
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 6px;
  margin-bottom: 20px;
}

.teachers {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px;
  justify-items: center;
}

@media (max-width: 768px) {
  .teachers {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .teachers {
    grid-template-columns: 1fr;
  }
}

.teacher-card {
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left; 
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  margin: 0 auto;
}

.teacher-card h2,
.teacher-card p {
  width: 100%; 
  text-align: left; 
  /* margin-left: 100px; */
}

.teacher-image {
  width: 100%;
  max-width: 250px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.teacher-cv {
  line-height: 1.5;
  font-size: 16px;
  color: #000;
}

.view-profile {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: var(--blue);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}
.view-profile:hover {
  background-color: #007acc;
}
</style>