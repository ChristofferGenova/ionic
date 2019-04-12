import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LifecyleEventsPage } from './lifecyle-events';

@NgModule({
  declarations: [
    LifecyleEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(LifecyleEventsPage),
  ],
})
export class LifecyleEventsPageModule {}
