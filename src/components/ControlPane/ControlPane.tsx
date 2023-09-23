import React from "react";
import ToggleButton from "@components/ToggleButton";
import ButtonRow from "@components/ButtonRow";
import styles from "./ControlPane.module.scss";

type ControlPaneProps = Readonly<{
	title: string;
	type?: string;
	options: Array<{
		id: number | string;
		label: string;
		color?: string;
		children: React.ReactNode;
	}>;
	currentOption: number | string;
	handleSelectOption: ((id: number) => void) | ((id: string) => void);
}>;

export default function ControlPane({ title, type, options, currentOption, handleSelectOption }: ControlPaneProps) {
	return (
		<div className={styles.controlPane}>
			<h2 className={styles.title}>
				{title}

				<span className={styles.metadata}>{options.length} options</span>
			</h2>
			<ButtonRow>
				{options.map(({ id, label, color, children }) => (
					<ToggleButton
						key={id}
						selected={currentOption === id}
						label={label}
						color={color}
						onClick={() => handleSelectOption(id as never)}
					>
						{children}
					</ToggleButton>
				))}
			</ButtonRow>
		</div>
	);
}
