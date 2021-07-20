import React, { useState } from "react";

export default function Form(props) {
	const { setForm } = props;
	const [member, setMember] = useState({
		name: "",
		email: "",
		role: "",
	});
	const handleChange = (e) => {
		setMember({ ...member, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setForm(member);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Name
					<input
						type="text"
						id="name"
						name={"name"}
						value={member.name}
						onChange={handleChange}
					/>
				</label>
				<label>
					Email{" "}
					<input
						type="text"
						id="email"
						name={"email"}
						value={member.email}
						onChange={handleChange}
					/>
				</label>
				<label>
					Role{" "}
					<input
						type="text"
						id="role"
						name={"role"}
						value={member.role}
						onChange={handleChange}
					/>
				</label>
				<button>Add</button>
			</form>
		</div>
	);
}
