import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctors from "../../Pages/Dashboard/AddDoctors/AddDoctors";
import Allusers from "../../Pages/Dashboard/Allusers/Allusers";
import ManageDoctor from "../../Pages/Dashboard/ManageDoctor/ManageDoctor";
import MyAppoint from "../../Pages/Dashboard/MyAppoint/MyAppoint";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
        ]
    },
    {
        path: '/dashboard',
        element : <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path:'/dashboard',
                element:<MyAppoint></MyAppoint>
            },
            {
                path:'/dashboard/users',
                element:<AdminRoute><Allusers></Allusers></AdminRoute>
            },
            {
                path:'/dashboard/adddoctor',
                element:<AdminRoute><AddDoctors></AddDoctors></AdminRoute>
            },
            {
                path:'/dashboard/managedoctor',
                element:<AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
            },
            {
                path:'/dashboard/payment/:id',
                loader:({params})=> fetch(`http://localhost:5000/payment/${params.id}`),
                element:<AdminRoute><Payment></Payment></AdminRoute>
            },
        ]
    }
])

export default router;