<template>
    <transition @enter="onPageEnter">
        <ul v-if="show">
            <li v-for="user in users" :key="user.id" @click="onUserClick(user)">
                {{ user.name }} - {{ user.email }}
                <hr />
            </li>
        </ul>
    </transition>
</template>

<script>
import anime from 'animejs';

export default {
    layout: 'clean',

    data() {
        return {
            users: [],
            show: false,
        }
    },

    async mounted() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            this.users = await response.json(); 
            this.show = true;
        } catch (ex) {
            this.$toast.showMessage({
                title: "An error ocurred",
            })
        }
    },

    methods: {
        onUserClick(user) {
            this.$toast.showMessage({
                title: "User clicked",
                message: `Hi, ${user.name}!`,
            })
        },

        onPageEnter(el) {
            anime({
                targets: el,
                opacity: [0, 1],
                duration: 2000,
            })
        },
    }
}
</script>