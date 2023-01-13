import { StyleSheet, Text, View, TextInput, Button, ToastAndroid, _View } from 'react-native';
import App from '../App';

export default function LoginPage() {
    ToastAndroid.show("I am in Login Page", 1000);
    return (
        <View style={styles.container}>
            <Text>This is Login page</Text>
            <Button style={styles.buttonStyle} title="Go Back" onPress={<App />} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});