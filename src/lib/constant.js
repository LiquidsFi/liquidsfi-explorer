import { IoGridOutline } from "react-icons/io5";
import { PiBinocularsBold, PiCirclesThree, PiSwap } from "react-icons/pi";

export const DASHBOARD_NAV_LINKS = [
	{
		heading: "CROSS-CHAIN BRIDGE",
		links: [
			{
				title: "Bridge dApps",
				href: "https://app.liquids.fi/bridge",
				icon: IoGridOutline,
			},
			{
				title: "Liquidity Protocol",
				href: "/protocol",
				icon: PiCirclesThree,
			},
		],
	},
	{
		heading: "ORACLE NETWORK",
		links: [
			{
				title: "Explorer",
				href: "https://explorer.liquids.fi",
				icon: PiBinocularsBold,
			},
			{
				title: "Lane Status",
				href: "/lane-status",
				icon: PiSwap,
			},
		],
	},
];
