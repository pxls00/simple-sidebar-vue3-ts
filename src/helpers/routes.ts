import createCurrentRoutePath from '@/helpers/create-current-route-path'
/* createCurrentRoutePath creates router that has params */

import type Routes from '@/interfaces/routes'
import type GetRoutePath from '@/types/routes/get-route-path'
import type Args from '@/types/routes/route-addition-args'


const routes: Routes = {
  logistics: '/logistics',
  tasks: '/tasks',
  tasksItem: (...args: Args): string => {
    return createCurrentRoutePath('/tasks', ['id'], args)
  },
  carriers: '/carriers',
  carriersDirectory: '/carriers/directory',
  carriersBase: '/carriers/base',
  settings: '/settings',
  signOut: '/sign-out',
}

const getRoutePath: GetRoutePath = function (routeName, additionArgs?) {
  const route = routes[routeName as keyof Routes]

  if (typeof route === 'function') {
    return additionArgs ? route.apply(null, [...additionArgs]) : route()
  }

  return route
}

export default getRoutePath