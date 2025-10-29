import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ReactQueryProviders from "./components/ReactQueryProvider.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import NotFound from "./components/NotFound";
import { Toaster } from "@/components/ui/sonner";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import SupportedChains from "./pages/SupportedChain";
import TransactionHistories from "./pages/TransactionHistories";

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{ index: "true", Component: Home },
			{ path: "transactions-history", Component: TransactionHistories },
			{ path: "lane-status", element: <></> },
			{ path: "supported-chains", Component: SupportedChains },
			{ path: ":id", Component: Home },
		],
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
