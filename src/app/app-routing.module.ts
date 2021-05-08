import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoPageComponent } from './info-page/info-page.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
    {path: 'about', component: InfoPageComponent},
    {path: '**', component: StatsComponent}
]; 

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }