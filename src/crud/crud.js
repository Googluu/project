    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js"
    import { getFirestore, 
        collection, 
        addDoc,
        getDocs,
        deleteDoc,
        onSnapshot,
        doc,
        getDoc,
        updateDoc  } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries

   // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDT2vqXsl__sb3EXG3zyAmTHp0JdNneYJI",
        authDomain: "movies-53505.firebaseapp.com",
        projectId: "movies-53505",
        storageBucket: "gs://movies-53505.appspot.com",
        messagingSenderId: "375374213226",
        appId: "1:375374213226:web:951f2cc88db8b60dd2da13",
        measurementId: "G-SNK0QJBKLX"
    };

   // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
// FIRESTORE STORAGE
    const db = getFirestore();


export const saveCrud = (image, title, description) => 
    addDoc(collection(db, 'cruds'), { image, title, description });

export const getCruds = () => getDocs(collection(db, "cruds"));

export const onGetCruds = (callback) => onSnapshot(collection(db, "cruds"), callback); 

export const deleteCrud = (id) => deleteDoc(doc(db, "cruds", id));

export const getCrud = (id) => getDoc(doc(db, "cruds", id));

export const updateCrud = (id, newFields) => updateDoc(doc(db, "cruds", id), newFields);

//STORAGE

// Auth

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        // clear the form
        signupForm.reset();

            Swal.fire({
            title: 'Bienvenido!',
            text: 'Tu cuenta se ha creado exitosamente✅',
            icon: 'success',
            footer: '<span class="rojo">Explora los diversos posts de las peliculas de Marvel Studios</span>',
            timer: 5000,

        })
    })
});

// Signin
const signinForm = document.querySelector('#login-form');

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      // clear the form
        signinForm.reset();

        Swal.fire({
            text: 'Has iniciado sesión',
            icon: 'success',
            timer: 5000
        })
    })
});

const logout = document.querySelector('#logout');

logout.addEventListener('click', (e) => {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth)
    .then(() => {
    Swal.fire({
        text: 'Sesión cerrada',
        icon: 'success',
        timer: 5000
        })
    })
});

