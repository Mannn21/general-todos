import { BiTaskX } from "react-icons/bi";

const Empty = () => {
	return (
		<div className="w-full h-[300px]">
			<div className="w-full h-full flex flex-col justify-center items-center gap-4">
				<BiTaskX size={100} className="text-color-light" />
				<h3 className="text-md font-semibold tracking-wide text-color-light">
					Tidak ada kegiatan hari ini.
				</h3>
			</div>
		</div>
	);
};

export default Empty;
