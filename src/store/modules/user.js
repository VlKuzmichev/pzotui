export default {
    actions: {
        async fetchUsers(ctx) {
            const res = await fetch("http://localhost:8081/users");
            if (res.ok) {
                const users = await res.json();
                //console.log(users);
                ctx.commit('UPDATE_USERS', users);
            } else {
                alert("Ошибка связи с сервером!");
            }

        },
        async deleteUser({commit}, user) {
            const res = await fetch('http://localhost:8081/users/' + user.id, {
                method: 'DELETE',
            });
            if (res.ok) {
                commit('DELETE_USER', user.id);
            } else {
                alert("Не найден элемент: " + user.id);
            }
        }

    },
    mutations: {
        DELETE_USER(state, userId) {
            state.users = state.users.filter(u => u.id !== userId);
        },
        UPDATE_USERS(state, users) {
            state.users = users;
        }
    },
    state: {
        users: []
    },
    getters: {
        allUsers(state) {
            // console.log(state.users)
            return state.users
        },
    }
}
