import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import First from './pages/First/First';
import Home from './pages/Home/Home.page';
import Settings from './pages/Settings/Settings';

const router = createBrowserRouter([
	{
		path: '/first',
		element: <First />,
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/settings',
		element: <Settings />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
