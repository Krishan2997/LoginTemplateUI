import { Text, TextInput, Button } from "react";
import { ToastAndroid } from "react-native";

export default function Header() {
    ToastAndroid.show("this is from header");
    return (
        <Text>This is Header</Text>
    );
}