"use client";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import Empty from "./Empty";

const Lists = ({ lists, updateStatus, editData, removeData }) => {
	const [datas, setDatas] = useState([])

	useEffect(() => {
		setDatas(lists);
	}, [lists]);

	return (
		<div className="w-full h-auto px-3 py-2">
			{datas?.length >= 1 ? (
				datas.map((data, id) => {
					return <Card key={id} title={data.title} date={data.date} time={data.time} status={data.status} id={data.id} updateStatus={updateStatus} editData={editData} removeData={removeData} />;
				})
			) : (
				<Empty />
			)}
		</div>
	);
};

Lists.propTypes = {
	lists: PropTypes.array.isRequired,
	updateStatus: PropTypes.func.isRequired,
	editData: PropTypes.func.isRequired,
	removeData: PropTypes.func.isRequired,
}

export default Lists;
