import { ImageSourcePropType } from "react-native";

export interface IProduct {
    id: number;
    name: string;
    image: ImageSourcePropType;
    price: number;
    description: string;
}

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

export const products: IProduct[] = [
    { id: 1, name: 'Battery', price: 200, image: require('../../assets/Battery.png'), description },
    { id: 2, name: 'Monitor', price: 250, image: require('../../assets/Monitor.png'), description },
    { id: 3, name: 'Speaker', price: 300, image: require('../../assets/Speaker.png'), description },
    { id: 4, name: 'Battery 2', price: 220, image: require('../../assets/Battery.png'), description },
    { id: 5, name: 'Monitor 2', price: 270, image: require('../../assets/Monitor.png'), description },
    { id: 6, name: 'Speaker 2', price: 320, image: require('../../assets/Speaker.png'), description },
    { id: 7, name: 'Battery 3', price: 240, image: require('../../assets/Battery.png'), description },
    { id: 8, name: 'Monitor 3', price: 290, image: require('../../assets/Monitor.png'), description },
    { id: 9, name: 'Speaker 3', price: 350, image: require('../../assets/Speaker.png'), description },
    { id: 10, name: 'Battery 4', price: 260, image: require('../../assets/Battery.png'), description },
];
