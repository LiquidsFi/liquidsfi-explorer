import Search from "./Search";
import { FaArrowRightLong } from "react-icons/fa6";
import { getSupportedNetworks } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { Fragment } from "react";
import Loader from "./Loader";
import Empty from "./Empty";
import { shortenString } from "@/utils";
import TransactionHistory from "./TransactionHistory";

function Main() {
	const {
		data: supportedNetworksData,
		isLoading: loadingSupportedNetworks,
		isError: errorLoadingSupportedNetworks,
	} = useQuery({
		queryKey: ["supportedNetworks"],
		queryFn: () => getSupportedNetworks(),
		keepPreviousData: true,
	});

	return (
		<main className="pt-[120px] pb-4 h-full">
			<div className="max-w-7xl mx-auto px-4">
				<div className="space-y-1 max-w-[544px] mx-auto text-center">
					<h1 className="text-[32px] sm:text-[48px] font-semibold">
						Liquids.fi Explorer
					</h1>

					<Search bgColor="bg-[#04131F]" width="mx-auto" visible={true} />
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-7 gap-[38px] pt-10">
					<TransactionHistory />

					<div className="lg:col-span-3 space-y-4">
						<div className="flex justify-between items-center">
							<h2 className="text-[20px] lg:text-[24px]">Supported Networks</h2>

							<FaArrowRightLong className="text-[28px] text-white" />
						</div>

						<div className="border border-[#09243B] p-6 rounded-xl">
							{loadingSupportedNetworks ? (
								<Loader />
							) : errorLoadingSupportedNetworks ? (
								<Empty title="Failed to load supported networks..." />
							) : supportedNetworksData.length === 0 ? (
								<Empty title="No supported networks found..." />
							) : (
								<>
									{supportedNetworksData.map((network, i) => (
										<Fragment key={i}>
											<div className="border-b border-[#09243B] pb-6 flex justify-between gap-4 items-center mb-6 last:border-0 last:pb-0 last:mb-0">
												<img
													src={network.icon}
													className="h-[38px] w-[38px]"
													alt=""
												/>
												<span className="text-[#2DD4BF] flex-1 text-center text-[14px] sm:text-[18px]">
													{shortenString(network.oracleContract, 10)}
												</span>

												<span className="text-center flex-1 text-[14px] sm:text-[18px]">
													{network.name}
												</span>
											</div>
										</Fragment>
									))}
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Main;
