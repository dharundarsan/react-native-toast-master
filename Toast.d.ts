import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface ToastRef {
    show: (msg: string, duration?: number) => void;
}

export interface ToastProps {
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    duration?: number; // Default duration for toast
}

declare const Toast: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<ToastRef>>;

export default Toast;
