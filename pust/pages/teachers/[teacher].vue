<script setup>
import { ref, onMounted } from 'vue';

const { $supabase } = useNuxtApp();
const route = useRoute();

const teacher = ref(null);

async function getTeacher() {
  const { data, error } = await $supabase
    .from('teacher')
    .select(`
      *,
      teacher_activity (
        *,
        activity (*)
      )
    `)
    .eq('id', route.params.teacher)
    .single();

  if (error) {
    console.error('Error fetching teacher:', error);
  } else {
    // Flatten activities from teacher_activity for easier usage
    teacher.value = {
      ...data,
      activities: data.teacher_activity.map((ta) => ta.activity),
    };
  }
}


onMounted(() => {
  getTeacher();
});

function navigateToTeacher(id) {
  const router = useRouter();
  router.push(`/teachers/${id}`);
}

function navigateToTeachers() {
  const router = useRouter();
  router.push('/teachers');
}

function navigateToPrevious() {
  const previousId = parseInt(route.params.teacher) - 1;
  if (previousId > 0) {
    navigateToTeacher(previousId);
  }
}

function navigateToNext() {
  const nextId = parseInt(route.params.teacher) + 1;
  navigateToTeacher(nextId);
}
</script>

<template>
  <div class="page-container">
    <!-- Page title appears only when teacher is loaded -->
    <h1 v-if="teacher" class="page-title">
      {{ teacher.firstname?.toUpperCase() || 'UNKNOWN' }}
    </h1>
    <div class="back-link">
      <button @click="navigateToTeachers" class="nav-btn-2">
            <svg
              class="arrow-icon-2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.207 8l6.147 5.646a.5.5 0 0 1-.708.708l-6.5-6a.5.5 0 0 1 0-.708l6.5-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <span class="nav-text">Back to Teachers</span>
          </button>
    </div>
    <div class="card-wrapper">
      <div class="card-container" v-if="teacher">
        <div class="card-content">
          <img :src="teacher.picture" alt="Teacher Picture" class="teacher-image" />
          <div class="teacher-info">
            <h2>Meet {{ teacher.firstname || 'Unknown' }}!</h2>
            <p>{{ teacher.CV || 'No CV available.' }}</p>
            <div class="contact-details">
              <div class="contact-phone">
                <img
                  class="icon" src="https://rrginxykskmhdqduxshx.supabase.co/storage/v1/object/public/images/icon-phone.png" alt="Phone icon" />
                <p>{{ teacher.phone || 'Not provided' }}</p>
              </div>
              <div class="contact-email">
                <img class="icon" src="https://rrginxykskmhdqduxshx.supabase.co/storage/v1/object/public/images/icon-email.png" alt="Email icon" />
                <p>{{ teacher.email || 'Not provided' }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-navigation">
          <button @click="navigateToPrevious" class="nav-btn">
            <svg
              class="arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.207 8l6.147 5.646a.5.5 0 0 1-.708.708l-6.5-6a.5.5 0 0 1 0-.708l6.5-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <span class="nav-text">Previous Teacher</span>
          </button>
          <button @click="navigateToNext" class="nav-btn">
            <span class="nav-text">Next Teacher</span>
            <svg
              class="arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6.5 6a.5.5 0 0 1 0 .708l-6.5 6a.5.5 0 0 1-.708-.708L10.793 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div v-else>
        <p>Loading teacher information...</p>
      </div>
    </div>

  <div v-if="teacher" class="page-2-title">
     {{ teacher.firstname?.toUpperCase()+"'S CLASSES" || 'UNKNOWN' }}
  </div>
  <div v-if="teacher?.activities?.length" class="activity-grid">
    <div v-for="activity in teacher.activities" :key="activity.id" class="activity-card">
      <div class="image-container">
        <img :src="activity.picture" alt="Activity Image" class="activity-image" />
        <span class="expertise-level">{{ activity.expertise_level }}</span>
      </div>
      <h3 class="activity-title">{{ activity.name }}</h3>
      <p class="activity-description">{{ activity.description }}</p>
      <p class="activity-date">{{ activity.date }}</p>
    </div>
  </div>


  </div>
</template>

<style>
body {
  background-color: var(--background);
  font-family: 'Inter', Arial, sans-serif;
}
</style>

<style scoped>
.page-container {
  padding: 100px;
}

.page-title {
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 6px;
}

.page-2-title {
  font-size: 40px;
  /* font-weight: 600; */
  letter-spacing: 6px;
  margin-top: 100px;
}

.card-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.card-container {
  background: white;
  border-radius: 5%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-content {
  display: flex;
  gap: 60px;
  align-items: center;
  margin-bottom: 20px;
}

.teacher-image {
  width: 500px;
  height: auto;
  border-radius: 5%;
  object-fit: cover;
}

.teacher-info {
  flex: 1;
}

.teacher-info h2 {
  margin-bottom: 16px;
}

.contact-details {
  display: flex;
  gap: 40px;
  margin-top: 10px;
}

.contact-phone,
.contact-email {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon {
  width: 20px;
  height: 20px;
}

.card-navigation {
  display: flex;
  justify-content: space-between;
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  color: blue;
  background-color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.nav-btn-2 {
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: #FFF1D5E5;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 30px;
}

.arrow-icon-2 {
  width: 20px;
  height: 20px;
}

.arrow-icon {
  width: 30px;
  height: 30px;
}

.activity-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 40px;
}

.activity-card {
  background: white;
  padding: 60px;
  border-radius: 15px;
}

.image-container {
  position: relative;
  width: 100%;
}

.activity-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.expertise-level {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
}

.activity-title {
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
}

.activity-description {
  margin-top: 10px;
  font-size: 16px;
  color: #555;
}

.activity-date {
  margin-top: 10px;
  font-size: 14px;
  color: #888;
}
</style>