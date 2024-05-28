import React from "react";
import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";

const serverLogo = require("../assets/imgs/servidor.png");
const usernameLogo = require("../assets/imgs/username.png");
const passwordLogo = require("../assets/imgs/password.png");
const eyeIcon = require("../assets/imgs/eye.png");
const eyeOffIcon = require("../assets/imgs/eye-off.png");
const MexErpLogo = require("../assets/imgs/MexErpLogo.png");

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordVisible: false,
    };
  }

  togglePasswordVisibility = () => {
    this.setState({ passwordVisible: !this.state.passwordVisible });
  };

  render() {
    const { navigation } = this.props;
    const { passwordVisible } = this.state;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Block flex style={styles.container}>
          <StatusBar barStyle="light-content" />
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Block flex center>
              <ImageBackground
                source={Images.Onboarding}
                style={{ height, width, zIndex: 1 }}
              >
                <Block flex style={styles.overlay}>
                  <Block flex={0.3} center style={styles.titleContainer}>
                    <Image source={MexErpLogo} style={styles.logo} />
                  </Block>
                  <Block flex={0.7} center>
                    <Block style={styles.inputContainer}>
                      <Block style={styles.inputBlock}>
                        <Image source={serverLogo} style={styles.inputIcon} />
                        <TextInput
                          style={styles.input}
                          placeholder="Servidor"
                          placeholderTextColor={argonTheme.COLORS.PLACEHOLDER}
                        />
                      </Block>
                      <Block style={styles.inputBlock}>
                        <Image source={usernameLogo} style={styles.inputIcon} />
                        <TextInput
                          style={styles.input}
                          placeholder="Nombre de Usuario"
                          placeholderTextColor={argonTheme.COLORS.PLACEHOLDER}
                        />
                      </Block>
                      <Block style={styles.inputBlock}>
                        <Image source={passwordLogo} style={styles.inputIcon} />
                        <TextInput
                          style={styles.input}
                          placeholder="Contraseña"
                          placeholderTextColor={argonTheme.COLORS.PLACEHOLDER}
                          secureTextEntry={!passwordVisible}
                        />
                        <TouchableOpacity onPress={this.togglePasswordVisibility}>
                          <Image
                            source={passwordVisible ? eyeOffIcon : eyeIcon}
                            style={styles.eyeIcon}
                          />
                        </TouchableOpacity>
                      </Block>
                    </Block>
                    <Button
                      style={styles.button}
                      color={argonTheme.COLORS.SECONDARY}
                      onPress={() => navigation.navigate("App")}
                      textStyle={{ color: argonTheme.COLORS.BLACK }}
                    >
                      Iniciar Sesión
                    </Button>
                  </Block>
                </Block>
              </ImageBackground>
            </Block>
          </ScrollView>
        </Block>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  overlay: {
    flex: 1,
    width: width,
    justifyContent: 'space-between'
  },
  inputContainer: {
    width: width - theme.SIZES.BASE * 4,
    marginBottom: theme.SIZES.BASE * 2,
  },
  inputBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: argonTheme.COLORS.BORDER,
    marginVertical: theme.SIZES.BASE / 2,
    paddingHorizontal: theme.SIZES.BASE,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: theme.SIZES.BASE,
  },
  input: {
    flex: 1,
    height: theme.SIZES.BASE * 3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'transparent',
  },
  eyeIcon: {
    width: 20,
    height: 20,
    tintColor: argonTheme.COLORS.ICON,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  titleContainer: {
    justifyContent: 'flex-start',
    marginTop: theme.SIZES.BASE * 5 
  },
  logo: {
    width: 150, 
    height: 150, 
    resizeMode: 'contain',
  }
});

export default Onboarding;




