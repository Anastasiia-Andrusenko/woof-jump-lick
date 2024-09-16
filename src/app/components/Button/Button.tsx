import css from './Button.module.css';

interface ButtonProps {
	text: string;
	color: string;
	style?: any;
}

const Button = ({ text, color }: ButtonProps) => {
	return (
		<div className={css.wrapper}>
			<button
				type="button"
				className={css.button}
				style={{ backgroundColor: color }}
			>
				{text}
			</button>
		</div>
	);
};

export default Button;
