import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Confirm extends Component {

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
    <ScrollView data-layer="052b7a24-e5ca-490c-bf92-380699e686f6" style={styles.confirm}>
        <View data-layer="21ed712c-4348-462b-89a2-f7ad46a1b307" style={styles.confirm_statusbar}>
            <View data-layer="7cc7f513-dea1-4abb-ac6e-d1c81812a054" style={styles.confirm_statusbar_group1}>
                <View data-layer="6e192c2e-ce47-4e81-8bcd-86d1304c9020" style={styles.confirm_statusbar_group1_rectangle15fcb0367}></View>
                <Svg data-layer="2f134ea6-cf93-4056-b135-bbed6fe2cb89" style={styles.confirm_statusbar_group1_path1} preserveAspectRatio="none" viewBox="23 4 1.328125 4" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 23 4 L 23 8 C 23.80473136901855 7.661223411560059 24.32803726196289 6.873133182525635 24.32803726196289 6 C 24.32803726196289 5.126866817474365 23.80473136901855 4.338776588439941 23 4"  /></Svg>
                <View data-layer="3b512d88-506a-4ed3-a7ff-4430fceb166b" style={styles.confirm_statusbar_group1_rectangle2}></View>
            </View>
            <Svg data-layer="9df07127-98ad-436a-bd5d-69b82532d7e6" style={styles.confirm_statusbar_path2} preserveAspectRatio="none" viewBox="272.6666564941406 4.330672264099121 37.29931640625 11.002685546875" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 302.330322265625 6.607999801635742 C 304.5462341308594 6.608097076416016 306.6773986816406 7.459534645080566 308.2833251953125 8.986332893371582 C 308.4042663574219 9.104207992553711 308.5975646972656 9.102721214294434 308.7166748046875 8.982999801635742 L 309.8726806640625 7.816333293914795 C 309.9329833984375 7.755610942840576 309.9666137695312 7.673359394073486 309.9660949707031 7.58777904510498 C 309.9656066894531 7.502198696136475 309.9309997558594 7.420345783233643 309.8699951171875 7.360333442687988 C 305.6549072265625 3.320785760879517 299.0050964355469 3.320785760879517 294.7900085449219 7.360333442687988 C 294.7289428710938 7.42030143737793 294.6943054199219 7.502129554748535 294.6937255859375 7.587709903717041 C 294.6931762695312 7.673290252685547 294.7267456054688 7.755567073822021 294.7869873046875 7.816333293914795 L 295.9433288574219 8.982999801635742 C 296.0623474121094 9.102901458740234 296.2557983398438 9.104390144348145 296.3766784667969 8.986332893371582 C 297.9828186035156 7.459434509277344 300.1142272949219 6.607994556427002 302.330322265625 6.607999801635742 Z M 302.330322265625 10.40366649627686 C 303.5478210449219 10.40359210968018 304.7218627929688 10.85612487792969 305.6243286132812 11.67333316802979 C 305.7463989257812 11.78931427001953 305.9386901855469 11.78679943084717 306.0576782226562 11.6676664352417 L 307.2123413085938 10.50100040435791 C 307.2731323242188 10.43980503082275 307.306884765625 10.35678863525391 307.3059997558594 10.27052402496338 C 307.3051147460938 10.18425941467285 307.2697143554688 10.1019458770752 307.2076721191406 10.04199981689453 C 304.45947265625 7.485617637634277 300.2035217285156 7.485617637634277 297.455322265625 10.04199981689453 C 297.3932495117188 10.10194492340088 297.3578491210938 10.18429946899414 297.3570251464844 10.27059268951416 C 297.356201171875 10.35688495635986 297.3900756835938 10.43989372253418 297.4509887695312 10.50100040435791 L 298.6053466796875 11.6676664352417 C 298.7243347167969 11.78679943084717 298.9165954589844 11.78931427001953 299.0386657714844 11.67333316802979 C 299.9405517578125 10.85666465759277 301.1136474609375 10.40417098999023 302.330322265625 10.40366649627686 Z M 304.5493469238281 13.1879997253418 C 304.611083984375 13.12739372253418 304.6450805664062 13.0439920425415 304.6433410644531 12.95748519897461 C 304.6415710449219 12.87097835540771 304.6041870117188 12.78903388977051 304.5400085449219 12.73099994659424 C 303.2644348144531 11.65211582183838 301.396240234375 11.65211582183838 300.1206665039062 12.73099994659424 C 300.0564575195312 12.788987159729 300.0190124511719 12.87090587615967 300.0171813964844 12.95741271972656 C 300.0153503417969 13.04392051696777 300.0492858886719 13.12734889984131 300.1109924316406 13.1879997253418 L 302.1086730957031 15.20366668701172 C 302.1672058105469 15.26290607452393 302.2470397949219 15.29624462127686 302.330322265625 15.29624462127686 C 302.4136352539062 15.29624462127686 302.4934387207031 15.26290607452393 302.552001953125 15.20366668701172 L 304.5493469238281 13.1879997253418 Z M 273.6666564941406 11.33333301544189 L 274.6666564941406 11.33333301544189 C 275.2189636230469 11.33333301544189 275.6666564941406 11.78104877471924 275.6666564941406 12.33333301544189 L 275.6666564941406 14.33333301544189 C 275.6666564941406 14.88561820983887 275.2189636230469 15.33333301544189 274.6666564941406 15.33333301544189 L 273.6666564941406 15.33333301544189 C 273.1143798828125 15.33333301544189 272.6666564941406 14.88561820983887 272.6666564941406 14.33333301544189 L 272.6666564941406 12.33333301544189 C 272.6666564941406 11.78104877471924 273.1143798828125 11.33333301544189 273.6666564941406 11.33333301544189 Z M 278.3333435058594 9.333333015441895 L 279.3333435058594 9.333333015441895 C 279.8856201171875 9.333333015441895 280.3333435058594 9.781048774719238 280.3333435058594 10.33333301544189 L 280.3333435058594 14.33333301544189 C 280.3333435058594 14.88561820983887 279.8856201171875 15.33333301544189 279.3333435058594 15.33333301544189 L 278.3333435058594 15.33333301544189 C 277.7810363769531 15.33333301544189 277.3333435058594 14.88561820983887 277.3333435058594 14.33333301544189 L 277.3333435058594 10.33333301544189 C 277.3333435058594 9.781048774719238 277.7810363769531 9.333333015441895 278.3333435058594 9.333333015441895 Z M 283 7 L 284 7 C 284.5522766113281 7 285 7.447715282440186 285 8 L 285 14.33333301544189 C 285 14.88561820983887 284.5522766113281 15.33333301544189 284 15.33333301544189 L 283 15.33333301544189 C 282.4477233886719 15.33333301544189 282 14.88561820983887 282 14.33333301544189 L 282 8 C 282 7.447715282440186 282.4477233886719 7 283 7 Z M 287.6666564941406 4.666666507720947 L 288.6666564941406 4.666666507720947 C 289.2189636230469 4.666666507720947 289.6666564941406 5.114381790161133 289.6666564941406 5.666666507720947 L 289.6666564941406 14.33333301544189 C 289.6666564941406 14.88561820983887 289.2189636230469 15.33333301544189 288.6666564941406 15.33333301544189 L 287.6666564941406 15.33333301544189 C 287.1143798828125 15.33333301544189 286.6666564941406 14.88561820983887 286.6666564941406 14.33333301544189 L 286.6666564941406 5.666666507720947 C 286.6666564941406 5.114381790161133 287.1143798828125 4.666666507720947 287.6666564941406 4.666666507720947 Z"  /></Svg>
            <Text data-layer="0aaab8b1-fd90-49dc-a3b3-b91eaeb3dd46" style={styles.confirm_statusbar_x941}>9:41</Text>
        </View>
        <View data-layer="0f06e055-336a-4720-a7c4-c250027ec4c9" style={styles.confirm_component318}>
            <View data-layer="51f05fe9-557a-4dd4-959b-88d68906751e" style={styles.confirm_component318_rectangle1}></View>
            <Svg data-layer="b373aeda-fd14-43a3-97a7-1423c7c9ddbf" style={styles.confirm_component318_path19} preserveAspectRatio="none" viewBox="465.33758544921875 58.57268524169922 14.726318359375 26.4527587890625" fill="transparent"><SvgPath d="M 478.56396484375 60.07268524169922 L 466.8375854492188 71.79905700683594 L 478.56396484375 83.52542877197266"  /></Svg>
            <Text data-layer="70515cc0-71c6-45f3-b4b3-53b787738596" style={styles.confirm_component318_confirmfead55cc}>Confirm</Text>
        </View>
        <Svg data-layer="5b421fdd-d942-47c3-b2e2-b670a571fc2b" style={styles.confirm_path21} preserveAspectRatio="none" viewBox="0 0 298 50" fill="rgba(253, 153, 42, 1)"><SvgPath d="M 25 0 L 273 0 C 286.80712890625 0 298 11.19288063049316 298 25 C 298 38.80712127685547 286.80712890625 50 273 50 L 25 50 C 11.19288063049316 50 0 38.80712127685547 0 25 C 0 11.19288063049316 11.19288063049316 0 25 0 Z"  /></Svg>
        <Text data-layer="584215e8-73b7-4883-891a-d840a2a0a067" style={styles.confirm_continue}>Continue</Text>
        <Text data-layer="590f32ad-170c-4458-9dc3-f816f0fb5269" style={styles.confirm_mobileNumber}>Mobile Number</Text>
        <Text data-layer="67e121d3-6ac7-4d10-afe6-dd9136f16115" style={styles.confirm_messagingAndDataRatesMayApply}>Messaging and Data rates may apply.</Text>
        <Svg data-layer="89a7d931-7365-4401-8cd9-43897b6a2d41" style={styles.confirm_line21} preserveAspectRatio="none" viewBox="0 -0.5 335 1" fill="transparent"><SvgPath d="M 0 0 L 335 0"  /></Svg>
        <View data-layer="56007401-1801-47ba-b7b4-2b1bc0dec805" style={styles.confirm_component133}>
            <View data-layer="eddd1f90-6a5a-4fad-8044-2e49bfbb2777" style={styles.confirm_component133_component72}>
                <Svg data-layer="5f17bb15-f312-4bc3-b579-22d727b824e3" style={styles.confirm_component133_component72_ellipse1} preserveAspectRatio="none" viewBox="-1.5 -1.5 20 20" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
                <Svg data-layer="751b0342-d120-4844-a4e3-a43d73a27578" style={styles.confirm_component133_component72_ellipse3} preserveAspectRatio="none" viewBox="-1.5 -1.5 20 20" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
                <Svg data-layer="2c4325f7-f37e-4f2d-82b5-71a40bd9eea2" style={styles.confirm_component133_component72_ellipse4} preserveAspectRatio="none" viewBox="-1.5 -1.5 20 20" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
                <Svg data-layer="02e2f2f2-8810-4ba9-b9e4-899845779d97" style={styles.confirm_component133_component72_ellipse5} preserveAspectRatio="none" viewBox="-1.5 -1.5 20 20" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
                <Svg data-layer="7efd8785-343a-4f60-83bf-e2c1ddcbae11" style={styles.confirm_component133_component72_ellipse6} preserveAspectRatio="none" viewBox="-1.5 -1.5 20 20" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
                <Svg data-layer="ca6b595b-b25a-47c9-bc5e-fb772ebfc6b3" style={styles.confirm_component133_component72_ellipse7} preserveAspectRatio="none" viewBox="-1.5 -1.5 20 20" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 8.5 0 C 13.19441986083984 0 17 3.805579662322998 17 8.5 C 17 13.19441986083984 13.19441986083984 17 8.5 17 C 3.805579662322998 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 3.805579662322998 0 8.5 0 Z"  /></Svg>
            </View>
            <Text data-layer="21242f6b-284e-4365-b23c-3cf112d114d7" style={styles.confirm_component133_confirmationCode}>Confirmation Code</Text>
        </View>
    </ScrollView>
    );
  }
}

Confirm.propTypes = {

}

Confirm.defaultProps = {

}


const styles = StyleSheet.create({
  "confirm": {
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
  "confirm_statusbar": {
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
  "confirm_statusbar_group1": {
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
  "confirm_statusbar_group1_rectangle15fcb0367": {
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
  "confirm_statusbar_group1_path1": {
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
  "confirm_statusbar_group1_rectangle2": {
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
  "confirm_statusbar_path2": {
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
  "confirm_statusbar_x941": {
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
  "confirm_component318": {
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
  "confirm_component318_rectangle1": {
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
  "confirm_component318_path19": {
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
  "confirm_component318_confirmfead55cc": {
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
    "width": 74,
    "height": 34,
    "left": 151,
    "top": 10
  },
  "confirm_path21": {
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
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 298,
    "height": 50,
    "left": 39,
    "top": 697
  },
  "confirm_continue": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 22,
    "fontWeight": "700",
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
    "width": 88,
    "height": 36,
    "left": 144,
    "top": 704
  },
  "confirm_mobileNumber": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
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
    "width": 96,
    "height": 25,
    "left": 24,
    "top": 208
  },
  "confirm_messagingAndDataRatesMayApply": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 13,
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
    "width": 198,
    "height": 21,
    "left": 89,
    "top": 240
  },
  "confirm_line21": {
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
    "width": 335,
    "height": 1,
    "left": 20.5,
    "top": 236
  },
  "confirm_component133": {
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
    "height": 58,
    "left": 98,
    "top": 342
  },
  "confirm_component133_component72": {
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
    "left": 0,
    "top": 0
  },
  "confirm_component133_component72_ellipse1": {
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
  "confirm_component133_component72_ellipse3": {
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
  "confirm_component133_component72_ellipse4": {
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
  "confirm_component133_component72_ellipse5": {
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
  "confirm_component133_component72_ellipse6": {
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
  "confirm_component133_component72_ellipse7": {
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
  "confirm_component133_confirmationCode": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
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
    "width": 116,
    "height": 25,
    "left": 31,
    "top": 33
  }
});