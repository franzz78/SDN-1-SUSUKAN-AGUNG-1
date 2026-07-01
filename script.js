import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

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

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

onValue(ref(db, 'profile/sejarah'), (snapshot) => {
    const data = snapshot.val();
    if(data) document.getElementById('sejarah-container').innerHTML = `
        <div class="sejarah-card">
            <img src="${data.foto}" class="img-thumb">
            <div><h3>${data.judul}</h3><p>${data.deskripsi}</p></div>
        </div>`;
});

onValue(ref(db, 'profile/guru'), (snapshot) => {
    const data = snapshot.val();
    if(data) document.getElementById('guru-container').innerHTML = Object.values(data).map(item => `
        <div class="profil-card">
            <img src="${item.foto}" class="img-thumb" style="border-radius: 50%">
            <div><h3>${item.nama}</h3><p>${item.jabatan}</p></div>
        </div>`).join('');
});
