import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const CreateAccount = () => {
    return (
        <View style={styles.mainContainer}>
            <View>
                <Text style={styles.label}>What's your email?</Text>
                <TextInput 
                    style={styles.inputBox} 
                    placeholder="johndoe@example.com" 
                    placeholderTextColor="#B3B3B3" 
                    cursorColor="white" 
                    keyboardAppearance="dark" 
                />
            </View>
        </View>
    );
};

export default CreateAccount;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#1B1A1C",
        padding: 20,
    },
    label: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
    },
    inputBox: {
        color: "white",
        borderWidth: 1,
        borderColor: "white",
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        fontSize: 16,
    },
});
