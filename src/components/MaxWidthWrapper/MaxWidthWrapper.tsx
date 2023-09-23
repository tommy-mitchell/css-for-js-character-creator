import React from "react";
import styles from "./MaxWidthWrapper.module.scss";

// dprint-ignore
export type MaxWidthWrapperProps = React.ComponentPropsWithoutRef<"div"> & Readonly<{
	className?: string;
	children: React.ReactNode;
}>;

export default function MaxWidthWrapper({ className, children, ...props }: MaxWidthWrapperProps) {
	return <div className={`${styles.maxWidthWrapper} ${className}`} {...props}>{children}</div>;
}
