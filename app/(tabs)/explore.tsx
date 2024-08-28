import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import { ImageBackground } from 'react-native';
import { Text } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import {View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import react,{useState} from 'react';
export default function TabTwoScreen() {
  //here am storing the number entered by the user in a variable 
  //these variables are the state variables 
  const [inputValue, setInputValue] = useState('');
  const [result,setResult] = useState('');
  const navigation = useNavigation();
//now here in the form of functions we are making the logic or the conversion when the user clicks
//the button 
const convertkilometertometer=()=>{
  const convertedValue = parseFloat(inputValue) * 1000; // Convert kilometers to meters
  setResult(`${inputValue} kilometers = ${convertedValue} meters`);
};
const meter_to_kilometer=()=>{
  const convertedValue = parseFloat(inputValue) / 1000; // Convert meters to kilometers
  setResult(`${inputValue} meters = ${convertedValue} kilometers`);
};
const centimeter_to_meter=()=>{
  const convertedValue = parseFloat(inputValue) / 100; // Convert centimeters to meters
  setResult(`${inputValue} centimeters = ${convertedValue} meters`);
};
const meter_to_centimeter=()=>{
  const convertedValue = parseFloat(inputValue) * 100; // Convert meters to centimeters
  setResult(`${inputValue} meters = ${convertedValue} centimeters`);
};
const millimeter_to_centimeter=()=>{
  const convertedValue = parseFloat(inputValue) / 10; // Convert millimeters to centimeters
  setResult(`${inputValue} millimeters = ${convertedValue} centimeters`);
};
const centimeter_to_millimeter=()=>{
  const convertedValue = parseFloat(inputValue) * 10; // Convert centimeters to millimeters
  setResult(`${inputValue} centimeters = ${convertedValue} millimeters`);
};
const inch_to_centimeter=()=>{
  const convertedValue = parseFloat(inputValue) * 2.54; // Convert inches to centimeters
  setResult(`${inputValue} inches = ${convertedValue} centimeters`);
};
const centimeter_to_inch=()=>{
 const convertedValue=parseFloat(inputValue)/2.54;
 setResult(`${inputValue} centimeters = ${convertedValue} inches`);
};
const foot_to_meter=()=>{
  const convertedValue = parseFloat(inputValue) * 0.3048; // Convert feet to meters
  setResult(`${inputValue} feet = ${convertedValue} meters`);
};
const meter_to_foot=()=>{
  const convertedValue = parseFloat(inputValue) / 0.3048; // Convert meters to feet
  setResult(`${inputValue} meters = ${convertedValue} feet`);
};
const kilogram_to_gram=()=>{
  const convertedValue = parseFloat(inputValue) * 1000; // Convert kilograms to grams
  setResult(`${inputValue} kilograms = ${convertedValue} grams`);
};
const gram_to_kilogram=()=>{
  const convertedValue = parseFloat(inputValue) / 1000; // Convert grams to kilograms
  setResult(`${inputValue} grams = ${convertedValue} kilograms`);
};
const milligram_to_gram=()=>{
  const convertedValue = parseFloat(inputValue) / 1000; // Convert milligrams to grams
  setResult(`${inputValue} milligrams = ${convertedValue} grams`);
};
const gram_to_milligram=()=>{
  const convertedValue = parseFloat(inputValue) * 1000; // Convert grams to milligrams
  setResult(`${inputValue} grams = ${convertedValue} milligrams`);
};
const pound_to_kilogram=()=>{
  const convertedValue = parseFloat(inputValue) * 0.453592; // Convert pounds to kilograms
  setResult(`${inputValue} pounds = ${convertedValue} kilograms`);
};
const kilogram_to_pound=()=>{
  const convertedValue = parseFloat(inputValue) * 0.453592; // Convert pounds to kilograms
  setResult(`${inputValue} pounds = ${convertedValue} kilograms`);
};
const ounce_to_gram=()=>{
  const convertedValue = parseFloat(inputValue) * 28.3495; // Convert ounces to grams
  setResult(`${inputValue} ounces = ${convertedValue} grams`);
};
const gram_to_ounce=()=>{
  const convertedValue = parseFloat(inputValue) / 28.3495; // Convert grams to ounces
  setResult(`${inputValue} grams = ${convertedValue} ounces`);
};
const ton_to_kilogram=()=>{
  const convertedValue = parseFloat(inputValue) * 1000; // Convert tons to kilograms
  setResult(`${inputValue} tons = ${convertedValue} kilograms`);
};
const kilogram_to_ton=()=>{
  const convertedValue = parseFloat(inputValue) / 1000; // Convert kilograms to tons
  setResult(`${inputValue} kilograms = ${convertedValue} tons`);
};
const litre_to_millimeter=()=>{
  const convertedValue = parseFloat(inputValue) * 1000; // Convert liters to milliliters
  setResult(`${inputValue} liters = ${convertedValue} milliliters`);
};
const millimeter_to_litre=()=>{
  const convertedValue = parseFloat(inputValue) / 1000; // Convert milliliters to liters
  setResult(`${inputValue} milliliters = ${convertedValue} liters`);
};
const cubicmeter_to_litre=()=>{
  const convertedValue = parseFloat(inputValue) * 1000; // Convert cubic meters to liters
  setResult(`${inputValue} cubic meters = ${convertedValue} liters`);
};
const litre_to_cubicmeter=()=>{
  const convertedValue = parseFloat(inputValue) / 1000; // Convert liters to cubic meters
  setResult(`${inputValue} liters = ${convertedValue} cubic meters`);
};
const gallon_to_litre=()=>{
  const convertedValue = parseFloat(inputValue) * 3.78541; // Convert gallons to liters
  setResult(`${inputValue} gallons = ${convertedValue} liters`);
};
const litre_to_gallon=()=>{
  const convertedValue = parseFloat(inputValue) / 3.78541; // Convert liters to gallons
  setResult(`${inputValue} liters = ${convertedValue} gallons`);
};
const pint_to_millimeter=()=>{
  const convertedValue = parseFloat(inputValue) * 473.176; // Convert pints to milliliters
  setResult(`${inputValue} pints = ${convertedValue} milliliters`);
};
const millimeter_to_pint=()=>{
  const convertedValue = parseFloat(inputValue) / 473.176; // Convert milliliters to pints
  setResult(`${inputValue} milliliters = ${convertedValue} pints`);
};
const quart_to_litre=()=>{
  const convertedValue = parseFloat(inputValue) * 0.946353; // Convert quarts to liters
  setResult(`${inputValue} quarts = ${convertedValue} liters`);
};
const litre_to_quart=()=>{
  const convertedValue = parseFloat(inputValue) / 0.946353; // Convert liters to quarts
  setResult(`${inputValue} liters = ${convertedValue} quarts`);
};
const byte_to_kilobyte=()=>{
  const convertedValue = parseFloat(inputValue) / 1024; // Convert bytes to kilobytes
  setResult(`${inputValue} bytes = ${convertedValue} kilobytes`);
};
const kilobyte_to_byte=()=>{
  const convertedValue = parseFloat(inputValue) * 1024; // Convert kilobytes to bytes
  setResult(`${inputValue} kilobytes = ${convertedValue} bytes`);
};
const megabyte_to_kilobyte=()=>{
  const convertedValue = parseFloat(inputValue) * 1024; // Convert megabytes to kilobytes
  setResult(`${inputValue} megabytes = ${convertedValue} kilobytes`);
};
const kilobyte_to_megabyte=()=>{
  const convertedValue = parseFloat(inputValue) / 1024; // Convert kilobytes to megabytes
  setResult(`${inputValue} kilobytes = ${convertedValue} megabytes`);
};
const gigabyte_to_megabyte=()=>{
  const convertedValue = parseFloat(inputValue) * 1024; // Convert gigabytes to megabytes
  setResult(`${inputValue} gigabytes = ${convertedValue} megabytes`);
};
const megabyte_to_gigabyte=()=>{
  const convertedValue = parseFloat(inputValue) / 1024; // Convert megabytes to gigabytes
  setResult(`${inputValue} megabytes = ${convertedValue} gigabytes`);
};
const terabyte_to_gigabyte=()=>{
  const convertedValue = parseFloat(inputValue) * 1024; // Convert terabytes to gigabytes
  setResult(`${inputValue} terabytes = ${convertedValue} gigabytes`);
};
const gigabyte_to_terabyte=()=>{
  const convertedValue = parseFloat(inputValue) / 1024; // Convert gigabytes to terabytes
  setResult(`${inputValue} gigabytes = ${convertedValue} terabytes`);
};
const meterpersecond_to_kilometerperhour=()=>{
  const convertedValue = parseFloat(inputValue) / 1000; // Convert meters per second to kilometers per second
  setResult(`${inputValue} meters per second = ${convertedValue} kilometers per second`);
};
const kilometerperhour_to_meterpersecond=()=>{
  const convertedValue = parseFloat(inputValue) * 1000 / 3600; // Convert kilometers per hour to meters per second
  setResult(`${inputValue} kilometers per hour = ${convertedValue} meters per second`);
};
const meterperhour_to_kilometerperhour=()=>{
  const convertedValue = parseFloat(inputValue) / 1000; // Convert meters per hour to kilometers per hour
  setResult(`${inputValue} meters per hour = ${convertedValue} kilometers per hour`);
};
const kilometerperhour_to_meterperhpour=()=>{
  const convertedValue = parseFloat(inputValue) * 1000; // Convert kilometers per hour to meters per hour
  setResult(`${inputValue} kilometers per hour = ${convertedValue} meters per hour`);
};
const yard_to_meter=()=>{
  const convertedValue = parseFloat(inputValue) / 1.09361; // Convert yards to meters
  setResult(`${inputValue} yards = ${convertedValue} meters`);
};
const meter_to_yard=()=>{
  const convertedValue = parseFloat(inputValue) * 1.09361; // Convert meters to yards
  setResult(`${inputValue} meters = ${convertedValue} yards`);
};
const squareinch_to_squarcm=()=>{
  const convertedValue = parseFloat(inputValue) * 6.4516; // Convert square inches to square centimeters
  setResult(`${inputValue} square inches = ${convertedValue} square centimeters`);
};

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ImageBackground
        source={require('@/app/images/backgroundiamge.jpg')}
        style={styles.backgroundgradient}
      >
        <Text style={styles.texttittle}>CONVERTLE</Text>
        <TextInput style={styles.inputcontainer} placeholder="Enter your number here.." placeholderTextColor="black" keyboardType='numeric'
        onChangeText={text => setInputValue(text)} // Update state on input
        value={inputValue}/>
        <View style={styles.scrollviewcontainer}>
          <ScrollView>
            <TouchableOpacity style={styles.button} onPress={convertkilometertometer}>
              <Text style={styles.buttontext}>Kilometer to  Meter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}  onPress={meter_to_kilometer}>
              <Text style={styles.buttontext}>Meter to Kilometer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={centimeter_to_meter}>
              <Text style={styles.buttontext}>Centimeter to Meter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={meter_to_centimeter}>
              <Text style={styles.buttontext}>Meter to Centimeter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={millimeter_to_centimeter}>
              <Text style={styles.buttontext}>Millimeter to Centimeter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={centimeter_to_millimeter}>
              <Text style={styles.buttontext}>Centimeter to Millimeter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={inch_to_centimeter}>
              <Text style={styles.buttontext}>Inch to Centimeter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={centimeter_to_inch}>
              <Text style={styles.buttontext}>Centimeter to Inch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={foot_to_meter}>
              <Text style={styles.buttontext}>Foot to Meter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={meter_to_foot}>
              <Text style={styles.buttontext}>Meter to Foot</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={kilogram_to_gram}>
              <Text style={styles.buttontext}>Kilogram to Gram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={gram_to_kilogram}>
              <Text style={styles.buttontext}>Gram to Kilogram </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={milligram_to_gram}>
              <Text style={styles.buttontext}>Milligram to Gram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={gram_to_milligram}>
              <Text style={styles.buttontext}>Gram to Milligram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={pound_to_kilogram}>
              <Text style={styles.buttontext}>pound to kilogram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={kilogram_to_pound}>
              <Text style={styles.buttontext}>kilogram to pound</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={ounce_to_gram}>
              <Text style={styles.buttontext}>Ounce to Gram </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={gram_to_ounce}>
              <Text style={styles.buttontext}>Gram to Ounce</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={ton_to_kilogram}>
              <Text style={styles.buttontext}>Ton to Kilogram </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={kilogram_to_ton}>
              <Text style={styles.buttontext}>Kilogram to Ton</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={litre_to_millimeter}>
              <Text style={styles.buttontext}>Litre to Millimeter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={millimeter_to_litre}>
              <Text style={styles.buttontext}>Milimeter to litre</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={cubicmeter_to_litre}>
              <Text style={styles.buttontext}>cubic meter to litre</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={litre_to_cubicmeter}>
              <Text style={styles.buttontext}>Litre to cubic meter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={gallon_to_litre}>
              <Text style={styles.buttontext}>Gallon to litre</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={litre_to_gallon}>
              <Text style={styles.buttontext}>Litre to Gallon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={pint_to_millimeter}>
              <Text style={styles.buttontext}>pint to Millimeter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={millimeter_to_pint}>
              <Text style={styles.buttontext}>Millimeter to Pint</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={quart_to_litre}>
              <Text style={styles.buttontext}>Quart to Litre</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={litre_to_quart}>
              <Text style={styles.buttontext}>Litre to Quart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={byte_to_kilobyte}>
              <Text style={styles.buttontext}>Byte to Kilobyte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={kilobyte_to_byte}>
              <Text style={styles.buttontext}>Kilobyte to Byte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}onPress={megabyte_to_kilobyte}>
              <Text style={styles.buttontext}>Megabyte to Kilobyte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={kilobyte_to_megabyte}>
              <Text style={styles.buttontext}>kilobyte to Megabyte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={gigabyte_to_megabyte}>
              <Text style={styles.buttontext}>Gigabyte to Megabyte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={megabyte_to_gigabyte}>
              <Text style={styles.buttontext}>Megabyte to Gigabyte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={terabyte_to_gigabyte}>
              <Text style={styles.buttontext}>Terabyte to Gigabyte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={gigabyte_to_terabyte}>
              <Text style={styles.buttontext}>Gigabyte to Terabyte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={meterpersecond_to_kilometerperhour}>
              <Text style={styles.buttontext}>ms-1 to Kmhr-1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={kilometerperhour_to_meterpersecond}>
              <Text style={styles.buttontext}>kmhr-1 to ms-1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={meterperhour_to_kilometerperhour}>
              <Text style={styles.buttontext}>mhr-1 to kmhr-1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}onPress={kilometerperhour_to_meterperhpour}>
              <Text style={styles.buttontext}>kmhr-1 to mhr-1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}onPress={yard_to_meter}>
              <Text style={styles.buttontext}> Yard to Meter </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={meter_to_yard}>
              <Text style={styles.buttontext}>Meter to Yard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={squareinch_to_squarcm}>
              <Text style={styles.buttontext}>Square Inch to Square cm</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.resultcontainer}>
        <Text style={styles.resulttext}>{result}</Text>
          </View>
          <TouchableOpacity style={styles.gobackbutton}  onPress={() => navigation.navigate('index')}>
            <Text style ={styles.gobacktext}>Go Back </Text>
          </TouchableOpacity>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  backgroundgradient: {
    flex: 1,
    resizeMode: 'cover',
  },
  texttittle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 100,
    paddingLeft: 65,
    paddingBottom: 0,
  },
  enteryournumber: {
    paddingLeft: 65,
    fontSize: 25,
    color: '#02200D',
    marginLeft:20,
    marginTop: 10, // Added to create space between title and subtitle
  },
  inputcontainer: {
    width: 300,
    height: 58,
    fontWeight:'bold',
    fontSize:17,
    backgroundColor: 'rgba(255, 255, 255, 0.48)',
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 4,
    borderRadius: 15,
    paddingHorizontal: 10,
    color: 'white',
    marginTop: 15, // Aligns the TextInput with the subtitle
    alignSelf: 'center', // Centers the TextInput horizontally
    paddingRight: 50,
    paddingLeft: 50,
  },
  subtittle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 10,
    paddingLeft: 100,
    paddingBottom: 0,
  },
  scrollviewcontainer:{
    marginTop: 20,
    marginBottom:20,
    marginHorizontal: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Slightly transparent white background
    borderRadius: 15,
    padding: 10,
    borderWidth: 4,
    borderColor:'white',
    height:300,
  },
  button:{
    backgroundColor: '#02200D', // Button color (matching the color in the image)
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttontext:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultcontainer:{
    marginTop: 20,
    marginHorizontal: 30,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
  },
  resulttext:{
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  gobackbutton:{
    marginTop: 20,
    marginHorizontal: 30,
    padding: 20,
    backgroundColor: '#02200D',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
  },
  gobacktext:{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },

});
