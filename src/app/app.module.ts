import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { FeatureModuleModule } from './feature-module/feature-module.module';
import { ChildComponent } from './child/child.component';
import { FpPVQ } from './fp-pvq/fp-pvq.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    FpPVQ,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FeatureModuleModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'app' },
      { path: 'app', component: TestComponent },
      { path: 'fppvq', component: FpPVQ }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
