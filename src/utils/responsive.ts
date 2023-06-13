import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const scaledWidth = (scaleWidthVar: number) => {
	return (width * scaleWidthVar) / width;
};

export const scaledHeight = (scaleHeightVar: number) => {
	return (height * scaleHeightVar) / height;
};
