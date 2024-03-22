import {
  Component,
  Input,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-s-dynamic-content-component',
  templateUrl: './s-dynamic-content-component.component.html',
  styleUrls: ['./s-dynamic-content-component.component.scss'],
})
export class SDynamicContentComponentComponent {
  private _htmlContent: string | undefined | null = null;

  @Input()
  set htmlContent(content: string | undefined | null) {
    this._htmlContent = content;
    this.safeHtmlContent = this.domSanitizer.bypassSecurityTrustHtml(
      content || ''
    );
  }

  safeHtmlContent: SafeHtml = '';
  /**
   *
   */
  constructor(
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    private domSanitizer: DomSanitizer
  ) {
    if (this.htmlContent) {
      const factory = this.cfr.resolveComponentFactory(
        SDynamicContentComponentComponent
      );
      const componentRef = factory.create(this.vcr.injector);
      componentRef.instance.htmlContent = this.htmlContent;
      this.vcr.insert(componentRef.hostView);
    }
  }
}
