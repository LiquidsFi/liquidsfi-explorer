import { CiSearch } from "react-icons/ci";
import { RxCaretRight } from "react-icons/rx";
import { useNavigate } from "react-router";

function Search({ bgColor, width, visible, query, setQuery }) {
	const handleInputChange = (e) => {
		setQuery(e.target.value);
	};

	const navigate = useNavigate();

	return (
		<div
			className={`relative max-w-[436px] ${width} text-base text-[#B2B9C7] ${bgColor} ${
				!visible && "hidden"
			} md:block flex-1 rounded-xl px-3 py-[13px]`}
		>
			{!visible && (
				<CiSearch className="absolute text-[24px] top-1/2 left-2 -translate-y-1/2 text-[#8E8E93]" />
			)}

			<input
				type="text"
				value={query}
				onChange={handleInputChange}
				placeholder="Message ID"
				className={`w-full rounded-md border-none bg-[w-[436px] ${
					!visible && "pl-6"
				} text-base text-white outline-none placeholder:text-[#B2B9C7]`}
			/>

			{visible && (
				<button
					onClick={() => navigate(`/${query}`, { replace: true })}
					className="bg-[#000B09] cursor-pointer p-1 rounded-lg absolute top-1/2 right-2 -translate-y-1/2"
				>
					<RxCaretRight className="text-[24px] text-white" />
				</button>
			)}
		</div>
	);
}

export default Search;
