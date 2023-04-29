import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginBox from './Login/LoginBox';
import Main from './Main/Main';
import ProjectUpload from './ProjectUpload/ProjectUpload';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>
    }, 
    {
      path: "/login",
      element: <LoginBox/>
    }, 
    {
      path: "/project-upload",
      element: <ProjectUpload/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
