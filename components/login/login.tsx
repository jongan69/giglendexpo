import React, { Component } from 'react';

import PropTypes from "prop-types";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Picker,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import { Image as ReactImage } from 'react-native';

import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';



// function SignInScreen() {
// 	const [username, setUsername] = React.useState('');
// 	const [password, setPassword] = React.useState('');

// 	const { signIn } = React.useContext(AuthContext);

// 	return (
// 		<View>
// 			<TextInput
// 				placeholder='Username'
// 				value={username}
// 				onChangeText={setUsername}
// 			/>
// 			<TextInput
// 				placeholder='Password'
// 				value={password}
// 				onChangeText={setPassword}
// 				secureTextEntry
// 			/>
// 			<Button title='Sign in' onPress={() => signIn({ username, password })} />
// 		</View>
// 	);
// }

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePress(target, owner) {
    if (this.props.onPress) {
      let name;
      let id;
      let index = -1;
      if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
          name = target.split("::")[0];
          id = target.split("::")[1];
        } else if (varCount === 3) {
          name = target.split("::")[0];
          index = parseInt(target.split("::")[1]);
          id = target.split("::")[2];
        }
      } else {
        name = target;
      }
      this.props.onPress({
        type: 'button',
        name: name,
        index: index,
        id: id,
        owner: owner,
      });
    }
  }

  handleChangeTextinput(name, value) {
    let id;
    let index = -1;
    if (name.search('::') > -1) {
      const varCount = name.split("::").length;
      if (varCount === 2) {
        name = name.split("::")[0];
        id = name.split("::")[1];
      } else if (varCount === 3) {
        name = name.split("::")[0];
        index = name.split("::")[1];
        id = name.split("::")[2];
      }
    } else {
      name = name;
    }
    let state = this.state;
    state[name.split('::').join('')] = value;
    this.setState(state, () => {
      if (this.props.onChange) {
        this.props.onChange({
          type: 'textinput',
          name: name,
          value: value,
          index: index,
          id: id,
        });
      }
    });
  }

  render() {
    return (
			<ScrollView style={styles.login}>
				<ReactImage
					source={require('./assets/giglendLogo1Project.png')}
					style={styles.login_giglendLogo1Project}
				/>

				<View style={styles.login_form}>
					<View style={styles.login_form_inputfd4a9a46}>
						<View style={styles.login_form_inputfd4a9a46_rectangle43acb15f7} />

						<TextInput style={styles.login_form_inputfd4a9a46_example}>
							example@email.com
						</TextInput>

						<Svg
							style={styles.login_form_inputfd4a9a46_user}
							preserveAspectRatio='none'
							viewBox='0 5 19.9736328125 19.9736328125'
							fill='rgba(253, 153, 42, 1)'
						>
							<SvgPath d='M 13.48214054107666 17.31700325012207 C 15.39626502990723 16.1518669128418 16.64459228515625 14.07132339477539 16.64459228515625 11.65785980224609 C 16.64463043212891 7.996031284332275 13.64856052398682 5 9.986770629882812 5 C 6.324980735778809 5 3.32891058921814 7.996031284332275 3.32891058921814 11.65785980224609 C 3.32891058921814 14.07132339477539 4.577237129211426 16.15190696716309 6.49136209487915 17.31700325012207 C 3.162451267242432 18.56536865234375 0.6657587289810181 21.47817039489746 0 24.97354125976562 L 1.664474725723267 24.97354125976562 C 2.496692657470703 21.14529228210449 5.908871650695801 18.31568145751953 9.986770629882812 18.31568145751953 C 14.06466960906982 18.31568145751953 17.47684860229492 21.1452522277832 18.30906677246094 24.97354125976562 L 19.97354125976562 24.97354125976562 C 19.30778121948242 21.39494132995605 16.81108856201172 18.48213958740234 13.48214054107666 17.31700325012207 Z M 4.993385314941406 11.65785980224609 C 4.993385314941406 8.911517143249512 7.24042797088623 6.664474487304688 9.986770629882812 6.664474487304688 C 12.73311233520508 6.664474487304688 14.98015594482422 8.911517143249512 14.98015594482422 11.65785980224609 C 14.98015594482422 14.40420246124268 12.73311233520508 16.6512451171875 9.986770629882812 16.6512451171875 C 7.24042797088623 16.6512451171875 4.993385314941406 14.40420246124268 4.993385314941406 11.65785980224609 Z' />
						</Svg>
					</View>
					<View style={styles.login_form_input}>
						<View style={styles.login_form_input_rectangle4} />
						<TextInput style={styles.login_form_inputfd4a9a46_example}>
							Password
						</TextInput>

						<Svg
							style={styles.login_form_input_lock}
							preserveAspectRatio='none'
							viewBox='0.016326529905200005 2.842170943040401e-14 15.1591796875 20'
							fill='rgba(253, 153, 42, 1)'
						>
							<SvgPath d='M 13.86122417449951 7.604081630706787 L 13.12653064727783 7.604081630706787 L 13.12653064727783 5.538775444030762 C 13.12653064727783 2.485714197158813 10.64489841461182 2.842170943040401e-14 7.591836929321289 2.842170943040401e-14 C 4.538775444030762 2.842170943040401e-14 2.057142972946167 2.485714197158813 2.057142972946167 5.534693717956543 L 2.057142972946167 7.599999904632568 L 1.326530575752258 7.599999904632568 C 0.6040816307067871 7.599999904632568 0.0163265299052 8.18775463104248 0.0163265299052 8.91020393371582 L 0.0163265299052 18.68979644775391 C 0.0163265299052 19.41224479675293 0.6040816307067871 20 1.326530575752258 20 L 13.86530590057373 20 C 14.58775520324707 20 15.17551040649414 19.41224479675293 15.17551040649414 18.68979644775391 L 15.17551040649414 8.91020393371582 C 15.17142868041992 8.191836357116699 14.58367347717285 7.604081630706787 13.86122417449951 7.604081630706787 Z M 3.722449064254761 5.534693717956543 C 3.722449064254761 3.400000095367432 5.45714282989502 1.665306091308594 7.591836929321289 1.665306091308594 C 9.726531028747559 1.665306091308594 11.46122455596924 3.400000095367432 11.46122455596924 5.534693717956543 L 11.46122455596924 7.59591817855835 L 3.722449064254761 7.59591817855835 L 3.722449064254761 5.534693717956543 Z M 13.50204086303711 18.33469390869141 L 1.6816326379776 18.33469390869141 L 1.6816326379776 9.269388198852539 L 13.50612258911133 9.269388198852539 L 13.50612258911133 18.33469390869141 L 13.50204086303711 18.33469390869141 Z' />
						</Svg>
					</View>

					<Text style={styles.login_form_signIne5d2c2cf}>Sign in</Text>
				</View>
				<View style={styles.login_footer}>
					<Text style={styles.login_footer_dontHaveAnAccountSignUp}>
						Don’t have an account? - Sign up
					</Text>
				</View>

				<TouchableOpacity >
					<View style={styles.login_btn}>
					<View style={styles.login_btn_rectangle12} />
					<Text style={styles.login_btn_signIn}>SIGN IN</Text>
				</View>
				</TouchableOpacity>
			</ScrollView>
		);
  }
}

Login.propTypes = {};

Login.defaultProps = {};

const styles = StyleSheet.create({
	login: {
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
		width: '100%',
		height: '100%',
		left: 0,
		top: 0,
	},
	login_form: {
		opacity: 1,
		position: 'absolute',
		backgroundColor: 'transparent',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: 207,
		left: 24,
		top: 226,
	},
	login_form_inputfd4a9a46: {
		opacity: 1,
		position: 'absolute',
		backgroundColor: 'transparent',
		justifyContent: 'center',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		width: 335,
		height: 60,
		left: 0,
		top: 68,
	},
	login_form_inputfd4a9a46_rectangle43acb15f7: {
		opacity: 0.20000000298023224,
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
		borderTopWidth: 1,
		borderTopColor: 'rgba(112, 112, 112, 1)',
		borderRightWidth: 1,
		borderRightColor: 'rgba(112, 112, 112, 1)',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(112, 112, 112, 1)',
		borderLeftWidth: 1,
		borderLeftColor: 'rgba(112, 112, 112, 1)',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		width: 335,
		height: 60,
		left: 0,
		top: 0,
	},
	login_form_inputfd4a9a46_example: {
		opacity: 1,
		justifyContent: 'center',
		position: 'absolute',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		color: 'rgba(255, 255, 255, 1)',
		fontSize: 18,
		fontWeight: '400',
		fontStyle: 'normal',
		// fontFamily: 'Catamaran',
		textAlign: 'left',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		width: 180,
		height: 30,
		left: 59,
		top: 16,
	},
	login_form_inputfd4a9a46_user: {
		opacity: 1,
		justifyContent: 'center',
		position: 'absolute',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		width: 19.97,
		height: 19.97,
		left: 22,
		top: 21,
	},
	login_form_input: {
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
		width: 335,
		height: 60,
		left: 0,
		top: 147,
	},
	login_form_input_rectangle4: {
		opacity: 0.20000000298023224,
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
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		width: 335,
		height: 60,
		left: 0,
		top: 0,
	},
	login_form_input_rectangle5: {
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
		borderTopLeftRadius: 111,
		borderTopRightRadius: 111,
		borderBottomLeftRadius: 111,
		borderBottomRightRadius: 111,
		width: 8,
		height: 8,
		left: 59,
		top: 28,
	},
	login_form_input_rectangle8: {
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
		borderTopLeftRadius: 111,
		borderTopRightRadius: 111,
		borderBottomLeftRadius: 111,
		borderBottomRightRadius: 111,
		width: 8,
		height: 8,
		left: 85,
		top: 28,
	},
	login_form_input_rectangle10: {
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
		borderTopLeftRadius: 111,
		borderTopRightRadius: 111,
		borderBottomLeftRadius: 111,
		borderBottomRightRadius: 111,
		width: 8,
		height: 8,
		left: 111,
		top: 28,
	},
	login_form_input_rectangle6: {
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
		borderTopLeftRadius: 111,
		borderTopRightRadius: 111,
		borderBottomLeftRadius: 111,
		borderBottomRightRadius: 111,
		width: 8,
		height: 8,
		left: 72,
		top: 28,
	},
	login_form_input_rectangle7: {
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
		borderTopLeftRadius: 111,
		borderTopRightRadius: 111,
		borderBottomLeftRadius: 111,
		borderBottomRightRadius: 111,
		width: 8,
		height: 8,
		left: 98,
		top: 28,
	},
	login_form_input_rectangle9: {
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
		borderTopLeftRadius: 111,
		borderTopRightRadius: 111,
		borderBottomLeftRadius: 111,
		borderBottomRightRadius: 111,
		width: 8,
		height: 8,
		left: 124,
		top: 28,
	},
	login_form_input_lock: {
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
		width: 15.16,
		height: 20,
		left: 24,
		top: 22,
	},
	login_form_signIne5d2c2cf: {
		opacity: 1,
		position: 'absolute',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		color: 'rgba(255, 255, 255, 1)',
		fontSize: 25,
		fontWeight: '700',
		fontStyle: 'normal',
		// fontFamily: 'Catamaran',
		textAlign: 'left',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		width: 86,
		height: 49,
		left: 1,
		top: 0,
	},
	login_footer: {
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
		width: 248,
		height: 27,
		left: 64,
		top: 744,
	},
	login_footer_dontHaveAnAccountSignUp: {
		opacity: 1,
		position: 'absolute',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		color: 'rgba(255, 255, 255, 1)',
		fontSize: 15,
		fontWeight: '700',
		fontStyle: 'normal',
		// fontFamily: 'Catamaran',
		textAlign: 'center',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		width: 248,
		height: 27,
		left: 0,
		top: 0,
	},
	login_group2_ore5ec8827_lineCopy: {
		opacity: 0.30000001192092896,
		position: 'absolute',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		width: 39.9,
		height: 4,
		left: 79.88,
		top: 1.67,
	},
	login_group2_buttonroundedlargeiconLeft71f4bc78: {
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
		width: 303,
		height: 49,
		left: 0,
		top: 33,
	},
	login_group2_buttonroundedlargeiconLeft71f4bc78_bg172d10a8: {
		opacity: 1,
		position: 'absolute',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		borderTopWidth: 1,
		borderTopColor: 'rgba(0, 0, 0, 0)',
		borderRightWidth: 1,
		borderRightColor: 'rgba(0, 0, 0, 0)',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0, 0, 0, 0)',
		borderLeftWidth: 1,
		borderLeftColor: 'rgba(0, 0, 0, 0)',
		borderTopLeftRadius: 100,
		borderTopRightRadius: 100,
		borderBottomLeftRadius: 100,
		borderBottomRightRadius: 100,
		width: 302,
		height: 48,
		left: -0.5,
		top: -0.5,
	},
	login_group2_buttonroundedlargeiconLeft71f4bc78_buttonroundedlargeiconLeft: {
		opacity: 1,
		position: 'absolute',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		width: 303,
		height: 49,
		left: 0,
		top: 0,
	},
	login_btn: {
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
		width: 335,
		height: 60,
		left: 20,
		top: 483,
	},
	login_btn_rectangle12: {
		opacity: 1,
		justifyContent: 'center',
		position: 'absolute',
		backgroundColor: 'rgba(250, 152, 58, 1)',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		width: 335,
		height: 60,
		left: 0,
		top: 0,
	},
	login_btn_signIn: {
		opacity: 1,
		position: 'absolute',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		color: 'rgba(255, 255, 255, 1)',
		fontSize: 15,
		fontWeight: '700',
		fontStyle: 'normal',
		// fontFamily: 'Catamaran',
		textAlign: 'center',
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		width: 60,
		height: 25,
		left: 132,
		top: 18,
	},
	login_giglendLogo1Project: {
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
});
