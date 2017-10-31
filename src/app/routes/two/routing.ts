import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import component from './component';

const ModuleRoutes: Routes = [
    {path: '', component: component }
]

@NgModule({
    imports: [RouterModule.forChild(ModuleRoutes)],
    exports: [RouterModule],
    providers: []
})
export default class RoutingModule {}