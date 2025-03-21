import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SignInPage from './pages/sign-in.tsx';
import { ROUTES } from './utils/constants.ts';
import SignUpPage from './pages/sign-up.tsx';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      // <ProtectedRoute>
      //   <AuthProvider>
      <App />
      //   </AuthProvider>
      // </ProtectedRoute>
    ),
  },
  {
    path: ROUTES.REGISTER,
    element: <SignUpPage />,
  },
  {
    path: ROUTES.LOGIN,
    element: <SignInPage />,
  }
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
