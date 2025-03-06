import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { Dropdown } from "react-native-element-dropdown";


const CallAPI_textEntry = () => {

    const url = 'https://numbersapi.p.rapidapi.com/6/21/date';
    const options = {
    	method: 'GET',
    	headers: {
    		'x-rapidapi-key': '1752a3e8d0msh1c57fd6bb4e9fdep130121jsn16d8c29068eb',
    		'x-rapidapi-host': 'numbersapi.p.rapidapi.com'
    	}
    };

    const router = useRouter();
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [interestingFact, setInterestingFact] = useState("");

    const months = [
        { label: "January", value: "1"},
        { label: "February", value: "2"},
        { label: "March", value: "3"},
        { label: "April", value: "4"},
        { label: "May", value: "5"},
        { label: "June", value: "6"},
        { label: "July", value: "7"},
        { label: "August", value: "8"},
        { label: "September", value: "9"},
        { label: "October", value: "10"},
        { label: "November", value: "11"},
        { label: "December", value: "12"},

    ]

    const fetchData = async () => {
        try {
            const response = await fetch(url, options);
            const interestingFact = await response.text();
            console.log("Fetched data: ", interestingFact);
            setInterestingFact(interestingFact);
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    useEffect(() => {
        if (day && month) {
            fetchData();
        }
    }, [day, month])

    return (
        <View style={{alignItems:"center", marginTop: 200}}>
            <View style={styles.textInput}>
            <TextInput placeholder="Day" value={day} onChangeText={setDay} />
            </View>
            <View style={styles.textInput}>
                <Dropdown
                   data={months}
                   placeholder="Month"
                   value={month}
                   onChange={(item) => setMonth(item.value)}month
                   labelField="label"
                   valueField="value"
                />
            </View>
            <View style={styles.factContainer}>
                <Text style={styles.titleInterestingFact}>Interesting fact: </Text>
                <Text style={styles.interestingFact}>{interestingFact}</Text>
                <Button title = "Index" onPress={() => router.push("/")}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create ({
    factContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: 330
    },
    titleInterestingFact: {
        fontSize: 30,
        alignItems: "flex-start",
        marginTop: 30,
    },
    interestingFact: {
        margin: 20,
        fontSize: 15,
    },
    textInput: {
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 1,
        width: 250,
        marginTop: 5,
    }
})

export default CallAPI_textEntry;