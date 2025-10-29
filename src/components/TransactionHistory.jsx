import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { getTransactionHistory } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { Fragment, useEffect, useState } from "react";
import Loader from "./Loader";
import Empty from "./Empty";
import TransactionHistoryDetails from "./TransactionHistoryDetails";
import History from "./History";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

function TransactionHistory({ query, detailsPage }) {
	const navigate = useNavigate();
	const { id: transactionIdFromUrl } = useParams();

	const {
		data: transactionHistoryData,
		isLoading: loadingTransactionHistory,
		isError: errorLoadingTransactionHistory,
	} = useQuery({
		queryKey: ["transactionHistory", query],
		queryFn: () => getTransactionHistory(query),
		keepPreviousData: true,
	});

	const [openTransaction, setOpenTransaction] = useState(null);
	const [isDesktop, setIsDesktop] = useState(
		typeof window !== "undefined" ? window.innerWidth >= 1024 : false
	);

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 1024);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (!transactionHistoryData) return;

		const index = transactionHistoryData.findIndex(
			(tx) => String(tx.tx_id) === transactionIdFromUrl
		);
		if (index !== -1) {
			setOpenTransaction(index);
		} else {
			setOpenTransaction(null);
		}
	}, [transactionIdFromUrl, transactionHistoryData]);

	function updateUrl(transaction) {
		if (!transaction) navigate("/", { replace: true });
		else navigate(`/${transaction.tx_id}`, { replace: true });
	}

	return (
		<div className="lg:col-span-4 space-y-4">
			<div className="flex items-center justify-between gap-2">
				{!detailsPage ? (
					<>
						<h2 className="text-[20px] font-bold">Latest Transactions</h2>

						{/* <Link to="/transactions-history">
							<FaArrowRightLong className="text-[28px] text-white" />
						</Link> */}
					</>
				) : null}
			</div>

			<div className="border border-[#09243B] p-6 rounded-xl">
				{loadingTransactionHistory ? (
					<Loader />
				) : errorLoadingTransactionHistory ? (
					<Empty title="Failed to load transaction..." />
				) : transactionHistoryData.length === 0 ? (
					<Empty title="No transaction found..." />
				) : (
					transactionHistoryData.map((transaction, i) => (
						<Fragment key={i}>
							<div className="border-b border-[#09243B] pb-4 cursor-pointer mb-6 last:border-0 last:pb-0 last:mb-0">
								{isDesktop ? (
									<Sheet
										open={openTransaction === i}
										onOpenChange={(open) => {
											setOpenTransaction(open ? i : null);
											updateUrl(open ? transaction : null);
										}}
									>
										<SheetTrigger asChild>
											<div>
												<History transaction={transaction} />
											</div>
										</SheetTrigger>

										<SheetContent className="bg-[#04131F] border-none">
											<SheetHeader>
												<SheetTitle className="text-[20px] text-left px-5 lg:text-[32px] text-white font-bold">
													Transaction Details
												</SheetTitle>
												<SheetDescription className="sr-only">
													Transaction Details
												</SheetDescription>
												<hr className="border border-[#09243B] my-6" />
											</SheetHeader>

											<TransactionHistoryDetails transaction={transaction} />
										</SheetContent>
									</Sheet>
								) : (
									<Drawer
										open={openTransaction === i}
										onOpenChange={(open) => {
											setOpenTransaction(open ? i : null);
											updateUrl(open ? transaction : null);
										}}
									>
										<DrawerTrigger asChild>
											<div>
												<History transaction={transaction} />
											</div>
										</DrawerTrigger>
										<DrawerContent className="bg-[#04131F] border-none">
											<DrawerHeader>
												<div className="flex justify-between items-center">
													<DrawerTitle className="text-[20px] text-left px-5 lg:text-[32px] text-white font-bold">
														Transaction Details
													</DrawerTitle>
													<DrawerClose className="bg-[#09243B] rounded-lg p-1.5 cursor-pointer hover:bg-[#0D374E] transition">
														<IoMdClose className="size-6 text-white" />
													</DrawerClose>
												</div>
												<hr className="border border-[#09243B] my-6" />
												<DrawerDescription className="sr-only">
													Transaction Details
												</DrawerDescription>
											</DrawerHeader>

											<TransactionHistoryDetails transaction={transaction} />
										</DrawerContent>
									</Drawer>
								)}
							</div>
						</Fragment>
					))
				)}
			</div>
		</div>
	);
}

export default TransactionHistory;
