import { lazy, StrictMode ,Suspense} from 'react';
import Loader from './Layout/Loader/Loader';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Home } from './pages';

// React-query imports for cache persistence and QueryClientProvider for context provider
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import ProtectedRoute and PublicRoute Component
import ProtectedRoute from '@/Hooks/ProtectedRoute';
import PublicRoute from '@/Hooks/PublicRoute';


// React components (Lazy Loading)
const Services = lazy(() => import('./pages/Services/Services.jsx'));
const ServiceCategory = lazy(() => import('./pages/Services/ServiceCategory.jsx'));
const ProductDetails = lazy(() => import('./pages/ProductDetails/ProductDetails.jsx'));
const About = lazy(() => import('./pages/About/About.jsx'));
const TermsAndConditions = lazy(() => import('./pages/All policy pages/TermsAndConditions.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/All policy pages/PrivacyPolicy.jsx'));
const CookiePolicy = lazy(() => import('./pages/All policy pages/CookiePolicy.jsx'));
const Contact = lazy(() => import('./pages/Contact/Contact.jsx'));
const SignIn = lazy(() => import('./pages/Auth Page/SignIn.jsx'));
const Signup = lazy(() => import('./pages/Auth Page/Signup.jsx'));
const ResetPassword = lazy(() => import('./pages/Auth Page/ResetPassword.jsx'));
const UserDashboard= lazy(() => import('./pages/User Dashboard/UserDashboard.jsx'));  // A protected route
const Page404 = lazy(() => import('./pages/404 page/Page404'));

// lazy loading the components layout
const MyProfile = lazy(() => import('@/Layout/MyProfile/MyProfile.jsx'));
const Wishlist = lazy(() => import('@/Layout/Wishlist/Wishlist.jsx'));
const Address = lazy(() => import('@/Layout/Address/Address.jsx'));
const MeetingSchedule = lazy(() => import('@/Layout/Meeting schedule layout/MeetingSchedule.jsx'));


// ✅ 1. Create a React Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 2 * 60 * 1000, // Cache for 2 minutes
      cacheTime: 10 * 60 * 1000, // Keep cache for 10 minutes
      retry: 2, // Retry twice if API fails
      refetchOnWindowFocus: false, // Prevent unnecessary refetching
    },
  },
});

// ✅ 2. Set up Local Storage Persistence
const persister = createSyncStoragePersister({
  storage: window.localStorage, // Uses localStorage to persist data
});

// ✅ 3. Persist Query Cache
persistQueryClient({
  queryClient,
  persister,
});

// Define the routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Main layout with Navbar & Footer */}
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms&conditions" element={<TermsAndConditions />} />
        <Route path="cookie-policy" element={<CookiePolicy />} />

        <Route path="services" element={<Services />} />
        <Route path="services/:category" element={<ServiceCategory />} />
        <Route path=":product_name/service/:product_id" element={<ProductDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
        
        {/*  Sign In, Sign Up, Reset Password (Not Protected) */}
        <Route path="signin" element={<PublicRoute> <SignIn /> </PublicRoute>} />
        <Route path="signup" element={ <PublicRoute> <Signup /> </PublicRoute>} />
        <Route path="reset-password/:token" element={ <PublicRoute> <ResetPassword /> </PublicRoute>} />

        {/* Protected Routes */}

        <Route path="user" element={<ProtectedRoute><Suspense fallback={<Loader />}> <UserDashboard /> </Suspense></ProtectedRoute>}>
            <Route index element={<MyProfile />} />
            <Route path="profile" element={<MyProfile />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="address" element={<Address />} />
            <Route path="meeting-schedule" element={<MeetingSchedule />} />
        </Route>
        {/* Add more protected routes here */}
      </Route>
    </>
  ),  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

// Render app with QueryClientProvider and RouterProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider  router={router}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}/>
    </QueryClientProvider>
  </StrictMode>
);
