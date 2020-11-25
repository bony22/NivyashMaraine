import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity, Pressable, ImageBackground, Alert, ToastAndroid } from 'react-native'
import { Card, Left, CardItem, Item, Input, Label, Button, Right, Container, Icon, Picker, Textarea } from 'native-base';
import moment from 'moment';
import YardPicker from '../Component/YardPicker';


const { height, width } = Dimensions.get("window")
export default class Vessel extends Component {
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
            <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>Vessel</Text>
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
                HKC convention ref no. : 3.3.4.1 </Text>

            </View>

            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',

            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                Subject :Prevention of adverse effects to human health  </Text>

            </View>



            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>

                {/* <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                   </Text>


                </View> */}







                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>Work in Enclosed Spaces</Text>
                </View>






                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 155, }}>

                  <Text numberOfLines={4} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10 }}>
                    Every enclosed space in which work is taking place has been issued with a relevant work permit and JHA by Competent person for the day.

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
                HKC convention ref no. : 3.3.4.1.1 </Text>

            </View>


            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold', }}>
                    Subject

                      </Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    Work in Enclosed Spaces
</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10, marginTop: 35 }}>
                    Random verification to ascertain Safe for entry criteria is adequate inside enclosed space particularly for gas checks, emergency rescue, ventillation and lighting
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
                HKC convention ref no. : 3.3.4.1.5</Text>

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
                    Work in Enclosed Spaces
</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10, marginTop: 30 }}>
                    Enclosed spaces are periodically monitored for gas checks by Competent person specifically after breaks.

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
                HKC convention ref no. : 3.3.4.1.8</Text>

            </View>



            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    Work in Enclosed Spaces</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={2} style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginRight: 10, marginTop: 30 }}>
                    Safe for entry certifiate adequately displayed. </Text>

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
                HKC convention ref no. : 3.3.4.1.9</Text>

            </View>


            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    Work in Enclosed Spaces
 </Text>


                </View>



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 35, marginTop: 30 }}>
                    Team working in enclosed space is under a fully trained supervisor.
</Text>



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
                HKC convention ref no. : 3.3.4.2</Text>

            </View>






            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    Safe for Hot Work
 </Text>


                </View>



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 48 }}>
                    Work permit and JHA are duly issued by Competent person for all areas of Hot Work.
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
                HKC convention ref no. : 3.3.4.2.1</Text>

            </View>



            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    Safe for Hot Work  </Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 52 }}>
                    Random verification to ascertain Hot work checks are effectively followed. </Text>



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
                HKC convention ref no. : 3.3.4.2.3</Text>

            </View>




            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    Safe for Hot Work
</Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 30 }}>
                    Periodic verification of work conditions by competent person and specifically after breaks.</Text>



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
                HKC convention ref no. : 3.3.4.2.4</Text>

            </View>







            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    Safe for Hot Work
</Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 30 }}>
                    Safe for Hot Work certifiate adequately displayed.

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
                HKC convention ref no. : 3.3.4.3</Text>

            </View>







            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    Safe for Hot Work
</Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 30 }}>
                    Adequate PPE and monitoring for personnel involved towards heavy metal exposure, respiratory protection.</Text>



                </View>


              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                      <Text
                        style={{ fontFamily: 'Changa-Medium', fontSize: 15, fontWeight: 'bold', marginTop: 10 }}>
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
                HKC convention ref no. : 3.3.4.4</Text>

            </View>




            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold', }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold', borderWidth: 1 }}>
                    Drums,container,pressure vessels</Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginBottom: 80 }}>
                    Gas bottles in use are protected against overheating (direct sunlight or neqarby hotworks)</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginBottom: 30 }}>
                    Storage and transportation carried with valve cap attached.
</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Gas bottles or the cages are marked in a specific colour
</Text>



                </View>


                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 50 }}>
                    Arrangement of stoarge is adequate.
</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 50 }}>
                    Connectors, valves, hoses in good condition and are checked prior to use.
</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 50 }}>
                    Bottles are used from upright position only and not lying down.
</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginTop: 80 }}>
                    Gas bottles in use are protected against overheating (direct sunlight or neqarby hotworks)</Text>



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
                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                    <YardPicker />

                  </View>
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



            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.5</Text>

            </View>


            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    Prevention of falling from heights.

</Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Deck edges, platforms suitably barricaded.



</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Deck openings suitably barricaded and grilled to prevent inadvertent fall.



</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Safety harness and Personal fall arrest blocks effectively used by workers.



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
                    Prevention of falling from heights.

</Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Gear and equipment for rigging and materials handling




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
                    Prevention of falling from heights.

</Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Gear and equipment for rigging and materials handling




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
                HKC convention ref no. : 3.3.5</Text>

            </View>







            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    Emergency preparedness and Response


</Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    FFA including Fire extinguishers, Fire Hoses are adequately rigged in vicinity of work location.</Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    SCBA, First aid kits, and emeregncy evacuation stretcher, tripod are kept ready for use. </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    "Indications of location of first aid stations, fire control stations are adequately visible.evacuation routes"</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Audio Visual Emergency alarm is audible in all areas of work. </Text>
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
                HKC convention ref no. : 3.3.6</Text>

            </View>





            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    Fire and explosion prevention, detection and response</Text>
                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Flammable liquids , solids and gases are stored adequately so that they do not pose a fire hazard. </Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    NO SMOKING signs sufficinetly posted and implemeneted.</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Precautions for spaces towards No Naked lights , No Hot work efffectively implemented in areas which are not tested and deemed safe. </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Safe practises imlemented for monitoring areas during breaks to ensure gas connections are adequately shut and FIRE ROUNDS in arae where hot work was in progress. </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Fire extinguishers in use are sufficinet and adequate for the type of fire.</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, }}>
                    Fire Pumps and Hoses are effectively deployable and in readiness.</Text>
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
                    Fire and explosion prevention, detection and response
 </Text>


                </View>



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 16, marginBottom:35 }}>
                    PPE matrix duly followed. </Text>



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
