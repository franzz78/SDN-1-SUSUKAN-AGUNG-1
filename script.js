import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";

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
const analytics = getAnalytics(app);

// Mengambil dan menampilkan data real-time
onValue(ref(db, 'info_sekolah'), (snapshot) => {
    const data = snapshot.val();
    const list = document.getElementById('content-list');
    
    if (data) {
        list.innerHTML = Object.values(data).map(item => `
            <div class="card">
                <h3>${item.judul}</h3>
                <p>${item.deskripsi}</p>
            </div>
        `).join('');
    } else {
        list.innerHTML = "<p>Data belum tersedia di database.</p>";
    }
});
