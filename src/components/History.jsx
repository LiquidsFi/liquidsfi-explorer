import { shortenString, timeAgo } from "@/utils";
import Status from "./Status";

function History({ transaction }) {
	return (
		<div className="flex flex-wrap gap-2 items-center justify-between">
			<div>
				<div className="flex items-center gap-2">
					<span className="hidden sm:block">Msg ID</span>
					<span className="text-[#2DD4BF] text-[14px] sm:text-[18px]">
						{shortenString(transaction.tx_id, 12)}
					</span>
				</div>
				<span className="text-[#B2B9C7] text-[14px] sm:text-[18px]">
					{timeAgo(transaction?.updated_at)}
				</span>
			</div>
			<div className="space-y-1">
				<div className="flex items-center gap-2">
					<img
						src={transaction.origin_chain_info.origin_icon}
						className="h-7 w-7"
						alt=""
					/>
					<span className="text-[14px] sm:text-[18px]">From</span>
					<span className="text-[#2DD4BF] text-[14px] sm:text-[18px]">
						{shortenString(transaction.sender, 12)}
					</span>
				</div>
				<div className="flex items-center gap-2">
					<img
						src={transaction.dest_chain_info.dest_icon}
						className="h-7 w-7"
						alt=""
					/>
					<span className="text-[14px] sm:text-[18px]">To</span>
					<span className="text-[#2DD4BF] text-[14px] sm:text-[18px]">
						{shortenString(transaction.destination_contract, 12)}
					</span>
				</div>
			</div>
			<Status transaction={transaction} />
		</div>
	);
}

export default History;
