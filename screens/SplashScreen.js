import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Drawer,
    Image
} from 'react-native';

import * as Animatable from 'react-native-animatable'
import {LinearGradient} from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 
const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Animatable.Image 
                animation="fadeInUpBig"
                duraton="1500"
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
            />
        </View>
        <Animatable.View
                style={styles.footer}
                animation="fadeInUpBig"
            >
                <Text style={styles.title}>Handyman at your service</Text>
                <Text style={styles.text}>Sign In with account</Text>
                <View style={styles.button}>
                <TouchableOpacity onPress={()=>{navigation.navigate('SignInScreen')}}>
                    {<LinearGradient
                        colors={['#005387','#005387']}
                        style={styles.signIn}
                    >
                        <Text style={styles.textSign}>Get Started</Text>
                        <MaterialIcons
                            name="navigate-next"
                            color="#fff"
                            size={20}
                        />
                    </LinearGradient> }
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.2;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#005387'
  },
  header: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 20
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});
