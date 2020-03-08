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
      <ScrollView
        // data-layer="36395261-0f8e-43b2-8285-841a468472f4"
        style={styles.login}
      >
        <View
          // data-layer="86421109-1ec9-43d9-8ed4-b06cbdc3ea02"
          style={styles.login_statusbar}
        >
          <View
            // data-layer="995f9fcf-8145-4220-a7fc-b2782825d627"
            style={styles.login_statusbar_group1}
          >
            <View
              // data-layer="f5a9fe88-6472-4b8d-aa61-757d3fcf57fd"
              style={styles.login_statusbar_group1_rectangle1}
            />
            <Svg
              // data-layer="f8cf57de-0c68-4483-b13e-d62c9befa4a2"
              style={styles.login_statusbar_group1_path1}
              preserveAspectRatio="none"
              viewBox="23 4 1.328125 4"
              fill="rgba(255, 255, 255, 1)"
            >
              <SvgPath d="M 23 4 L 23 8 C 23.80473136901855 7.661223411560059 24.32803726196289 6.873133182525635 24.32803726196289 6 C 24.32803726196289 5.126866817474365 23.80473136901855 4.338776588439941 23 4" />
            </Svg>
            <View
              // data-layer="da08a38d-ca6b-4be5-adc6-e1d93217bf8d"
              style={styles.login_statusbar_group1_rectangle2}
            />
          </View>
          <Svg
            // data-layer="982cacb1-ff67-4619-9c23-90e7b9dc6435"
            style={styles.login_statusbar_path2}
            preserveAspectRatio="none"
            viewBox="272.6666564941406 4.330672264099121 37.2998046875 11.002685546875"
            fill="rgba(255, 255, 255, 1)"
          >
            <SvgPath d="M 302.330322265625 6.607999801635742 C 304.5462341308594 6.608097076416016 306.6773986816406 7.459534645080566 308.2833251953125 8.986332893371582 C 308.4042663574219 9.104207992553711 308.5975646972656 9.102721214294434 308.7166748046875 8.982999801635742 L 309.8726806640625 7.816333293914795 C 309.9329833984375 7.755610942840576 309.9666137695312 7.673359394073486 309.9660949707031 7.58777904510498 C 309.9656066894531 7.502198696136475 309.9309997558594 7.420345783233643 309.8699951171875 7.360333442687988 C 305.6549072265625 3.320785760879517 299.0050964355469 3.320785760879517 294.7900085449219 7.360333442687988 C 294.7289428710938 7.42030143737793 294.6943054199219 7.502129554748535 294.6937255859375 7.587709903717041 C 294.6931762695312 7.673290252685547 294.7267456054688 7.755567073822021 294.7869873046875 7.816333293914795 L 295.9433288574219 8.982999801635742 C 296.0623474121094 9.102901458740234 296.2557983398438 9.104390144348145 296.3766784667969 8.986332893371582 C 297.9828186035156 7.459434509277344 300.1142272949219 6.607994556427002 302.330322265625 6.607999801635742 Z M 302.330322265625 10.40366649627686 C 303.5478210449219 10.40359210968018 304.7218627929688 10.85612487792969 305.6243286132812 11.67333316802979 C 305.7463989257812 11.78931427001953 305.9386901855469 11.78679943084717 306.0576782226562 11.6676664352417 L 307.2123413085938 10.50100040435791 C 307.2731323242188 10.43980503082275 307.306884765625 10.35678863525391 307.3059997558594 10.27052402496338 C 307.3051147460938 10.18425941467285 307.2697143554688 10.1019458770752 307.2076721191406 10.04199981689453 C 304.45947265625 7.485617637634277 300.2035217285156 7.485617637634277 297.455322265625 10.04199981689453 C 297.3932495117188 10.10194492340088 297.3578491210938 10.18429946899414 297.3570251464844 10.27059268951416 C 297.356201171875 10.35688495635986 297.3900756835938 10.43989372253418 297.4509887695312 10.50100040435791 L 298.6053466796875 11.6676664352417 C 298.7243347167969 11.78679943084717 298.9165954589844 11.78931427001953 299.0386657714844 11.67333316802979 C 299.9405517578125 10.85666465759277 301.1136474609375 10.40417098999023 302.330322265625 10.40366649627686 Z M 304.5493469238281 13.1879997253418 C 304.611083984375 13.12739372253418 304.6450805664062 13.0439920425415 304.6433410644531 12.95748519897461 C 304.6415710449219 12.87097835540771 304.6041870117188 12.78903388977051 304.5400085449219 12.73099994659424 C 303.2644348144531 11.65211582183838 301.396240234375 11.65211582183838 300.1206665039062 12.73099994659424 C 300.0564575195312 12.788987159729 300.0190124511719 12.87090587615967 300.0171813964844 12.95741271972656 C 300.0153503417969 13.04392051696777 300.0492858886719 13.12734889984131 300.1109924316406 13.1879997253418 L 302.1086730957031 15.20366668701172 C 302.1672058105469 15.26290607452393 302.2470397949219 15.29624462127686 302.330322265625 15.29624462127686 C 302.4136352539062 15.29624462127686 302.4934387207031 15.26290607452393 302.552001953125 15.20366668701172 L 304.5493469238281 13.1879997253418 Z M 273.6666564941406 11.33333301544189 L 274.6666564941406 11.33333301544189 C 275.2189636230469 11.33333301544189 275.6666564941406 11.78104877471924 275.6666564941406 12.33333301544189 L 275.6666564941406 14.33333301544189 C 275.6666564941406 14.88561820983887 275.2189636230469 15.33333301544189 274.6666564941406 15.33333301544189 L 273.6666564941406 15.33333301544189 C 273.1143798828125 15.33333301544189 272.6666564941406 14.88561820983887 272.6666564941406 14.33333301544189 L 272.6666564941406 12.33333301544189 C 272.6666564941406 11.78104877471924 273.1143798828125 11.33333301544189 273.6666564941406 11.33333301544189 Z M 278.3333435058594 9.333333015441895 L 279.3333435058594 9.333333015441895 C 279.8856201171875 9.333333015441895 280.3333435058594 9.781048774719238 280.3333435058594 10.33333301544189 L 280.3333435058594 14.33333301544189 C 280.3333435058594 14.88561820983887 279.8856201171875 15.33333301544189 279.3333435058594 15.33333301544189 L 278.3333435058594 15.33333301544189 C 277.7810363769531 15.33333301544189 277.3333435058594 14.88561820983887 277.3333435058594 14.33333301544189 L 277.3333435058594 10.33333301544189 C 277.3333435058594 9.781048774719238 277.7810363769531 9.333333015441895 278.3333435058594 9.333333015441895 Z M 283 7 L 284 7 C 284.5522766113281 7 285 7.447715282440186 285 8 L 285 14.33333301544189 C 285 14.88561820983887 284.5522766113281 15.33333301544189 284 15.33333301544189 L 283 15.33333301544189 C 282.4477233886719 15.33333301544189 282 14.88561820983887 282 14.33333301544189 L 282 8 C 282 7.447715282440186 282.4477233886719 7 283 7 Z M 287.6666564941406 4.666666507720947 L 288.6666564941406 4.666666507720947 C 289.2189636230469 4.666666507720947 289.6666564941406 5.114381790161133 289.6666564941406 5.666666507720947 L 289.6666564941406 14.33333301544189 C 289.6666564941406 14.88561820983887 289.2189636230469 15.33333301544189 288.6666564941406 15.33333301544189 L 287.6666564941406 15.33333301544189 C 287.1143798828125 15.33333301544189 286.6666564941406 14.88561820983887 286.6666564941406 14.33333301544189 L 286.6666564941406 5.666666507720947 C 286.6666564941406 5.114381790161133 287.1143798828125 4.666666507720947 287.6666564941406 4.666666507720947 Z" />
          </Svg>
          <Text
            // data-layer="c5aa87d1-fb91-4155-9aaf-7bd4599cd074"
            style={styles.login_statusbar_x941}
          >
            9:41
          </Text>
        </View>
        <View
          // data-layer="43691090-d128-4bdc-9ff6-cd52a1d72357"
          style={styles.login_form}
        >
          <View
            // data-layer="2201189c-1972-445e-b368-7e4c25556074"
            style={styles.login_form_inputfd4a9a46}
          >
            <View
              // data-layer="759c66cc-df64-40b8-b7d0-bb039bd93fb3"
              style={styles.login_form_inputfd4a9a46_rectangle43acb15f7}
            />
            <Text
              // data-layer="45cbeee2-2b34-40c5-bdf8-e7d5b82a08d3"
              style={styles.login_form_inputfd4a9a46_example}
            >
              example@email.com
            </Text>
            <Svg
              // data-layer="97b1a0e6-3e1a-4f23-9ec3-713caaa6c986"
              style={styles.login_form_inputfd4a9a46_user}
              preserveAspectRatio="none"
              viewBox="0 5 19.9736328125 19.9736328125"
              fill="rgba(253, 153, 42, 1)"
            >
              <SvgPath d="M 13.48214054107666 17.31700325012207 C 15.39626502990723 16.1518669128418 16.64459228515625 14.07132339477539 16.64459228515625 11.65785980224609 C 16.64463043212891 7.996031284332275 13.64856052398682 5 9.986770629882812 5 C 6.324980735778809 5 3.32891058921814 7.996031284332275 3.32891058921814 11.65785980224609 C 3.32891058921814 14.07132339477539 4.577237129211426 16.15190696716309 6.49136209487915 17.31700325012207 C 3.162451267242432 18.56536865234375 0.6657587289810181 21.47817039489746 0 24.97354125976562 L 1.664474725723267 24.97354125976562 C 2.496692657470703 21.14529228210449 5.908871650695801 18.31568145751953 9.986770629882812 18.31568145751953 C 14.06466960906982 18.31568145751953 17.47684860229492 21.1452522277832 18.30906677246094 24.97354125976562 L 19.97354125976562 24.97354125976562 C 19.30778121948242 21.39494132995605 16.81108856201172 18.48213958740234 13.48214054107666 17.31700325012207 Z M 4.993385314941406 11.65785980224609 C 4.993385314941406 8.911517143249512 7.24042797088623 6.664474487304688 9.986770629882812 6.664474487304688 C 12.73311233520508 6.664474487304688 14.98015594482422 8.911517143249512 14.98015594482422 11.65785980224609 C 14.98015594482422 14.40420246124268 12.73311233520508 16.6512451171875 9.986770629882812 16.6512451171875 C 7.24042797088623 16.6512451171875 4.993385314941406 14.40420246124268 4.993385314941406 11.65785980224609 Z" />
            </Svg>
          </View>
          <View
            // data-layer="5f276d2b-99c5-4afc-a768-112dd95eca23"
            style={styles.login_form_input}
          >
            <View
              // data-layer="de2865ae-9bc0-4c3d-a394-f95eccc6ce5c"
              style={styles.login_form_input_rectangle4}
            />
            <View
              // data-layer="96d97529-8c9e-4d1b-86f7-b3792d3ba5ff"
              style={styles.login_form_input_rectangle5}
            />
            <View
              // data-layer="eed07361-c096-4e7a-82d8-f1bb3db31a29"
              style={styles.login_form_input_rectangle8}
            />
            <View
              // data-layer="c554f0aa-0ed3-4e36-a412-41b6528040f9"
              style={styles.login_form_input_rectangle10}
            />
            <View
              // data-layer="cb755f36-635e-497c-afed-49c087e744be"
              style={styles.login_form_input_rectangle6}
            />
            <View
              // data-layer="c7824715-aac8-4a9c-a47e-a7dce89e67e8"
              style={styles.login_form_input_rectangle7}
            />
            <View
              // data-layer="67621a22-08d0-4285-b6a3-7806b23755c4"
              style={styles.login_form_input_rectangle9}
            />
            <Svg
              // data-layer="e6cf96b9-3269-4355-9c16-148f4d254748"
              style={styles.login_form_input_lock}
              preserveAspectRatio="none"
              viewBox="0.016326529905200005 2.842170943040401e-14 15.1591796875 20"
              fill="rgba(253, 153, 42, 1)"
            >
              <SvgPath d="M 13.86122417449951 7.604081630706787 L 13.12653064727783 7.604081630706787 L 13.12653064727783 5.538775444030762 C 13.12653064727783 2.485714197158813 10.64489841461182 2.842170943040401e-14 7.591836929321289 2.842170943040401e-14 C 4.538775444030762 2.842170943040401e-14 2.057142972946167 2.485714197158813 2.057142972946167 5.534693717956543 L 2.057142972946167 7.599999904632568 L 1.326530575752258 7.599999904632568 C 0.6040816307067871 7.599999904632568 0.0163265299052 8.18775463104248 0.0163265299052 8.91020393371582 L 0.0163265299052 18.68979644775391 C 0.0163265299052 19.41224479675293 0.6040816307067871 20 1.326530575752258 20 L 13.86530590057373 20 C 14.58775520324707 20 15.17551040649414 19.41224479675293 15.17551040649414 18.68979644775391 L 15.17551040649414 8.91020393371582 C 15.17142868041992 8.191836357116699 14.58367347717285 7.604081630706787 13.86122417449951 7.604081630706787 Z M 3.722449064254761 5.534693717956543 C 3.722449064254761 3.400000095367432 5.45714282989502 1.665306091308594 7.591836929321289 1.665306091308594 C 9.726531028747559 1.665306091308594 11.46122455596924 3.400000095367432 11.46122455596924 5.534693717956543 L 11.46122455596924 7.59591817855835 L 3.722449064254761 7.59591817855835 L 3.722449064254761 5.534693717956543 Z M 13.50204086303711 18.33469390869141 L 1.6816326379776 18.33469390869141 L 1.6816326379776 9.269388198852539 L 13.50612258911133 9.269388198852539 L 13.50612258911133 18.33469390869141 L 13.50204086303711 18.33469390869141 Z" />
            </Svg>
          </View>
          <Text
            // data-layer="75d4bb5f-420e-4aa2-ba8d-ea1ac6351afd"
            style={styles.login_form_signIne5d2c2cf}
          >
            Sign in
          </Text>
        </View>

        <View
          // data-layer="1b210825-63d9-4d3b-828c-ee71c49a1a35"
          style={styles.login_footer}
        >
        
          <Text
            // data-layer="cff3386f-e59b-480a-8a3d-d1bfc309aa36"
            style={styles.login_footer_dontHaveAnAccountSignUp}
          >
            Don’t have an account? - Sign up
          </Text>
           
        </View>

        <View
          // data-layer="1427c62f-f98c-4792-8ddc-409139640657"
          style={styles.login_group2}
        >
          <View
            // data-layer="1a6ac767-4031-49b4-95f1-d2f31be2e9ee"
            style={styles.login_group2_ore5ec8827}
          >
            <Text
              // data-layer="42ce6706-6bd5-4c26-af07-3c4836f2b684"
              style={styles.login_group2_ore5ec8827_or}
            >
              OR
            </Text>
            <Svg
              // data-layer="7824853e-bb2b-456a-84ff-2ce7810266f8"
              style={styles.login_group2_ore5ec8827_line}
              preserveAspectRatio="none"
              viewBox="-0.5268408060073853 -0.5 38.89501953125 3"
              fill="transparent"
            >
              <SvgPath d="M 36.86811447143555 1 L 0.9731591939926147 1" />
            </Svg>
            <Svg
              // data-layer="c3d630ac-d2f6-415d-9123-6ed8d1456388"
              style={styles.login_group2_ore5ec8827_lineCopy}
              preserveAspectRatio="none"
              viewBox="-0.5268408060073853 -0.5 38.89501953125 3"
              fill="transparent"
            >
              <SvgPath d="M 36.86811447143555 1 L 0.9731591939926147 1" />
            </Svg>
          </View>
          <View
            // data-layer="1cfd9ba3-1ab3-4c83-abdd-ed253e9cbe5d"
            style={styles.login_group2_buttonroundedlargeiconLeft71f4bc78}
          >
            <View
              // data-layer="6f152237-56ea-454d-9504-f0d813797ce5"
              style={
                styles.login_group2_buttonroundedlargeiconLeft71f4bc78_bg172d10a8
              }
            />
            <ReactImage
              // data-layer="aafc1e0f-95bd-411e-a58b-388a3bbb621b"
              source={require('./assets/buttonroundedlargeiconLeft.png')}
              style={
                styles.login_group2_buttonroundedlargeiconLeft71f4bc78_buttonroundedlargeiconLeft
              }
            />
          </View>
        </View>
        <View
          // data-layer="01d1b1c1-2de8-4dca-b0da-87f329c57203"
          style={styles.login_btn}
        >
          <View
            // data-layer="db46958e-fddc-4c79-9b6b-cf6d8bb708ad"
            style={styles.login_btn_rectangle12}
          />
          <Text
            // data-layer="af9f9b8d-bce8-418b-9587-f0e3f0a34066"
            style={styles.login_btn_signIn}
          >
            SIGN IN
          </Text>
        </View>
        <ReactImage
          // data-layer="7336331d-e82a-4aec-991d-6fba8ae8254d"
          source={require('./assets/giglendLogo1Project.png')}
          style={styles.login_giglendLogo1Project}
        />
      </ScrollView>
    );
  }
}

Login.propTypes = {};

Login.defaultProps = {};

const styles = StyleSheet.create({
  login: {
    opacity: 1,
    position: "relative",
    backgroundColor: "rgba(0, 0, 0, 1)",
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
    top: 0
  },
  login_statusbar: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
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
    top: 14.83
  },
  login_statusbar_group1: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
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
    top: 0.5
  },
  login_statusbar_group1_rectangle1: {
    opacity: 0.3499999940395355,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 1)",
    borderRightWidth: 1,
    borderRightColor: "rgba(255, 255, 255, 1)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 1)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 2.67,
    borderTopRightRadius: 2.67,
    borderBottomLeftRadius: 2.67,
    borderBottomRightRadius: 2.67,
    width: 20,
    height: 9.33,
    left: -0.5,
    top: -0.5
  },
  login_statusbar_group1_path1: {
    opacity: 0.4000000059604645,
    position: "absolute",
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
    top: 3.17
  },
  login_statusbar_group1_rectangle2: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
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
    top: 1.5
  },
  login_statusbar_path2: {
    opacity: 1,
    position: "absolute",
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
    top: 0
  },
  login_statusbar_x941: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    fontStyle: "normal",
    // fontFamily: 'SF-Pro-Text',
    textAlign: "left",
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
    top: 0.17
  },
  login_form: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 335,
    height: 207,
    left: 24,
    top: 226
  },
  login_form_inputfd4a9a46: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
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
    top: 68
  },
  login_form_inputfd4a9a46_rectangle43acb15f7: {
    opacity: 0.20000000298023224,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(112, 112, 112, 1)",
    borderRightWidth: 1,
    borderRightColor: "rgba(112, 112, 112, 1)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(112, 112, 112, 1)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(112, 112, 112, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 335,
    height: 60,
    left: 0,
    top: 0
  },
  login_form_inputfd4a9a46_example: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    fontStyle: "normal",
    // fontFamily: 'Catamaran',
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 153,
    height: 30,
    left: 59,
    top: 16
  },
  login_form_inputfd4a9a46_user: {
    opacity: 1,
    position: "absolute",
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
    top: 21
  },
  login_form_input: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
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
    top: 147
  },
  login_form_input_rectangle4: {
    opacity: 0.20000000298023224,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
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
    top: 0
  },
  login_form_input_rectangle5: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
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
    top: 28
  },
  login_form_input_rectangle8: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
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
    top: 28
  },
  login_form_input_rectangle10: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
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
    top: 28
  },
  login_form_input_rectangle6: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
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
    top: 28
  },
  login_form_input_rectangle7: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
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
    top: 28
  },
  login_form_input_rectangle9: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
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
    top: 28
  },
  login_form_input_lock: {
    opacity: 1,
    position: "absolute",
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
    top: 22
  },
  login_form_signIne5d2c2cf: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "700",
    fontStyle: "normal",
    // fontFamily: 'Catamaran',
    textAlign: "left",
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
    top: 0
  },
  login_footer: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
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
    top: 744
  },
  login_footer_dontHaveAnAccountSignUp: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    fontStyle: "normal",
    // fontFamily: 'Catamaran',
    textAlign: "center",
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
    top: 0
  },
  login_group2: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 303,
    height: 82,
    left: 36,
    top: 569
  },
  login_group2_ore5ec8827: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 117.77,
    height: 9,
    left: 92.94,
    top: 0
  },
  login_group2_ore5ec8827_or: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    fontStyle: "normal",
    textAlign: "center",
    lineHeight: 7,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0.7000000000000001,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 12,
    height: 9,
    left: 51.06,
    top: 1
  },
  login_group2_ore5ec8827_line: {
    opacity: 0.30000001192092896,
    position: "absolute",
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
    left: -2,
    top: 1.67
  },
  login_group2_ore5ec8827_lineCopy: {
    opacity: 0.30000001192092896,
    position: "absolute",
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
    top: 1.67
  },
  login_group2_buttonroundedlargeiconLeft71f4bc78: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
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
    top: 33
  },
  login_group2_buttonroundedlargeiconLeft71f4bc78_bg172d10a8: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0)",
    borderRightWidth: 1,
    borderRightColor: "rgba(0, 0, 0, 0)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(0, 0, 0, 0)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    width: 302,
    height: 48,
    left: -0.5,
    top: -0.5
  },
  login_group2_buttonroundedlargeiconLeft71f4bc78_buttonroundedlargeiconLeft: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    width: 303,
    height: 49,
    left: 0,
    top: 0
  },
  login_group2_buttonroundedlargeiconLeft71f4bc78_buttonroundedlargeiconLeft_colorglassDark: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
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
    top: 0
  },
  login_group2_buttonroundedlargeiconLeft71f4bc78_buttonroundedlargeiconLeft_colorglassDark_bgf9e7e98d: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
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
    top: 0
  },
  login_group2_buttonroundedlargeiconLeft71f4bc78_buttonroundedlargeiconLeft_colorglassDark_bgf9e7e98d_bg3f6a35d5: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    width: 302,
    height: 48,
    left: -0.5,
    top: -0.5
  },
  login_group2_buttonroundedlargeiconLeft71f4bc78_buttonroundedlargeiconLeft_label: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 170.02,
    height: 15.63,
    left: 66.87,
    top: 16.43
  },
  login_group2_buttonroundedlargeiconLeft71f4bc78_buttonroundedlargeiconLeft_label_buttonLabel: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "center",
    lineHeight: 17,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 154,
    height: 19,
    left: 0,
    top: -0.85
  },
  login_group2_buttonroundedlargeiconLeft71f4bc78_buttonroundedlargeiconLeft_label_xIconsPlaceholder: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 7.28,
    height: 15.63,
    left: 162.74,
    top: 0
  },
  login_group2_buttonroundedlargeiconLeft71f4bc78_buttonroundedlargeiconLeft_label_xIconsPlaceholder_shape: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 9.28,
    height: 17.63,
    left: -1,
    top: -1
  },
  login_group2_buttonroundedlargeiconLeft71f4bc78_buttonroundedlargeiconLeft_bg: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0)",
    borderRightWidth: 1,
    borderRightColor: "rgba(0, 0, 0, 0)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(0, 0, 0, 0)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    width: 302,
    height: 48,
    left: -0.5,
    top: -0.5
  },
  login_btn: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
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
    top: 483
  },
  login_btn_rectangle12: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(250, 152, 58, 1)",
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
    top: 0
  },
  login_btn_signIn: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "700",
    fontStyle: "normal",
    // fontFamily: 'Catamaran',
    textAlign: "center",
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
    top: 18
  },
  login_giglendLogo1Project: {
    opacity: 1,
    position: "absolute",
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
    top: 106
  }
});
