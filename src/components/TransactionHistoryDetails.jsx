import { capitalizeFirst, timeAgo } from "@/utils";
import HistoryDetails from "./HistoryDetails";
import Status from "./Status";

function TransactionHistoryDetails({ transaction }) {
	return (
		<div className="text-sm overflow-scroll">
			<div className="px-5">
				<HistoryDetails title="Msg ID" value={transaction.tx_id} iconPresent />
				<HistoryDetails
					title="Origin ID"
					value={transaction.origin_chain_info.origin_id}
					iconPresent
				/>
				<HistoryDetails
					title="Destination ID"
					value={transaction.dest_chain_info.dest_id}
					iconPresent
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
					value={transaction.tx_data}
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

					<Status transaction={transaction} />
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
