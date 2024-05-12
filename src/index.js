import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Register from './pages/Sign/Register';
import SignIn from './pages/Sign/SignIn';
import First from './pages/First/First';
import Home from './pages/Home/Home.page';

const router = createBrowserRouter([
	{
		path: '/first',
		element: <First />,
	},
	{
		path: '/Register',
		element:<Register />,
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/SignIn',
		element: <SignIn />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
