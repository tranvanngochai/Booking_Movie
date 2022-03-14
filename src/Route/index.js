import Home from "../Pages/Home/Home";
import ThongTinFilm from "../Pages/Home/Detail/ThongTinFilm";
import Dashboard from "../Pages/Admin/Dashboard";
import ThongTinCaNhan from "../Pages/Home/ThongTinCaNhan/ThongTinCaNhan";
import Booking from "../Pages/Home/Booking/Booking";


const routesHome = [
    {
        path: "/", 
        exact: true,
        component: Home
    },

    {
        path: "/detail-muave/:id",
        exact: false,
        component: ThongTinFilm
    },

    {
        path: "/booking/:id",
        exact: false,
        component: Booking
    },

    {
        path: "/thong-tin-ca-nhan",
        exact: false,
        component: ThongTinCaNhan
    }

]


const routesAdmin = [
    {
        path: "/dashboard",
        exact: false,
        component: Dashboard
    }
]

export { routesHome, routesAdmin }