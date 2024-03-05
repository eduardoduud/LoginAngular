import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {IconModule} from "./icon.module";
import {SvgIconComponent} from "angular-svg-icon";

// @ts-ignore

@Component({
  standalone: true,
  selector: 'app-icon',
  template: `<svg-icon [src]="iconPath"
                       [svgClass]="svgClass"
                       [applyClass]="true">
             </svg-icon>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconModule, SvgIconComponent]
})

export class IconComponent {
  iconPath = '';
  @Input() svgClass?: string;
  @Input() set type(type:string) {
    this.iconPath = `assets/images/${type}.svg`
  };

}
