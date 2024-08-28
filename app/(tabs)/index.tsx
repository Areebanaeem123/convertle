import { Image, StyleSheet, Platform, ImageBackground } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import { Text } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//this is gonna be the load screen  or the main front screen 
export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground
    source={require('@/app/images/backgroundiamge.jpg')}
      style={styles.backgroundgradient}>
      <Text style={styles.texttittle}>CONVERTLE</Text>
      <Text style={styles.subtittle}>Convert any unit with a simple click </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('explore')}>
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
//in order to get the background image as the full page set the 
//flex to 1 and the resizemode to cover 
//hence the background image
  backgroundgradient:{
    flex:1,
    resizeMode:'cover',
  },
  texttittle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 300,
    paddingLeft: 41,
    paddingBottom: 0, // Set to 0 to reduce extra space
  },
  subtittle: {
    color: 'white',
    paddingLeft: 30,
    fontSize: 20,
    marginTop: -15, // Use negative margin to reduce space between titles
  },
  button: {
    position: 'absolute', // Corrected syntax
    width: 248,
    height: 58,
    backgroundColor: 'rgba(255, 255, 255, 0.48)', // Corrected background color syntax
    borderColor: 'rgba(255, 255, 255, 0.8)', // Corrected border color syntax
    borderWidth: 4, // Changed from border to borderWidth
    borderRadius: 15,
    justifyContent: 'center', // Center align text vertically
    alignItems: 'center', // Center align text horizontally
    bottom: 300, // Adjust position from the bottom as needed
    left: '50%', // Center button horizontally
    transform: [{ translateX: -124 }], // Adjust horizontal position to center
    
  },
  buttonText:{
    color:'black',
    fontSize:20,
    fontWeight:'bold',

  },
  
});
