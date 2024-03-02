import { HttpClientModule } from '@angular/common/http';
import { SvgIconComponent, provideAngularSvgIcon } from 'angular-svg-icon';
import {NgModule} from "@angular/core";

@NgModule({
  imports: [ HttpClientModule, SvgIconComponent ],
  providers: [ provideAngularSvgIcon() ]
})
export class IconModule {}
