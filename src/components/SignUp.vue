<template>
    <div id="parent">
        <form @submit.prevent="formSubmit">
            <h1>Sign up form here</h1>

            <label>Email: </label>
            <input type="email" v-model="email" required><br><br>

            <label>Password: </label>
            <input type="password" v-model="password" required><br><br>

            <label>Role: </label>
            <select v-model="role" required>
                <option value="developer">Web Developer</option>
                <option value="designer">Web Designer</option>
                <option value="">Select a role: </option>
            </select>
            <br><br>
            <!-- <label>Languages: </label>
            <input type="text" v-model="currentLanguage"
            @keydown="keyfinder" @keyup.enter.alt="addLanguage">
            <button type="submit">Submit</button>
            <div v-for="lang.index in languages":key="index+1">
                <p></p>
            </div> -->
        </form>

        <div>
        </div>

    </div>
  
</template>

<script>
export default {
    methods: {
        formSubmit() {
            console.log('The page has refreshed');
            this.email = ''
            this.password = ''
            this.terms = false
            this.currentLanguage = ''
            this.role = ''
            }
    },

}
</script>

<style>

</style>