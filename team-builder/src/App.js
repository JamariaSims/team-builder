import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";

function App() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		role: "",
	});
	const [data, setData] = useState([]);
	useEffect(() => {
		if (!data.includes(form)) {
			setData([...data, form]);
		}
	}, [form]);
	return (
		<div className="App">
			<Form form={form} setForm={setForm} />
			{data.map((x, index) =>
				x.name === "" ? null : (
					<div className="returnForm">
						<p>{x["name"]}</p>
						<p>{x["email"]}</p>
						<p>{x["role"]}</p>
						<button>Edit</button>
					</div>
				)
			)}
		</div>
	);
}

export default App;
