import Search from "./Search";
import liquidsFiLogo from "/liquids-fi.svg";
import { PiSwap } from "react-icons/pi";

export default function Header() {
	return (
		<header className="bg-[#04131F] fixed w-full top-0 left-0 z-50 shadow-md">
			<div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
				<a href="/" className="shrink-0">
					<img src={liquidsFiLogo} alt="LiquidsFi logo" />
				</a>

				<div className="flex items-center gap-3 flex-2 justify-end">
					<Search bgColor="bg-black" />

					<button className="text-[#1C1C1E] text-base cursor-pointer bg-[#2DD4BF] flex items-center gap-2 px-5 py-[13px] rounded-xl font-semibold hover:bg-[#14B8A6] hover:text-white transition">
						<PiSwap className="text-[24px] shrink-0" />
						<span className="shrink-0">Lane Status</span>
					</button>
				</div>
			</div>
		</header>
	);
}
