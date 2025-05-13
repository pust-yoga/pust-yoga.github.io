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
  padding: 100px;
}

h1 {
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 6px;
  margin-bottom: 60px;
}

.teachers {
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(3, 1fr); 
  gap: 60px;
  justify-items: center;
  justify-content: center;
}

.teacher-card {
  background-color: white;
  padding: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
}

.teacher-card h2,
.teacher-card p {
  width: 100%; 
  text-align: left; 

}

.teacher-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.teacher-cv {
  line-height: 1.5;
  font-size: 16px;
  color: #000;
}

@media (max-width: 768px) { /* Applies when screen width is ≤ 768px */
  .teachers {
    grid-template-columns: repeat(1, 1fr); /* Switch to 1 card per row */
    gap: 30px;
  }
}

</style>