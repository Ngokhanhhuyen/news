import { LayoutCategory } from '../Components/Layout';
import { LayoutAdmin } from '../Components/Layout';
import Home from '../Pages/Home';
import DetailNews from '../Pages/DetailNews';
import Search from '../Pages/Search';
import Profile from '../Pages/Profile';
import Login from '../Pages/Auth/Login';
import News from '../Pages/News';
import Dashboard from '../Pages/Dashboard';
import User from '../Pages/User';
import TypeNews from '../Pages/TypeNews';
import Error from '../Pages/Error/Error';

const publicRoute = [
    { path: '/detail/:id', component: DetailNews },
    { path: '/profile', component: Profile, layout: LayoutCategory },
    { path: '/search', component: Search, layout: null },
    { path: '/loginadmin', component: Login, layout: null },
    { path: '/', component: Home },
];

const privateRoute = [
    { path: '/news', component: News, layout: LayoutAdmin },
    { path: '/user', component: User, layout: LayoutAdmin },
    { path: '/typenews', component: TypeNews, layout: LayoutAdmin },
    { path: '/dashboard', component: Dashboard, layout: LayoutAdmin },
    { path: '*', component: Error },
];

export { publicRoute, privateRoute };
