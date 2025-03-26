**Ecovision**

Ecovision is an innovative platform dedicated to promoting sustainability through Green Score tracking, Food Redistribution, and Awareness through blogs. Our mission is to encourage environmentally friendly practices, reduce food waste, and build an engaged community through informative content and impactful actions.

🌱 Key Features

1️⃣ Green Score

Users can input their eco-friendly purchases manually or by uploading bills (OCR-based extraction).

Earn badges based on predefined score thresholds.

Scores are evaluated and verified by admins before being displayed on a monthly leaderboard.

2️⃣ Food Redistribution

Food Donors can provide details (name, quantity, expiry & cooking date, container needs, pickup method, and address).

Volunteers track and manage food pickups using Google Maps integration.

Real-time status updates (Pending Pickup, Delivered) ensure a smooth donation process.

Donors receive confirmation notifications once the food is successfully picked up.

3️⃣ Awareness Blogs

Users can write, edit, and delete blog posts.

Supports image uploads for enhanced storytelling.

Engaging blog listing UI for a seamless reading experience.

🔐 Authentication & User Roles

Secure authentication with JWT & HTTP-only cookies.

Google Login support for easy access.

Roles-Based Access Control (RBAC):

User: Can post blogs, donate food, and participate in Green Score tracking.

Volunteer: Can manage food pickups and deliveries.

Admin: Verifies users, reviews food donations, and validates Green Scores.

🖥️ Tech Stack

Frontend

React (Material UI for a modern, responsive UI)

React Router (Navigation & protected routes)

Axios (Global instance with interceptors for authentication)

React Context & useReducer (State management)

Google Maps API (Location selection for food pickups)

Backend

Node.js & Express (REST API with robust routing & middleware)

MongoDB Atlas (Scalable, cloud-based database)

bcrypt.js (Secure password hashing)

JSON Web Tokens (JWT) (Authentication & role management)

🚀 How to Run the Project

1️⃣ Clone the Repository

git clone https://github.com/your-repo/ecovision.git
cd ecovision

2️⃣ Set Up the Backend

cd server
npm install
npm start

3️⃣ Set Up the Frontend

cd client
npm install
npm start

4️⃣ Environment Variables

Create a .env file in the server folder and add:

MONGO_URI=your_mongo_atlas_url
JWT_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id

📌 Roadmap

✅ UI & UX improvements for Food Donation Form
✅ Integration of Google Maps for pickup location
✅ Development of OCR-based bill processing
🔜 Blog UI enhancements & content moderation
🔜 Performance optimizations & deployment

🤝 Contribution

We welcome contributions! If you’d like to improve Ecovision, feel free to fork the repo, open a pull request, or suggest features via issues.

dependencies

npm install @mui/material @emotion/react @emotion/styled @fortawesome/fontawesome-free

npm install mdb-react-ui-kit

npm install @fortawesome/fontawesome-free

npm install bootstrap

npm install react@18 react-dom@18

npm install mdb-react-ui-kit

npm install @mui/icons-material //

npm install firebase



🚀 Ecovision - Empowering Sustainability, One Action at a Time! 🌍

