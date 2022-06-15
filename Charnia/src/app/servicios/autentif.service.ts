import { Injectable, NgZone } from '@angular/core';
import { Usuario } from '../servicios/usuario';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument, } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { UsuarioService } from "../componentes/mostrar-datos/usuario/usuario.service";

@Injectable({
  providedIn: 'root'
})
export class AutentifService {
  usuDatos: any; // Save logged in user data
  errorCorreo: string;
  errorClave: string;
  errorGenerico: string;
  errorNombre : string;
  camposUsu : any = {
    contrasenya: '',
    correo: '',
    nombre: '',
    apellidos:'',
    tipo: '',
  };

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAutentif: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public UsuarioServicio: UsuarioService ,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    this.errorCorreo = "";
    this.errorClave = "";
    this.errorGenerico = "";
    this.errorNombre = "";
    this.camposUsu = {
      contrasenya: '',
      correo: '',
      nombre: '',
      apellidos:'',
      tipo: '',
    };

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
  registrarse(correo: string, contrasenya: string, nombre: any) {
    return this.afAutentif
      .createUserWithEmailAndPassword(correo, contrasenya)
      .then((result) => {
        /* Llama a enviarCorreoVerif() cuando un nuevo usuario se registra y devuelve una promesa */
        this.enviarCorreoVerif();
        //this.crearTablaUsuario(nombre);
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

  /* Establecer los datos del usuario cuando inicia sesión con nombre y contraseña y cuando inicie sesión con google */
  establecerDatosUsu(usuario: any) {
    const usuarioRef: AngularFirestoreDocument<any> = this.afs.doc(`usuario/${usuario.usuId}`);
    const usuDatos: Usuario = {
      usuId: usuario.usuId,
      correo: usuario.correo,
      contrasenya: usuario.contrasenya,
      nombre: usuario.nombre
      //correoVerif: usuario.correoVerif,
    };
    return usuarioRef.set(usuDatos, {
      merge: true,
    });
  }

  /* Establecer los datos del usuario cuando inicia sesión con nombre y contraseña, cuando se registre con usuario y contraseña y cuando inicie sesión con google */
  /*establecerDatosUsuRegistro(usuario: any, nombre: any) {
    const usuarioRef: AngularFirestoreDocument<any> = this.afs.doc(`usuario/${usuario.usuId}`);
    if(nombre != null) {
      this.camposUsu.nombre = nombre;
    } else {
      this.camposUsu.nombre = usuario.name;
    }
    this.camposUsu.
    
    this.UsuarioServicio.agregarUsuario(this.camposUsu);
    return usuarioRef;
  }*/

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
        this.errorCorreo = "<div class='alert alert-danger text-center'>El correo ya está en uso</div>";
        //alert("El correo ya existe");
        break;
      case "auth/id-token-expired":
        this.errorGenerico = "<div class='alert alert-danger text-center'>El token de sesión ha expirado</div>";
        //alert("El token de sesión ha expirado");
        break;
      case "auth/id-token-revoked":
        this.errorGenerico = "<div class='alert alert-danger text-center'>El token de sesión se ha revocado</div>";
        //alert("El token de sesión se ha revocado");
        break;
      case "auth/insufficient-permission":
        this.errorGenerico = "<div class='alert alert-danger text-center'>No tienes suficientes permisos</div>";
        //alert("No tienes suficientes permisos");
        break;
      case "auth/internal-error":
        this.errorGenerico = "<div class='alert alert-danger text-center'>Error interno</div>";
        //alert("Error interno");
        break;
      case "auth/invalid-argument":
        this.errorGenerico = "<div class='alert alert-danger text-center'>Argumento invalido</div>";
        //alert("Argumento invalido");
        break;
      case "auth/invalid-continue-uri":
        this.errorGenerico = "<div class='alert alert-danger text-center'>URL de continuación invalida</div>";
        //alert("URL de continuación invalida");
        break;
      case "auth/invalid-email":
        this.errorGenerico = "<div class='alert alert-danger text-center'>Correo o contraseña invalidos</div>";
        //alert("Correo o contraseña invalidos");
        break;
      case "auth/invalid-password":
        this.errorGenerico = "<div class='alert alert-danger text-center'>Correo o contraseña invalidos</div>";
        //alert("Correo o contraseña invalidos");
        break;
      case "auth/operation-not-allowed":
        this.errorGenerico = "<div class='alert alert-danger text-center'>El proveedor de acceso no está habilitado</div>";
        //alert("El proveedor de acceso no está habilitado");
        break;
      case "auth/weak-password":
        this.errorClave = "<div class='alert alert-danger text-center'>La contraseña es débil</div>";
        //alert("La contraseña es debil");
        break;
      case "auth/already-initialized":
        this.errorGenerico = "<div class='alert alert-danger text-center'>Ya has iniciado sesión</div>";
        //alert("Ya has iniciado sesión");
        break;
    }
  }
}
