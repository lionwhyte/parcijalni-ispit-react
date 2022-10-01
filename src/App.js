import React from 'react';
import './App.css';
import { useState, useRef } from "react";
import Header from "./components/Header";
import Main from "./components/Main";


export default function App() {
	const [inputValue, setInputValue] = useState("")
	const [userData, setUserData] = useState({})
	const [repoData, setRepoData] = useState([])

	const formElement = useRef()
	const resultElement = useRef()


	const handleSubmit = (event) => {
		event.preventDefault();
		fetch(`https://api.github.com/users/${inputValue}`)
			.then((response) => response.json())
			.then((data) => setUserData((values) => ({ ...values, ...data })))

		fetch(`https://api.github.com/users/${inputValue}/repos`)
			.then((response) => response.json())
			.then((data) => setRepoData((repo) => [...repo, ...data]))

		formElement.current.style.display = "none";
		resultElement.current.style.display = "block";
	};

	const backToSearch = () => {
		formElement.current.style.display = "block";
		resultElement.current.style.display = "none";
		setRepoData([]);
		setInputValue("");
	}


	return (
		<div className='form-content'>
			<form onSubmit={handleSubmit} ref={formElement}>
				<label>
					GitHub username:
					<input
						type="text"
						value={inputValue}
						placeholder="e.g. facebook"
						onChange={(event) => setInputValue(event.target.value)}
						required
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
			<div className='result' ref={resultElement}>
				<Header
					avatar={userData.avatar_url}
					name={userData.name}
					bio={userData.bio}
					location={userData.location}
				/>
				<Main list={repoData} />
				<button onClick={backToSearch}>RESET</button>
			</div>
		</div>
	);
}

