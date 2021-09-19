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
import AppConstance, {
    deviceHeight,
    deviceWidth,
} from '../constance/AppConstance.js';
import BottomTabs from '../screens/BottomTabs.js';
import { Appbar, Card } from 'react-native-paper';


function ServicesStore({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'white', width: '100%', height: deviceHeight * 0.08, paddingHorizontal: 13, flexDirection: 'column' }}>

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
                        <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 18, fontWeight: 'bold' }}>Service Store</Text>
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

            </View>
           
            <View style={{ height: deviceHeight * 0.1, backgroundColor: 'white', width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ display: 'flex', flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: "space-between" }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('ServicesStore');
                        }}
                    >
                        <Text style={{ color: '#FE1459', fontSize: 15, fontWeight: 'bold' }}>Discover</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Categories');
                        }}
                    >
                        <Text style={{ color: '#A6A8BA', fontWeight: 'bold', fontSize: 15 }}>Categories</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('MyServices');
                        }}
                    >
                        <Text style={{ color: '#A6A8BA', fontWeight: 'bold', fontSize: 15 }}>My Services</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: deviceHeight * 0.05, backgroundColor: 'white', width: "100%", alignItems: 'center', }}>
                <View style={{ display: 'flex', flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: "space-between" }}>
                    <TouchableOpacity >
                        <Text style={{ color: '#292F58', fontSize: 15, fontWeight: 'bold' }}>New Services</Text>
                    </TouchableOpacity>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>

                        <TouchableOpacity style={{ paddingRight: 15 }}
                            onPress={() => {
                                navigation.navigate('NewServices');
                            }}
                        >
                            <Text style={{ color: '#4D7099', fontWeight: 'bold', fontSize: 15 }}>See All</Text>
                        </TouchableOpacity>

                        <TouchableOpacity  >
                            <Image style={{ width: 21, height: 21, alignSelf: 'center', resizeMode: 'contain', marginRight: 20 }} source={require('../images/search.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('ShopingList');
                    }}>
                    <ImageBackground source={require('../Resources/studying.jpg')}
                        imageStyle={{ borderRadius: 15 }} style={{ height: 250, width: "100%" }}
                    >
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ alignSelf: 'center', backgroundColor: 'rgba(52, 52, 52, 0.8)', justifyContent: 'center', height: 250, borderRadius: 20, width: "50%" }}>
                                <View style={{ width: "80%", height: 240, padding: 2, alignSelf: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: 29, fontWeight: 'bold' }}>gigaaa new list of:</Text>
                                    <Text style={{ color: 'white', fontSize: 12 }}>Don’t forget anything with our new list service</Text>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Image style={{ width: 15, height: 15, alignSelf: 'center', resizeMode: 'contain', marginRight: 5 }} source={require('../images/star.png')} />
                                        <Image style={{ width: 15, height: 15, alignSelf: 'center', resizeMode: 'contain', marginRight: 5 }} source={require('../images/star.png')} />
                                        <Image style={{ width: 15, height: 15, alignSelf: 'center', resizeMode: 'contain', marginRight: 5 }} source={require('../images/star.png')} />
                                        <Image style={{ width: 15, height: 15, alignSelf: 'center', resizeMode: 'contain', marginRight: 5 }} source={require('../images/star.png')} />
                                        <Image style={{ width: 15, height: 15, alignSelf: 'center', resizeMode: 'contain', marginRight: 5 }} source={require('../images/star.png')} />
                                        <Text style={{ color: 'white', fontSize: 20 }}>129</Text>
                                    </View>
                                    <View style={{ width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ display: 'flex', flexDirection: 'row', width: '100%', alignSelf: 'center', justifyContent: "space-between" }}>
                                            <TouchableOpacity >
                                                <Text style={{ color: '#52FFEC', fontSize: 11, fontWeight: 'bold' }}>Shopping</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity >
                                                <Text style={{ color: '#52FFEC', fontWeight: 'bold', fontSize: 11 }}>Tasks</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity >
                                                <Text style={{ color: '#52FFEC', fontWeight: 'bold', fontSize: 11 }}>Articles</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 11 }}>Gigaaa development services</Text>
                                </View>

                            </View>
                            <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', width: "50%" }}>
                                <View style={{ width: "100%", height: "80%", justifyContent: 'flex-end', }}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <View style={{ display: 'flex', marginTop: 15, flexDirection: 'row' }}>
                                            <Image
                                                style={{ width: 30, height: 30, }}
                                                source={require('../images/Menu_gigaaa_Mic_Inactive.png')} />
                                            <Text style={{ color: 'white', width: 70, fontWeight: 'bold', fontSize: 10 }}>Created by gigaaa</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'white' }}>Friends using this:</Text>
                                            <Image
                                                style={{ width: 100, height: 30, borderRadius: 10 }}
                                                source={require('../images/friends.jpg')} />
                                        </View>

                                    </View>


                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                >
                    <View style={{ height: 120, backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 1, borderWidth: 0.1, width: 215, display: 'flex', flexDirection: 'row', margin: 5 }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                style={{ width: 100, height: 120, borderRadius: 10 }}
                                source={require('../Resources/Appicon.png')} />
                        </View>
                        <View style={{ height: 100, width: 100, alignSelf: 'center', margin: 10 }}>
                            <Text style={{ fontSize: 15 }}>Service</Text>
                            <Text style={{ fontSize: 15 }}>Utility</Text>
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

                        </View>

                    </View>
                    <View style={{ height: 120, backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 1, borderWidth: 0.1, width: 215, display: 'flex', flexDirection: 'row', margin: 5 }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                style={{ width: 100, height: 120, borderRadius: 10 }}
                                source={require('../Resources/Appicon.png')} />
                        </View>
                        <View style={{ height: 100, width: 100, alignSelf: 'center', margin: 10 }}>
                            <Text style={{ fontSize: 15 }}>Service</Text>
                            <Text style={{ fontSize: 15 }}>Utility</Text>
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

                        </View>

                    </View>
                    <View style={{ height: 120, backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 1, borderWidth: 0.1, width: 215, display: 'flex', flexDirection: 'row', margin: 5 }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                style={{ width: 100, height: 120, borderRadius: 10 }}
                                source={require('../Resources/Appicon.png')} />
                        </View>
                        <View style={{ height: 100, width: 100, alignSelf: 'center', margin: 10 }}>
                            <Text style={{ fontSize: 15 }}>Service</Text>
                            <Text style={{ fontSize: 15 }}>Utility</Text>
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

                        </View>

                    </View>

                </ScrollView>
                <View style={{ width: "90%", display: 'flex', flexDirection: 'row', height: deviceHeight * 0.04, justifyContent: 'space-between', alignSelf: 'center' }}>
                    <TouchableOpacity>
                        <Text style={{ color: '#292F58', fontSize: 20 }}>Games</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: '#4D7099', fontSize: 20 }}>See All</Text>
                    </TouchableOpacity>

                </View>

                <ImageBackground source={require('../Resources/friends.jpg')}
                    imageStyle={{ borderRadius: 15 }} style={{ height: 250, width: "100%" }}
                >
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ alignSelf: 'center', backgroundColor: 'rgba(52, 52, 52, 0.8)', justifyContent: 'center', height: 250, borderRadius: 20, width: "50%" }}>
                            <View style={{ width: "80%", height: 240, padding: 10, alignSelf: 'center' }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>It’s play time</Text>
                                <Text style={{ color: 'white', fontSize: 12 }}>Beat your friends and your score</Text>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Image style={{ width: 15, height: 15, alignSelf: 'center', resizeMode: 'contain', marginRight: 5 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 15, height: 15, alignSelf: 'center', resizeMode: 'contain', marginRight: 5 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 15, height: 15, alignSelf: 'center', resizeMode: 'contain', marginRight: 5 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 15, height: 15, alignSelf: 'center', resizeMode: 'contain', marginRight: 5 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 15, height: 15, alignSelf: 'center', resizeMode: 'contain', marginRight: 5 }} source={require('../images/star.png')} />
                                    <Text style={{ color: 'white', fontSize: 20 }}>88</Text>
                                </View>
                                <View style={{ width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%', alignSelf: 'center', justifyContent: "space-between" }}>
                                        <TouchableOpacity >
                                            <Text style={{ color: '#52FFEC', fontSize: 9, fontWeight: 'bold' }}>Entertainment</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity >
                                            <Text style={{ color: '#52FFEC', fontWeight: 'bold', fontSize: 9 }}>Friends</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity >
                                            <Text style={{ color: '#52FFEC', fontWeight: 'bold', fontSize: 9 }}>Words</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                        </View>
                        <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 10, width: "50%" }}>
                            <View style={{ width: "100%", height: "80%", justifyContent: 'flex-end', }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <View style={{ display: 'flex', marginTop: 10, flexDirection: 'row' }}>
                                        <Image
                                            style={{ width: 30, height: 30, }}
                                            source={require('../images/Menu_gigaaa_Mic_Inactive.png')} />
                                        <Text style={{ color: 'white', width: 70, fontWeight: 'bold', fontSize: 10 }}>Created by gigaaa</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'white' }}>Friends using this:</Text>
                                        <Image
                                            style={{ width: 100, height: 30, borderRadius: 10 }}
                                            source={require('../images/friends.jpg')} />
                                    </View>

                                </View>


                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                >
                    <View style={{ height: 120, backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 1, borderWidth: 0.1, width: 215, display: 'flex', flexDirection: 'row', margin: 5 }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                style={{ width: 100, height: 120, borderRadius: 10 }}
                                source={require('../Resources/AppGame.png')} />
                        </View>
                        <View style={{ height: 100, width: 100, alignSelf: 'center', margin: 10 }}>
                            <Text style={{ fontSize: 15 }}>Service</Text>
                            <Text style={{ fontSize: 15 }}>Utility</Text>
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

                        </View>

                    </View>
                    <View style={{ height: 120, backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 1, borderWidth: 0.1, width: 215, display: 'flex', flexDirection: 'row', margin: 5 }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                style={{ width: 100, height: 120, borderRadius: 10 }}
                                source={require('../Resources/AppGame.png')} />
                        </View>
                        <View style={{ height: 100, width: 100, alignSelf: 'center', margin: 10 }}>
                            <Text style={{ fontSize: 15 }}>Service</Text>
                            <Text style={{ fontSize: 15 }}>Utility</Text>
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

                        </View>

                    </View>
                    <View style={{ height: 120, backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 1, borderWidth: 0.1, width: 215, display: 'flex', flexDirection: 'row', margin: 5 }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                style={{ width: 100, height: 120, borderRadius: 10 }}
                                source={require('../Resources/AppGame.png')} />
                        </View>
                        <View style={{ height: 100, width: 100, alignSelf: 'center', margin: 10 }}>
                            <Text style={{ fontSize: 15 }}>Service</Text>
                            <Text style={{ fontSize: 15 }}>Utility</Text>
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

                        </View>

                    </View>

                </ScrollView>
            </ScrollView>
            <BottomTabs />
        </SafeAreaView>
    )
}

export default ServicesStore
