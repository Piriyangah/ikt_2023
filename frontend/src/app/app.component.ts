import { Component } from '@angular/core';

@Component({ //Decorator, um eine Komponente der gesamten Anwendung als Komponente bekannt zu machen
  selector: 'app-root', //Der Selektor gibt an, dass überall dort, wo app-root als Elementselektor <app-root> </app-root> (index.html) verwendet wird, das in app.component.html definerte Template eingesetzt wird 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
