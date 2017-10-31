import { NgModule } from '@angular/core';

import RouterModule from './routing';
import component from './component';

// const ModuleRoutes: Routes = [
//     {path: '', component: component }
// ]

@NgModule({
    imports: [
        RouterModule,
    ],
    declarations: [
        component
    ],
    exports: [
        component
    ],
    providers: []
})
export class OneModule {}