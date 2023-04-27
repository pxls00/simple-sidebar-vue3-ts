#simple sidebar

Vue-3 + Typescript + Vite

<b>@ = <u>'.src/'</u><b>

# step-1
Before creating routes, it must be added to the routes interface <b><u>'@/interfaces/routes'</u></b>

# step-2
After adding it to the Routes interface, you can creat route in routes <b><u>'@/router'</u></b>

# step-3
But they must also be added to helper routes for the getRoutePath helper function to work!! <b><u>'@/helpers/routes'</u></b>

<br/>

<h3 style="background: #e1bd10; color: white">
<b>If you say "why do you need the helper function getRoutePath", it will find routes for you by url and assign it to the router as an object.</b>
</h3>