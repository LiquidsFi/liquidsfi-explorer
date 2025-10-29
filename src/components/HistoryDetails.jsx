import { shortenString } from "@/utils";
import { BiCopy } from "react-icons/bi";
import { toast } from "sonner";

function HistoryDetails({
	title,
	value,
	textColor = "text-[#D2D5D9]",
	iconPresent = false,
	link,
}) {
	const handleCopy = async (e) => {
		e.stopPropagation();
		if (!value) return;
		try {
			await navigator.clipboard.writeText(value);
			toast.success(`${title} copied to clipboard.`);
		} catch {
			toast.error("Failed to copy text.");
		}
	};

	return (
		<div>
			<div className="border-b p-4 overflow-scroll border-[#09243B] gap-2 flex justify-between">
				<span className="text-[#D2D5D9] font-medium col-span-1">{title}</span>

				{link ? (
					<div className="flex items-center gap-2">
						<a
							href={link}
							target="_blank"
							className={`font-medium col-span-2 hidden lg:block ${textColor}`}
						>
							{value}
						</a>

						<a
							href={link}
							target="_blank"
							className={`font-medium col-span-2 lg:hidden  ${textColor}`}
						>
							{(title === "Origin Transaction Hash" ||
								title === "Destination Transaction Hash") &&
								shortenString(value)}
						</a>
						{iconPresent && (
							<span
								onClick={handleCopy}
								className="cursor-pointer hover:text-[#2DD4BF] transition"
								title="Copy to clipboard"
							>
								<BiCopy className="text-white shrink-0" />
							</span>
						)}
					</div>
				) : (
					<>
						<span
							className={`font-medium col-span-2 lg:flex items-center hidden gap-2 ${textColor}`}
						>
							{title === "Transaction Data" ? shortenString(value, 65) : value}
							{iconPresent && (
								<span
									onClick={handleCopy}
									className="cursor-pointer hover:text-[#2DD4BF] transition"
									title="Copy to clipboard"
								>
									<BiCopy className="text-white shrink-0" />
								</span>
							)}
						</span>

						<span
							className={`font-medium col-span-2 flex lg:hidden items-center gap-2 ${textColor}`}
						>
							{title === "Msg ID" ||
							title === "Transaction Data" ||
							title === "Sender Contract" ||
							title === "Destination Contract"
								? shortenString(value)
								: value}
							{iconPresent && (
								<span
									onClick={handleCopy}
									className="cursor-pointer hover:text-[#2DD4BF] transition"
									title="Copy to clipboard"
								>
									<BiCopy className="text-white shrink-0" />
								</span>
							)}
						</span>
					</>
				)}
			</div>
		</div>
	);
}

export default HistoryDetails;
