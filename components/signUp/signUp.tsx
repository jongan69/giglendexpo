import React, { Component, useEffect } from "react";

import PropTypes from 'prop-types';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Picker,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Image as ReactImage } from "react-native";

import Svg, { Defs, Pattern } from "react-native-svg";
import { Path as SvgPath } from "react-native-svg";
import { Text as SvgText } from "react-native-svg";
import { Image as SvgImage } from "react-native-svg";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePress(target, owner) {
    if (this.props.onPress) {
      let name;
      let id;
      let index = -1;
      if (target.search('::') > -1) {
        const varCount = target.split('::').length;
        if (varCount === 2) {
          name = target.split('::')[0];
          id = target.split('::')[1];
        } else if (varCount === 3) {
          name = target.split('::')[0];
          index = parseInt(target.split('::')[1]);
          id = target.split('::')[2];
        }
      } else {
        name = target;
      }
      this.props.onPress({
        type: "button",
        name: name,
        index: index,
        id: id,
        owner: owner
      });
    }
  }

  handleChangeTextinput(name, value) {
    let id;
    let index = -1;
    if (name.search("::") > -1) {
      const varCount = name.split('::').length;
      if (varCount === 2) {
        name = name.split('::')[0];
        id = name.split('::')[1];
      } else if (varCount === 3) {
        name = name.split('::')[0];
        index = name.split('::')[1];
        id = name.split('::')[2];
      }
    } else {
      name = name;
    }
    let state = this.state;
    state[name.split("::").join("")] = value;
    this.setState(state, () => {
      if (this.props.onChange) {
        this.props.onChange({
          type: "textinput",
          name: name,
          value: value,
          index: index,
          id: id
        });
      }
    });
  }

  render() {
    return (
      <ScrollView
        data-layer="9f2083be-1ba3-4971-b938-b9fd98014cb2"
        style={styles.signUp}
      >
        <View
          data-layer="a9e326f1-e18a-4800-91cd-2820ee140f2e"
          style={styles.signUp_component312}
        >
          <View
            data-layer="72b47894-3ac4-4528-9d41-5197cbd453d0"
            style={styles.signUp_component312_rectangle1}
          />
          <Svg
            data-layer="4aa80916-1381-40c4-a52a-47141b2c68f0"
            style={styles.signUp_component312_path19}
            preserveAspectRatio="none"
            viewBox="465.33758544921875 58.57268524169922 14.726318359375 26.452880859375"
            fill="transparent"
          >
            <SvgPath d="M 478.56396484375 60.07268524169922 L 466.8375854492188 71.79905700683594 L 478.56396484375 83.52542877197266" />
          </Svg>
          <Text
            data-layer="0de8792d-25c3-48bc-a94a-f1477e9297c6"
            style={styles.signUp_component312_signUpfad278af}
          >
            Sign Up
          </Text>
        </View>

        <TouchableOpacity>
          <View
            data-layer="8ed23dfe-8c6d-4e70-b1f3-d7434047ed67"
            style={styles.signUp_group3}
          >
            <View
              data-layer="c909ef3c-3839-41f6-9851-13e2df94c4cd"
              style={styles.signUp_group3_component410}
            >
              <Svg
                data-layer="d7f36a92-9514-4822-92d9-8cdbd7c4055f"
                style={styles.signUp_group3_component410_path21}
                preserveAspectRatio="none"
                viewBox="0 0 298 50"
                fill="rgba(253, 153, 42, 1)"
              >
                <SvgPath d="M 25 0 L 273 0 C 286.80712890625 0 298 11.19288063049316 298 25 C 298 38.80712127685547 286.80712890625 50 273 50 L 25 50 C 11.19288063049316 50 0 38.80712127685547 0 25 C 0 11.19288063049316 11.19288063049316 0 25 0 Z" />
              </Svg>
              <Text
                data-layer="82e491c5-1dbf-41c1-99b3-4a25844ccac7"
                style={styles.signUp_group3_component410_getStarted}
              >
                Get Started
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <Svg
          data-layer="f90024ce-836a-4683-8ab3-e6c62fefa8fe"
          style={styles.signUp_line21}
          preserveAspectRatio="none"
          viewBox="0 -0.5 335 1"
          fill="transparent"
        >
          <SvgPath d="M 0 0 L 335 0" />
        </Svg>
        <TextInput
          data-layer="c5a56db4-52e6-4679-989a-6876b34d0833"
          style={styles.signUp_email}
          clearTextOnFocus={true}
          autoCompleteType="email"
        >
          Email
        </TextInput>
        <Svg
          data-layer="3a3203d7-ac27-4a99-af11-d4644523d868"
          style={styles.signUp_line22}
          preserveAspectRatio="none"
          viewBox="0 -0.5 335 1"
          fill="transparent"
        >
          <SvgPath d="M 0 0 L 335 0" />
        </Svg>
        <TextInput
          data-layer="dbb3d0fb-a1f9-4396-acca-aed357e6f8a1"
          style={styles.signUp_password}
          clearTextOnFocus={true}
          autoCompleteType="password"
        >
          Password
        </TextInput>
        <Text
          data-layer="2f316d68-8aac-422a-b86b-7f2ddaa81c4d"
          style={
            styles.signUp_mustBeAtLeast8CharactersAndInclude1Uppercase1LowercaseAnd1SpecialCharacter
          }
        >
          Must be at least 8 characters
        </Text>
        <Text
          data-layer="2f316d68-8aac-422a-b86b-7f2ddaa81c4d"
          style={
            styles.signUp_mustBeAtLeast8CharactersAndInclude1Uppercase1LowercaseAnd1SpecialCharacter1
          }
        >
          Must include 1 uppercase 1 lowercase,
        </Text>
        <Text
          data-layer="2f316d68-8aac-422a-b86b-7f2ddaa81c4d"
          style={
            styles.signUp_mustBeAtLeast8CharactersAndInclude1Uppercase1LowercaseAnd1SpecialCharacter2
          }
        >
          & 1 special character
        </Text>
        <Text
          data-layer="a7f7de5d-a41f-474f-b002-28d37ba28d79"
          style={
            styles.signUp_byContinuingYouAgreeToTheTermsOfUseESignandPrivacyPolicy
          }
        >
          By continuing, you agree to the Terms of Use, E-Sign, and Privacy
          Policy
        </Text>
      </ScrollView>
    );
  }
}

SignUp.propTypes = {};

SignUp.defaultProps = {};

const styles = StyleSheet.create({
  signUp: {
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
  signUp_component312: {
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
    width: 375,
    height: 48,
    left: 0,
    top: 60,
  },
  signUp_component312_rectangle1: {
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
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'rgb(0,  0,  0)',
    shadowOpacity: 0.4588235294117647,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 375,
    height: 48,
    left: 0,
    top: 0,
  },
  signUp_component312_path19: {
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
    width: 15.73,
    height: 27.45,
    left: 13.84,
    top: 10.52,
  },
  signUp_component312_signUpfad278af: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 21,
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
    width: 71,
    height: 34,
    left: 152,
    top: 7,
  },
  signUp_group3: {
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
    width: 298,
    height: 50,
    left: 39,
    top: 697,
  },
  signUp_group3_component410: {
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
    width: 298,
    height: 50,
    left: 0,
    top: 0,
  },
  signUp_group3_component410_path21: {
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
    shadowColor: 'rgb(0,  0,  0)',
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 298,
    height: 50,
    left: 0,
    top: 0,
  },
  signUp_group3_component410_getStarted: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 22,
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
    width: 110,
    height: 36,
    left: 94,
    top: 7,
  },
  signUp_line21: {
    backgroundColor: 'gray',
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
    justifyContent: 'center',
    width: 335,
    height: 1,
    left: 20.5,
    top: 328,
  },
  signUp_email: {
    alignSelf: 'center',
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
    fontWeight: '400',
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
    width: 41,
    height: 30,
    top: 290,
  },
  signUp_line22: {
    backgroundColor: 'gray',
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
    width: 335,
    height: 1,
    left: 20.5,
    top: 422,
  },
  signUp_password: {
    alignSelf: 'center',
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
    fontWeight: '400',
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
    width: 80,
    height: 30,
    top: 384,
  },
  signUp_mustBeAtLeast8CharactersAndInclude1Uppercase1LowercaseAnd1SpecialCharacter: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 12,
    fontWeight: '400',
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
    width: 232,
    height: 38,
    left: 72,
    top: 444,
  },
  signUp_mustBeAtLeast8CharactersAndInclude1Uppercase1LowercaseAnd1SpecialCharacter1: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 12,
    fontWeight: '400',
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
    width: 232,
    height: 38,
    left: 72,
    top: 464,
  },
  signUp_mustBeAtLeast8CharactersAndInclude1Uppercase1LowercaseAnd1SpecialCharacter2: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 12,
    fontWeight: '400',
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
    width: 232,
    height: 38,
    left: 72,
    top: 484,
  },
  signUp_byContinuingYouAgreeToTheTermsOfUseESignandPrivacyPolicy: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 13,
    fontWeight: '400',
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
    width: 284,
    height: 42,
    left: 46,
    top: 756,
  },
});
