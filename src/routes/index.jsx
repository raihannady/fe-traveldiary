import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Register from '@pages/Register';
import Login from '@pages/Login';
import Detail from '@pages/Detail';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/register',
    name: 'Register',
    protected: false,
    component: Register,
    layout: MainLayout,
  },
  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
    layout: MainLayout,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    protected: false,
    component: Detail,
    layout: MainLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
