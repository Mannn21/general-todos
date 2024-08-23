"use client";

import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Datepicker } from "flowbite-react";
import { CiCalendar } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { formattedDateToday, formattedTimeNow, dateFormatter } from "../../utils/formattedTimeAndDate";

const Form = ({ addList, updateList, updateData, id, action }) => {
	const titleRef = useRef("");
	const [date, setDate] = useState(updateData ? updateData.date : "");
	const [time, setTime] = useState(updateData ? updateData.time : formattedTimeNow)
	const [isOpenCalendar, setIsOpenCalendar] = useState(false);

	useEffect(() => {
		if (updateData) {
			titleRef.current.value = updateData.title;
			setDate(updateData.date || formattedDateToday);
			setTime(updateData.time)
		}
	}, [updateData]);

	const handleSubmit = () => {
		const data = {
			title: titleRef.current.value,
			date: date || formattedDateToday,
			time,
			status: updateData ? updateData.status : false,
			id: updateData ? updateData.id : id,
		};

		if (updateData) {
			updateList(data);
		} else {
			addList(data);
		}
		action();
	};

	const handleDateChange = selectedDate => {
		const formattedDate = dateFormatter(selectedDate);
		setDate(formattedDate);
		setIsOpenCalendar(!isOpenCalendar);
	};

	const handleTimeChange = selectedTime => {
		setTime(selectedTime.target.value)
	}

	return (
		<div className="p-5">
			<div className="w-full h-auto flex flex-col justify-center items-start gap-5">
				<div className="w-full h-auto flex flex-col justify-center items-start gap-3">
					<label
						htmlFor="title"
						className="text-base font-medium text-color-light">
						Nama Aktivitas
					</label>
					<div className="w-full p-2 border-2 border-color-dark rounded-md hover:border-color-secondary focus-within:border-color-secondary">
						<input
							ref={titleRef}
							type="text"
							id="title"
							placeholder="Masukkan nama aktivitas ..."
							className="w-full h-auto bg-color-primary text-color-light tracking-wider outline-none border-none focus:outline-none focus:ring-0 focus:border-transparent"
						/>
					</div>
				</div>
				<div className="w-full h-auto flex flex-col justify-center items-start gap-3">
					<label
						htmlFor="date"
						className="text-base font-medium text-color-light">
						Tanggal Aktivitas
					</label>
					<div
						className="w-[270px] h-auto p-1 rounded-lg flex flex-row justify-between items-center cursor-pointer border-2 border-color-dark hover:border-color-secondary focus-within:border-color-secondary"
						onClick={() => setIsOpenCalendar(!isOpenCalendar)}>
						<div className="w-[40px] h-auto flex justify-center items-center">
							<CiCalendar size={26} className="text-color-secondary" />
						</div>
						<input
							type="text"
							id="date"
							placeholder="Masukkan tanggal kegiatan"
							className="w-full bg-color-primary text-color-light tracking-wider outline-none border-none focus:outline-none pointer-events-none focus:ring-0 focus:border-transparent"
							value={date}
							readOnly
						/>
					</div>

					<Datepicker
						onSelectedDateChanged={handleDateChange}
						value={date}
						inline
						autoHide={true}
						className={!isOpenCalendar ? "hidden" : null}
					/>
				</div>
				<div className="w-full h-auto flex flex-col justify-center items-start gap-3">
					<label
						htmlFor="time"
						className="text-base font-medium text-color-light">
						Jam Aktivitas
					</label>
					<div className="w-[130px] py-1 px-2 flex flex-row justify-between items-center border border-color-dark rounded-lg focus:ring-color-secondary focus:border-color-secondary">
						<input
							type="time"
							id="time"
							defaultValue={time}
							onChange={handleTimeChange}
							className="bg-color-primary px-1 py-2 text-center leading-none text-color-light text-sm block w-full outline-none border-none focus:outline-none focus:ring-0 focus:border-transparent"
							min="00:00"
							max="24:00"
							required
						/>
						<div>
							<FiClock size={18} className="text-color-dark" />
						</div>
					</div>
				</div>
				<button
					onClick={handleSubmit}
					className="w-auto h-auto px-4 py-2 rounded-lg bg-color-secondary text-color-light transition-all ease-in-out duration-300 hover:bg-color-dark">
					{updateData ? "Update" : "Submit"}
				</button>
			</div>
		</div>
	);
};

Form.propTypes = {
	addList: PropTypes.func.isRequired,
	updateList: PropTypes.func,
	updateData: PropTypes.object,
	id: PropTypes.number.isRequired,
	action: PropTypes.func.isRequired,
};

export default Form;
