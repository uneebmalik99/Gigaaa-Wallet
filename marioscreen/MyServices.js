import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    ImageBackground,

    FlatList,
    StatusBar,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import {

    Avatar,
   
} from 'react-native-paper';
import AppConstance, {
    deviceHeight,
    deviceWidth,
} from '../constance/AppConstance.js';
import BottomTabs from '../screens/BottomTabs.js';
import { Appbar, Card, ToggleButton,Switch } from 'react-native-paper';
import ToggleSwitch from 'toggle-switch-react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';

function MyServices({ navigation }) {
    const [status, setStatus] = React.useState('checked');
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const [data , setdata] = useState([

        {
            id:1,
        },
        {
            id:2
        },
        {
            id:1
        },
        {
            id:2
        },
        {
            id:9
        },
        {
            id:6
        }
    ])


    const [friendslist , setfriendslist] = useState([
        {
            id:1
        },
        {
            id:2
        },
        {
            id:1
        },
        {
            id:2
        }
    ])

    const onButtonToggle = value => {
        setStatus(status === 'checked' ? 'unchecked' : 'checked');
    };
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const renderFriendslist = () =>{
        return(

            <Avatar.Image
            source={{
                uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
            }}
            size={13}
        >
        </Avatar.Image>         )
    }
    const renderlist = () =>{
        return(<TouchableOpacity style={{borderWidth:0.5 , flex:0.5 ,alignSelf:'center', justifyContent:'center', borderRadius:10,marginBottom:10,marginHorizontal:5, padding:8, borderColor:'#D0D3D4' ,flexDirection:'row', backgroundColor:'#f4f4f5'}}>
                
            <View>

            <Image
                                    style={{ width: 75, height: 78,}} resizeMode='stretch' resizeMethod='resize'
                                    source={require('../Resources/Appicon.png')} />
            </View>

            <View style={{flexDirection:'column',marginLeft:10, marginTop:3, }}>

            <Text style={{fontSize:14}}>Services</Text>
            <Text style={{fontSize:12, color:'#f14057' }}>Utility</Text>
            <View style={{flexDirection:'row'}}>
            <Rating
              imageSize={10}

/>
<Text style={{fontSize:10}}>129</Text>
            

            </View>
            <Text style={{fontSize:10 , marginBottom:1,marginTop:3,}}>Friends using this:</Text>
            <FlatList
                    contentInsetAdjustmentBehavior="automatic"
                    data={friendslist}
                    horizontal={true}

                    renderItem={renderFriendslist}
                    keyExtractor={(item,id) => id.toString()}
                     />
            </View>

        </TouchableOpacity>
        );
    }
    return (
        <SafeAreaView style={{ flex: 1 , backgroundColor:'white'}}>
            {/* <View style={{ backgroundColor: 'white', width: '100%', height: deviceHeight * 0.08, paddingHorizontal: 13, flexDirection: 'column' }}>

                <View style={{ width: '100%', height: deviceHeight * 0.07, marginTop: 5, flexDirection: 'row' }}>

                    <View style={{ justifyContent: 'center', width: '100%', height: '100%', position: 'absolute' }}>
                        <TouchableOpacity
                            style={{ alignSelf: 'flex-start' }}
                            onPress={() => {
                                navigation.navigate('DrawerContent');
                            }}
                        >
                            <Image style={{ width: 21, height: 21, alignSelf: 'flex-start', resizeMode: 'contain' }} source={require('../images/Buttons_SideMenu.png')} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ justifyContent: 'center', width: '100%', height: '100%', position: 'absolute' }}>
                        <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold' }}>Service Store</Text>
                    </View>

                    <View style={{ justifyContent: 'center', width: '100%', height: '100%', position: 'absolute' }}>
                        <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>

                            <TouchableOpacity
                                style={{ alignSelf: 'flex-end', marginLeft: 40 }}

                            >
                                <Image style={{ width: 21, height: 21, alignSelf: 'center', resizeMode: 'contain', marginRight: 20 }} source={require('../images/bell.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View> */}
            {/* <View style={{ height: deviceHeight * 0.1, backgroundColor: 'white', width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ display: 'flex', flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: "space-between" }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('ServicesStore');
                        }}
                    >
                        <Text style={{ color: '#A6A8BA', fontSize: 15, fontWeight: 'bold' }}> Discover</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Categories');
                        }}>
                        <Text style={{ color: '#A6A8BA', fontWeight: 'bold', fontSize: 15 }}>Categories</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('MyServices');
                        }}>
                        <Text style={{ color: '#FE1459', fontWeight: 'bold', fontSize: 15 }}>My Services</Text>
                    </TouchableOpacity>
                </View>
            </View>
          */}

          <View style={{paddingHorizontal:10, backgroundColor:'white',flexDirection:'row', marginVertical:15, justifyContent:'space-between'}}>
          <TouchableOpacity style={{justifyContent:'center'}}>
                        <Text style={{ color: '#292F58', fontSize: 14 ,alignSelf:'center', fontWeight:'bold' }}>Active Services: 12</Text>
                    </TouchableOpacity>
                    <View style={{  justifyContent:'center', flexDirection: 'row' }}>
                        <TouchableOpacity style={{justifyContent:'center'}}>
                            <Text style={{ color: 'grey', alignSelf:'center',fontSize: 12 }}>Active/Desactivate All</Text>
                        </TouchableOpacity>
                        <Switch  style={{alignSelf:'center',marginLeft:5 }} value={isSwitchOn} onValueChange={onToggleSwitch}/>
                       
                    </View>
          </View>
          <View style={{paddingHorizontal:20, marginVertical:8}}>
                <TouchableOpacity style={{alignSelf:'flex-end' }}>
                    <Text style={{ color: '#4D7099', fontSize:14 }}>Filters</Text>
                </TouchableOpacity>
                </View>
            {/* <View style={{ backgroundColor: 'white',marginVertical:15 ,width:deviceWidth, justifyContent:'center'}}>
                <View style={{ width:'100%', display: 'flex', paddingHorizontal:10,backgroundColor:'red', flexDirection: 'row', height: deviceHeight * 0.04, justifyContent: 'space-between', alignSelf: 'center' }}>
                    <TouchableOpacity>
                        <Text style={{ color: '#292F58', fontSize: 14 ,alignSelf:'center', fontWeight:'bold' }}>Active Services: 12</Text>
                    </TouchableOpacity>
                    <View style={{ display: 'flex',justifyContent:'center',alignSelf:'center', flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Text style={{ color: 'grey', alignSelf:'center',fontSize: 11 }}>Active/Desactivate All</Text>
                        </TouchableOpacity>
                        <Switch  style={{width:20, height:20, }}  value={isSwitchOn} onValueChange={onToggleSwitch}/>
                       
                    </View>
                </View>
                <View style={{paddingHorizontal:20, marginTop:5}}>
                <TouchableOpacity style={{alignSelf:'flex-end' }}>
                    <Text style={{ color: '#4D7099', fontSize:12 }}>Filters</Text>
                </TouchableOpacity>
                </View>
            </View> */}


            <FlatList
                    contentInsetAdjustmentBehavior="automatic"
          
                    contentContainerStyle={{backgroundColor:'white', paddingHorizontal:5,  paddingBottom: 30}}
                    data={data}
                    renderItem={renderlist}
                    numColumns={2}

                    keyExtractor={(item,id) => id.toString()}
                     />
{/* 
<FlatList style={{margin:5}}
  data={data}
  numColumns={2}
  keyExtractor={(item, index) => item.id }
  renderItem={(item) => <Card image={item.item.gallery_image_url} text={item.item.name}/> }
/> */}


            {/* <View style={{ width: "100%", display: 'flex', backgroundColor: 'white', flexDirection: 'row', height: deviceHeight * 0.04, justifyContent: "flex-end", paddingRight: 30 }}>
                <TouchableOpacity>
                    <Text style={{ color: '#4D7099' }}>Filter</Text>
                </TouchableOpacity>
            </View> */}
            {/* <ScrollView>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: 'white', height: deviceHeight * 0.2 }}>
                    <View style={{ width: "49%", height: 130, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: "96%", flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 4, borderWidth: 0.1, height: '80%' }}>
                            <View style={{ alignSelf: 'center' }}>
                                <Image
                                    style={{ width: 80, height: 100, borderRadius: 10 }}
                                    source={require('../Resources/Appicon.png')} />
                            </View>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ color: '#2F2F34', fontSize: 17 }}>Service</Text>
                                <Text style={{ color: '#FE1459' }}>Utilitiy</Text>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Text>129</Text>
                                </View>
                                <Text style={{ fontSize: 11 }}>Friends using this:</Text>
                                <Image
                                    style={{ width: 60, resizeMode: 'cover', height: 20, borderRadius: 10 }}
                                    source={require('../images/friends.jpg')} />
                                <View style={{ paddingTop: 10 }}>

                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: "49%", height: 130, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: "96%", flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 4, borderWidth: 0.1, height: '80%' }}>
                            <View style={{ alignSelf: 'center' }}>
                                <Image
                                    style={{ width: 80, height: 100, borderRadius: 10 }}
                                    source={require('../Resources/Appicon.png')} />
                            </View>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ color: '#2F2F34', fontSize: 17 }}>Service</Text>
                                <Text style={{ color: '#FE1459' }}>Utilitiy</Text>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Text>129</Text>
                                </View>
                                <Text style={{ fontSize: 11 }}>Friends using this:</Text>
                                <Image
                                    style={{ width: 60, resizeMode: 'cover', height: 20, borderRadius: 10 }}
                                    source={require('../images/friends.jpg')} />
                                <View style={{ paddingTop: 10 }}>

                                </View>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: 'white', height: deviceHeight * 0.2 }}>
                    <View style={{ width: "49%", height: 130, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: "96%", flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 4, borderWidth: 0.1, height: '80%' }}>
                            <View style={{ alignSelf: 'center' }}>
                                <Image
                                    style={{ width: 80, height: 100, borderRadius: 10 }}
                                    source={require('../Resources/Appicon.png')} />
                            </View>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ color: '#2F2F34', fontSize: 17 }}>Service</Text>
                                <Text style={{ color: '#FE1459' }}>Utilitiy</Text>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Text>129</Text>
                                </View>
                                <Text style={{ fontSize: 11 }}>Friends using this:</Text>
                                <Image
                                    style={{ width: 60, resizeMode: 'cover', height: 20, borderRadius: 10 }}
                                    source={require('../images/friends.jpg')} />
                                <View style={{ paddingTop: 10 }}>

                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: "49%", height: 130, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: "96%", flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 4, borderWidth: 0.1, height: '80%' }}>
                            <View style={{ alignSelf: 'center' }}>
                                <Image
                                    style={{ width: 80, height: 100, borderRadius: 10 }}
                                    source={require('../Resources/Appicon.png')} />
                            </View>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ color: '#2F2F34', fontSize: 17 }}>Service</Text>
                                <Text style={{ color: '#FE1459' }}>Utilitiy</Text>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Text>129</Text>
                                </View>
                                <Text style={{ fontSize: 11 }}>Friends using this:</Text>
                                <Image
                                    style={{ width: 60, resizeMode: 'cover', height: 20, borderRadius: 10 }}
                                    source={require('../images/friends.jpg')} />
                                <View style={{ paddingTop: 10 }}>

                                </View>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: 'white', height: deviceHeight * 0.2 }}>
                    <View style={{ width: "49%", height: 130, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: "96%", flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 4, borderWidth: 0.1, height: '80%' }}>
                            <View style={{ alignSelf: 'center' }}>
                                <Image
                                    style={{ width: 80, height: 100, borderRadius: 10 }}
                                    source={require('../Resources/Appicon.png')} />
                            </View>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ color: '#2F2F34', fontSize: 17 }}>Service</Text>
                                <Text style={{ color: '#FE1459' }}>Utilitiy</Text>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Text>129</Text>
                                </View>
                                <Text style={{ fontSize: 11 }}>Friends using this:</Text>
                                <Image
                                    style={{ width: 60, resizeMode: 'cover', height: 20, borderRadius: 10 }}
                                    source={require('../images/friends.jpg')} />
                                <View style={{ paddingTop: 10 }}>

                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: "49%", height: 130, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: "96%", flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 4, borderWidth: 0.1, height: '80%' }}>
                            <View style={{ alignSelf: 'center' }}>
                                <Image
                                    style={{ width: 80, height: 100, borderRadius: 10 }}
                                    source={require('../Resources/Appicon.png')} />
                            </View>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ color: '#2F2F34', fontSize: 17 }}>Service</Text>
                                <Text style={{ color: '#FE1459' }}>Utilitiy</Text>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Text>129</Text>
                                </View>
                                <Text style={{ fontSize: 11 }}>Friends using this:</Text>
                                <Image
                                    style={{ width: 60, resizeMode: 'cover', height: 20, borderRadius: 10 }}
                                    source={require('../images/friends.jpg')} />
                                <View style={{ paddingTop: 10 }}>

                                </View>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: 'white', height: deviceHeight * 0.2 }}>
                    <View style={{ width: "49%", height: 130, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: "96%", flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 4, borderWidth: 0.1, height: '80%' }}>
                            <View style={{ alignSelf: 'center' }}>
                                <Image
                                    style={{ width: 80, height: 100, borderRadius: 10 }}
                                    source={require('../Resources/Appicon.png')} />
                            </View>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ color: '#2F2F34', fontSize: 17 }}>Service</Text>
                                <Text style={{ color: '#FE1459' }}>Utilitiy</Text>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Text>129</Text>
                                </View>
                                <Text style={{ fontSize: 11 }}>Friends using this:</Text>
                                <Image
                                    style={{ width: 60, resizeMode: 'cover', height: 20, borderRadius: 10 }}
                                    source={require('../images/friends.jpg')} />
                                <View style={{ paddingTop: 10 }}>

                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: "49%", height: 130, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: "96%", flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 4, borderWidth: 0.1, height: '80%' }}>
                            <View style={{ alignSelf: 'center' }}>
                                <Image
                                    style={{ width: 80, height: 100, borderRadius: 10 }}
                                    source={require('../Resources/Appicon.png')} />
                            </View>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ color: '#2F2F34', fontSize: 17 }}>Service</Text>
                                <Text style={{ color: '#FE1459' }}>Utilitiy</Text>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Text>129</Text>
                                </View>
                                <Text style={{ fontSize: 11 }}>Friends using this:</Text>
                                <Image
                                    style={{ width: 60, resizeMode: 'cover', height: 20, borderRadius: 10 }}
                                    source={require('../images/friends.jpg')} />
                                <View style={{ paddingTop: 10 }}>

                                </View>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: 'white', height: deviceHeight * 0.2 }}>
                    <View style={{ width: "49%", height: 130, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: "96%", flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 4, borderWidth: 0.1, height: '80%' }}>
                            <View style={{ alignSelf: 'center' }}>
                                <Image
                                    style={{ width: 80, height: 100, borderRadius: 10 }}
                                    source={require('../Resources/Appicon.png')} />
                            </View>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ color: '#2F2F34', fontSize: 17 }}>Service</Text>
                                <Text style={{ color: '#FE1459' }}>Utilitiy</Text>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Text>129</Text>
                                </View>
                                <Text style={{ fontSize: 11 }}>Friends using this:</Text>
                                <Image
                                    style={{ width: 60, resizeMode: 'cover', height: 20, borderRadius: 10 }}
                                    source={require('../images/friends.jpg')} />
                                <View style={{ paddingTop: 10 }}>

                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: "49%", height: 130, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: "96%", flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 4, borderWidth: 0.1, height: '80%' }}>
                            <View style={{ alignSelf: 'center' }}>
                                <Image
                                    style={{ width: 80, height: 100, borderRadius: 10 }}
                                    source={require('../Resources/Appicon.png')} />
                            </View>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ color: '#2F2F34', fontSize: 17 }}>Service</Text>
                                <Text style={{ color: '#FE1459' }}>Utilitiy</Text>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Text>129</Text>
                                </View>
                                <Text style={{ fontSize: 11 }}>Friends using this:</Text>
                                <Image
                                    style={{ width: 60, resizeMode: 'cover', height: 20, borderRadius: 10 }}
                                    source={require('../images/friends.jpg')} />
                                <View style={{ paddingTop: 10 }}>

                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView> */}

            <BottomTabs />
        </SafeAreaView>
    )
}

export default MyServices