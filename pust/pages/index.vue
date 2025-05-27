<script setup>
const { $supabase } = useNuxtApp()

const activities = ref([])
async function getActivities() {
    const { data } = await $supabase.from('activity').select().filter('highlighted', 'eq', true)
    activities.value.push(...data)
}
onMounted(() => {
    getActivities()
})
</script>

<template>
    <section class="home">
        <h1>BREATHE. MOVE. CONNECT.</h1>
        <h2>Yoga for every body. Mindful movement in a calmning space.</h2>
        
        <div class="explore">
            <NuxtLink to="/activities" class="link">
                Explore our classes
            </NuxtLink>
        </div>
    </section>
    <section class="bigcard welcome">
        <div>
            <div>
                <h1>Welcome to PUST YOGA</h1>
                <p>We offer a serene and welcoming space for you to explore the transformative practice of yoga. Our experienced instructors are dedicated to helping you achieve balance, strength, and inner peace.</p>
                <div class="learnMore">
                    <NuxtLink to="/about" class="link">Learn more about us</NuxtLink>
                </div>
            </div>
            <img src="/pust_home2.png" alt="Yoga Image">
        </div>
    </section>
    <section class="bigcard recommended">
        <div>
            <h1>Highlighted Activities</h1>
            <h2>Explore yoga practices tailored for all skill levels</h2>
            <div class="card-container">
                <ActivityCard v-for="activity in activities" :key="activity.id" :activity="activity" simple />
            </div>
            <div style="padding-left: 50px;">
                <NuxtLink to="/activities" class="link">View All Activities</NuxtLink>
            </div>
        </div>
    </section>
    <section class="bigcard heads">
        <div>
            <div>
                <img src="/head1_crop.png" alt="improves sleep">
                <h2>IMPROVES</h2>
                <h3>SLEEP</h3>
                <p>Yoga calms the nervous system, helping you unwind and promoting deeper, more refreshing sleep.</p>
            </div>
            <div>
                <img src="/head2_crop.png" alt="boosts creativity">
                <h2>BOOSTS</h2>
                <h3>CREATIVITY</h3>
                <p>Yoga can shift your perspective, spark new ideas, and even lead to those inspiring ‘aha’ moments.</p>
            </div>
            <div>
                <img src="/head3_crop.png" alt="enhances meditation">
                <h2>ENHANCES</h2>
                <h3>MEDITATION</h3>
                <p>By sharpening your focus, yoga makes it easier to enter a meditative state -both during practice and in everyday life.</p>
            </div>
            <div>
                <img src="/head4_crop.png" alt="reduces stress">
                <h2>REDUCES</h2>
                <h3>STRESS</h3>
                <p>Yoga activates the body’s relaxation response, easing anxiety and tension with effects that last long after your session ends.</p>
            </div>
        </div>
    </section>
</template>


<style scoped>
section.home {
    background-image: url("../public/pust_home.jpg");
    background-size: cover;
    background-position: center;
    height: calc(100vh - var(--header-height));
    display: flex;
    flex-direction: column;
    text-align: center;
}

.home > * {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    margin: 0;
}
.home h1 {
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 60px */
    letter-spacing: 6px;
    top: 30%;
}
.home h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
    letter-spacing: 1px;
    top: 42%;
}
.explore {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 62%;
}

.bigcard {
    display: flex;
    flex-direction: row;
    position: relative;
    padding: 100px;
    align-items: center;
    justify-content: center;
    border-top: 15px solid white;
}

.bigcard > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    gap: 20px;
    padding: 50px;
    background-color: white;
    height: 100%;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    max-width: 1200px;
    width: 100%;
}
.bigcard .link {
    background-color: #8BAF70;
}
.bigcard .link:hover {
    background-color: #628B43;
}

.welcome {
    background-color: #BDDDE4;
}

.welcome > div > div {
    flex: 1;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
}

.welcome h1 {
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 1.8px;
    color: #2E3A59;
    margin: .5em 0;
}

.welcome p {
    color: #445277;
    font-size: 16px;
    line-height: 175%;
    letter-spacing: 0.8px;
    max-width: 600px;
}

.welcome img {
    aspect-ratio: 1 / 1;
    max-width: 60vw;
    width: 400px;
    object-fit: cover;
    position: relative;
    border-radius: 16px;
}

.learnMore {
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: 20px;
}

.recommended {
    background-color: #CAF0D9;
}

.recommended > div {
    flex-direction: column;
}
.recommended h1 {
    color: #2E3A59;
    font-size: 36px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 1.8px;
    margin: 0;
    padding-left: 50px;
}

.recommended h2 {
    color: #445277;
    font-size: 16px;
    line-height: 150%; 
    letter-spacing: 0.8px;
    font-weight: 400;
    margin: 0;
    padding-left: 50px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-items: center;
  justify-content: space-evenly;
}

.heads {
    background-color: unset;
    overflow: hidden;
}

.heads > div {
    flex-wrap: nowrap;
}

.heads > div > div {
    flex: 1;
}

.heads img {
    width: 100%;
}

.heads h2, .heads h3 {
    color: #2E3A59;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 2px;
    margin: 0;
}

.heads p {
    color: #445277;
    font-size: 16px;
    line-height: 175%;
    letter-spacing: 1.6px;
}

</style>