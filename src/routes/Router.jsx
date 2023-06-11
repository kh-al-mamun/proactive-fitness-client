import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/shared/ErrorPage";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import DashHome from "../pages/Dashboard/Home/DashHome";
import AddAClass from "../pages/Dashboard/Instructor/AddAClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses";
import SelectedClasses from "../pages/Dashboard/Student/SelectedClasses";
import Payment from "../pages/Dashboard/Student/Payment";
import EnrolledClasses from "../pages/Dashboard/Student/EnrolledClasses";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory";
import PrivateRoutePlus from "./PrivateRoutePlus";
import PrivateRoute from "./PrivateRoute";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:'/',
                element: <Home />
            },
            {
                path: '/sign-in',
                element: <SignIn />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            },
            {
                path: '/classes',
                element: <Classes />
            },
            {
                path: '/instructors',
                element: <Instructors />
            },
            //dashboard
            {
                path:'/dashboard',
                element: <PrivateRoute><DashHome /></PrivateRoute>
            },
            //student
            {
                path: '/dashboard/selected-classes',
                element: <PrivateRoutePlus role='student'><SelectedClasses /></PrivateRoutePlus>
            },
            {
                path: '/dashboard/enrolled-classes',
                element: <PrivateRoutePlus role='student'><EnrolledClasses /></PrivateRoutePlus>
            },
            {
                path:'/dashboard/payment',
                element: <PrivateRoutePlus role='student'><Payment /></PrivateRoutePlus>
            },
            {
                path:'/dashboard/payment-history',
                element: <PrivateRoutePlus role='student'><PaymentHistory /></PrivateRoutePlus>
            },
            //instructor
            {
                path: '/dashboard/add-a-class',
                element: <PrivateRoutePlus role='instructor'><AddAClass /></PrivateRoutePlus>
            },
            {
                path: '/dashboard/my-classes',
                element: <PrivateRoutePlus role='instructor'><MyClasses /></PrivateRoutePlus>
            },
            //admin
            {
                path: '/dashboard/manage-classes',
                element: <PrivateRoutePlus role='admin'><ManageClasses /></PrivateRoutePlus>
            },
            {
                path: '/dashboard/manage-users',
                element: <PrivateRoutePlus role='admin'><ManageUsers /></PrivateRoutePlus>
            },
        ]
    }
])

export default router;