# WanderLust 

An Airbnb-inspired travel listing app I built while learning full-stack development. 
Users can sign up, create listings with photos, and leave reviews.

# Tech Stack
- **Frontend:** HTML, CSS, JavaScript, EJS (with ejs-mate layouts)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** Passport.js (Local Strategy)
- **Image Upload:** Cloudinary + Multer
- **Session Storage:** connect-mongo
- **Deployment:** Render

 # Features
- Signup / Login with session-based auth
- Create, edit, delete listings with image upload
- Reviews with star ratings
- Flash messages, error handling, input validation

# Run Locally
1. Clone the repo and run `npm install`
2. Create a `.env` file with your MongoDB, Cloudinary, and session secret keys
3. Run `node app.js` → open `http://localhost:8080/listings`

Note: Still in progress — actively adding features.
