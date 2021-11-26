<template>
    <transition @enter="onPageEnter">
        <ul v-if="state.show">
            <li v-for="user in users" :key="user.id" @click="onUserClick">
                {{ user.name }} - {{ user.email }}
                <hr />
            </li>
        </ul>
    </transition>
</template>

<script>
import { onMounted, reactive, useContext } from '@nuxtjs/composition-api';

import userAnime from '@/composables/useAnime';
import useUsers from '@/composables/useUsers';

export default {
    layout: 'clean',

    setup() {
        // REUSABLE LOGIC
        const { onPageEnter } = userAnime();
        const { fetchUsers, users, onUserClick } = useUsers();
        const { $toast } = useContext();

        // COMPONENT STATE
        const state = reactive({ show: false });

        // MOUNTED HOOK
        onMounted(async () => {
            try {
                await fetchUsers();
                state.show = true;
            } catch (ex) {
                $toast.showMessage({
                    title: "An error ocurred",
                    message: ex
                });
            }
        });

        return{
            state,
            users,
            onPageEnter,
            onUserClick
        };
    },
}
</script>