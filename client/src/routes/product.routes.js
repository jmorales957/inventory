import CreateProduct from '../components/products/CreateProductComponent'
import ListProduct from '../components/products/ListProductComponent'


const userRoutes = [
    {
        path: '/products/list',
        name: 'ListProducts',
        component: ListProduct,
        meta: {
          requiresAuth: true
        }
      },
    {
        path: '/products/create',
        name: 'CreateProduct',
        component: CreateProduct,
        meta: {
            requiresAuth: true
        }
    },
];
export default userRoutes;