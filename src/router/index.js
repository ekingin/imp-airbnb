import React from "react";
import { Navigate } from "react-router-dom";

const Home = React.lazy(() => import(/* webpackChunkName: "home" */"@/views/home"))
const Entire = React.lazy(() => import(/* webpackChunkName: "entrie" */"@/views/entire"))
const Detail = React.lazy(() => import(/* webpackChunkName: "detail" */"@/views/detail"))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/entire',
    element: <Entire />
  },
  {
    path: '/detail',
    element: <Detail />
  },
]

export default routes