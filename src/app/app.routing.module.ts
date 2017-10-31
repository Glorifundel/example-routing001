import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Remove when issue resolved
 * https://github.com/Microsoft/Typescript/issues/9444
 */
import { ModuleWithProviders } from '@angular/core';
export const DONOTUSE: ModuleWithProviders = null;

export const AppRoutes: Routes = [
    {path: '', redirectTo:'one', pathMatch:'full'},
    {path: 'one', loadChildren: './routes/one/module#OneModule'},
    {path: 'two', loadChildren: './routes/two/module#TwoModule'},
    {path: 'three', loadChildren: './routes/three/module#ThreeModule'},
    {path: '**', redirectTo:'one',pathMatch:'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes, { enableTracing: true })],
    exports: [RouterModule],
    providers: []
})
export default class AppRoutingModule {}