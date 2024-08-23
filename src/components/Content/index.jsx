"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Lists from "./Lists";
import Form from "./Form";
import { updateListGeneric } from "../../utils/updatedListsGeneric";

const Content = () => {
	const [isOpenForm, setIsOpenForm] = useState(false);
	const [lists, setLists] = useState([]);
	const [updateData, setUpdateData] = useState(null);
	const [id, setId] = useState(0);

	const handleOpenForm = () => {
		setIsOpenForm(!isOpenForm);
		setUpdateData(null);
	};

	const addList = newData => {
		setLists([...lists, newData]);
		setId(prevId => prevId + 1);
	};

	const updateList = updatedData => {
		const updatedLists = updateListGeneric(lists, updatedData.id, () => updatedData);
		setLists(updatedLists)
	};
	
	const updateStatus = id => {
		const updatedLists = updateListGeneric(lists, id, list => ({ ...list, status: !list.status }));
		setLists(updatedLists)
	};

	const editData = data => {
		setUpdateData(data);
		setIsOpenForm(true);
	};

	const removeData = data => {
		setLists(lists.filter(list => list.id !== data));
	};

	return (
		<div className="w-full h-full flex flex-row justify-center items-center">
			<div className="md:w-2/3 w-full p-3 h-full">
				<Navbar action={handleOpenForm} isOpenForm={isOpenForm} />
				{isOpenForm ? (
					<Form
						addList={addList}
						updateList={updateList}
						updateData={updateData}
						id={id}
						action={handleOpenForm}
					/>
				) : (
					<Lists
						lists={lists}
						updateStatus={updateStatus}
						editData={editData}
						removeData={removeData}
					/>
				)}
			</div>
		</div>
	);
};

export default Content;
