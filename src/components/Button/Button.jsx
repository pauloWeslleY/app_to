import "./button.scss";

export function Button({ name, click }) {
	return (
		<div>
			<button type="submit" className="btn__hero" onClick={click}>
				{name}
			</button>
		</div>
	);
}
