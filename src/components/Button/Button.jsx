import PropTypes from "prop-types";
import styles from "./Button.module.scss";

export default function Button(props) {
	const { className, icon, alt } = props;

	return (
		<button className={`${styles[className]} ${styles.toolbarBtn}`}>
			<span className={`${styles.iconWrapper}`}>
				{/* <img
						src={icon}
						alt={alt}
					/> */}
				{icon}
			</span>
		</button>
	);
}

Button.propTypes = {
	className: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};
