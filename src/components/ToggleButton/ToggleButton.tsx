import React from "react";
import styles from "./ToggleButton.module.scss";

// dprint-ignore
type ToggleButtonProps = React.ComponentPropsWithoutRef<"button"> & Readonly<{
	label: string;
	color?: string;
	selected: boolean;
	children: React.ReactNode;
}>;

export default function ToggleButton({ label, color, selected: isSelected, children, ...props }: ToggleButtonProps) {
	const style: Record<string, string> = color
		? {
			"--toggle-button-color": color,
			"--border-toggle-button-pressed-dark": "white",
			"--shadow-toggle-button": "1px 1px 1px inset black",
		}
		: {};

	return (
		<button type="button" aria-pressed={isSelected} className={styles.toggleButton} style={style} {...props}>
			<span className="visually-hidden">{label}</span>
			{children}
		</button>
	);
}
