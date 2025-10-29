import TransactionHistory from "@/components/TransactionHistory";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

function TransactionHistories() {
	return (
		<main className="pt-[120px] pb-4 h-full">
			<div className="max-w-[992px] mx-auto px-4">
				<Link to="/" className="flex items-center gap-2 mb-4">
					<FaArrowLeftLong className="text-[28px] text-white" />
					Back
				</Link>

				<div className=" gap-[38px]">
					<TransactionHistory query={""} detailsPage={true} />
				</div>
			</div>
		</main>
	);
}

export default TransactionHistories;
