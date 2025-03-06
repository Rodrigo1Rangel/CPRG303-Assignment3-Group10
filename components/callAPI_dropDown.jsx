import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

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
        fetchData();
    }, [day, month])

    return (
        <View style={{alignItems:"center", marginTop: 200}}>
            <View style={styles.textInput}>
            <TextInput placeholder="Day" value={day} onChangeText={setDay} />
            </View>
            <View style={styles.textInput}>
                <TextInput placeholder="Month" value={month} onChangeText={setMonth} />
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