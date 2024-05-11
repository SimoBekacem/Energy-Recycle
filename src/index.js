import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import First from './pages/First';
import Register from './pages/Register';
import Home from './pages/Home.page';
import SignIn from './pages/SignIn';

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
