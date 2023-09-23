import {
	clothesColors,
	numberAccessories,
	numberBodies,
	numberFaces,
	numberHeads,
	skinColors,
} from "@helpers/constants";
import { range, zeroPadNumber } from "@utils";

export const bodyOptions = range(numberBodies).map((index) => {
	return {
		id: index,
		label: `Body ${index + 1}`,
		children: zeroPadNumber(index + 1),
	};
});

export const headOptions = range(numberHeads).map((index) => {
	return {
		id: index,
		label: `Head ${index + 1}`,
		children: zeroPadNumber(index + 1),
	};
});

export const faceOptions = range(numberFaces).map((index) => {
	return {
		id: index,
		label: `Face ${index + 1}`,
		children: zeroPadNumber(index + 1),
	};
});

export const accessoryOptions = range(numberAccessories).map((index) => {
	return {
		id: index,
		label: `Accessory ${index + 1}`,
		children: zeroPadNumber(index + 1),
	};
});

export const skinColorOptions = skinColors.map(({ label, color }) => {
	return {
		id: color,
		label,
		color,
		children: null,
	};
});

export const clothesColorOptions = clothesColors.map(
	({ label, color }) => {
		return {
			id: color,
			label,
			color,
			children: null,
		};
	},
);
