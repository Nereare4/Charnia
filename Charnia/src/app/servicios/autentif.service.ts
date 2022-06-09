import { Injectable, NgZone } from '@angular/core';
import { Usuario } from '../servicios/usuario';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument, } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutentifService {
  usuDatos: any; // Save logged in user data
  errorCorreo: string;
  errorClave: string;
  errorGenerico: string;

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAutentif: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    this.errorCorreo = "";
    this.errorClave = "";
    this.errorGenerico = "";

    /* Guardar los datos del usuario en localstorage cuando haya iniciado sesión y cambiar esos datos a null cuando cierre sesión */
    this.afAutentif.authState.subscribe((usuario) => {
      if (usuario) {
        this.usuDatos = usuario;
        localStorage.setItem('usuario', JSON.stringify(this.usuDatos));
        JSON.parse(localStorage.getItem('usuario')!);
      } else {
        localStorage.setItem('usuario', 'null');
        JSON.parse(localStorage.getItem('usuario')!);
      }
    });
  }

  /* Iniciar sesión con correo y contraseña */
  login(correo: string, contrasenya: string) {
    return this.afAutentif
      .signInWithEmailAndPassword(correo, contrasenya)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['perfil-usuario']);
        });
        this.establecerDatosUsu(result.user);
      })
      .catch((error) => {
        this.manejarErrores(error.code);
      });
  }

  /* Registrarse con correo y contraseña */
  registrarse(correo: string, contrasenya: string) {
    return this.afAutentif
      .createUserWithEmailAndPassword(correo, contrasenya)
      .then((result) => {
        /* Llama a enviarCorreoVerif() cuando un nuevo usuario se registra y devuelve una promesa */
        this.enviarCorreoVerif();
        this.establecerDatosUsu(result.user);
      })
      .catch((error) => {
        this.manejarErrores(error.code);
      });
  }

  /* Enviar un correo de verificación cuando un nuevo usuario se registre */
  enviarCorreoVerif() {
    return this.afAutentif.currentUser
      .then((u: any) => u.sendEmailVerification()) //// no se si tiene que tener este nombre obligatoriamente
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }

  /* Cambio de contraseña si el usuario la ha olvidado */
  contrasenyaOlvidada(correoCambioContrasenya: string) {
    return this.afAutentif
      .sendPasswordResetEmail(correoCambioContrasenya)
      .then(() => {
        window.alert('Correo de cambio de contraseña enviado, compruebe su bandeja de entrada.');
      })
      .catch((error) => {
        this.manejarErrores(error.code);
      });
  }

  /* Devuelve true cuando el usuario ha iniciado sesión y está verificado */
  get haIniciadoSesion(): boolean {
    const usuario = JSON.parse(localStorage.getItem('usuario')!);
    return usuario !== null && usuario.correoVerif !== false ? true : false;
  }

  /* Iniciar sesión con google */
  googleAutentif() {
    return this.autentifLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      if (res) {
        this.router.navigate(['perfil-usuario']);
      }
    });
  }

  /* Logica de autentificación para usar los proveedores de autentificación */ //// (yo que se, es lo que estaba ahí puesto)
  autentifLogin(proveedor: any) {
    return this.afAutentif
      .signInWithPopup(proveedor)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['perfil-usuario']);
        });
        this.establecerDatosUsu(result.user);
      })
      .catch((error) => {
        this.manejarErrores(error.code);
      });
  }

  /* Establecer los datos del usuario cuando inicia sesión con nombre y contraseña, cuando se registre con usuario y contraseña y cuando inicie sesión con google */
  establecerDatosUsu(usuario: any) {
    const usuarioRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${usuario.usuId}`);
    const usuDatos: Usuario = {
      //usuId: usuario.usuId,
      correo: usuario.correo,
      contrasenya: usuario.contrasenya
      //nombre: usuario.nombre,
      //correoVerif: usuario.correoVerif,
    };
    return usuarioRef/*.set(usuDatos, {
      merge: true,
    });*/
  }


  /*
  FirebaseError: [code=invalid-argument]: Function DocumentReference.set() called with invalid data.
  Unsupported field value: undefined (found in field correo in document users/undefined)
  */


  /* Cerrar sesión */
  cerrarSesion() {
    return this.afAutentif.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }

  manejarErrores(errorId: string) {
    switch (errorId) {
      case "auth/email-already-exists":
        this.errorCorreo = "El correo ya está en uso";
        //alert("El correo ya existe");
        break;
      case "auth/id-token-expired":
        this.errorGenerico = "El token de sesión ha expirado";
        //alert("El token de sesión ha expirado");
        break;
      case "auth/id-token-revoked":
        this.errorGenerico = "El token de sesión se ha revocado";
        //alert("El token de sesión se ha revocado");
        break;
      case "auth/insufficient-permission":
        this.errorGenerico = "No tienes suficientes permisos";
        //alert("No tienes suficientes permisos");
        break;
      case "auth/internal-error":
        this.errorGenerico = "Error interno";
        //alert("Error interno");
        break;
      case "auth/invalid-argument":
        this.errorGenerico = "Argumento invalido";
        //alert("Argumento invalido");
        break;
      case "auth/invalid-continue-uri":
        this.errorGenerico = "URL de continuación invalida";
        //alert("URL de continuación invalida");
        break;
      case "auth/invalid-email":
        this.errorGenerico = "Correo o contraseña invalidos";
        //alert("Correo o contraseña invalidos");
        break;
      case "auth/invalid-password":
        this.errorGenerico = "Correo o contraseña invalidos";
        //alert("Correo o contraseña invalidos");
        break;
      case "auth/operation-not-allowed":
        this.errorGenerico = "El proveedor de acceso no está habilitado";
        //alert("El proveedor de acceso no está habilitado");
        break;
      case "auth/weak-password":
        this.errorClave = "La contraseña es debil";
        //alert("La contraseña es debil");
        break;
      case "auth/already-initialized":
        this.errorGenerico = "Ya has iniciado sesión";
        //alert("Ya has iniciado sesión");
        break;
    }
  }
}
