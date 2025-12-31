My React Website (Vite + React Router)

This project is a simple React + TypeScript website built using Vite.
It includes routing, a shared layout, multiple pages, and a clean project structure suitable for real-world applications.

# Prerequisites

Make sure you have the following installed:

Node.js (LTS)

npm (comes with Node.js)

Verify installation:

node -v
npm -v

##  Create the Project
npm create vite@latest my-website -- --template react-ts
cd my-website
npm install
npm run dev


Open your browser at:

http://localhost:5173

## Project Structure
src/
  layout/
    MainLayout.tsx
  pages/
    Home.tsx
    About.tsx
    Contact.tsx
    NotFound.tsx
  App.tsx
  main.tsx

### Install Required Dependencies
npm install react-router-dom

# Source Code
src/pages/Home.tsx
export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home page.</p>
    </div>
  );
}

src/pages/About.tsx
export default function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This is the about page.</p>
    </div>
  );
}

src/pages/Contact.tsx
export default function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>Contact us at: hello@example.com</p>
    </div>
  );
}

src/pages/NotFound.tsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
}

# Layout with Navigation
src/layout/MainLayout.tsx
import { NavLink, Outlet } from "react-router-dom";

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  marginRight: 12,
  textDecoration: "none",
  fontWeight: isActive ? "bold" : "normal",
});

export default function MainLayout() {
  return (
    <div style={{ padding: 24 }}>
      <header>
        <h1>My React Website</h1>
        <nav>
          <NavLink to="/" style={linkStyle} end>Home</NavLink>
          <NavLink to="/about" style={linkStyle}>About</NavLink>
          <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
        </nav>
      </header>

      <main style={{ marginTop: 20 }}>
        <Outlet />
      </main>

      <footer style={{ marginTop: 40, opacity: 0.7 }}>
        © {new Date().getFullYear()} My React Website
      </footer>
    </div>
  );
}

## App Routing
src/App.tsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

## Wrap App with Router
src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

## Run the App
npm run dev


Visit:

/ → Home

/about → About

/contact → Contact

Any unknown route → 404 page

### Deployment Notes (Important)

If deploying to Netlify, create this file:

public/_redirects

/* /index.html 200


This ensures React Router works on page refresh.

## You're Ready!

