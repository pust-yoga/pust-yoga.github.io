<script setup>
const { $supabase } = useNuxtApp()
const route = useRoute()

const teacher = ref(null)
async function getTeacher() {
    const { data } = await $supabase
        .from('teacher')
        .select()
        .eq('id', route.params.teacher)
        .single()
    teacher.value = data
}
onMounted(() => {
    getTeacher()
})

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

function navigateToTeacher(id) {
    const router = useRouter();
    router.push(`/teachers/${id}`);
}
</script>


<template>
    <div class="page-container">
        <h1 v-if="teacher" class="page-title">{{ teacher.firstname?.toUpperCase() || 'UNKNOWN' }}</h1>
        <div class="card-wrapper">
            <div class="card-container" v-if="teacher">
                <div class="card-content">
                    <img :src="teacher.picture || '/default-placeholder.png'" alt="Teacher Picture" class="teacher-image">
                    <div class="teacher-info">
                        <h2>Meet {{ teacher.firstname || 'Unknown' }}!</h2>
                        <p>{{ teacher.CV || 'No CV available.' }}</p>
                        <div class="contact-details">
                            <div class="contact-phone">
                                <img
                                    class="icon"
                                    src="https://rrginxykskmhdqduxshx.supabase.co/storage/v1/object/public/images/icon-phone.png"
                                    alt="Phone icon"
                                />
                                <p>{{ teacher.phone || 'Not provided' }}</p>
                            </div>
                            <div class="contact-email">
                                <img
                                    class="icon"
                                    src="https://rrginxykskmhdqduxshx.supabase.co/storage/v1/object/public/images/icon-email.png"
                                    alt="Email icon"
                                />
                                <p>{{ teacher.email || 'Not provided' }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-navigation">
                    <button @click="navigateToPrevious">Previous</button>
                    <button @click="navigateToNext">Next</button>
                </div>
            </div>
            <div v-else>
                <p>Loading teacher information...</p>
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100vh;
    padding: 100px;
    position: relative;
}

.page-title {
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 6px;
    margin-bottom: 20px;
    text-transform: uppercase;
    position: absolute;
    top: 20px;
    left: 20px;
}

.card-wrapper {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 100%;
}

.card-container {
    background: white;
    border-radius: 15px;
    width: 80%;
    max-width: 900px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-content {
    display: flex;
    gap: 20px;
}

.teacher-image {
    width: auto;
    height: 350px;
    border-radius: 10%;
    object-fit: cover;
}

.teacher-info {
    flex: 1;
}

.contact-details {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.contact-phone, .contact-email {
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
    margin-top: 20px;
}

button {
    background: #007BFF;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: #0056b3;
}
</style>