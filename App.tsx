import * as React from 'react';
import {
	AsyncStorage,
	Button,
	Text,
	TextInput,
	View,
	StyleSheet,
	ScrollView
} from 'react-native';

import { Image as ReactImage } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';

import MainScreen from './components/mainScreen/mainScreen';
import Login from './components/login/login';
import SignUp from './components/signUp/signUp';

import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDBoDO2NXn0Z2VS3b_6kFy8jaRhxdNe5OA',
	authDomain: 'gigapp-f7284.firebaseapp.com',
	databaseURL: 'https://gigapp-f7284.firebaseio.com',
	projectId: 'gigapp-f7284',
	storageBucket: 'gigapp-f7284.appspot.com',
};

firebase.initializeApp(firebaseConfig);

const AuthContext = React.createContext();









function StartUp () {
    return (
			<ScrollView style={styles.startUp}>
				<ReactImage
					source={require('./assets/giglendLogo1Project.png')}
					style={styles.startUp_giglendLogo1Project}
				/>
				<Text style={styles.startUp_peerToPeerLendingForTheGigCommunity}>
					Peer to Peer Lending for the Gig Community
				</Text>
			</ScrollView>
		);
  }






const Stack = createStackNavigator( );

export default function App({ navigation }) {
	const [state, dispatch] = React.useReducer(
		(prevState, action) => {
			switch (action.type) {
				case 'RESTORE_TOKEN':
					return {
						...prevState,
						userToken: action.token,
						isLoading: false,
					};
				case 'SIGN_IN':
					return {
						...prevState,
						isSignout: false,
						userToken: action.token,
					};
				case 'SIGN_OUT':
					return {
						...prevState,
						isSignout: true,
						userToken: null,
					};
			}
		},
		{
			isLoading: true,
			isSignout: false,
			userToken: null,
		},
	);

	React.useEffect(() => {
		// Fetch the token from storage then navigate to our appropriate place
		const bootstrapAsync = async () => {
			let userToken;

			try {
				userToken = await AsyncStorage.getItem('userToken');
			} catch (e) {
				// Restoring token failed
			}

			// After restoring token, we may need to validate it in production apps

			// This will switch to the App screen or Auth screen and this loading
			// screen will be unmounted and thrown away.
			dispatch({ type: 'RESTORE_TOKEN', token: userToken });
		};

		bootstrapAsync();
	}, []);

	const authContext = React.useMemo(
		() => ({
			signIn: async data => {
				// In a production app, we need to send some data (usually username, password) to server and get a token
				// We will also need to handle errors if sign in failed
				// After getting token, we need to persist the token using `AsyncStorage`
				// In the example, we'll use a dummy token

				dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
			},
			signOut: () => dispatch({ type: 'SIGN_OUT' }),
			signUp: async data => {
				// In a production app, we need to send user data to server and get a token
				// We will also need to handle errors if sign up failed
				// After getting token, we need to persist the token using `AsyncStorage`
				// In the example, we'll use a dummy token

				dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
			},
		}),
		[],
	);

	return (
		<AuthContext.Provider value={authContext}>
			<NavigationContainer>
				<Stack.Navigator headerMode='none'>
					{state.isLoading ? (
						// We haven't finished checking for the token yet
						<Stack.Screen name='Splash' component={StartUp} />
					) : state.userToken == null ? (
						<Stack.Screen
							name='Login'
							component={Login}
							options={{
								// When logging out, a pop animation feels intuitive
								animationTypeForReplace: state.isSignout ? 'pop' : 'push',
							}}
						/>
					) : (
						// User is signed in
						<Stack.Screen
							headerMode='none'
							name='Home'
							component={MainScreen}
						/>
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</AuthContext.Provider>
	); 
  
}


// export default createAppContainer(InitialNavigator);

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//     </View>
//   );
// }



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	startUp: {
		opacity: 1,
		position: 'relative',
		backgroundColor: 'rgba(0, 0, 0, 1)',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		width: 375,
		height: 812,
		left: 0,
		top: 0,
	},
	startUp_statusbar: {
		opacity: 1,
		position: 'absolute',
		backgroundColor: 'transparent',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		width: 327.03,
		height: 14.17,
		left: 24,
		top: 14.83,
	},
	startUp_statusbar_group1: {
		opacity: 1,
		position: 'absolute',
		backgroundColor: 'transparent',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		width: 23.83,
		height: 10.33,
		left: 303.2,
		top: 0.5,
	},
	startUp_statusbar_group1_rectangle1: {
		opacity: 0.3499999940395355,
		position: 'absolute',
		backgroundColor: 'transparent',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		borderTopWidth: 1,
		borderTopColor: 'rgba(255, 255, 255, 1)',
		borderRightWidth: 1,
		borderRightColor: 'rgba(255, 255, 255, 1)',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(255, 255, 255, 1)',
		borderLeftWidth: 1,
		borderLeftColor: 'rgba(255, 255, 255, 1)',
		borderTopLeftRadius: 2.67,
		borderTopRightRadius: 2.67,
		borderBottomLeftRadius: 2.67,
		borderBottomRightRadius: 2.67,
		width: 20,
		height: 9.33,
		left: -0.5,
		top: -0.5,
	},
	startUp_statusbar_group1_path1: {
		opacity: 0.4000000059604645,
		position: 'absolute',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		width: 1.33,
		height: 4,
		left: 22.5,
		top: 3.17,
	},
	startUp_statusbar_group1_rectangle2: {
		opacity: 1,
		position: 'absolute',
		backgroundColor: 'rgba(255, 255, 255, 1)',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		borderTopLeftRadius: 1.33,
		borderTopRightRadius: 1.33,
		borderBottomLeftRadius: 1.33,
		borderBottomRightRadius: 1.33,
		width: 18,
		height: 7.33,
		left: 1.5,
		top: 1.5,
	},
	startUp_statusbar_path2: {
		opacity: 1,
		position: 'absolute',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		width: 37.3,
		height: 11,
		left: 260.36,
		top: 0,
	},
	startUp_statusbar_x941: {
		opacity: 1,
		position: 'absolute',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		color: 'rgba(255, 255, 255, 1)',
		fontSize: 14,
		fontWeight: '700',
		fontStyle: 'normal',
		textAlign: 'left',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		width: 26,
		height: 14,
		left: 0,
		top: 0.17,
	},
	startUp_giglendLogo1Project: {
		opacity: 1,
		position: 'absolute',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		width: 200,
		height: 120,
		left: 88,
		top: 106,
	},
	startUp_peerToPeerLendingForTheGigCommunity: {
		opacity: 1,
		position: 'absolute',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		color: 'rgba(255, 255, 255, 1)',
		fontSize: 50,
		fontWeight: '400',
		fontStyle: 'normal',
		textAlign: 'center',
		// fontFamily: 'Catamaran',
		lineHeight: 59,
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		width: 261,
		height: 271,
		left: 57,
		top: 314.5,
	},
	startUp_signUp: {
		opacity: 1,
		position: 'absolute',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		color: 'rgba(255, 255, 255, 1)',
		fontSize: 20,
		fontWeight: '700',
		fontStyle: 'normal',
		textAlign: 'left',
		// fontFamily: 'Catamaran',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		width: 67,
		height: 33,
		left: 286,
		top: 747,
	},
	startUp_signIn: {
		opacity: 1,
		position: 'absolute',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		color: 'rgba(255, 255, 255, 1)',
		fontSize: 20,
		fontWeight: '700',
		fontStyle: 'normal',
		textAlign: 'left',
		// fontFamily: 'Catamaran',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		width: 57,
		height: 33,
		left: 30,
		top: 747,
	},
});