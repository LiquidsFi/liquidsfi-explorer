import { FaArrowRightLong } from "react-icons/fa6";
import { getSupportedNetworks } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { Fragment } from "react";
import Loader from "./Loader";
import Empty from "./Empty";
import { shortenString } from "@/utils";
import { Link } from "react-router";

function SupportedChains({ detailsPage = false }) {
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
		<div
			className={`${
				!detailsPage ? "lg:col-span-3" : "lg:col-span-2"
			} space-y-4`}
		>
			<div className="flex justify-between items-center">
				{!detailsPage ? (
					<>
						<h2 className="text-[20px]">Supported Networks</h2>

						<Link to="/supported-chains">
							<FaArrowRightLong className="text-[28px] text-white" />
						</Link>
					</>
				) : null}
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
										{shortenString(network.oracleContract, 20)}
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
	);
}

export default SupportedChains;
