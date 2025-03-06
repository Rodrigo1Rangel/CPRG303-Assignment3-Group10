import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import CallAPI from "../components/callAPI";

export default function Page() {
    const router = useRouter();

    return (
        <View>
            <CallAPI />
        </View>
    )
}