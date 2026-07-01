import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA59VR8qcls0kz0caFSr9XX8QUaLMftzDY",
  authDomain: "project-sdn-1-susukan-agung.firebaseapp.com",
  databaseURL: "https://project-sdn-1-susukan-agung-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-sdn-1-susukan-agung",
  storageBucket: "project-sdn-1-susukan-agung.firebasestorage.app",
  messagingSenderId: "896937949897",
  appId: "1:896937949897:web:fd133a75e5a37b9b00eb18",
  measurementId: "G-ERCP0XWBCX"
};

const db = getDatabase(initializeApp(firebaseConfig));

// Animasi Loading
let w = 0;
const int = setInterval(() => {
    w++; document.getElementById('progress').style.width = w + '%';
    if(w >= 100) { clearInterval(int); document.getElementById('loader').style.display = 'none'; }
}, 20);

// Admin Functions
window.showAdmin = () => document.getElementById('admin-panel').style.display = 'block';
window.closeAdmin = () => document.getElementById('admin-panel').style.display = 'none';
window.login = () => {
    if(document.getElementById('pass').value === "SDNSATUSUGUNG#26") {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('admin-form').style.display = 'block';
    } else alert("Password Salah!");
};

window.saveData = () => {
    const judul = document.getElementById('judul').value;
    const desk = document.getElementById('desk').value;
    set(ref(db, 'profile/sejarah'), { judul, deskripsi: desk });
    alert("Data Tersimpan!");
};

// Fetch Data
onValue(ref(db, 'profile/sejarah'), (s) => {
    const d = s.val();
    if(d) document.getElementById('sejarah-container').innerHTML = `<div class="profil-card"><h3>${d.judul}</h3><p>${d.deskripsi}</p></div>`;
});
