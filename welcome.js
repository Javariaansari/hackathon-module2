// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyC3upVUWWkbVAc_cZlYGAp6aZeeIt3XG9M",
//     authDomain: "my-first-web-app-project-230e5.firebaseapp.com",
//     databaseURL: "https://my-first-web-app-project-230e5-default-rtdb.firebaseio.com",
//     projectId: "my-first-web-app-project-230e5",
//     storageBucket: "my-first-web-app-project-230e5.firebasestorage.app",
//     messagingSenderId: "183438165410",
//     appId: "1:183438165410:web:ce73eaa56069742c7b5efb",
//     measurementId: "G-KS2M8J1Y6S"
// };

// // Import Firebase libraries
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
// import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js';

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Reference to the Firestore collection
// const colRef = collection(db, 'posts');

// // Fetch and display posts
// const fetchData = async () => {
//     try {
//         const snapshot = await getDocs(colRef);
//         const postsList = snapshot.docs.map(doc => doc.data());
//         displayPosts(postsList);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// };

// // Function to display posts dynamically
// const displayData = (postsList) => {
//     const contentDiv = document.getElementById('content');
//     contentDiv.innerHTML = ''; // Clear the content first
//     postsList.forEach(post => {
//         const postElement = document.createElement('div');
//         postElement.classList.add('post');
//         postElement.innerHTML = `
//             <h3>${post.title}</h3>
//             <p>${post.description}</p>
//             <span class="author">By ${post.author}</span>
//             <p class="read-time">Read time: ${post.readTime}</p>
//         `;
//         contentDiv.appendChild(postElement);
//     });
// };
// fetchData();

const firebaseConfig = {
    apiKey: "AIzaSyC3upVUWWkbVAc_cZlYGAp6aZeeIt3XG9M",
    authDomain: "my-first-web-app-project-230e5.firebaseapp.com",
    databaseURL: "https://my-first-web-app-project-230e5-default-rtdb.firebaseio.com",
    projectId: "my-first-web-app-project-230e5",
    storageBucket: "my-first-web-app-project-230e5.firebasestorage.app",
    messagingSenderId: "183438165410",
    appId: "1:183438165410:web:ce73eaa56069742c7b5efb",
    measurementId: "G-KS2M8J1Y6S"
};

// Import Firebase libraries
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Reference to the Firestore collection
const colRef = collection(db, 'posts');

// Fetch and display posts
const fetchData = async () => {
    try {
        const snapshot = await getDocs(colRef);
        const postsList = snapshot.docs.map(doc => doc.data());
        displayData(postsList);  // Ensure you're calling displayData, not displayPosts
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

// Function to display posts dynamically
const displayData = (postsList) => {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear the content first
    postsList.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <span class="author">By ${post.author}</span>
            <p class="read-time">Read time: ${post.readTime}</p>
        `;
        contentDiv.appendChild(postElement);
    });
};

// Call the function to fetch and display posts when the page loads
fetchData();
