import styles from "./Toolbar.module.scss";
import data from "./../../../data.json";
import Button from "../Button/Button";

export default function Toolbar() {
	return (
		<>
			<section className={`${styles.toolbar}`}>
				{data.buttons.map((b, index) => {
					return (
						<Button
							className={`${b.button.id}Btn`}
							icon={b.button.icon}
							alt={b.button.alt}
							key={index}
						/>
					);
				})}
			</section>
		</>
	);
}
