# React Native Toast Package

A customizable toast component for React Native with TypeScript support.

## Features

- Lightweight and easy to use.
- Fully customizable styles for the toast container and text.
- Works with both JavaScript and TypeScript.
- Smooth animations for showing and hiding the toast.

## Installation

To install the package, run:

```bash
npm install react-native-toast-package
```

## Usage

### JavaScript Example

```javascript
import React, { useRef } from 'react';
import { Button, View } from 'react-native';
import Toast from 'react-native-toast-package';

const App = () => {
    const toastRef = useRef();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Show Toast" onPress={() => toastRef.current.show('Hello, World!')} />
            <Toast ref={toastRef} />
        </View>
    );
};

export default App;
```

### TypeScript Example

```typescript
import React, { useRef } from 'react';
import { Button, View } from 'react-native';
import Toast, { ToastRef } from 'react-native-toast-package';

const App = () => {
    const toastRef = useRef<ToastRef>(null);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Show Toast" onPress={() => toastRef.current?.show('Hello, World!')} />
            <Toast ref={toastRef} />
        </View>
    );
};

export default App;
```

## Props

The `Toast` component accepts the following optional props:

| Prop Name   | Type               | Default      | Description                                          |
|-------------|--------------------|--------------|------------------------------------------------------|
| `style`     | `StyleProp<ViewStyle>` | `undefined`  | Custom styles for the toast container.               |
| `textStyle` | `StyleProp<TextStyle>` | `undefined`  | Custom styles for the toast message text.            |
| `duration`  | `number`           | `2000`       | Default duration (in milliseconds) for the toast.    |

## API

The `Toast` component exposes the following methods via `ref`:

### `show(message: string, duration?: number): void`

Displays a toast with the specified message and optional duration.

- **`message`**: The text to display in the toast.
- **`duration`**: (Optional) Duration in milliseconds for the toast to be visible.

### Example Usage

```typescript
toastRef.current?.show('This is a toast message!', 3000);
```

## Styling

You can customize the toast's appearance by passing the `style` and `textStyle` props. These props allow you to modify the container's background, padding, text color, font size, and other visual elements.

### Example

```typescript
<Toast
    ref={toastRef}
    style={{ backgroundColor: 'blue' }}
    textStyle={{ color: 'yellow', fontSize: 18 }}
/>
```

## License

This package is licensed under the [MIT License](./LICENSE).

## Contributing

Contributions are welcome! If you have ideas for improvements or find any issues, feel free to open an issue or submit a pull request on the GitHub repository.

## Acknowledgments

Special thanks to the React Native community for their support and inspiration in building this package.
