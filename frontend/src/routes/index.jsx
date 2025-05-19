import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import StudyPlanner from "../pages/StudyPlanner";
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'dashboard', element: <Dashboard /> }, 
      { path: 'planner', element: <StudyPlanner /> }, 
      { path: 'about', element: <About /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);