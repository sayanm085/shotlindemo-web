# 🚀 eCommerce Platform (React + Vite)

This is a high-performance **eCommerce** platform built using **React (Vite)** with a focus on speed, smooth animations, and responsiveness. It features **Redux for state management**, optimized **server-side rendering (SSR) with Next.js migration**, and enhanced **UI performance** using Framer Motion, MUI, and Cloudflare CDN for images.

---

## 🌟 Features

✅ **Optimized Performance** – Uses Vite for fast builds and loads.
✅ **Redux for State Management** – Efficient global state handling.
✅ **Server-Side Rendering (SSR)** – Gradual migration to Next.js.
✅ **Optimized Image Loading** – Uses Cloudflare CDN for responsive image delivery.
✅ **Framer Motion Animations** – Smooth UI transitions.
✅ **Mobile & Desktop Optimization** – Adjusts animations and resolutions dynamically.
✅ **Nodemailer Integration** – Handles email transactions for orders.
✅ **Cloudflare DNS Management** – Secure and optimized domain handling.
✅ **Ubuntu Server Deployment** – Backend on `api.shotlin.com`, frontend on `shotlin.com`.
✅ **CI/CD Automation** – Auto-deployment on server updates.

---

## 📌 Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v18+)
- **npm** or **yarn**
- **VS Code** (Recommended)

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/ecommerce-project.git
cd ecommerce-project
```

### 2️⃣ Install Dependencies
```sh
npm install
# OR
yarn install
```

### 3️⃣ Start Development Server
```sh
npm run dev
```
- The app will be available at **`http://localhost:5173/`** (Vite Default Port).

### 4️⃣ Build for Production
```sh
npm run build
```

### 5️⃣ Preview Production Build
```sh
npm run preview
```

---

## 🚀 Server Deployment (Ubuntu + Nginx + PM2)

1. **Setup Ubuntu Server**
2. **Install Node.js & Nginx**
3. **Configure Nginx for Reverse Proxy**
4. **Run Backend with PM2**
5. **Deploy Frontend as Static Files**

Refer to the full **[Deployment Guide](docs/deployment.md)** for detailed steps.

---

## 📦 Technologies Used

- **Frontend:**
  - React (Vite)
  - Redux Toolkit (State Management)
  - Framer Motion (Animations)
  - Tailwind CSS (Styling)
  - MUI (Material UI Components)

- **Backend:**
  - Node.js (Express.js)
  - MongoDB (Database)
  - Nodemailer (Email Handling)

- **Infrastructure & Deployment:**
  - Ubuntu (Server Hosting)
  - Cloudflare (DNS & Security)
  - Nginx (Reverse Proxy)
  - PM2 (Process Manager)
  - CI/CD (GitHub Actions for Auto Deployments)

---

## 🔥 Upcoming Enhancements

🚀 **Full Next.js Migration** – Complete transition to server-side rendering.
🚀 **GraphQL API** – Implement a GraphQL layer for optimized data fetching.
🚀 **Admin Dashboard** – UI for managing products, orders, and users.
🚀 **Payment Integration** – Stripe or Razorpay for seamless transactions.
🚀 **SEO Optimization** – Improve page speed and search rankings.

---

## 🤝 Contributing

We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m "Added new feature"`
4. Push to branch: `git push origin feature-name`
5. Submit a Pull Request.

---

## 🛠 Troubleshooting

**Common Issues & Fixes:**

🔹 `Error: Cannot find module` → Run `npm install` again.  
🔹 `Page not updating?` → Clear cache with `npm run dev --force`.  
🔹 `Images not loading?` → Check Cloudflare settings.  

---

## 📞 Support
For any issues or questions, feel free to:
- Open an **Issue** on GitHub.
- Contact us at **support@shotlin.com**.

**Happy Coding! 🚀**

