import { wrapString } from "@/utils";
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
			<div className="border-b p-4 overflow-scroll border-[#09243B] gap-2 grid grid-cols-1 md:grid-cols-3">
				<span className="text-[#D2D5D9] font-medium col-span-1">{title}</span>

				{link ? (
					<div className="flex items-center gap-2">
						<a
							href={link}
							target="_blank"
							className={`font-medium col-span-2  ${textColor}`}
						>
							{value}
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
					<span
						className={`font-medium col-span-2 flex items-center gap-2 ${textColor}`}
					>
						{title === "Transaction Data" ? wrapString(value) : value}
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
				)}
			</div>
		</div>
	);
}

export default HistoryDetails;
