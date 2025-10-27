import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReactQueryProviders from "./components/ReactQueryProvider.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ReactQueryProviders>
			<App />
		</ReactQueryProviders>
	</StrictMode>
);
