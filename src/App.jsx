import { useEffect, useState } from "react";

import { Button } from "./components/Button/Button";

export default function App() {
	const [todo, setTodo] = useState(0);
	const [task, setTask] = useState("");
	const [itemsList, setItemsList] = useState([]);

	const addList = () => {
		setTodo(todo + 1 / 5);
	};

	const removeList = () => {
		setTodo(0);
	};

	const handleChangeInput = (event) => {
		const inputTask = event.target.value;

		// if (!task) {
		// 	return;
		// }

		setTask(inputTask);
	};

	// Adiciona um novo elemento na lista
	const handleAddItemToList = (event) => {
		event.preventDefault(); // <----- desabilita o refresh na pagina ao enviar um formulário

		setItemsList([...itemsList, task]); // <----- Copia todos os items ja existentes e entao adiociona o novo
		// Limpa o campo de input
		setTask("");
	};

	useEffect(() => {
		document.title = `Você clicou ${todo} vezes`;
	});

	return (
		<>
			<h1>Hello World</h1>

			<Button name={"Calc"} click={addList} />
			<Button name={"Clear"} click={removeList} />

			<form onSubmit={handleAddItemToList}>
				<input
					type="text"
					placeholder="Item here"
					onChange={handleChangeInput}
					value={task}
				/>
				<Button name={"Add"} />
			</form>

			<ul>
				{/* // <----- Percorremos o array de todos */}
				{/* <----- Para cada item do array, criamos um `li` */}
				{itemsList.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>

			<span>You click {todo}</span>
		</>
	);
}
