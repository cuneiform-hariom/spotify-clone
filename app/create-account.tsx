import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const CreateAccount = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        gender: '',
        name: '',
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const nextStep = () => {
        if (step < 4) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <Text style={styles.label}>What's your email?</Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="johndoe@example.com"
                            placeholderTextColor="#B3B3B3"
                            cursorColor="white"
                            keyboardAppearance="dark"
                            value={formData.email}
                            onChangeText={(value) => handleInputChange('email', value)}
                        />
                    </>
                );
            case 2:
                return (
                    <>
                        <Text style={styles.label}>Create a password</Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Enter your password"
                            placeholderTextColor="#B3B3B3"
                            cursorColor="white"
                            keyboardAppearance="dark"
                            secureTextEntry
                            value={formData.password}
                            onChangeText={(value) => handleInputChange('password', value)}
                        />
                    </>
                );
            case 3:
                return (
                    <>
                        <Text style={styles.label}>What's your gender?</Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Male, Female, or Other"
                            placeholderTextColor="#B3B3B3"
                            cursorColor="white"
                            keyboardAppearance="dark"
                            value={formData.gender}
                            onChangeText={(value) => handleInputChange('gender', value)}
                        />
                    </>
                );
            case 4:
                return (
                    <>
                        <Text style={styles.label}>What's your name?</Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Your full name"
                            placeholderTextColor="#B3B3B3"
                            cursorColor="white"
                            keyboardAppearance="dark"
                            value={formData.name}
                            onChangeText={(value) => handleInputChange('name', value)}
                        />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <View style={styles.mainContainer}>
            {renderStepContent()}
            <View style={styles.buttonContainer}>
                {step > 1 && (
                    <TouchableOpacity style={styles.button} onPress={prevStep}>
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                )}
                {step < 4 ? (
                    <TouchableOpacity style={styles.button} onPress={nextStep}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => console.log('Form submitted:', formData)}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                )}
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
        marginBottom: 10,
    },
    inputBox: {
        color: "white",
        borderWidth: 1,
        borderColor: "white",
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        justifyContent:"center"
    },
    button: {
        backgroundColor: "#fff",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 50,
    },
    buttonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
});
