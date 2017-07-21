import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestServiceService } from './test-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [TestServiceService],
  declarations: []
})
export class FeatureModuleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FeatureModuleModule,
      providers: [
        TestServiceService
      ]
    };
  }
}
