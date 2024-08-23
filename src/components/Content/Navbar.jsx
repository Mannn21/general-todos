"use client";

import PropTypes from "prop-types";

const Navbar = ({ action, isOpenForm }) => {
	return (
		<div className="w-full h-auto p-2 flex flex-row justify-center items-center">
			<div className="w-full h-auto flex flex-row justify-between items-center">
				<h2 className="text-xl font-medium text-color-light tracking-wider">
					{isOpenForm ? "Tambah Kegiatan" : "List Kegiatan"}
				</h2>
				<button
					onClick={() => action()}
					className="text-base font-normal text-color-secondary tracking-wide p-3 border border-color-light rounded-md cursor-pointer hover:border-color-secondary hover:bg-color-secondary hover:text-color-light ease-in-out transition-all duration-200">
					{isOpenForm ? "Kembali" : "Tambah Data"}
				</button>
			</div>
		</div>
	);
};

Navbar.propTypes = {
	action: PropTypes.func.isRequired,
	isOpenForm: PropTypes.bool.isRequired,
};

export default Navbar;
