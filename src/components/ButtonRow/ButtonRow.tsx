import React from "react";
import clsx from "clsx";
import styles from "./ButtonRow.module.scss";

export type ButtonRowProps = Readonly<{
	className?: string;
	children: React.ReactNode;
}>;

export default function ButtonRow({ className, children }: ButtonRowProps) {
	return <div className={clsx(styles.buttonRow, className)}>{children}</div>;
}
