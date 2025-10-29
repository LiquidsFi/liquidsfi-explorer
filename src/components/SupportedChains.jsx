import { FaArrowRightLong } from "react-icons/fa6";
import { getSupportedChains } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { Fragment } from "react";
import Loader from "./Loader";
import Empty from "./Empty";
import { shortenString } from "@/utils";
import { Link } from "react-router";

function SupportedChains({ detailsPage = false }) {
	const {
		data: supportedChainsData,
		isLoading: loadingSupportedChains,
		isError: errorLoadingSupportedChains,
	} = useQuery({
		queryKey: ["supportedChains"],
		queryFn: () => getSupportedChains(),
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
						<h2 className="text-[20px] font-bold">Supported Chains</h2>

						<Link to="/supported-chains">
							<FaArrowRightLong className="text-[28px] text-white" />
						</Link>
					</>
				) : null}
			</div>

			<div className="border border-[#09243B] p-6 rounded-xl">
				{loadingSupportedChains ? (
					<Loader />
				) : errorLoadingSupportedChains ? (
					<Empty title="Failed to load supported networks..." />
				) : supportedChainsData.length === 0 ? (
					<Empty title="No supported networks found..." />
				) : (
					<>
						{supportedChainsData.map((network, i) => (
							<Fragment key={i}>
								<div className="border-b border-[#09243B] pb-6 flex flex-wrap justify-between gap-4 items-center mb-6 last:border-0 last:pb-0 last:mb-0">
									<div className="flex items-center gap-3">
										<img src={network.icon} className="h-7 w-7" alt="" />

										<span className="text-[14px] hidden [@media(min-width:408px)]:block text-[#E5E5EA]">
											{network.name}
										</span>
									</div>

									<p className="text-[#E5E5EA] text-[14px] overflow-scroll text-right">
										{shortenString(network.oracleContract)}
									</p>
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
