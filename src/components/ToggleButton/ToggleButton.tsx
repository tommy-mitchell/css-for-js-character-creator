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
	return (
		<button
			type="button"
			aria-pressed={isSelected}
			className={styles.toggleButton}
			style={{ backgroundColor: color }}
			{...props}
		>
			<span className="visually-hidden">{label}</span>
			{children}
		</button>
	);
}
