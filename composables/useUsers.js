import { ref, useContext } from '@nuxtjs/composition-api';

const useUsers = function() {
    const users = ref([]);

    const { $toast } = useContext();
    
    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        users.value = await response.json(); 
    };

    const onUserClick = (user) => {
        $toast.showMessage({
            title: "User clicked",
            message: `Hi, ${user.name}!`,
        })
    };
    
    return {
        users,
        fetchUsers,
        onUserClick
    }
}

export default useUsers;