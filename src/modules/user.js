export default {
//         async fetchUsers() {
//             const res = await fetch("http://localhost:8081/users");
//             if (res.ok) {
//                 this.users = await res.json();
// //                ctx.commit('UPDATE_USERS', users);
//             } else {
//                 alert("Ошибка связи с сервером!");
//             }
//         },
        // async fetchToSaveUser(ctx, user, userGroup) {
        //   //  user.roles = state.roles;
        //     console.log(userGroup)
        //     let res;
        //     try {
        //         // if (user !== null) {
        //       //  console.log(user.group)
        //         res = await fetch('http://localhost:8081/users/' + user.id, {
        //             method: 'PUT',
        //             body: JSON.stringify(user),
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             }
        //         });
        //     } catch (error) {
        //         console.error('Ошибка:', error);
        //     }
        //     if (res.ok) {
        //         const userModal = document.querySelector('.modal-main');
        //         userModal.style.display = 'none';
        //         ctx.commit('SAVE_USER', user);
        //     } else {
        //         alert("Не найден элемент: ");
        //     }
        // },
        // async deleteUser({commit}, user) {
        //     const res = await fetch('http://localhost:8081/users/' + user.id, {
        //         method: 'DELETE',
        //     });
        //     if (res.ok) {
        //         commit('DELETE_USER', user.id);
        //     } else {
        //         alert("Не найден элемент: " + user.id);
        //     }
        // },
        // async fetchUserById(ctx, user) {
        //     const res = await fetch("http://localhost:8081/users/" + user.id);
        //
        //     if (res.ok) {
        //         const user = await res.json();
        //         ctx.commit('UPDATE_USER', user);
        //     } else {
        //         alert("Ошибка связи с сервером!");
        //     }
        //     ctx.commit('EDIT_USER', user);
        // },
        // async fetchUserGroups(ctx) {
        //     const res = await fetch("http://localhost:8081/userGroups");
        //
        //     if (res.ok) {
        //         const userGroups = await res.json();
        //         // console.log(userGroups);
        //         ctx.commit('UPDATE_USER_GROUPS', userGroups);
        //     } else {
        //         alert("Ошибка связи с сервером!");
        //     }
        // },
        // async fetchUserGroupByName(ctx, group) {
        //    // console.log(group.id)
        //     const res = await fetch("http://localhost:8081/userGroups/group?name=" + group.name);
        //
        //     if (res.ok) {
        //         const userGroup = await res.json();
        //         // console.log(userGroups);
        //         ctx.commit('UPDATE_USER_GROUP', userGroup);
        //     } else {
        //         alert("Ошибка связи с сервером!");
        //     }
        // },
        // addUser(ctx) {
        //     ctx.commit('EDIT_USER');
        // },
        // closeUserModal() {
        //     const userModal = document.querySelector('.modal-main');
        //     userModal.style.display = 'none';
        // },
        // changeUserGroup(ctx, group) {
        //    // console.log(group)
        //     ctx.commit('CHANGE_GROUP', group);
        // },
        // SAVE_USER(state, user) {
        //     state.users = state.users.map(u => {
        //         if (u.id === user.id) {
        //             return user;
        //         }
        //         return u;
        //     });
        //     //console.log(state.users)
        // },
        // DELETE_USER(state, userId) {
        //     state.users = state.users.filter(u => u.id !== userId);
        // },
        // UPDATE_USERS(state, users) {
        //     state.users = users;
        // },
        // UPDATE_USER_GROUP(state, group){
        //     //console.log(state.user)
        //     state.user.group = group
        // },
        // UPDATE_USER(state, user) {
        //     state.user = user;
        // },
        // EDIT_USER(state, user) {
        //     const titleModal = document.querySelector('.title-modal');
        //     const userModal = document.querySelector('.modal-main');
        //     userModal.style.display = 'flex';
        //     state.roles.forEach(sr => sr.checked = false);
        //     if (user !== undefined) {
        //         titleModal.textContent = 'Редактирование пользователя'
        //         user.roles.forEach(ur =>
        //             state.roles.forEach(sr =>
        //                 sr.name === ur ? sr.checked = true : null
        //             )
        //         )
        //     } else {
        //         titleModal.textContent = 'Добавление пользователя'
        //         state.user = {}
        //     }
        // },
        // UPDATE_USER_GROUPS(state, userGroups) {
        //     state.userGroups = userGroups;
        // },
        // CHANGE_GROUP(state, userGroup) {
        //     state.userGroup = userGroup
        // },
        // users: [], userGroups: [], user: {},
        // roles: [
        //     {name: "ROLE_USER", title: "Пользователь", checked: false},
        //     {name: "ROLE_EXAMINER", title: "Проверяющий", checked: false},
        //     {name: "ROLE_ADMIN", title: "Администратор", checked: false}
        // ]
        // allUsers(state) {
        //     return state.users
        // },
        // allUserGroups(state) {
        //     return state.userGroups
        // },
        // getUser(state) {
        //     // console.log(state.user)
        //     return state.user
        // },
        // getRoles(state) {
        //     return state.roles
        // },
        // getUserGroup(state){
        //     console.log(state.userGroup)
        //     return state.userGroup
        // }
}
