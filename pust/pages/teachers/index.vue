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
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 100px;
}

h1 {
  font-family: 'Inter', sans-serif;
  font-size: 40px;
  margin-bottom: 50px;
  color: #271E0B;
  line-height: 150%;
  letter-spacing: 0%;
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
}

.teacher-card h2 {
  width: 100%; 
  text-align: left; 
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 5%;
  text-transform: uppercase;
}

.teacher-card p {
  width: 100%; 
  text-align: left; 
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 5%;
  color: #445277
}

.teacher-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

@media (max-width: 768px) { /* Applies when screen width is ≤ 768px */
  .teachers {
    grid-template-columns: repeat(1, 1fr); /* Switch to 1 card per row */
    gap: 30px;
  }
}

</style>