import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import First from './pages/First';
import Home from './pages/Home/Home.page';

const router = createBrowserRouter([
	{
		path: '/first',
		element: <First />,
	},
	{
		path: '/home',
		element: <Home />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
