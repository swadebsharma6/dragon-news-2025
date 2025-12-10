import { createBrowserRouter } from "react-router";
import HomeLayout from "../layOuts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayOut from "../layOuts/AuthLayOut";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";


const router = createBrowserRouter([
      {
            path: '/',
            element: <HomeLayout/>,
            children: [
                  {
                        path: '/',
                        element: <Home/>,
                  },
                  {
                        path: '/category/:id',
                        element: <CategoryNews/>,
                        loader: ()=> fetch(`/news.json`)
                  },
            ]
      },
      {
            path: '/auth',
            element: <AuthLayOut/>,
            children:[
                  {
                        path:'/auth/login',
                        element: <Login/>
                  },
                  {
                        path:'/auth/register',
                        element: <Register/>
                  }
            ]
      },
      {
            path: '/news-details/:id',
            element: <NewsDetails/>,
      },
      {
            path: '/*',
            element: <h1>Error Show</h1>
      },
]);

export default router;