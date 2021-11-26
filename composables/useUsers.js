import { ref } from '@nuxtjs/composition-api';

const users = ref([]);

const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    users.value = await response.json(); 
}

const filterUsers = (name) => users.filter(user => user.name === name);

export {
    users,
    fetchUsers,
    filterUsers
}