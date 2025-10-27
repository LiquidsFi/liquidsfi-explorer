import { capitalizeFirst, timeAgo, wrapString } from "@/utils";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RiErrorWarningFill } from "react-icons/ri";
import { CgSandClock } from "react-icons/cg";
import HistoryDetails from "./HistoryDetails";

function TransactionHistoryDetails({ transaction }) {
	console.log("Transaction in Details:", transaction);
	return (
		<div className="text-sm overflow-scroll">
			<div className="px-5">
				<HistoryDetails title="Message ID" value={transaction.tx_id} />
				<HistoryDetails
					title="Origin ID"
					value={transaction.origin_chain_info.origin_id}
				/>
				<HistoryDetails
					title="Destination ID"
					value={transaction.dest_chain_info.dest_id}
				/>
				<HistoryDetails
					title="Origin Transaction Hash"
					value={transaction.origin_tx_hash}
					textColor="text-[#2DD4BF]"
					iconPresent
					link={transaction.origin_chain_info.origin_explorer}
				/>
				<HistoryDetails
					title="Destination Transaction Hash"
					value={transaction.destination_tx_hash}
					textColor="text-[#2DD4BF]"
					iconPresent
					link={transaction.dest_chain_info.dest_explorer}
				/>
				<HistoryDetails
					title="Transaction Data"
					value={wrapString(transaction.tx_data)}
					iconPresent
				/>
				<HistoryDetails
					title="Origin Status"
					value={capitalizeFirst(transaction.origin_status)}
				/>
				<HistoryDetails
					title="Destination Status"
					value={capitalizeFirst(transaction.destination_status)}
				/>

				<div className="border-b p-4 overflow-scroll border-[#09243B] grid gap-2 grid-cols-1 md:grid-cols-3">
					<span className="text-[#D2D5D9] font-medium">Final Status</span>

					<div
						className={`flex w-[100px] items-center gap-1 shrink-0 text-[12px] sm:text-[15px] py-1.5 px-3 rounded-3xl ${
							transaction.final_status === "success"
								? "bg-[#DDF8E6] text-[#1E633A]"
								: transaction.final_status === "pending"
								? "bg-yellow-500/20 text-yellow-400"
								: "bg-[#FCE9E9] text-red-400"
						} `}
					>
						{transaction.final_status === "pending" ? (
							<CgSandClock className="text-[16px]" />
						) : transaction.final_status === "success" ? (
							<IoCheckmarkCircle className="text-[16px] text-[#2FB96C]" />
						) : (
							<RiErrorWarningFill className="text-[16px] text-[#F31307]" />
						)}
						{capitalizeFirst(transaction?.final_status)}
					</div>
				</div>

				{transaction.error && (
					<HistoryDetails
						title="Error"
						value={transaction.error.message}
						textColor="text-red-400"
					/>
				)}

				<HistoryDetails
					title="Sender Contract"
					value={transaction.sender}
					textColor="text-[#2DD4BF]"
					iconPresent
				/>

				<HistoryDetails
					title="Destination Contract"
					value={transaction.destination_contract}
					textColor="text-[#2DD4BF]"
					iconPresent
				/>

				<HistoryDetails
					title="Transaction Attempt Count"
					value={transaction.transmission_attempt_count}
				/>

				<div className="border-b p-4 overflow-scroll border-[#09243B] gap-2 grid grid-cols-1 md:grid-cols-3">
					<span className="text-[#D2D5D9] font-medium">Source Chain</span>

					<span className="font-medium flex items-center text-left text-[#D2D5D9] gap-2">
						<img
							src={transaction.origin_chain_info.origin_icon}
							className="h-7 w-7"
							alt=""
						/>

						<span>{transaction.origin_chain_info.origin_name}</span>
					</span>
				</div>

				<div className="border-b p-4 overflow-scroll border-[#09243B] gap-2 grid grid-cols-1 md:grid-cols-3">
					<span className="text-[#D2D5D9] font-medium">Destination Chain</span>

					<span className="font-medium flex items-center text-left text-[#D2D5D9] gap-2">
						<img
							src={transaction.dest_chain_info.dest_icon}
							className="h-7 w-7"
							alt=""
						/>

						<span>{transaction.dest_chain_info.dest_name}</span>
					</span>
				</div>

				<HistoryDetails
					title="Created At"
					value={timeAgo(transaction.created_at)}
				/>

				<HistoryDetails
					title="Updated At"
					value={timeAgo(transaction.updated_at)}
				/>
			</div>
		</div>
	);
}

export default TransactionHistoryDetails;
