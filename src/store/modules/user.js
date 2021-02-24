export default {
    actions: {
        async fetchUsers(ctx) {
            const res = await fetch("http://localhost:8081/users");
            console.log(res)
            if (res.ok) {
                const users = await res.json();
                ctx.commit('UPDATE_USERS', users);
            }else {
                alert("Ошибка связи с сервером!");
            }

        }
        // async deleteUser({ commit }, user) {
        //     const res = delete (
        //         "http://localhost:8081/users/{{user.id}}"
        //     );
        //     if (res.ok) {
        //         commit('DELETE_USER', user.id);
        //     }else {
        //         alert("Не найден элемент: " + user.id);
        //     }
        // }

    },
    mutations: {
        UPDATE_USERS(state, users) {
            state.users = users;
        }
        // DELETE_USERS(state, userId) {
        //     state.users = state.users.filter(u => u.id !== userId);
        // }
    },
    state: {
        users: []
    },
    getters: {
        allUsers(state) {
            return state.users
        }

    }
}
// export default {
//     actions: {
//         async fetchUsers(ctx) {
//             const res = await fetch("http://localhost:8081/users");
//             if (res.ok) {
//                 const users = await res.json();
//                 ctx.commit('UPDATE_USERS', users);
//             }else {
//                 alert("РћС€РёР±РєР° СЃРІСЏР·Рё СЃ СЃРµСЂРІРµСЂРѕРј!");
//             }
//
//         },
//     },
//     mutations: {
//         UPDATE_USERS(state, users) {
//             state.users = users;
//         },
//     },
//     state: {
//         users: []
//     },
//     getters: {
//         allUsers(state) {
//             console.log(state.users)
//             return state.users;
//         }
//     }
// }

