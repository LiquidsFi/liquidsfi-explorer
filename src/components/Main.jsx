import { useState } from "react";
import Search from "./Search";
import SupportedChains from "./SupportedChains";
import TransactionHistory from "./TransactionHistory";

function Main() {
	const [query, setQuery] = useState("");
	return (
		<main className="pt-[120px] pb-4 h-full">
			<div className="max-w-7xl mx-auto px-4">
				<div className="space-y-1 max-w-[544px] mx-auto text-center">
					<h1 className="text-[32px] sm:text-[48px] font-semibold">
						Liquids.fi Explorer
					</h1>

					<Search
						bgColor="bg-[#04131F]"
						width="mx-auto"
						visible={true}
						query={query}
						setQuery={setQuery}
					/>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-7 gap-[38px] pt-10">
					<TransactionHistory query={query} />

					<SupportedChains />
				</div>
			</div>
		</main>
	);
}

export default Main;
