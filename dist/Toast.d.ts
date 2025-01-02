import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
export interface ToastRef {
    show: (msg: string, duration?: number) => void;
}
interface ToastProps {
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    duration?: number;
}
declare const Toast: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<ToastRef>>;
export default Toast;
