import { CiSearch } from "react-icons/ci";
import { RxCaretRight } from "react-icons/rx";

function Search({ bgColor, width, visible }) {
	return (
		<div
			className={`relative max-w-[436px] ${width} text-base text-[#B2B9C7] ${bgColor} ${
				visible ? "" : "hidden"
			} md:block flex-1 rounded-xl px-3 py-[13px]`}
		>
			{visible ? null : (
				<CiSearch className="absolute text-[24px] top-1/2 left-2 -translate-y-1/2 text-[#8E8E93]" />
			)}

			<input
				type="text"
				placeholder="Message ID / Txn Hash / Address"
				className={`w-full rounded-md border-none bg-[w-[436px] ${
					visible ? "" : "pl-6"
				} text-[14px] text-white outline-none placeholder:text-[#B2B9C7]`}
			/>

			{visible ? (
				<div className="bg-[#000B09] p-1 rounded-lg absolute top-1/2 right-2 -translate-y-1/2">
					<RxCaretRight className="text-[24px] text-white" />
				</div>
			) : null}
		</div>
	);
}

export default Search;
