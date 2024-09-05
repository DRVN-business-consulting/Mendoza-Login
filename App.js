import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Switch, Text, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
	let [username, setUsername] = React.useState('');
	let [password, setPassword] = React.useState('');
	let [count, setCount] = React.useState(0);
	let [pwvValid, setPwvValid] = React.useState('False');
	let [isDarkTheme, setIsDarkTheme] = React.useState(false);
	let Rusername = 'Testing';
	let Rpassword = 'Testing.2';
	let [theme, setTheme] = React.useState(0);

	React.useEffect( () => {
		count = username.length;
		setCount(previousValue => username.length)
	}, [username]);

	React.useEffect( () => {
		pwvValid = password.length;
		setPwvValid(previousValue => 'False')
	}, [password]);

	React.useEffect( () => {
		if (theme === 0) {
			setIsDarkTheme(value => false)
		} else {
			setIsDarkTheme(value => true)
		}
	}, [theme]);

	let onPressTheme = (event) => {
		if(theme === 1) {
			setTheme(value => 0)
		} else {
			setTheme(value => 1)
		}
	}

	let onPressLogin = (event) => {
		if( username.length > 20 || username.length <7) {
			Alert.alert('Invalid Username!');
		} else {
			if (username === Rusername && password === Rpassword) {
				Alert.alert('Success!', 'You have successfully Logged-in!');
			} else {
				Alert.alert('Failed to Login');
			}
		}
	}

	return (
		<SafeAreaView style={[styles.container, (isDarkTheme ? styles.backgroundDark : styles.background)]}>
			<Text style={[{fontSize: 24}, (isDarkTheme ? styles.textDark : styles.text)]}>Username Count: {count}</Text>
			<TextInput
				value={username}
				placeholder="Username"
				maxLength={20}
				onChangeText={newValue => setUsername(newValue)}
				style = {[(isDarkTheme ? styles.inputBox : styles.inputBoxDark)]}></TextInput>
			<Text style={[{fontSize: 24}, (isDarkTheme ? styles.textDark : styles.text)]}>Password Valid: {pwvValid}</Text>
			<TextInput
				value={password}
				placeholder="Password"
				onChangeText={newValue => setPassword(newValue)}
				style = {[(isDarkTheme ? styles.inputBox : styles.inputBoxDark),{ marginBottom: 20}]}></TextInput>
			{/* <Text style={[{fontSize: 64}, (isDarkTheme ? styles.textDark : styles.text)]}>{count} 🙈🙉</Text> */}
			<TouchableOpacity
				onPress={onPressLogin}
				style = {{
						paddingHorizontal: 24,
						paddingVertical: 12,
						borderRadius: 16,
						backgroundColor: 'blue',
						width: "80%"
				}}>
					<Text style={[(isDarkTheme ? styles.textDark : styles.text), {fontSize: 24, color : "white", textAlign: "center"}]}>LOGIN</Text>
				</TouchableOpacity>
			<StatusBar style="auto" />
			<TouchableOpacity
				onPress={onPressTheme}
				style = {{
						width: "80%",
				}}>
					<Text style={[{
						color: "white",
						fontSize: 70,
						textAlign: 'center'
					}, (isDarkTheme ? styles.showMonkey : styles.showMonkeyDark)]}>🙉</Text>
					<Text style={[{
						color: "white",
						fontSize: 70,
						textAlign: 'center'
					}, (isDarkTheme ? styles.hideMonkey : styles.hideMonkeyDark)]}>🙈</Text>
				</TouchableOpacity>
			{/* <Switch value={isDarkTheme} onValueChange={setIsDarkTheme} /> */}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	background: {
		backgroundColor: '#fff'
	},
	backgroundDark: {
		backgroundColor: "#000"
	},
	text: {
		color: '#000'
	},
	textDark: {
		color: "#fff"
	},
	showMonkey: {
		display: "none"
	},
	showMonkeyDark: {
		display: "block"
	},
	hideMonkey: {
		display: "block"
	},
	hideMonkeyDark: {
		display: "none"
	},
	inputBox: {
		paddingHorizontal: 24,
		paddingVertical: 12,
		borderColor: 'white',
		marginTop: 20,
		borderWidth: 1,
		borderRadius: 16,
		width: "80%",
		color: 'white',
	},
	inputBoxDark: {
		paddingHorizontal: 24,
		paddingVertical: 12,
		borderColor: 'black',
		marginTop: 20,
		borderWidth: 1,
		borderRadius: 16,
		width: "80%",
		color: 'black'
	}
});
