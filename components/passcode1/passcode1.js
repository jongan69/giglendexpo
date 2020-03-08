import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Passcode1 extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
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
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
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
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="019d2620-60c1-4901-bacb-5cd411cd2919" style={styles.passcode1}>
        <View data-layer="2b761400-a979-4dae-a789-2a2912d77a36" style={styles.passcode1_statusbar}>
            <View data-layer="ac043e41-1654-4e05-bae8-75947b46d1b0" style={styles.passcode1_statusbar_group1}>
                <View data-layer="b0c75a3d-1015-4f7b-b960-6fde73b0c737" style={styles.passcode1_statusbar_group1_rectangle116632a58}></View>
                <Svg data-layer="7fa361a9-f5e6-472f-9e83-b6dfa7c1b360" style={styles.passcode1_statusbar_group1_path1} preserveAspectRatio="none" viewBox="23 4 1.328125 4" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 23 4 L 23 8 C 23.80473136901855 7.661223411560059 24.32803726196289 6.873133182525635 24.32803726196289 6 C 24.32803726196289 5.126866817474365 23.80473136901855 4.338776588439941 23 4"  /></Svg>
                <View data-layer="3b1d2bf1-4f67-4d17-a8a2-a17b766b21eb" style={styles.passcode1_statusbar_group1_rectangle2}></View>
            </View>
            <Svg data-layer="96929501-1d65-476c-b7e0-ceb16fb815e1" style={styles.passcode1_statusbar_path2} preserveAspectRatio="none" viewBox="272.6666564941406 4.330672264099121 37.29931640625 11.002685546875" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 302.330322265625 6.607999801635742 C 304.5462341308594 6.608097076416016 306.6773986816406 7.459534645080566 308.2833251953125 8.986332893371582 C 308.4042663574219 9.104207992553711 308.5975646972656 9.102721214294434 308.7166748046875 8.982999801635742 L 309.8726806640625 7.816333293914795 C 309.9329833984375 7.755610942840576 309.9666137695312 7.673359394073486 309.9660949707031 7.58777904510498 C 309.9656066894531 7.502198696136475 309.9309997558594 7.420345783233643 309.8699951171875 7.360333442687988 C 305.6549072265625 3.320785760879517 299.0050964355469 3.320785760879517 294.7900085449219 7.360333442687988 C 294.7289428710938 7.42030143737793 294.6943054199219 7.502129554748535 294.6937255859375 7.587709903717041 C 294.6931762695312 7.673290252685547 294.7267456054688 7.755567073822021 294.7869873046875 7.816333293914795 L 295.9433288574219 8.982999801635742 C 296.0623474121094 9.102901458740234 296.2557983398438 9.104390144348145 296.3766784667969 8.986332893371582 C 297.9828186035156 7.459434509277344 300.1142272949219 6.607994556427002 302.330322265625 6.607999801635742 Z M 302.330322265625 10.40366649627686 C 303.5478210449219 10.40359210968018 304.7218627929688 10.85612487792969 305.6243286132812 11.67333316802979 C 305.7463989257812 11.78931427001953 305.9386901855469 11.78679943084717 306.0576782226562 11.6676664352417 L 307.2123413085938 10.50100040435791 C 307.2731323242188 10.43980503082275 307.306884765625 10.35678863525391 307.3059997558594 10.27052402496338 C 307.3051147460938 10.18425941467285 307.2697143554688 10.1019458770752 307.2076721191406 10.04199981689453 C 304.45947265625 7.485617637634277 300.2035217285156 7.485617637634277 297.455322265625 10.04199981689453 C 297.3932495117188 10.10194492340088 297.3578491210938 10.18429946899414 297.3570251464844 10.27059268951416 C 297.356201171875 10.35688495635986 297.3900756835938 10.43989372253418 297.4509887695312 10.50100040435791 L 298.6053466796875 11.6676664352417 C 298.7243347167969 11.78679943084717 298.9165954589844 11.78931427001953 299.0386657714844 11.67333316802979 C 299.9405517578125 10.85666465759277 301.1136474609375 10.40417098999023 302.330322265625 10.40366649627686 Z M 304.5493469238281 13.1879997253418 C 304.611083984375 13.12739372253418 304.6450805664062 13.0439920425415 304.6433410644531 12.95748519897461 C 304.6415710449219 12.87097835540771 304.6041870117188 12.78903388977051 304.5400085449219 12.73099994659424 C 303.2644348144531 11.65211582183838 301.396240234375 11.65211582183838 300.1206665039062 12.73099994659424 C 300.0564575195312 12.788987159729 300.0190124511719 12.87090587615967 300.0171813964844 12.95741271972656 C 300.0153503417969 13.04392051696777 300.0492858886719 13.12734889984131 300.1109924316406 13.1879997253418 L 302.1086730957031 15.20366668701172 C 302.1672058105469 15.26290607452393 302.2470397949219 15.29624462127686 302.330322265625 15.29624462127686 C 302.4136352539062 15.29624462127686 302.4934387207031 15.26290607452393 302.552001953125 15.20366668701172 L 304.5493469238281 13.1879997253418 Z M 273.6666564941406 11.33333301544189 L 274.6666564941406 11.33333301544189 C 275.2189636230469 11.33333301544189 275.6666564941406 11.78104877471924 275.6666564941406 12.33333301544189 L 275.6666564941406 14.33333301544189 C 275.6666564941406 14.88561820983887 275.2189636230469 15.33333301544189 274.6666564941406 15.33333301544189 L 273.6666564941406 15.33333301544189 C 273.1143798828125 15.33333301544189 272.6666564941406 14.88561820983887 272.6666564941406 14.33333301544189 L 272.6666564941406 12.33333301544189 C 272.6666564941406 11.78104877471924 273.1143798828125 11.33333301544189 273.6666564941406 11.33333301544189 Z M 278.3333435058594 9.333333015441895 L 279.3333435058594 9.333333015441895 C 279.8856201171875 9.333333015441895 280.3333435058594 9.781048774719238 280.3333435058594 10.33333301544189 L 280.3333435058594 14.33333301544189 C 280.3333435058594 14.88561820983887 279.8856201171875 15.33333301544189 279.3333435058594 15.33333301544189 L 278.3333435058594 15.33333301544189 C 277.7810363769531 15.33333301544189 277.3333435058594 14.88561820983887 277.3333435058594 14.33333301544189 L 277.3333435058594 10.33333301544189 C 277.3333435058594 9.781048774719238 277.7810363769531 9.333333015441895 278.3333435058594 9.333333015441895 Z M 283 7 L 284 7 C 284.5522766113281 7 285 7.447715282440186 285 8 L 285 14.33333301544189 C 285 14.88561820983887 284.5522766113281 15.33333301544189 284 15.33333301544189 L 283 15.33333301544189 C 282.4477233886719 15.33333301544189 282 14.88561820983887 282 14.33333301544189 L 282 8 C 282 7.447715282440186 282.4477233886719 7 283 7 Z M 287.6666564941406 4.666666507720947 L 288.6666564941406 4.666666507720947 C 289.2189636230469 4.666666507720947 289.6666564941406 5.114381790161133 289.6666564941406 5.666666507720947 L 289.6666564941406 14.33333301544189 C 289.6666564941406 14.88561820983887 289.2189636230469 15.33333301544189 288.6666564941406 15.33333301544189 L 287.6666564941406 15.33333301544189 C 287.1143798828125 15.33333301544189 286.6666564941406 14.88561820983887 286.6666564941406 14.33333301544189 L 286.6666564941406 5.666666507720947 C 286.6666564941406 5.114381790161133 287.1143798828125 4.666666507720947 287.6666564941406 4.666666507720947 Z"  /></Svg>
            <Text data-layer="e1bcdf4a-fd59-4fc2-95bb-6c835cee9fcd" style={styles.passcode1_statusbar_x941}>9:41</Text>
        </View>
        <View data-layer="4ef62089-736b-4d92-9766-856c10bea7ec" style={styles.passcode1_component315}>
            <View data-layer="58bac0de-4545-4491-9f09-a4abf3297825" style={styles.passcode1_component315_rectangle1}></View>
            <Svg data-layer="d7ee14b0-b421-4248-a777-b83eabc1cc3e" style={styles.passcode1_component315_path19} preserveAspectRatio="none" viewBox="465.33758544921875 58.57268524169922 14.726318359375 26.4527587890625" fill="transparent"><SvgPath d="M 478.56396484375 60.07268524169922 L 466.8375854492188 71.79905700683594 L 478.56396484375 83.52542877197266"  /></Svg>
            <Text data-layer="02604844-0d63-4cc1-a222-64445273387f" style={styles.passcode1_component315_passcode}>Passcode</Text>
        </View>
        <ReactImage data-layer="e5bcf497-9b14-4a60-bf3c-c8aa528ee9c9" source={require('./assets/giglendLogo1Project.png')} style={styles.passcode1_giglendLogo1Project} />
        <Text data-layer="5540db43-e7ea-49c2-b026-a1113abd1a3f" style={styles.passcode1_pleaseCreateAPasscode}>Please Create a Passcode</Text>
        <View data-layer="37dfd341-f73c-4788-ab59-88040f15ad0f" style={styles.passcode1_component76}>
            <Svg data-layer="27ddb1b3-e73a-41b9-ae54-f014e1ac6fd8" style={styles.passcode1_component76_ellipse1} preserveAspectRatio="none" viewBox="-1.5 -1.5 20 20" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
            <Svg data-layer="e53b5f36-a6df-4799-8fb1-2de70e53e549" style={styles.passcode1_component76_ellipse3} preserveAspectRatio="none" viewBox="-1.5 -1.5 20 20" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
            <Svg data-layer="b141f82b-bd66-4ca9-aa85-6460ae20c39f" style={styles.passcode1_component76_ellipse4} preserveAspectRatio="none" viewBox="-1.5 -1.5 20 20" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
            <Svg data-layer="999e88c2-8ade-4c6e-8b80-29079eef225b" style={styles.passcode1_component76_ellipse5} preserveAspectRatio="none" viewBox="-1.5 -1.5 20 20" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
            <Svg data-layer="f754b9d4-eb35-441c-a474-60c7d09f7a1e" style={styles.passcode1_component76_ellipse6} preserveAspectRatio="none" viewBox="-1.5 -1.5 20 20" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
            <Svg data-layer="cd1d6eb3-de78-493b-8120-87ae4f7ad34c" style={styles.passcode1_component76_ellipse7} preserveAspectRatio="none" viewBox="-1.5 -1.5 20 20" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
        </View>
        <ReactImage data-layer="efb76d44-b767-40aa-8e08-d72eba2f9bb7" source={require('./assets/icons8Fingerprint64.png')} style={styles.passcode1_icons8Fingerprint64} />
        <Text data-layer="89800973-9936-4162-b139-0072c795f039" style={styles.passcode1_activateTouchId}>Activate Touch ID</Text>
        <Text data-layer="1ec6ac6f-2b74-4f8d-8281-e83e344639da" style={styles.passcode1_signOut}>Sign Out</Text>
        <ReactImage data-layer="aa91b64a-403e-4b0d-b7c7-a958fbfda844" source={require('./assets/icons8ExpandArrow50.png')} style={styles.passcode1_icons8ExpandArrow50} />
    </ScrollView>
    );
  }
}

Passcode1.propTypes = {

}

Passcode1.defaultProps = {

}


const styles = StyleSheet.create({
  "passcode1": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(0, 0, 0, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 375,
    "height": 812,
    "left": 0,
    "top": 0
  },
  "passcode1_statusbar": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 327.03,
    "height": 14.17,
    "left": 24,
    "top": 14.83
  },
  "passcode1_statusbar_group1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 23.83,
    "height": 10.33,
    "left": 303.2,
    "top": 0.5
  },
  "passcode1_statusbar_group1_rectangle116632a58": {
    "opacity": 0.3499999940395355,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(255, 255, 255, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(255, 255, 255, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(255, 255, 255, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 2.67,
    "borderTopRightRadius": 2.67,
    "borderBottomLeftRadius": 2.67,
    "borderBottomRightRadius": 2.67,
    "width": 20,
    "height": 9.33,
    "left": -0.5,
    "top": -0.5
  },
  "passcode1_statusbar_group1_path1": {
    "opacity": 0.4000000059604645,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1.33,
    "height": 4,
    "left": 22.5,
    "top": 3.17
  },
  "passcode1_statusbar_group1_rectangle2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 1.33,
    "borderTopRightRadius": 1.33,
    "borderBottomLeftRadius": 1.33,
    "borderBottomRightRadius": 1.33,
    "width": 18,
    "height": 7.33,
    "left": 1.5,
    "top": 1.5
  },
  "passcode1_statusbar_path2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 37.3,
    "height": 11,
    "left": 260.36,
    "top": 0
  },
  "passcode1_statusbar_x941": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "SF Pro Text",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 26,
    "height": 14,
    "left": 0,
    "top": 0.17
  },
  "passcode1_component315": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 375,
    "height": 53,
    "left": 0,
    "top": 60
  },
  "passcode1_component315_rectangle1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.4588235294117647,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 375,
    "height": 53,
    "left": 0,
    "top": 0
  },
  "passcode1_component315_path19": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 15.73,
    "height": 27.45,
    "left": 13.84,
    "top": 13.07
  },
  "passcode1_component315_passcode": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 21,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Catamaran",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 85,
    "height": 34,
    "left": 145,
    "top": 10
  },
  "passcode1_giglendLogo1Project": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 200,
    "height": 120,
    "left": 88,
    "top": 157
  },
  "passcode1_pleaseCreateAPasscode": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Catamaran",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 210,
    "height": 33,
    "left": 83,
    "top": 308
  },
  "passcode1_component76": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 179,
    "height": 17,
    "left": 98,
    "top": 364
  },
  "passcode1_component76_ellipse1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 17,
    "height": 17,
    "left": 0,
    "top": 0
  },
  "passcode1_component76_ellipse3": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 17,
    "height": 17,
    "left": 32,
    "top": 0
  },
  "passcode1_component76_ellipse4": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 17,
    "height": 17,
    "left": 65,
    "top": 0
  },
  "passcode1_component76_ellipse5": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 17,
    "height": 17,
    "left": 97,
    "top": 0
  },
  "passcode1_component76_ellipse6": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 17,
    "height": 17,
    "left": 130,
    "top": 0
  },
  "passcode1_component76_ellipse7": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 17,
    "height": 17,
    "left": 162,
    "top": 0
  },
  "passcode1_icons8Fingerprint64": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 83,
    "height": 83,
    "left": 146,
    "top": 536
  },
  "passcode1_activateTouchId": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Catamaran",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 148,
    "height": 33,
    "left": 114,
    "top": 630
  },
  "passcode1_signOut": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Catamaran",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 54,
    "height": 25,
    "left": 155,
    "top": 754
  },
  "passcode1_icons8ExpandArrow50": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 12,
    "height": 12,
    "left": 209,
    "top": 761
  }
});