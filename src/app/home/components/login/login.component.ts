import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  senha: string = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(): void {
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      () => {
        this.router.navigate(['animais']);
      },
      (error: any) => {
        alert('usuário não identificado');
        console.log(error);
      }
    );
  }
}
