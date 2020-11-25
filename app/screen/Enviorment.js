import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity, Pressable, ImageBackground, Alert, ToastAndroid } from 'react-native'
import { Card, Left, CardItem, Item, Input, Label, Button, Right, Container, Icon, Picker, Textarea } from 'native-base';
import moment from 'moment';
import YardPicker from '../Component/YardPicker';


const { height, width } = Dimensions.get("window")
export default class Enviorment extends Component {
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
            <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>Enviorment</Text>
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
                HKC convention ref no. : 3.4.2 </Text>

            </View>



            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    IHM Management-General</Text>


                </View>






                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 155, }}>

                  <Text numberOfLines={4} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10 }}>
                    IHM listed materials are unambigoiusly marked and understood by workers working in vicinity.
                  </Text>

                </View>


                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Removal , labelling, storage, segregation, transport, treatment and disposal in accordance with procedures laid down in SRFP. </Text>


                </View>


                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Substances identified as PCHM- Potentially containing hazardous materials are handled in accordnace with laid down procedures. '
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
                HKC convention ref no. : 3.4.2.4 </Text>

            </View>


            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject

                      </Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    IHM Management-General</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10, marginTop: 30 }}>
                    Removal, handling and remediation adequate.</Text>

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
                HKC convention ref no. : 3.4.2.5 </Text>

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
                    IHM Management-General</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10, marginTop: 30 }}>
                    Storage and labelling after removal</Text>

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
                HKC convention ref no. : 3.4.2.6 </Text>

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
                    IHM Management-General</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10, marginTop: 30 }}>
                    Treatment, transportation and disposal</Text>

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
                HKC convention ref no. : 3.4.3.1 </Text>

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
                    IHM Management-General</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10, marginTop: 30 }}>
                    ASBESTOS Management adequate as per SRFP.</Text>

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
                HKC convention ref no. : 3.4.3.2 </Text>

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
                    IHM Management-General</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10, marginTop: 30 }}>
                    PCBS and material containing PCBS adequately removed in accordance with HKC requirements and SRFP procedures. </Text>

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
                HKC convention ref no. : 3.4.3.3</Text>

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
                    IHM Management-General</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10, marginTop: 30 }}>
                    Ozone depleting substances  adequately removed in accordance with HKC requirements and SRFP procedures. </Text>

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
                HKC convention ref no. : 3.4.3.4</Text>

            </View>





            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    IHM Management-General</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10, marginTop: 30 }}>
                    Paints and Coatings  adequately removed in accordance with HKC requirements and SRFP procedures. </Text>

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
                HKC convention ref no. : 3.4.4</Text>

            </View>





            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    IHM Management-General</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10, marginTop: 30 }}>
                    Prevention of adverse effects to the environment</Text>

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
                HKC convention ref no. : 3.4.4.1</Text>

            </View>





            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    IHM Management-General</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10, marginTop: 30 }}>
                    Spill prevention, control and countermeasures</Text>

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
                HKC convention ref no. : 3.4.4.2</Text>

            </View>





            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    IHM Management-General</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10, marginTop: 30 }}>
                    Storm-water pollution prevention</Text>

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
