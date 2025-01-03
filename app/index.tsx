import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const Index = () => {
  return (
    <View style={styles.mainContainer}>
      <View></View>
      <View>
        <Text style={[styles.whiteText, styles.heading]}>Milions of Songs.</Text>
        <Text style={[styles.whiteText, styles.heading]}>Free on Spotify.</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.buttons, styles.greenButton]} onPress={() => router.push("/create-account")}>
            <Text style={styles.buttonText}>Sign up free</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttons, styles.socialButton]}>
            <Text style={[styles.buttonText, styles.whiteText]}>Continue with Google </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttons, styles.socialButton]}>
            <Text style={[styles.buttonText, styles.whiteText]}>Continue with Facebook </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttons, styles.socialButton]}>
            <Text style={[styles.buttonText, styles.whiteText]}>Continue with Apple </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttons, styles.loginButton]}>
            <Text style={[styles.buttonText, styles.whiteText]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#1B1A1C",
    flex: 1,
    justifyContent: "space-between"
  },
  whiteText: {
    color: "white"
  },
  heading: {
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center"
  },
  buttonsContainer: {
    gap: 10,
    paddingHorizontal: 40,
    marginVertical: 20
  },
  buttons: {
    padding: 13,
    borderRadius: 1000
  },
  greenButton: {
    backgroundColor: "#1ED760"
  },
  socialButton: {
    borderWidth: 1,
    borderColor: "white"
  },
  loginButton: {},
  buttonText: {
    fontWeight: 700,
    textAlign: "center",
    fontSize: 18
  }
})