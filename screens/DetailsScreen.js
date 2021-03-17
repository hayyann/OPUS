import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detailsss Screen</Text>
        <Button
          title="Wapis ghar janay k liye dabao"
          onPress={() => navigation.navigate("Home")}
          />
        <Button
          title="Details k liye phirse dabao"
          onPress={() => navigation.push("Details")}
          />
        <Button
          title="Ye dabao if u wanna go back"
          onPress={() => navigation.goBack()}
          />
        <Button
          title="Ye dabao if u wanna go to the first screen"
          onPress={() => navigation.popToTop()}
          />       
      </View>
    );
};
    export default DetailsScreen;

    const styles = StyleSheet.create({
      container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
      },
});