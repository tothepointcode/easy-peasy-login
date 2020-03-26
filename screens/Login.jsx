import React, { useState } from "react";

// UI elements
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import CheckBox from "react-native-check-box";

// Custom styles
import { basic, form, colors } from "../shared/styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [termsCheck, setTermsCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validatePassword = password => {
    let re = /[0-9]+/;
    return re.test(password);
  };

  const handleSubmit = () => {
    if (email === "" || password === "") {
      setMessage("Fill in all fields");
    } else if (!validateEmail(email)) {
      setMessage("Only valid email addresses are accepted");
    } else if (password.length <= 10) {
      setMessage("Password should have 10 or more characters");
    } else if (!validatePassword(password)) {
      setMessage("Password should include numbers");
    } else {
      setMessage("");
      setPassword("");
      setEmail("");
      navigation.navigate("Home");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[basic.container]}>
        <Text style={[form.heading, form.field]}>Log In</Text>
        <Text style={form.message}>{message}</Text>
        <View style={form.field}>
          <Text style={form.label}>Email</Text>
          <TextInput
            onChangeText={value => setEmail(value)}
            name="email"
            style={form.input}
            value={email}
            autoCapitalize="none"
          />
        </View>

        <View style={form.field}>
          <Text style={form.label}>Password</Text>
          <TextInput
            onChangeText={value => setPassword(value)}
            name="password"
            style={form.input}
            secureTextEntry={!showPassword}
            value={password}
            autoCapitalize="none"
          />
          <Ionicons
            onPress={() => setShowPassword(!showPassword)}
            style={form.eye}
            name={showPassword ? "md-eye-off" : "md-eye"}
          />
        </View>

        <View style={form.field}>
          <CheckBox
            onClick={() => setTermsCheck(!termsCheck)}
            isChecked={termsCheck}
            checkBoxColor={colors.secondary}
            checkedCheckBoxColor={colors.tertiary}
            rightText={"Terms & Conditions"}
            rightTextStyle={form.terms}
          />
        </View>

        <View style={form.field}>
          {termsCheck && (
            <TouchableOpacity onPress={handleSubmit} style={form.button}>
              <Text style={form.buttonText}>Login</Text>
            </TouchableOpacity>
          )}
          {!termsCheck && (
            <TouchableOpacity
              disabled
              onPress={handleSubmit}
              style={[form.button, form.disabled]}
            >
              <Text style={form.buttonText}>Login</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={[form.field, form.field1]}>
          <Text style={form.text}>You don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={form.button1}
          >
            <Text style={form.buttonText1}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={form.field}>
          <TouchableOpacity style={[form.button, form.google]}>
            <AntDesign
              style={form.icon}
              size={35}
              color={colors.tertiary}
              name="google"
            />
            <Text style={[form.buttonText, { color: colors.alternative }]}>
              Login with Google
            </Text>
          </TouchableOpacity>
        </View>
        <View style={form.field}>
          <TouchableOpacity style={[form.button, form.fb]}>
            <FontAwesome
              style={form.icon}
              size={35}
              color={colors.primary}
              name="facebook"
            />
            <Text style={form.buttonText}>Login with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
