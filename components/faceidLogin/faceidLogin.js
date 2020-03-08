import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class FaceidLogin extends Component {

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
    <ScrollView data-layer="591327f0-ee65-4c4a-af03-d302be3265ef" style={styles.faceidLogin}>
        <View data-layer="77957132-57b1-43fa-9c40-cf1502227a30" style={styles.faceidLogin_statusbar}>
            <View data-layer="9e2b8e6d-0467-417e-9760-eff6b7312e48" style={styles.faceidLogin_statusbar_group1}>
                <View data-layer="676dd95d-872b-42e2-a4dd-b07716ac3c73" style={styles.faceidLogin_statusbar_group1_rectangle1}></View>
                <Svg data-layer="61a4d4d4-8aa7-4408-ab5f-084715d7e986" style={styles.faceidLogin_statusbar_group1_path1} preserveAspectRatio="none" viewBox="23 4 1.3280029296875 4" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 23 4 L 23 8 C 23.80473136901855 7.661223411560059 24.32803726196289 6.873133182525635 24.32803726196289 6 C 24.32803726196289 5.126866817474365 23.80473136901855 4.338776588439941 23 4"  /></Svg>
                <View data-layer="240f745a-9a9c-4c73-bfbe-22a680e17942" style={styles.faceidLogin_statusbar_group1_rectangle2}></View>
            </View>
            <Svg data-layer="d50c72b9-0e67-4b9e-b5df-0c097daf1816" style={styles.faceidLogin_statusbar_path2} preserveAspectRatio="none" viewBox="272.6666564941406 4.330672264099121 37.2994384765625 11.002685546875" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 302.330322265625 6.607999801635742 C 304.5462341308594 6.608097076416016 306.6773986816406 7.459534645080566 308.2833251953125 8.986332893371582 C 308.4042663574219 9.104207992553711 308.5975646972656 9.102721214294434 308.7166748046875 8.982999801635742 L 309.8726806640625 7.816333293914795 C 309.9329833984375 7.755610942840576 309.9666137695312 7.673359394073486 309.9660949707031 7.58777904510498 C 309.9656066894531 7.502198696136475 309.9309997558594 7.420345783233643 309.8699951171875 7.360333442687988 C 305.6549072265625 3.320785760879517 299.0050964355469 3.320785760879517 294.7900085449219 7.360333442687988 C 294.7289428710938 7.42030143737793 294.6943054199219 7.502129554748535 294.6937255859375 7.587709903717041 C 294.6931762695312 7.673290252685547 294.7267456054688 7.755567073822021 294.7869873046875 7.816333293914795 L 295.9433288574219 8.982999801635742 C 296.0623474121094 9.102901458740234 296.2557983398438 9.104390144348145 296.3766784667969 8.986332893371582 C 297.9828186035156 7.459434509277344 300.1142272949219 6.607994556427002 302.330322265625 6.607999801635742 Z M 302.330322265625 10.40366649627686 C 303.5478210449219 10.40359210968018 304.7218627929688 10.85612487792969 305.6243286132812 11.67333316802979 C 305.7463989257812 11.78931427001953 305.9386901855469 11.78679943084717 306.0576782226562 11.6676664352417 L 307.2123413085938 10.50100040435791 C 307.2731323242188 10.43980503082275 307.306884765625 10.35678863525391 307.3059997558594 10.27052402496338 C 307.3051147460938 10.18425941467285 307.2697143554688 10.1019458770752 307.2076721191406 10.04199981689453 C 304.45947265625 7.485617637634277 300.2035217285156 7.485617637634277 297.455322265625 10.04199981689453 C 297.3932495117188 10.10194492340088 297.3578491210938 10.18429946899414 297.3570251464844 10.27059268951416 C 297.356201171875 10.35688495635986 297.3900756835938 10.43989372253418 297.4509887695312 10.50100040435791 L 298.6053466796875 11.6676664352417 C 298.7243347167969 11.78679943084717 298.9165954589844 11.78931427001953 299.0386657714844 11.67333316802979 C 299.9405517578125 10.85666465759277 301.1136474609375 10.40417098999023 302.330322265625 10.40366649627686 Z M 304.5493469238281 13.1879997253418 C 304.611083984375 13.12739372253418 304.6450805664062 13.0439920425415 304.6433410644531 12.95748519897461 C 304.6415710449219 12.87097835540771 304.6041870117188 12.78903388977051 304.5400085449219 12.73099994659424 C 303.2644348144531 11.65211582183838 301.396240234375 11.65211582183838 300.1206665039062 12.73099994659424 C 300.0564575195312 12.788987159729 300.0190124511719 12.87090587615967 300.0171813964844 12.95741271972656 C 300.0153503417969 13.04392051696777 300.0492858886719 13.12734889984131 300.1109924316406 13.1879997253418 L 302.1086730957031 15.20366668701172 C 302.1672058105469 15.26290607452393 302.2470397949219 15.29624462127686 302.330322265625 15.29624462127686 C 302.4136352539062 15.29624462127686 302.4934387207031 15.26290607452393 302.552001953125 15.20366668701172 L 304.5493469238281 13.1879997253418 Z M 273.6666564941406 11.33333301544189 L 274.6666564941406 11.33333301544189 C 275.2189636230469 11.33333301544189 275.6666564941406 11.78104877471924 275.6666564941406 12.33333301544189 L 275.6666564941406 14.33333301544189 C 275.6666564941406 14.88561820983887 275.2189636230469 15.33333301544189 274.6666564941406 15.33333301544189 L 273.6666564941406 15.33333301544189 C 273.1143798828125 15.33333301544189 272.6666564941406 14.88561820983887 272.6666564941406 14.33333301544189 L 272.6666564941406 12.33333301544189 C 272.6666564941406 11.78104877471924 273.1143798828125 11.33333301544189 273.6666564941406 11.33333301544189 Z M 278.3333435058594 9.333333015441895 L 279.3333435058594 9.333333015441895 C 279.8856201171875 9.333333015441895 280.3333435058594 9.781048774719238 280.3333435058594 10.33333301544189 L 280.3333435058594 14.33333301544189 C 280.3333435058594 14.88561820983887 279.8856201171875 15.33333301544189 279.3333435058594 15.33333301544189 L 278.3333435058594 15.33333301544189 C 277.7810363769531 15.33333301544189 277.3333435058594 14.88561820983887 277.3333435058594 14.33333301544189 L 277.3333435058594 10.33333301544189 C 277.3333435058594 9.781048774719238 277.7810363769531 9.333333015441895 278.3333435058594 9.333333015441895 Z M 283 7 L 284 7 C 284.5522766113281 7 285 7.447715282440186 285 8 L 285 14.33333301544189 C 285 14.88561820983887 284.5522766113281 15.33333301544189 284 15.33333301544189 L 283 15.33333301544189 C 282.4477233886719 15.33333301544189 282 14.88561820983887 282 14.33333301544189 L 282 8 C 282 7.447715282440186 282.4477233886719 7 283 7 Z M 287.6666564941406 4.666666507720947 L 288.6666564941406 4.666666507720947 C 289.2189636230469 4.666666507720947 289.6666564941406 5.114381790161133 289.6666564941406 5.666666507720947 L 289.6666564941406 14.33333301544189 C 289.6666564941406 14.88561820983887 289.2189636230469 15.33333301544189 288.6666564941406 15.33333301544189 L 287.6666564941406 15.33333301544189 C 287.1143798828125 15.33333301544189 286.6666564941406 14.88561820983887 286.6666564941406 14.33333301544189 L 286.6666564941406 5.666666507720947 C 286.6666564941406 5.114381790161133 287.1143798828125 4.666666507720947 287.6666564941406 4.666666507720947 Z"  /></Svg>
            <Text data-layer="90e72167-1ec8-4150-9caf-55afdeb9bc03" style={styles.faceidLogin_statusbar_x941}>9:41</Text>
        </View>
        <View data-layer="f9ba2084-d5bc-402b-bec4-29cd42a6d7fb" style={styles.faceidLogin_form}>
            <View data-layer="77059cac-25af-4721-b3d4-efacfbd114c6" style={styles.faceidLogin_form_inputddfa7f5d}>
                <View data-layer="93a6ed5b-0499-44be-ba7d-1cc3c3a49368" style={styles.faceidLogin_form_inputddfa7f5d_rectangle4de100e87}></View>
                <Text data-layer="1a941a7e-5bd6-4505-ba46-4e06a6b43694" style={styles.faceidLogin_form_inputddfa7f5d_example}>example@email.com</Text>
                <Svg data-layer="64d561ad-18fd-48c9-8904-a3931c0fd371" style={styles.faceidLogin_form_inputddfa7f5d_user} preserveAspectRatio="none" viewBox="0 5 19.9735107421875 19.9736328125" fill="rgba(250, 152, 58, 1)"><SvgPath d="M 13.48214054107666 17.31700325012207 C 15.39626502990723 16.1518669128418 16.64459228515625 14.07132339477539 16.64459228515625 11.65785980224609 C 16.64463043212891 7.996031284332275 13.64856052398682 5 9.986770629882812 5 C 6.324980735778809 5 3.32891058921814 7.996031284332275 3.32891058921814 11.65785980224609 C 3.32891058921814 14.07132339477539 4.577237129211426 16.15190696716309 6.49136209487915 17.31700325012207 C 3.162451267242432 18.56536865234375 0.6657587289810181 21.47817039489746 0 24.97354125976562 L 1.664474725723267 24.97354125976562 C 2.496692657470703 21.14529228210449 5.908871650695801 18.31568145751953 9.986770629882812 18.31568145751953 C 14.06466960906982 18.31568145751953 17.47684860229492 21.1452522277832 18.30906677246094 24.97354125976562 L 19.97354125976562 24.97354125976562 C 19.30778121948242 21.39494132995605 16.81108856201172 18.48213958740234 13.48214054107666 17.31700325012207 Z M 4.993385314941406 11.65785980224609 C 4.993385314941406 8.911517143249512 7.24042797088623 6.664474487304688 9.986770629882812 6.664474487304688 C 12.73311233520508 6.664474487304688 14.98015594482422 8.911517143249512 14.98015594482422 11.65785980224609 C 14.98015594482422 14.40420246124268 12.73311233520508 16.6512451171875 9.986770629882812 16.6512451171875 C 7.24042797088623 16.6512451171875 4.993385314941406 14.40420246124268 4.993385314941406 11.65785980224609 Z"  /></Svg>
            </View>
            <View data-layer="8109ecf7-3f00-416b-9f43-9bdf67c660f4" style={styles.faceidLogin_form_input}>
                <View data-layer="eb7dd853-e57d-4f7f-9f6e-59f6beb86cc2" style={styles.faceidLogin_form_input_rectangle4}></View>
                <View data-layer="2036dede-7885-4bd0-98a7-d728dff47c77" style={styles.faceidLogin_form_input_rectangle5}></View>
                <View data-layer="41154013-f228-48dc-9ad5-84cb3d02bcba" style={styles.faceidLogin_form_input_rectangle8}></View>
                <View data-layer="0b5a95bd-5fbb-4da5-953d-a72d3be099a6" style={styles.faceidLogin_form_input_rectangle10}></View>
                <View data-layer="3928b78d-a0cc-40d5-adfb-8bfab385376b" style={styles.faceidLogin_form_input_rectangle6}></View>
                <View data-layer="3b2e4cad-e279-4709-aec8-52fa43d3256f" style={styles.faceidLogin_form_input_rectangle7}></View>
                <View data-layer="480d257b-ff82-45d6-a252-b3532bbeee53" style={styles.faceidLogin_form_input_rectangle9}></View>
                <Svg data-layer="297623f5-5662-41e2-bb40-b3236f60f2c5" style={styles.faceidLogin_form_input_lock} preserveAspectRatio="none" viewBox="0.016326529905200005 2.842170943040401e-14 15.15924072265625 20" fill="rgba(250, 152, 58, 1)"><SvgPath d="M 13.86122417449951 7.604081630706787 L 13.12653064727783 7.604081630706787 L 13.12653064727783 5.538775444030762 C 13.12653064727783 2.485714197158813 10.64489841461182 2.842170943040401e-14 7.591836929321289 2.842170943040401e-14 C 4.538775444030762 2.842170943040401e-14 2.057142972946167 2.485714197158813 2.057142972946167 5.534693717956543 L 2.057142972946167 7.599999904632568 L 1.326530575752258 7.599999904632568 C 0.6040816307067871 7.599999904632568 0.0163265299052 8.18775463104248 0.0163265299052 8.91020393371582 L 0.0163265299052 18.68979644775391 C 0.0163265299052 19.41224479675293 0.6040816307067871 20 1.326530575752258 20 L 13.86530590057373 20 C 14.58775520324707 20 15.17551040649414 19.41224479675293 15.17551040649414 18.68979644775391 L 15.17551040649414 8.91020393371582 C 15.17142868041992 8.191836357116699 14.58367347717285 7.604081630706787 13.86122417449951 7.604081630706787 Z M 3.722449064254761 5.534693717956543 C 3.722449064254761 3.400000095367432 5.45714282989502 1.665306091308594 7.591836929321289 1.665306091308594 C 9.726531028747559 1.665306091308594 11.46122455596924 3.400000095367432 11.46122455596924 5.534693717956543 L 11.46122455596924 7.59591817855835 L 3.722449064254761 7.59591817855835 L 3.722449064254761 5.534693717956543 Z M 13.50204086303711 18.33469390869141 L 1.6816326379776 18.33469390869141 L 1.6816326379776 9.269388198852539 L 13.50612258911133 9.269388198852539 L 13.50612258911133 18.33469390869141 L 13.50204086303711 18.33469390869141 Z"  /></Svg>
            </View>
            <Text data-layer="b028e933-14e4-4b02-a484-ac525dce72b2" style={styles.faceidLogin_form_signIn05399a2c}>Sign in</Text>
        </View>
        <View data-layer="bad2df01-c0b8-4c66-9613-759bf52aab5e" style={styles.faceidLogin_group2}>
            <View data-layer="3caf0c60-01d5-4a71-b1b8-d2b1c7420da8" style={styles.faceidLogin_group2_or99890403}>
                <Text data-layer="0c594b9e-26f5-4bec-9918-f5ecaabee62d" style={styles.faceidLogin_group2_or99890403_or}>OR</Text>
                <Svg data-layer="766167a9-b4dd-40c5-9593-4251077dfcac" style={styles.faceidLogin_group2_or99890403_line} preserveAspectRatio="none" viewBox="-0.5268408060073853 -0.5 38.89501953125 3" fill="transparent"><SvgPath d="M 36.86811447143555 1 L 0.9731591939926147 1"  /></Svg>
                <Svg data-layer="9c407dcc-f414-477c-8247-e72793beb90a" style={styles.faceidLogin_group2_or99890403_lineCopy} preserveAspectRatio="none" viewBox="-0.5268408060073853 -0.5 38.89501953125 3" fill="transparent"><SvgPath d="M 36.86811447143555 1 L 0.9731591939926147 1"  /></Svg>
            </View>
            <View data-layer="c4c25814-be84-48c9-a5ef-bf00a33f7d2f" style={styles.faceidLogin_group2_buttonroundedlargeiconLeft45abce7a}>
                <View data-layer="9e77d5f6-a8f0-4d61-a486-0cfc7faa247b" style={styles.faceidLogin_group2_buttonroundedlargeiconLeft45abce7a_bg2fdc10f6}></View>
                <ReactImage data-layer="d7492460-2c3a-4d09-9926-6022078ad30f" source={require('./assets/buttonroundedlargeiconLeft.png')} style={styles.faceidLogin_group2_buttonroundedlargeiconLeft45abce7a_buttonroundedlargeiconLeft} />
            </View>
        </View>
        <View data-layer="9ed8b736-badc-4ee9-a1d9-a8bec51c927b" style={styles.faceidLogin_btn}>
            <View data-layer="5d22e1bd-120b-448b-bbca-3b20f09c9817" style={styles.faceidLogin_btn_rectangle12}></View>
            <Text data-layer="9532d55f-71d1-4b08-bca6-ace6c62bf064" style={styles.faceidLogin_btn_signIn}>SIGN IN</Text>
        </View>
        <ReactImage data-layer="19129b21-0299-4b7f-bd53-024201eef616" source={require('./assets/giglendLogo1Project.png')} style={styles.faceidLogin_giglendLogo1Project} />
        <ReactImage data-layer="316e337f-bdfd-4e65-bc1e-2f19fb51f82e" source={require('./assets/icons8FaceId100.png')} style={styles.faceidLogin_icons8FaceId100} />
    </ScrollView>
    );
  }
}

FaceidLogin.propTypes = {

}

FaceidLogin.defaultProps = {

}


const styles = StyleSheet.create({
  "faceidLogin": {
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
  "faceidLogin_statusbar": {
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
  "faceidLogin_statusbar_group1": {
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
  "faceidLogin_statusbar_group1_rectangle1": {
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
  "faceidLogin_statusbar_group1_path1": {
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
  "faceidLogin_statusbar_group1_rectangle2": {
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
  "faceidLogin_statusbar_path2": {
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
  "faceidLogin_statusbar_x941": {
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
  "faceidLogin_form": {
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
    "width": 335,
    "height": 207,
    "left": 24,
    "top": 226
  },
  "faceidLogin_form_inputddfa7f5d": {
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
    "width": 335,
    "height": 60,
    "left": 0,
    "top": 68
  },
  "faceidLogin_form_inputddfa7f5d_rectangle4de100e87": {
    "opacity": 0.20000000298023224,
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
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 335,
    "height": 60,
    "left": 0,
    "top": 0
  },
  "faceidLogin_form_inputddfa7f5d_example": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 18,
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
    "width": 153,
    "height": 30,
    "left": 59,
    "top": 16
  },
  "faceidLogin_form_inputddfa7f5d_user": {
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
    "width": 19.97,
    "height": 19.97,
    "left": 22,
    "top": 21
  },
  "faceidLogin_form_input": {
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
    "width": 335,
    "height": 60,
    "left": 0,
    "top": 147
  },
  "faceidLogin_form_input_rectangle4": {
    "opacity": 0.20000000298023224,
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
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 335,
    "height": 60,
    "left": 0,
    "top": 0
  },
  "faceidLogin_form_input_rectangle5": {
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
    "borderTopLeftRadius": 111,
    "borderTopRightRadius": 111,
    "borderBottomLeftRadius": 111,
    "borderBottomRightRadius": 111,
    "width": 8,
    "height": 8,
    "left": 59,
    "top": 28
  },
  "faceidLogin_form_input_rectangle8": {
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
    "borderTopLeftRadius": 111,
    "borderTopRightRadius": 111,
    "borderBottomLeftRadius": 111,
    "borderBottomRightRadius": 111,
    "width": 8,
    "height": 8,
    "left": 85,
    "top": 28
  },
  "faceidLogin_form_input_rectangle10": {
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
    "borderTopLeftRadius": 111,
    "borderTopRightRadius": 111,
    "borderBottomLeftRadius": 111,
    "borderBottomRightRadius": 111,
    "width": 8,
    "height": 8,
    "left": 111,
    "top": 28
  },
  "faceidLogin_form_input_rectangle6": {
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
    "borderTopLeftRadius": 111,
    "borderTopRightRadius": 111,
    "borderBottomLeftRadius": 111,
    "borderBottomRightRadius": 111,
    "width": 8,
    "height": 8,
    "left": 72,
    "top": 28
  },
  "faceidLogin_form_input_rectangle7": {
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
    "borderTopLeftRadius": 111,
    "borderTopRightRadius": 111,
    "borderBottomLeftRadius": 111,
    "borderBottomRightRadius": 111,
    "width": 8,
    "height": 8,
    "left": 98,
    "top": 28
  },
  "faceidLogin_form_input_rectangle9": {
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
    "borderTopLeftRadius": 111,
    "borderTopRightRadius": 111,
    "borderBottomLeftRadius": 111,
    "borderBottomRightRadius": 111,
    "width": 8,
    "height": 8,
    "left": 124,
    "top": 28
  },
  "faceidLogin_form_input_lock": {
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
    "width": 15.16,
    "height": 20,
    "left": 24,
    "top": 22
  },
  "faceidLogin_form_signIn05399a2c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 30,
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
    "width": 86,
    "height": 49,
    "left": 1,
    "top": 0
  },
  "faceidLogin_group2": {
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
    "width": 303,
    "height": 82,
    "left": 36,
    "top": 569
  },
  "faceidLogin_group2_or99890403": {
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
    "width": 117.77,
    "height": 9,
    "left": 92.94,
    "top": 0
  },
  "faceidLogin_group2_or99890403_or": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 7,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Montserrat",
    "textAlign": "center",
    "lineHeight": 7,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0.7000000000000001,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 12,
    "height": 9,
    "left": 51.06,
    "top": 1
  },
  "faceidLogin_group2_or99890403_line": {
    "opacity": 0.30000001192092896,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 39.9,
    "height": 4,
    "left": -2,
    "top": 1.67
  },
  "faceidLogin_group2_or99890403_lineCopy": {
    "opacity": 0.30000001192092896,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 39.9,
    "height": 4,
    "left": 79.88,
    "top": 1.67
  },
  "faceidLogin_group2_buttonroundedlargeiconLeft45abce7a": {
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
    "width": 303,
    "height": 49,
    "left": 0,
    "top": 33
  },
  "faceidLogin_group2_buttonroundedlargeiconLeft45abce7a_bg2fdc10f6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 100,
    "borderTopRightRadius": 100,
    "borderBottomLeftRadius": 100,
    "borderBottomRightRadius": 100,
    "width": 302,
    "height": 48,
    "left": -0.5,
    "top": -0.5
  },
  "faceidLogin_group2_buttonroundedlargeiconLeft45abce7a_buttonroundedlargeiconLeft": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 303,
    "height": 49,
    "left": 0,
    "top": 0
  },
  "faceidLogin_group2_buttonroundedlargeiconLeft45abce7a_buttonroundedlargeiconLeft_colorglassDark": {
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
    "width": 303,
    "height": 49,
    "left": 0,
    "top": 0
  },
  "faceidLogin_group2_buttonroundedlargeiconLeft45abce7a_buttonroundedlargeiconLeft_colorglassDark_bg288331c2": {
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
    "width": 303,
    "height": 49,
    "left": 0,
    "top": 0
  },
  "faceidLogin_group2_buttonroundedlargeiconLeft45abce7a_buttonroundedlargeiconLeft_colorglassDark_bg288331c2_bg0de87568": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 100,
    "borderTopRightRadius": 100,
    "borderBottomLeftRadius": 100,
    "borderBottomRightRadius": 100,
    "width": 302,
    "height": 48,
    "left": -0.5,
    "top": -0.5
  },
  "faceidLogin_group2_buttonroundedlargeiconLeft45abce7a_buttonroundedlargeiconLeft_label": {
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
    "width": 170.02,
    "height": 15.63,
    "left": 66.87,
    "top": 16.43
  },
  "faceidLogin_group2_buttonroundedlargeiconLeft45abce7a_buttonroundedlargeiconLeft_label_buttonLabel": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 9,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Montserrat",
    "textAlign": "center",
    "lineHeight": 17,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 154,
    "height": 19,
    "left": 0,
    "top": -0.85
  },
  "faceidLogin_group2_buttonroundedlargeiconLeft45abce7a_buttonroundedlargeiconLeft_label_xIconsPlaceholder": {
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
    "width": 7.28,
    "height": 15.63,
    "left": 162.74,
    "top": 0
  },
  "faceidLogin_group2_buttonroundedlargeiconLeft45abce7a_buttonroundedlargeiconLeft_label_xIconsPlaceholder_shape": {
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
    "width": 9.28,
    "height": 17.63,
    "left": -1,
    "top": -1
  },
  "faceidLogin_group2_buttonroundedlargeiconLeft45abce7a_buttonroundedlargeiconLeft_bg": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 100,
    "borderTopRightRadius": 100,
    "borderBottomLeftRadius": 100,
    "borderBottomRightRadius": 100,
    "width": 302,
    "height": 48,
    "left": -0.5,
    "top": -0.5
  },
  "faceidLogin_btn": {
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
    "width": 335,
    "height": 60,
    "left": 20,
    "top": 483
  },
  "faceidLogin_btn_rectangle12": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(250, 152, 58, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 335,
    "height": 60,
    "left": 0,
    "top": 0
  },
  "faceidLogin_btn_signIn": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
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
    "width": 60,
    "height": 25,
    "left": 132,
    "top": 18
  },
  "faceidLogin_giglendLogo1Project": {
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
    "top": 106
  },
  "faceidLogin_icons8FaceId100": {
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
    "width": 100,
    "height": 100,
    "left": 138,
    "top": 677
  }
});