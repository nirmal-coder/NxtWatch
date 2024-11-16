# **Nxtwatch - A YouTube-Like Video Streaming Platform**

Nxtwatch is a modern video streaming application inspired by YouTube, built to deliver a seamless and immersive content discovery experience. This project highlights the power of **React.js** combined with intuitive design, responsive UI, and robust functionality.

---

## **Live Demo**
Check out the live application: [Nxtwatch](https://nxtwatchnirmal.ccbp.tech/)

---

## **Credentials**
- **Username**: `rahul`
- **Password**: `rahul@2021`

---

## **Features**

### **Authentication**
- Secure login with validation for incorrect credentials, displaying error messages when applicable.
  
  **Login Page:**
  ![Login Page](https://res.cloudinary.com/doov17zaw/image/upload/v1731690432/Nxtwatch/Screenshot_15-11-2024_22222_nxtwatchnirmal.ccbp.tech_gdmyht.jpg)
  
  **Error on Invalid Credentials:**
  ![Incorrect Credentials](https://res.cloudinary.com/doov17zaw/image/upload/v1731690431/Nxtwatch/Screenshot_15-11-2024_222240_nxtwatchnirmal.ccbp.tech_s7pxgk.jpg)

- Show/Hide password functionality for improved user experience.
- Unauthorized users are redirected to the Login page when accessing restricted routes.
- Logged-in users are automatically redirected to the Home page when attempting to access the Login route.

---

### **Theming**
- Default light theme, with an easy toggle to switch between Light and Dark themes.

  **Light Theme - Home Page:**
  ![Light Theme Home Page](https://res.cloudinary.com/doov17zaw/image/upload/v1731690466/Nxtwatch/screenshot-1731689947331_rx6upy.png)
  
  **Dark Theme - Home Page:**
  ![Dark Theme Home Page](https://res.cloudinary.com/doov17zaw/image/upload/v1731690463/Nxtwatch/screenshot-1731689983190_bgtfpa.png)

---

### **Dynamic Routing**
- **Home Route**:
  - Displays videos fetched from an API.
  - Search functionality for dynamic video discovery.
  - Handles API errors gracefully with retry functionality and fallback views for empty responses.
  - Loader displayed during API calls.
  
  **Home Page Example (Dark Theme):**
  ![Dark Theme Home Page](https://res.cloudinary.com/doov17zaw/image/upload/v1731690463/Nxtwatch/screenshot-1731689983190_bgtfpa.png)

- **Trending Route**:
  - Showcases trending videos fetched from a dedicated API.
  - Retry functionality and fallback views for error handling.
  
  **Trending Page:**
  ![Trending Page](https://res.cloudinary.com/doov17zaw/image/upload/v1731690445/Nxtwatch/screenshot-1731690023266_hwwzla.png)

- **Gaming Route**:
  - Displays gaming-related videos fetched dynamically from the API.
  - Includes retry functionality and fallback views for API errors.
  
  **Gaming Page:**
  ![Gaming Page](https://res.cloudinary.com/doov17zaw/image/upload/v1731690472/Nxtwatch/screenshot-1731690047659_fiaw7l.png)

- **Saved Videos Route**:
  - A dedicated section to manage and revisit saved videos.
  - Displays a friendly message when no videos are saved.
  
  **Saved Videos Page:**
  ![Saved Videos Page](https://res.cloudinary.com/doov17zaw/image/upload/v1731690438/Nxtwatch/screenshot-1731690073302_ezeumt.png)

- **Video Details Route**:
  - Individual video details displayed using the **react-player** package for smooth playback.
  - Interactive Like, Dislike, and Save buttons with state management for user engagement.
  - Saved videos dynamically added or removed based on user actions.

  **Video Details Page:**
  ![Video Details Page](https://res.cloudinary.com/doov17zaw/image/upload/v1731690465/Nxtwatch/screenshot-1731690143248_etod7r.png)

- **Not Found Route**:
  - A user-friendly page displayed when navigating to invalid URLs.

---

### **Logout Functionality**
- Logout popup with Cancel/Confirm options for secure logouts.

---

### **Responsive Design**
- Fully responsive layout for seamless use across devices including desktops, tablets, and smartphones.
  
  **Mobile View - Home Page:**
  


  ![Mobile View - Trending Page](https://res.cloudinary.com/doov17zaw/image/upload/v1731691238/Nxtwatch/screenshot-1731691181149_utg6w8.png)


  ![Mobile View - Video Details](https://res.cloudinary.com/doov17zaw/image/upload/v1731691234/Nxtwatch/screenshot-1731691207336_e1e2tk.png)

---

## **Tech Stack**
- **Frontend**: React.js, React Router, Styled-Components, CSS
- **API Integration**: RESTful APIs
- **State Management**: Context API
- **Media Player**: React Player

---
