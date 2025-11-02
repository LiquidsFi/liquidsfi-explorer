import { Link, NavLink } from "react-router";
import Search from "./Search";
import liquidsFiLogo from "/liquids-fi.svg";
import { useEffect } from "react";
import { useState } from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Ellipsis } from "lucide-react";
import { DASHBOARD_NAV_LINKS } from "@/lib/constant";

export default function Header() {
	const [sheetIsOpen, setSheetIsOpen] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(min-width: 640px)");
		const handler = () => {
			if (mediaQuery.matches) {
				setSheetIsOpen(false);
			}
		};

		handler();
		mediaQuery.addEventListener("change", handler);
		return () => mediaQuery.removeEventListener("change", handler);
	}, [setSheetIsOpen]);

	return (
		<header className="bg-[#04131F] fixed w-full top-0 left-0 z-50 shadow-md p-4 sm:hidden flex justify-between items-center ">
			<Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
				<SheetTrigger asChild>
					<button className="cursor-pointer rounded-lg p-0.5 opacity-100 transition-opacity hover:opacity-70 focus:ring-0 focus:ring-offset-0 data-[state=open]:bg-[#04131F]">
						<Menu className="size-8 text-white" />
						<span className="sr-only">Open mobile navigation</span>
					</button>
				</SheetTrigger>
				<SheetContent side="left" className="bg-[#04131F]">
					<SheetHeader className="relative mb-10">
						<SheetTitle />
						<SheetDescription className="sr-only">
							Mobile navigation
						</SheetDescription>
					</SheetHeader>

					<div className={`h-full`}>
						{DASHBOARD_NAV_LINKS.map((section, index) => (
							<div key={index} className="">
								<div className="pl-4 text-[14px] mb-3 font-medium text-white">
									{section.heading}
								</div>

								<ul className="px-4 space-y-1">
									{section.links.map((link, idx) => (
										<li key={idx}>
											<NavLink
												onClick={() => {
													setSheetIsOpen(false);
													window.scrollTo({
														top: 0,
													});
												}}
												to={link.href}
												className={({ isActive }) =>
													isActive
														? "block rounded-lg bg-[#0C0C0C] px-4 py-3 font-medium text-[#2DD4BF]"
														: "block px-4 py-3 text-[#87868C] hover:text-[#bdbcc0]"
												}
											>
												{link.icon && (
													<link.icon className="mr-4 inline-block text-2xl" />
												)}
												{link.title}
											</NavLink>
										</li>
									))}
								</ul>

								{index !== DASHBOARD_NAV_LINKS.length - 1 && (
									<hr className="my-8 border-[#173E4A]" />
								)}
							</div>
						))}
					</div>
				</SheetContent>
			</Sheet>

			<img
				src={liquidsFiLogo}
				alt="LiquidsFi logo"
				className="h-8 w-8 sm:h-12 sm:w-12"
			/>

			<Ellipsis />
			{/* <div className="max-w-7xl mx-auto p-4 flex justify-center [@media(min-width:242px)]:justify-between items-center flex-wrap gap-3">
				<Link to="/" className="shrink-0">
					<img
						src={liquidsFiLogo}
						alt="LiquidsFi logo"
						className="h-8 w-8 sm:h-12 sm:w-12"
					/>
				</Link>

				<div className="flex items-center gap-3 md:flex-2 justify-end shrink-0">
					<Search bgColor="bg-black" />

					<Link
						to="/lane-status"
						className="text-[#1C1C1E] text-base cursor-pointer bg-[#2DD4BF] flex items-center gap-3 px-5 py-[13px] rounded-xl font-semibold hover:bg-[#14B8A6] hover:text-white transition"
					>
						<PiSwap className="text-[24px] shrink-0" />
						<span className="shrink-0">Lane Status</span>
					</Link>
				</div>
			</div> */}
		</header>
	);
}
