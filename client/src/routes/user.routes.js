import CreteUserComponent from '../components/CreteUserComponent.vue';
import ListUsers from '../components/ListUsersComponent.vue';


const userRoutes = [
    {
        path: '/users/create',
        name: 'CreateUser',
        component: CreteUserComponent,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/users/list',
        name: 'ListUsers',
        component: ListUsers,
        meta: {
            requiresAuth: true
        }
    },
];
export default userRoutes;