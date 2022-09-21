import { Component } from '@angular/core';

@Component({
  selector: 'if-container-auth',
  template: `
  <div class="main-login">
    <div class="left-login">
        <h1>Faça login<br> e entre para o nosso time</h1>
    </div>
    <div class="right-login">
        <div class="card-login">
            
              <router-outlet></router-outlet>
        </div>
    </div>
</div>

   
  `,
  styles: [`
  .main-login {
    width: 100vw;
    height: 100vh;
    background: #201b2c;
    display: flex;
    justify-content: center;
    align-items: center;
}

.left-login {
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.left-login > h1 {
    color: #77ffc0;
}

.right-login {
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-login {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 35px;
    background: #2f2841;
    border-radius: 20px;
    box-shadow: 0px 10px 40px #00000056;
}

.card-login > h1 {
    color: #00ff88;
    font-weight: 800;
    margin: 0;
}
  `
  ]
})
export class ContainerAuthComponent {


}
