<script setup>
const { $supabase } = useNuxtApp()

const activities = ref([])
async function getActivities() {
    const { data } = await $supabase.from('activity').select()
    activities.value.push(...data)
}
onMounted(() => {
    getActivities()
})

const filter = ref(null);

const handleFilterChange = (level) => {
  filter.value = filter.value === level ? null : level;
}

</script>

<template>
  <section class="highlights">
    <h1>HIGHLIGHTED ACTIVITIES</h1>
    <div class="card-container">
      <ActivityCard v-for="activity in activities.filter(item=>item.highlighted===true)" :key="activity.id" :activity="activity" />
    </div>
  </section>
  <section class="all">
    <h1>ALL ACTIVITIES</h1>
    <div class="filter">
      <h2>FILTER BY EXPERTISE LEVEL</h2>
      <div>
        <img src="/filter_icon.png" alt="">
        <label 
          v-for="level in ['Beginner', 'Intermediate', 'Advanced']" :key="level" 
          :for="level"
          :class="{
            'beginner': level === 'Beginner',
            'intermediate': level === 'Intermediate',
            'advanced': level === 'Advanced'
          }">
          <input 
            type="checkbox" 
            :id="level" 
            @change="handleFilterChange(level)" 
            :checked="level===filter" 
          />
          {{ level }}
        </label>
      </div>
    </div>
    <div class="card-container">
      <ActivityCard v-for="activity in activities.filter((item)=>filter===null || item.expertise_level===filter)" :key="activity.id" :activity="activity" />
    </div>
  </section>
</template>

<style scoped>
.highlights {
  background-color: #CAF0D9;
  display: flex;
  flex-direction: column;
  padding: 50px;
  border-bottom: 15px solid white;
}

.highlights h1 {
  color: #213429;
  font-size: 32px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 1.6px;
  margin-left: 50px;
}

.all {
  padding: 50px 50px 100px 50px;
  display: flex;
  flex-direction: column;
}

.all h1 {
  color: #271E0B;
  font-size: 40px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 2px;
  margin-left: 50px;
  margin-bottom: 0;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  justify-items: center;
  justify-content: center;
}

.filter {
  display: flex;
  flex-direction: column;
  margin: 0 50px 50px 50px;
}

.filter h2 {
  color: #625437;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.8px;
}

.filter > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
  background-color: white;
  border-radius: 16px;
  padding: 25px 75px;
}

.filter img {
  width: 50px;
  height: 50px;
}


.filter input[type="checkbox"] {
  position: absolute;
  right: 150vw; /* hide checkbox, but still render */
}
.filter label {
  flex-grow: 1;
  display: block;
  text-align: center;
  background-color: white;
  border: 1px solid var(--color);
  color: var(--color);
  line-height: 50px;
  border-radius: 8px;
  font-size: 14px;
  text-transform: uppercase;
  user-select: none;
  cursor: pointer;
}
.filter label:hover {
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05) inset;
  padding-top: 3px;
  line-height: 47px;
  
}
.filter label:has(input:checked) {
  background-color: var(--color);
  color: white;
}
.beginner {
  --color: #79BF54;
}
.intermediate {
  --color: #E0A13A;
}
.advanced {
  --color: #DE5050;
}
</style>