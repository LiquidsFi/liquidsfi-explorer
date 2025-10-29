import Search from "@/components/Search";
import SupportedChains from "@/components/SupportedChains";
import TransactionHistory from "@/components/TransactionHistory";
import { useState } from "react";

function Home() {
	const [query, setQuery] = useState("");
	return (
		<main className="pt-[150px] [@media(min-width:242px)]:pt-[120px] pb-10">
			<div className="max-w-7xl mx-auto px-4">
				<div className="space-y-5 max-w-[544px] mx-auto text-center">
					<h1 className="text-[32px] font-semibold">LiquidsFi Explorer</h1>

					<Search
						bgColor="bg-[#04131F]"
						width="mx-auto"
						visible={true}
						query={query}
						setQuery={setQuery}
					/>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-7 gap-[38px] pt-12 sm:pt-16">
					<TransactionHistory query={query} />

					<SupportedChains />
				</div>
			</div>
		</main>
	);
}

export default Home;
