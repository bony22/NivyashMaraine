import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity, Pressable, ImageBackground, Alert, ToastAndroid } from 'react-native'
import { Card, Left, CardItem, Item, Input, Label, Button, Right, Container, Icon, Picker, Textarea } from 'native-base';
import moment from 'moment';
import YardPicker from '../Component/YardPicker';


const { height, width } = Dimensions.get("window")
export default class Yard extends Component {
  constructor(props) {
    super(props);
    this.state = {

      picker_value: [
        { value: 'PM' },
        { value: 'TM' },

      ],
      picker_value1: [
        { value: '4-5' },
        { value: '3-4' },
        { value: '2-3' },
        { value: '1-2' },
        { value: '0' },

      ]
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={styles.Upper}>
          <Pressable onPress={() => this.props.navigation.navigate('NewTab')}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 18, marginLeft: 15 }}>
              <Icon name="ios-arrow-back" type='Ionicons'
                style={{ color: "#ffffff", fontSize: 25, }} />
            </View>
          </Pressable>
          <View style={{ width: '60%', marginTop: 18, }}>
            <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>Yard</Text>
          </View>

        </View>


        <ScrollView style={{ width: '100%' }}>
          <View style={{
            width: '100%', backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          >



            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.5 </Text>

            </View>



            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject

                                    </Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    Emergency Preparedness


                                    </Text>


                </View>






                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 155, }}>

                  <Text numberOfLines={4} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10 }}>
                    FFA equipment inclduing fire hoses, fire extinguishers in readiness.
                  </Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Medical- First aid kit in location and Hospital facility is prepared with emergency kit.</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Oil Spill- Oil spill kits in vicinity to deal with spillage of hazadous materials.




                                    </Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Probable acts of nature- System of monitoring of weather or information source for natural calamity.




                                    </Text>


                </View>



              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                      <Text numberOfLines={2}
                        style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold', }}>
                        Grading

                                            </Text>

                    </View>





                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Photos

                                            </Text>



                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Nivyash Remarks



                                            </Text>



                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Yard Actions


                                            </Text>
                    </View>
                  </View>

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', height: 100, }}>

                    <YardPicker />

                  </View>


                  {/* LIFT ND SHIFT PICKER */}


                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <YardPicker />


                  </View>

                  {/* ihm er picker */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <YardPicker />

                  </View>

                  {/* loading er picker */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <YardPicker />

                  </View>


                </View>



              </ScrollView>



            </View>


            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.6 </Text>

            </View>


            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject

                      </Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    Fire and explosion prevention, detection and response</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10 }}>
                    Items are adequately stored in store rooms.</Text>

                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', marginTop: 38, height: 100 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    There is no Hot Work in vicinity of store rooms</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', marginTop: 15, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Emergency alarms are duly operational. </Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', marginTop: 15, height: 100 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Hot work only in designated production area only.

                 </Text>

                </View>



              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                      <Text numberOfLines={2}
                        style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold', }}>
                        Grading

                              </Text>

                    </View>





                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Photos

                              </Text>



                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Nivyash Remarks



                              </Text>



                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Yard Actions


                              </Text>
                    </View>
                  </View>

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                    <YardPicker />

                  </View>


                  {/* LIFT ND SHIFT PICKER */}


                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <YardPicker />


                  </View>

                  {/* ihm er picker */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <YardPicker />

                  </View>

                  {/* loading er picker */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <YardPicker />

                  </View>


                </View>



              </ScrollView>



            </View>


            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.4</Text>

            </View>







            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject

        </Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    Drums,container,pressure vessels (Gas Bottles)</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10 }}>
                    Gas bottles in use are protected against overheating (direct sunlight or nearby hotworks)
</Text>

                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 45 }}>
                    Storage and transportation carried with valve cap attached.
</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 45 }}>
                    Gas cylinders are adequately secured during transportation in upright position</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 45 }}>
                    Gas bottles or the cages are marked in a specific colour</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 45 }}>
                    Arrangement of stoarge room is adequate. </Text>





                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 45 }}>
                    Connectors, valves, hoses in good condition and are checked prior to use.



</Text>

                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 45 }}>
                    Bottles are used from upright position only and not lying down.


</Text>

                </View>





              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                      <Text numberOfLines={2}
                        style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold', }}>
                        Grading</Text>

                    </View>





                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Photos

                </Text>



                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Nivyash Remarks



                </Text>



                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Yard Actions


                </Text>
                    </View>
                  </View>

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                    <YardPicker />

                  </View>


                  {/* LIFT ND SHIFT PICKER */}


                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <YardPicker />


                  </View>

                  {/* ihm er picker */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <YardPicker />

                  </View>

                  {/* loading er picker */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <YardPicker />

                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <YardPicker />

                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <YardPicker />

                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <YardPicker />

                  </View>


                </View>



              </ScrollView>



            </View>


            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.6</Text>

            </View>



            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    Gear and equipment for rigging and materials handling</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10 }}>
                    Lifting gear in use is in visually good condition</Text>

                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 30 }}>
                    Plates are stored on imperbeable floor only.</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 30 }}>
                    Crane drivers exercise due care while loading-shifting and are guided by signal man.</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 30 }}>
                    Roads are kept clear of plates</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 30 }}>
                    Random checks to ensure safety features of Cranes are working</Text>





                </View>


              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                      <Text numberOfLines={2}
                        style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold', }}>
                        Grading</Text>

                    </View>





                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Photos

  </Text>



                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Nivyash Remarks



  </Text>



                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Yard Actions


  </Text>
                    </View>
                  </View>

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                    <YardPicker />

                  </View>


                  {/* LIFT ND SHIFT PICKER */}


                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <YardPicker />


                  </View>

                  {/* ihm er picker */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <YardPicker />

                  </View>

                  {/* loading er picker */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <YardPicker />

                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <YardPicker />

                  </View>





                </View>



              </ScrollView>



            </View>


            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.7</Text>

            </View>


            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    General </Text>


                </View>



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 35 }}>
                    Housekeeping and illumination in yard.</Text>



                </View>




              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                      <Text numberOfLines={2}
                        style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold', }}>
                        Grading</Text>

                    </View>





                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Photos

</Text>



                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Nivyash Remarks



</Text>



                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Yard Actions


</Text>
                    </View>
                  </View>

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                    <YardPicker />

                  </View>

                </View>



              </ScrollView>



            </View>



            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.9</Text>

            </View>






            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    General </Text>


                </View>



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 48 }}>
                    Health and Sanitaion is adequate. </Text>



                </View>




              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                      <Text numberOfLines={2}
                        style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold', }}>
                        Grading</Text>

                    </View>





                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Photos</Text>



                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Nivyash Remarks</Text>



                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Yard Actions</Text>
                    </View>
                  </View>

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                    <YardPicker />

                  </View>

                </View>



              </ScrollView>



            </View>

            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.10</Text>

            </View>



            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    General </Text>


                </View>



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 52 }}>
                    PPE matrix duly followed.</Text>



                </View>




              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                      <Text numberOfLines={2}
                        style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold', }}>
                        Grading</Text>

                    </View>





                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Photos</Text>



                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Nivyash Remarks</Text>



                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Yard Actions</Text>
                    </View>
                  </View>

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                    <YardPicker />

                  </View>

                </View>



              </ScrollView>



            </View>

            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.2.5</Text>

            </View>


            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    Hazardous material storage and handling </Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Hazardous wastes are stored in designated spaces only.</Text>



                </View>



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Duly appointed and trained workers are handling hazardous wastes.</Text>



                </View>


                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 52 }}>
                    Emergency containment items present in vicinity of storage area.</Text>



                </View>





              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                      <Text numberOfLines={2}
                        style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold', }}>
                        Grading</Text>

                    </View>





                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Photos</Text>



                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Nivyash Remarks</Text>



                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                      <Text style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold' }}>
                        Yard Actions</Text>
                    </View>
                  </View>

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                    <YardPicker />

                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                    <YardPicker />

                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                    <YardPicker />

                  </View>

                </View>



              </ScrollView>



            </View>















          </View>





          <View style={{ height: 50, width: width, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
            <TouchableOpacity

              style={{
                height: 50, width: '50%', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white',
                //   borderRadius:9,
                elevation: 5,
                backgroundColor: '#147BDF'
              }}>

              <Text style={{

                fontSize: 15,
                color: 'white',
                textAlign: 'center'
              }}>SUBMIT</Text>

            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  upperstyle: {
    height: 140,
    width: width - 90,
    // backgroundColor: 'red',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center'

  },
  headerstyle: {
    height: 150,
    width: width - 20,
    alignItems: 'center',
    justifyContent: 'center'


  },
  showtextstyle: {
    fontFamily: 'Changa-Bold',

    // color:'white',
    fontSize: 40

  },
  passwordContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    // borderColor:this.state.enteredText.length == 0 ? 'white' : '#1a237e',
    borderColor: '#1a237e',
    // paddingBottom: 10,
    height: 60,
    borderRadius: 30,
    marginTop: 5,
    alignItems: "center"
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Poppins-Medium'
  },
  backgroundview: {
    flex: 1,
    width: width

  },
  selectstyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#45be92',

    textDecorationLine: 'underline'

  },
  unselectstyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: 'black',
    marginLeft: 10



  },

  chooseButton: {
    borderBottomWidth: 1,
    backgroundColor: '#D6DBDF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 30,
    marginTop: 10,
    marginLeft: 5
  },

  Upper: {
    backgroundColor: '#147BDF',
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    elevation: 3
    // marginHorizontal: 15,
    // marginTop: 15,

    // marginVertical:5
  },

})
