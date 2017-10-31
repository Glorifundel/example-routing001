import { NgModule } from '@angular/core';

import RouterModule from './routing';
import component from './component';

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
export class TwoModule {}