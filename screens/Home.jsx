import React from "react";

// UI elements
import { View, Text, TouchableOpacity, Image } from "react-native";
// Custom styles
import { basic, form } from "../shared/styles";

const Home = () => {
  return (
      <>
        <Image 
            source={require('../assets/desk.jpg')}
            style={basic.image}
        />
        <View style={basic.container}>
      <View>
        <View style={form.field}>
          <Text style={form.heading}>Welcome to our community!</Text>
          <Text style={[form.text, { paddingVertical: 10, lineHeight: 25 }]}>
            We appreciate you taking the time for downloading our app and
            evaluating us.
          </Text>
        </View>
        <View style={form.field}>
          <TouchableOpacity
            onPress={() => alert("Thank you!")}
            style={form.button}
          >
            <Text style={form.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </>
  );
};

export default Home;
