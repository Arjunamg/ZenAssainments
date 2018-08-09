import {RouterModule,Routes} from '@angular/router' ; 
import {HomeComponent } from './home/home.component';
import {AboutComponent } from './about/about.component';
import {ContactComponent } from './contact/contact.component';
import {NewsComponent } from './news/news.component';
import {TeamComponent } from './team/team.component';


const CompanyRoutes:Routes=[

  {
        path:'',
        component:HomeComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'news',
        component:NewsComponent
    },
    {
        path:'team',
        component:TeamComponent
    },
    // {
    //     path:'**',
    //     component:PagenotfoundComponent
    // }
];

export const  CompanyRouteModule = RouterModule.forRoot(CompanyRoutes);

