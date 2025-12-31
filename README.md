Below is a clean step-by-step from zero → a working React website with routing, a layout, navigation, and a couple of pages.
________________________________________
1) Install prerequisites
``` bash
A. Install Node.js (LTS)
•	Download and install Node.js LTS.
•	Verify:
node -v
npm -v
```
________________________________________
2) Create a new React app (recommended: Vite)
Open terminal in the folder you want your project:
```bash
npm create vite@latest my-website -- --template react-ts
cd my-website
npm install
npm run dev
You should see a local URL like http://localhost:5173.
```
________________________________________
3) Clean the starter files a bit
Open src/App.tsx and replace with something simple:
``` bash
export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <h1>My React Website</h1>
      <p>Home page content here.</p>
    </div>
  );
}
```
________________________________________
4) Add Routing (React Router)
Install React Router:
```  bash
npm i react-router-dom
```
________________________________________
5) Create a basic folder structure
Inside src/, create:
```  bash
src/
  pages/
    Home.tsx
    About.tsx
    Contact.tsx
    NotFound.tsx
  layout/
    MainLayout.tsx
  App.tsx
  main.tsx
  ```
________________________________________
6) Create pages
src/pages/Home.tsx
```  bash
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
      <h2>404</h2>
      <p>Page not found.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}
```
________________________________________
7) Create a Layout with navigation
src/layout/MainLayout.tsx
```  bash
import { NavLink, Outlet } from "react-router-dom";

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  marginRight: 12,
  textDecoration: "none",
  fontWeight: isActive ? "bold" : "normal",
});

export default function MainLayout() {
  return (
    <div style={{ padding: 24 }}>
      <header style={{ marginBottom: 16 }}>
        <h1 style={{ marginBottom: 8 }}>My React Website</h1>
        <nav>
          <NavLink to="/" style={linkStyle} end>
            Home
          </NavLink>
          <NavLink to="/about" style={linkStyle}>
            About
          </NavLink>
          <NavLink to="/contact" style={linkStyle}>
            Contact
          </NavLink>
        </nav>
      </header>

      <main style={{ paddingTop: 12 }}>
        <Outlet />
      </main>

      <footer style={{ marginTop: 24, opacity: 0.7 }}>
        © {new Date().getFullYear()} My React Website
      </footer>
    </div>
  );
}
```
________________________________________
8) Configure Routes in App.tsx
Replace src/App.tsx with:
```  bash
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
```  
________________________________________
9) Wrap the app with BrowserRouter in main.tsx
Open src/main.tsx and ensure it looks like this:
```  bash
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
```
________________________________________
10) Run it
npm run dev
Now visit:
•	/ Home
•	/about About
•	/contact Contact
•	/anything → 404 page
________________________________________
11) (Important) Deploy-ready routing note
If you deploy to Netlify / Vercel / Hostinger etc., refresh on routes like /about can 404 unless you configure rewrites.
•	Netlify: add _redirects with /* /index.html 200
•	Vercel: usually fine
•	Nginx/Apache: needs SPA rewrite to index.html
________________________________________
If you want, I can extend this into a real website structure (Auth pages, dashboard layout, API calls, environment variables, and a nice UI with Tailwind/MUI) and match it to your AFROMIT portal style.

