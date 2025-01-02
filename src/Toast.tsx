import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';
import {
    Text,
    StyleSheet,
    Animated,
    Dimensions,
    View,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native';

const { width } = Dimensions.get('window');

export interface ToastRef {
    show: (msg: string, duration?: number) => void;
}

interface ToastProps {
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    duration?: number;
}

const Toast = forwardRef<ToastRef, ToastProps>(({ style, textStyle }, ref) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(-100)).current;
    const [message, setMessage] = useState<string>('');

    useImperativeHandle(ref, () => ({
        show: (msg: string, duration = 2000) => {
            setMessage(msg);
            fadeAnim.setValue(0);
            translateY.setValue(-100);

            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ]).start();

            setTimeout(() => {
                Animated.parallel([
                    Animated.timing(fadeAnim, {
                        toValue: 0,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(translateY, {
                        toValue: -100,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                ]).start();
            }, duration);
        },
    }));

    return (
        <Animated.View
            style={[
                styles.toastContainer,
                style,
                {
                    opacity: fadeAnim,
                    transform: [{ translateY }],
                    position: 'absolute',
                    top: 50,
                    alignSelf: 'center',
                },
            ]}
        >
            <Text style={[styles.toastMessage, textStyle]}>{message}</Text>
        </Animated.View>
    );
});

const styles = StyleSheet.create({
    toastContainer: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        maxWidth: width * 0.8,
        zIndex: 10000,
        overflow: 'hidden',
    },
    toastMessage: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Toast;
