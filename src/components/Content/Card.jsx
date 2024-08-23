import PropTypes from "prop-types";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import "../../index.css";

const Card = ({ title, date, time, status, id, updateStatus, editData, removeData }) => {

	const dataUpdate = {
		title, status, date, time, id
	}

	return (
		<div className="w-full h-auto p-2 flex flex-row justify-start items-center gap-3">
			<button className="w-5 h-5 p-1 rounded-full border border-color-light cursor-pointer" onClick={() => updateStatus(id)}>
				{!status ? null : (
					<div className="w-full h-full bg-color-secondary rounded-full"></div>
				)}
			</button>
			<div className="cardBody">
				<h2 className={!status ? "title" : "title done"}>{title}</h2>
				<p className="text-sm font-normal tracking-wide text-color-dark">{date} - {time}</p>
			</div>
			<div className="w-20 h-full p-2 flex justify-center items-center gap-2">
				<button className="w-1/2 h-full flex justify-center items-center text-color-light">
					<MdOutlineEdit
						size={25}
						onClick={() => editData(dataUpdate)}
						className="cursor-pointer transition-all duration-300 ease-in-out hover:text-color-green"
					/>
				</button>
				<button className="w-1/2 h-full flex justify-center items-center text-color-light">
					<MdDeleteOutline
						size={25}
						onClick={() => removeData(id)}
						className="cursor-pointer transition-all duration-300 ease-in-out hover:text-color-red"
					/>
				</button>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	status: PropTypes.bool.isRequired,
	id: PropTypes.number.isRequired,
	updateStatus: PropTypes.func.isRequired,
	editData: PropTypes.func.isRequired,
	removeData: PropTypes.func.isRequired,
};

export default Card;
