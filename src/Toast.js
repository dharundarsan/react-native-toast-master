"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const { width } = react_native_1.Dimensions.get('window');
const Toast = (0, react_1.forwardRef)(({ style, textStyle }, ref) => {
    const fadeAnim = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    const translateY = (0, react_1.useRef)(new react_native_1.Animated.Value(-100)).current;
    const [message, setMessage] = (0, react_1.useState)('');
    (0, react_1.useImperativeHandle)(ref, () => ({
        show: (msg, duration = 2000) => {
            setMessage(msg);
            fadeAnim.setValue(0);
            translateY.setValue(-100);
            react_native_1.Animated.parallel([
                react_native_1.Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
                react_native_1.Animated.timing(translateY, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ]).start();
            setTimeout(() => {
                react_native_1.Animated.parallel([
                    react_native_1.Animated.timing(fadeAnim, {
                        toValue: 0,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                    react_native_1.Animated.timing(translateY, {
                        toValue: -100,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                ]).start();
            }, duration);
        },
    }));
    return (react_1.default.createElement(react_native_1.Animated.View, { style: [
            styles.toastContainer,
            style,
            {
                opacity: fadeAnim,
                transform: [{ translateY }],
                position: 'absolute',
                top: 50,
                alignSelf: 'center',
            },
        ] },
        react_1.default.createElement(react_native_1.Text, { style: [styles.toastMessage, textStyle] }, message)));
});
const styles = react_native_1.StyleSheet.create({
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
exports.default = Toast;
