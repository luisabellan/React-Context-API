import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import User from "./components/User";
import "./styles.css";

function App() {
	const [user, setUser] = useState({});

	useEffect(() => {
		setUser({ firstName: "John", lastName: "Dough" });
	}, []);

	return (
		<div className="container">
			<User />
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
