import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestComponent} from './test/test.component';
import {Test2Component} from './test2/test2.component';

const routes: Routes = [{path: 'test', component: TestComponent}, {path: 'sample_test', component: Test2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
