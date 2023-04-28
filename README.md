#simple sidebar

<h1>Vue-3 + Vue Router + Pinia + Typescript + Vite</h1>

<b>@ = <u>'.src/'</u><b>

# step-1
Create the route you need in the sidebar section <b><u>'@/constants/sidebar-routes'</u></b>
# step-2
Before creating routes, it must be added to the routes interface <b><u>'@/interfaces/routes'</u></b>

# step-3
After adding it to the Routes interface, you can creat route in routes <b><u>'@/router'</u></b>

# step-4
But they must also be added to helper routes for the getRoutePath helper function to work!! <b><u>'@/helpers/routes'</u></b>

<br/>

<h3 style="background: #e1bd10; color: white">
<b>If you say "why do you need the helper function getRoutePath", it will find routes for you by url and assign it to the router as an object.</b>
</h3>

<br>

# Basic View
<img src="./public/basic-view.png" alt="basic view">
<b>You can write your own styles<br>

<br>
<br>
<br>

<p>you can open as many nested routes as you want in, the sidebar will generate them for you internally<p>
