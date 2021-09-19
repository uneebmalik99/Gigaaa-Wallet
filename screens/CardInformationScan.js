import React from 'react';
import {
    SafeAreaw,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Button,
    SafeAreaView
} from 'react-native';
import AppConstance, {
    deviceHeight,
    deviceWidth,
  } from '../constance/AppConstance.js';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Iconn from 'react-native-vector-icons/dist/Feather';
import BottomTabs from './BottomTabs';
import { Appbar, Card } from 'react-native-paper';
const CardInformationScan = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: 'white',flex: 1 , width:deviceWidth,height:deviceHeight}}>


<View style={{ width:'100%',height:deviceHeight*0.09, flexDirection:'row'}}>
<View style={{width:'10%'}}> 
</View>
<View style={{justifyContent:'center',width:'80%',height:'100%', }}>
<Text style={{alignSelf:'center',textAlignVertical:'center', fontSize:21,fontWeight:'bold'}}>Add Card</Text>
</View>

<View style={{justifyContent:'center',width:'10%', height:'100%'}}>
<TouchableOpacity
 onPress={() => {
                    navigation.navigate('CardImage');
                }}
>
<Image style={{width:26,height:26, alignSelf:'flex-end',marginRight:15, }} source={require('../images/Buttons_Close.png')} />
</TouchableOpacity>

</View>
{/* <Text style={{alignSelf:'flex-end',fontSize:20,fontWeight:'bold'}}>Ad Card</Text> */}



</View>
  
            

      <View style={{width:deviceWidth, paddingHorizontal:10}}>     
    
        <View style={{width:'100%', alignItems: 'center', justifyContent: 'center', top: 30 }}>
                <Text style={{ fontWeight: 'bold' ,marginBottom:10}}>
                    Scan the front side
                    </Text>
                <View 
                style={{ borderRadius:10,borderWidth:0.3, borderColor:'grey', width:'100%',height: 210 , justifyContent:'center'}}>
                    {/* <Card style={{  height:190, backgroundColor: '#FFFFFF', }}>

                    </Card> */}
                </View>

<TouchableOpacity
style={{marginTop:90}}
onPress={() => {
    navigation.navigate('CardInformation');
}}>
     <Text style={{ color: '#715DFF',}}> or Add Card Manually</Text>
     <View
                            style={{
                                borderBottomColor: '#715DFF',
                                borderBottomWidth: 1,
                            }}
                        />
</TouchableOpacity>

{/* Non Use able below TouchableOpacity tag */}
                    <TouchableOpacity
                    style={{marginTop:70}}
                        onPress={() => {
                            navigation.navigate('CardInformation');
                        }}>
                        <Text style={{ color: 'white',}}>
                            or Add Card Manually
                            </Text>
                        <View
                            style={{
                                borderBottomColor: 'white',
                                borderBottomWidth: 1,
                            }}
                        />
                    </TouchableOpacity>


            </View>

</View>
           
            <BottomTabs />
        </SafeAreaView>
    );
}

export default CardInformationScan;