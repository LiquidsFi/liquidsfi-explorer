import { BiCopy } from "react-icons/bi";

function HistoryDetails({
	title,
	value,
	textColor = "text-[#D2D5D9]",
	iconPresent = false,
}) {
	return (
		<div>
			<div className="border-b p-4 overflow-scroll border-[#09243B] gap-2 grid grid-cols-1 md:grid-cols-3">
				<span className="text-[#D2D5D9] font-medium col-span-1">{title}</span>

				<span
					className={`font-medium col-span-2 flex items-center gap-2 ${textColor}`}
				>
					{value}
					{iconPresent && <BiCopy className="text-white shrink-0" />}
				</span>
			</div>
		</div>
	);
}

export default HistoryDetails;
