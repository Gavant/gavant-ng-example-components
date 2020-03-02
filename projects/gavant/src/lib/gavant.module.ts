import { NgModule } from '@angular/core';
import { GavantComponent } from './gavant.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [GavantComponent, UserComponent],
  imports: [
  ],
  exports: [GavantComponent, UserComponent]
})
export class GavantModule { }
