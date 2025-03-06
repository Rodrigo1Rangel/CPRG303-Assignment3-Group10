import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Page() {
    const router = useRouter();

    return (
        <View>
            <Button title = "Text entry version" onPress={() => router.push("/interestingFacts_textInput")}/>
            <Button title = "Dropdown version" onPress={() => router.push("/interestingFacts_textInput")}/>
        </View>
    )
}