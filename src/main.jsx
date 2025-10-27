import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReactQueryProviders from "./components/ReactQueryProvider.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import NotFound from "./components/NotFound";
import { Toaster } from "@/components/ui/sonner";

const router = createBrowserRouter([
	{
		path: "/:id?",
		element: <App />,
	},
	{
		path: "*",
		Component: NotFound,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ReactQueryProviders>
			<RouterProvider router={router} />
			<Toaster />
		</ReactQueryProviders>
	</StrictMode>
);
