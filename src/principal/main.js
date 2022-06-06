//--------
    //  // Import the functions you need from the SDKs you need
    //   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
    //   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
    //   import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js"
    //  // TODO: Add SDKs for Firebase products that you want to use
    //  // https://firebase.google.com/docs/web/setup#available-libraries

    //  // Your web app's Firebase configuration
    //  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    //   const firebaseConfig = {
    //     apiKey: "AIzaSyDT2vqXsl__sb3EXG3zyAmTHp0JdNneYJI",
    //     authDomain: "movies-53505.firebaseapp.com",
    //     projectId: "movies-53505",
    //     storageBucket: "movies-53505.appspot.com",
    //     messagingSenderId: "375374213226",
    //     appId: "1:375374213226:web:951f2cc88db8b60dd2da13",
    //     measurementId: "G-SNK0QJBKLX"
    // };

    //  // Initialize Firebase
    //   const app = initializeApp(firebaseConfig);
    //   const analytics = getAnalytics(app);

// Signup

// const signupForm = document.querySelector('#signup-form');

// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const email = document.querySelector('#signup-email').value;
//     const password = document.querySelector('#signup-password').value;

//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredentials) => {
//         // clear the form
//         signupForm.reset();

//           Swal.fire({
//             title: 'Bienvenido!',
//             text: 'Tu cuenta se ha creado exitosamente✅',
//             icon: 'success',
//             footer: '<span class="rojo">Explora los diversos posts de las peliculas de Marvel Studios</span>',
//             timer: 5000,

//           })
//   })
// });

// // Signin
// const signinForm = document.querySelector('#login-form');

// signinForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = document.querySelector('#login-email').value;
//   const password = document.querySelector('#login-password').value;

//   const auth = getAuth();
//   signInWithEmailAndPassword(auth, email, password)
//   .then((userCredentials) => {
//       // clear the form
//       signinForm.reset();

//       Swal.fire({
//         text: 'Has iniciado sesión',
//         icon: 'success',
//         timer: 5000
//       })

//   })
// });

// const logout = document.querySelector('#logout');

// logout.addEventListener('click', (e) => {
//   e.preventDefault();
//   const auth = getAuth();
//   signOut(auth)
//   .then(() => {
//     Swal.fire({
//       text: 'Sesión cerrada',
//       icon: 'success',
//       timer: 5000
//     })
//       // alert('sign out',)
//   })
// });

// --------------------- SWITCH -------------------------
const btnSwitch = document.querySelector('#switch')

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    
    // Guardar modo en localstorage
    if(document.body.classList.contains('dark')) {
      localStorage.setItem('dark-mode', 'true');
    } else {
      localStorage.setItem('dark-mode', 'false');
    }
});

// Obtener el modo actual
if(localStorage.getItem('dark-mode') === 'true') {
  document.body.classList.add('dark');
  btnSwitch.classList.add('active');
} else {
  document.body.classList.remove('dark');
  btnSwitch.classList.remove('active');
}







