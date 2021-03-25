export default {
    actions: {
        async fetchUsers(ctx) {
            const res = await fetch("http://localhost:8081/users");
            if (res.ok) {
                const users = await res.json();
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
        },
        async fetchUserById(ctx, user) {
            const res = await fetch("http://localhost:8081/users/" + user.id);

            if (res.ok) {
                const user = await res.json();
                ctx.commit('UPDATE_USER', user);
            } else {
                alert("Ошибка связи с сервером!");
            }
            ctx.commit('EDIT_USER', user);
        },
        async fetchUserGroups(ctx) {
            const res = await fetch("http://localhost:8081/userGroups");

            if (res.ok) {
                const userGroups = await res.json();
                // console.log(userGroups);
                ctx.commit('UPDATE_USER_GROUPS', userGroups);
            } else {
                alert("Ошибка связи с сервером!");
            }
        }

    },
    mutations: {
        DELETE_USER(state, userId) {
            state.users = state.users.filter(u => u.id !== userId);
        },
        UPDATE_USERS(state, users) {
            state.users = users;
        },
        UPDATE_USER(state, user) {
            state.user = user;
        },
        EDIT_USER(state, user) {
            const userModal = document.querySelector('.modal-main');
            userModal.style.display = 'flex';
            state.selected = user.group.name;
        },
        UPDATE_USER_GROUPS(state, userGroups) {
           state.userGroups = userGroups;
        }
    },
    state: {
        users: [], userGroups: [], user: {},
        roles: [
            {name: "ROLE_USER", checked: true},
            {name: "ROLE_EXAMINER", checked: false},
            {name: "ROLE_ADMIN", checked: false}
            ]
    },
    getters: {
        allUsers(state) {
            return state.users
        },
        allUserGroups(state) {
            return state.userGroups
        },
        getUser(state) {
            console.log(state.user)
            return state.user
        },
        getRoles(state) {
            return state.roles
        }
    }
}
