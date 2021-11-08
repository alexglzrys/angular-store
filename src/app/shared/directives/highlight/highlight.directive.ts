import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // Recibe el elemento nativo al cual se le asigna esta directiva, para modificar su DOM
  // No solo con estilos y clases, quizá para duplicarlo, cambiarle el contenido, etc.
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.border = '1px solid crimson';
    this.element.nativeElement.style.color = 'crimson';
    this.element.nativeElement.style.padding = '3px';
    this.element.nativeElement.style.fontSize = '10px';
    this.element.nativeElement.style.display = 'inline-block';
  }

}
