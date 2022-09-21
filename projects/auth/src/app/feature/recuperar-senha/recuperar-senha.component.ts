import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'if-recuperar-senha',
  template: `
  <h1>Recuperar senha</h1>
    <p>
      recuperar-senha works!
    </p>
  `,
  styles: [`
   h1 {
    color: #77ffc0;
}` 
  ]
})
export class RecuperarSenhaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
