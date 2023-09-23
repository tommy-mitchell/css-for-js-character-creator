import React from "react";
import styles from "./ButtonRow.module.scss";

export type ButtonRowProps = Readonly<{
	children: React.ReactNode;
}>;

export default function ButtonRow({ children }: ButtonRowProps) {
	return <div className={styles.buttonRow}>{children}</div>;
}
