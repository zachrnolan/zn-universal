import Root from './components/Root'
import Home from './screens/Home'
import NotFound from './screens/NotFound'

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '*',
        component: NotFound,
      },
    ],
  },
]

export default routes
