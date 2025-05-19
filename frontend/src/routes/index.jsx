import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Services from "../pages/Services";
import StudyPlanner from "../pages/StudyPlanner";
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'planner', element: <StudyPlanner /> },
      { path: 'about', element: <About /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />
  },
]);