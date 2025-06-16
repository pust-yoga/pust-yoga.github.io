<script setup>
const { $supabase } = useNuxtApp()
const route = useRoute()

const activity = ref(null)
async function getActivity() {
  const { data } = await $supabase
    .from('activity')
    .select()
    .eq('id', route.params.activity)
    .single()
  activity.value = data
}
onMounted(() => {
  getActivity()
})
</script>


<template>
  <Breadcrumbs :label="activity ? activity.name : ' '" />
  <section v-if="activity">
    <h1>{{ activity.name }}</h1>
    <div class="bigcard">
      <article>
        <img :src="activity.picture" alt="Activity Picture">
        <div 
          :class="'activity-level ' + (
            activity.expertise_level === 'Beginner' ? ' beginner ' : 
            activity.expertise_level === 'Intermediate' ? ' intermediate ' : 
            activity.expertise_level === 'Advanced' ? ' advanced ' : ''
          )"
        >
          {{ activity.expertise_level }}
        </div>
        <div>
          <h2>{{ activity.title }}</h2>
          <p class="longDescription">{{ activity.long_description }}</p>
          <!-- <p>{{ activity.practical_information }}</p> -->
          <h3>Weekly time schedule:</h3>
          <div class="date">
            <img src="/calendar_icon.png" alt=""> {{ activity.date }}
          </div>
        </div>
      </article>
      <div>
        <!-- Nav to prev and next activity -->
        <NuxtLink v-if="prevActivity" :to="`/activities/${prevActivity.id}`">Previous activity</NuxtLink>
        <NuxtLink v-if="nextActivity" :to="`/activities/${nextActivity.id}`">Next activity</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 50px 100px;
}

h1 {
  color: #271E0B;
  font-size: 40px;
  font-weight: 600;
  line-height: 150%; /* 60px */
  letter-spacing: 2px;
  margin: 0;
}

.bigcard {
  margin-top: 20px;
  background-color: white;
  padding: 50px;
  border-radius: 10px;
}

.bigcard article {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 80px;
  position: relative;
}

.bigcard article > img {
  max-height: 500px;
  border-radius: 8px;
  aspect-ratio: 1024 / 1150;
  object-fit: cover;
}

h2 {
  color: #2E3A59;
  font-size: 28px;
  font-weight: 600;
  line-height: 150%; /* 42px */
  margin: 0;
}

.longDescription {
  white-space: pre-wrap;
  color: #445277;
  font-size: 14px;
  line-height: 175%; /* 24.5px */
  letter-spacing: 0.7px;
  margin: 30px 0;
}

h3 {
  color: #2E3A59;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 175%;
  letter-spacing: 0.7px;
  margin: 0;
}

.date {
  color: #445277;
  font-size: 14px;
  line-height: 150%; /* 21px */
  letter-spacing: 0.7px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
}
.date img {
  width: 25px;
}

.activity-level {
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  padding: 5px 20px;
  border-radius: 8px;
  text-transform: uppercase;
}

.beginner {
  background-color: #79BF54;
}
.intermediate {
  background-color: #E0A13A;
}
.advanced {
  background-color: #DE5050;
}
</style>