import { IoCheckmarkCircle } from "react-icons/io5";
import { RiErrorWarningFill } from "react-icons/ri";
import { CgSandClock } from "react-icons/cg";
import { capitalizeFirst, shortenString, timeAgo } from "@/utils";

function History({ transaction }) {
	return (
		<div className="flex flex-wrap gap-2 items-center justify-between">
			<div>
				<div className="flex items-center gap-2">
					<span className="hidden sm:block">Message ID</span>
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
	);
}

export default History;
