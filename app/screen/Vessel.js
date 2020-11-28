import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity, Pressable, ImageBackground, Alert, ToastAndroid } from 'react-native'
import { Card, Left, CardItem, Item, Input, Label, Button, Right, Container, Icon, Picker, Textarea } from 'native-base';
import moment from 'moment';
import YardPicker from '../Component/YardPicker';
import Auth from '../service/Auth';
import YardColName from '../Component/YardColName';


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
        { value: 'Select' },
        { value: '4-5' },
        { value: '3-4' },
        { value: '2-3' },
        { value: '1-2' },
        { value: '0' },

      ],


      grade11: '',
      remark11: '',
      action11: '',



      grade21: '',
      remark21: '',
      action21: '',



      grade31: '',
      remark31: '',
      action31: '',



      grade41: '',
      remark41: '',
      action41: '',



      grade51: '',
      remark51: '',
      action51: '',




      grade61: '',
      remark61: '',
      action61: '',



      grade71: '',
      remark71: '',
      action71: '',



      grade81: '',
      remark81: '',
      action81: '',



      grade91: '',
      remark91: '',
      action91: '',



      grade101: '',
      remark101: '',
      action101: '',



      grade111: '',
      remark111: '',
      action111: '',

      grade112: '',
      remark112: '',
      action112: '',

      grade113: '',
      remark113: '',
      action113: '',

      grade114: '',
      remark114: '',
      action114: '',

      grade115: '',
      remark115: '',
      action115: '',

      grade116: '',
      remark116: '',
      action116: '',

      grade117: '',
      remark117: '',
      action117: '',



      grade121: '',
      remark121: '',
      action121: '',

      grade122: '',
      remark122: '',
      action122: '',

      grade123: '',
      remark123: '',
      action123: '',




      grade131: '',
      remark131: '',
      action131: '',



      grade141: '',
      remark141: '',
      action141: '',



      grade151: '',
      remark151: '',
      action151: '',


      grade152: '',
      remark152: '',
      action152: '',

      grade153: '',
      remark153: '',
      action153: '',

      grade154: '',
      remark154: '',
      action154: '',



      grade161: '',
      remark161: '',
      action161: '',

      grade162: '',
      remark162: '',
      action162: '',

      grade163: '',
      remark163: '',
      action163: '',

      grade164: '',
      remark164: '',
      action164: '',

      grade165: '',
      remark165: '',
      action165: '',

      grade166: '',
      remark166: '',
      action166: '',


      grade171: '',
      remark172: '',
      action173: '',

      vesselwork: {
        status: false
      },
      vessel: {},
      status: false,












    };
  }


  async componentDidMount() {

    var vesseldetail = await Auth.getVessel();
    //  let date = moment().format("DD/MM/YY")+'yard'
    //  var userpwd = await Auth.getPassWord();
    // this.setstate({
    //     allwork:useremail,
    //     // yesno:allwork.

    // })

    this.setState({
      vesselwork: vesseldetail

    })

    console.log('yadrdddd', this.state.vesselwork)
    //   console.log('usernameeeeeeeeee', this.state.user)


  }

  vesselSubmit= async () => {
    setTimeout(() => {
      this.vesselCall()
    }, 500);
  }

  vesselCall = async () => {


    this.setState({



      vessel: {
        status: true,
        grade11: this.state.grade11,
        remark11: this.state.remark11,
        action11: this.state.action11,



        grade21: this.state.grade21,
        remark21: this.state.remark21,
        action21: this.state.action21,



        grade31: this.state.grade31,
        remark31: this.state.remark31,
        action31: this.state.action31,



        grade41: this.state.grade41,
        remark41: this.state.remark41,
        action41: this.state.action41,



        grade51: this.state.grade51,
        remark51: this.state.remark51,
        action51: this.state.action51,




        grade61: this.state.grade61,
        remark61: this.state.remark61,
        action61: this.state.action61,



        grade71: this.state.grade71,
        remark71: this.state.remark71,
        action71: this.state.action71,



        grade81: this.state.grade81,
        remark81: this.state.remark81,
        action81: this.state.action81,



        grade91: this.state.grade91,
        remark91: this.state.remark91,
        action91: this.state.action91,



        grade101: this.state.grade101,
        remark101: this.state.remark101,
        action101: this.state.action101,



        grade111: this.state.grade111,
        remark111: this.state.remark111,
        action111: this.state.action111,

        grade112: this.state.grade112,
        remark112: this.state.remark112,
        action112: this.state.action112,

        grade113: this.state.grade113,
        remark113: this.state.remark113,
        action113: this.state.action113,

        grade114: this.state.grade114,
        remark114: this.state.remark114,
        action114: this.state.action114,

        grade115: this.state.grade115,
        remark115: this.state.remark115,
        action115: this.state.action115,

        grade116: this.state.grade116,
        remark116: this.state.remark116,
        action116: this.state.action116,

        grade117: this.state.grade117,
        remark117: this.state.remark117,
        action117: this.state.action117,



        grade121: this.state.grade121,
        remark121: this.state.remark121,
        action121: this.state.action121,

        grade122: this.state.grade122,
        remark122: this.state.remark122,
        action122: this.state.action122,

        grade123: this.state.grade123,
        remark123: this.state.remark123,
        action123: this.state.action123,




        grade131: this.state.grade131,
        remark131: this.state.remark131,
        action131: this.state.action131,



        grade141: this.state.grade141,
        remark141: this.state.remark141,
        action141: this.state.action141,



        grade151: this.state.grade151,
        remark151: this.state.remark151,
        action151: this.state.action151,


        grade152: this.state.grade152,
        remark152: this.state.remark152,
        action152: this.state.action152,

        grade153: this.state.grade153,
        remark153: this.state.remark153,
        action153: this.state.action153,

        grade154: this.state.grade154,
        remark154: this.state.remark154,
        action154: this.state.action154,



        grade161: this.state.grade161,
        remark161: this.state.remark161,
        action161: this.state.action161,

        grade162: this.state.grade162,
        remark162: this.state.remark162,
        action162: this.state.action162,

        grade163: this.state.grade163,
        remark163: this.state.remark163,
        action163: this.state.action163,

        grade164: this.state.grade164,
        remark164: this.state.remark164,
        action164: this.state.action164,

        grade165: this.state.grade165,
        remark165: this.state.remark165,
        action165: this.state.action165,

        grade166: this.state.grade166,
        remark166: this.state.remark166,
        action166: this.state.action166,


        grade171: this.state.grade171,
        remark172: this.state.remark172,
        action173: this.state.action173,




      }


    })


    // if (this.state.status != true) {

    console.log('input dataaaa', this.state.vessel)


    await Auth.setVessel(this.state.vessel);
    let result = await Auth.getVessel()
    this.setState({
      vesselwork: result,
      // status:true,
    })
    console.log('objectcgnnnnnnnnnnnnnnnnnnnn', this.state.vesselwork)
    // }
    // else {

    //   ToastAndroid.show('data is already inserted for this day!!!', ToastAndroid.SHORT);
    // }
    ToastAndroid.show('data is saved and submitted seccessfully for this day!!!', ToastAndroid.SHORT);

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
              borderWidth: 1, padding: 5
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.1 </Text>

            </View>

            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row', padding: 5

            }}
            >
              <Text style={{ fontSize: 15 }} >
                Subject :Prevention of adverse effects to human health  </Text>

            </View>



            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>

                {/* <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', alignSelf: 'center', }}>

                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                   </Text>


                </View> */}







                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 20 }}>Work in Enclosed Spaces</Text>
                </View>






                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', height: 100, }}>

                  <Text numberOfLines={4} style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginRight: 10 }}>
                    Every enclosed space in which work is taking place has been issued with a relevant work permit and JHA by Competent person for the day.

                  </Text>


                </View>
              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>

                  <YardColName/>
                  
                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', height: 100, }}>

                    {/* <YardPicker /> */}

                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade11: value })}
                            selectedValue={this.state.grade11}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
        placeholder='remarks'

        multiline={true}>

    </TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark11: value })}
                          value={this.state.remark11}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action11: value })}
                          value={this.state.action11}

                        />

                      </View>
                    </View>

                  </View>



                </View>



              </ScrollView>



            </View>


            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1, padding: 5
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.1.1 </Text>

            </View>
            <View style={{height:10}}></View>


            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold', }}>
                    Subject

                      </Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Work in Enclosed Spaces
</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={5} style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginRight: 10, }}>
                    Random verification to ascertain Safe for entry criteria is adequate inside enclosed space particularly for gas checks, emergency rescue, ventillation and lighting
</Text>

                </View>


              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>

                  <YardColName/>
                  

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade21: value })}
                            selectedValue={this.state.grade21}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
        placeholder='remarks'

        multiline={true}>

    </TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark21: value })}
                          value={this.state.remark21}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action21: value })}
                          value={this.state.action21}

                        />

                      </View>
                    </View>

                  </View>


                </View>



              </ScrollView>



            </View>


            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1, padding: 5
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.1.5</Text>

            </View>

            <View style={{height:10}}></View>





            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject

        </Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Work in Enclosed Spaces
</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={4} style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginRight: 10, }}>
                    Enclosed spaces are periodically monitored for gas checks by Competent person specifically after breaks.

</Text>

                </View>
              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>
                 
                 <YardColName/>

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade31: value })}
                            selectedValue={this.state.grade31}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
        placeholder='remarks'

        multiline={true}>

    </TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark31: value })}
                          value={this.state.remark31}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action31: value })}
                          value={this.state.action31}

                        />

                      </View>
                    </View>

                  </View>


                </View>



              </ScrollView>



            </View>


            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1, padding: 5
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.1.8</Text>

            </View>
            
            <View style={{height:10}}></View>


            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Work in Enclosed Spaces</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={3} style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginRight: 10,
                
                 }}>
                    Safe for entry certifiate adequately displayed. </Text>

                </View>



              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>
                  <YardColName />
                  

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade41: value })}
                            selectedValue={this.state.grade41}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
        placeholder='remarks'

        multiline={true}>

    </TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark41: value })}
                          value={this.state.remark41}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action41: value })}
                          value={this.state.action41}

                        />

                      </View>
                    </View>

                  </View>


                </View>



              </ScrollView>



            </View>


            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1, padding: 5
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.1.9</Text>

            </View>

            <View style={{height:10}}></View>


            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Work in Enclosed Spaces
 </Text>


                </View>



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Team working in enclosed space is under a fully trained supervisor.
</Text>



                </View>




              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>

                  <YardColName/>
                  

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade51: value })}
                            selectedValue={this.state.grade51}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
        placeholder='remarks'

        multiline={true}>

    </TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark51: value })}
                          value={this.state.remark51}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action51: value })}
                          value={this.state.action51}

                        />

                      </View>
                    </View>

                  </View>

                </View>



              </ScrollView>



            </View>



            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1, padding: 5
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.2</Text>

            </View>


            <View style={{height:10}}></View>





            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Safe for Hot Work
 </Text>


                </View>



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={4}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 48 }}>
                    Work permit and JHA are duly issued by Competent person for all areas of Hot Work.
 </Text>



                </View>




              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>

                  <YardColName/>
                 

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade61: value })}
                            selectedValue={this.state.grade61}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
        placeholder='remarks'

        multiline={true}>

    </TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark61: value })}
                          value={this.state.remark61}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action61: value })}
                          value={this.state.action61}

                        />

                      </View>
                    </View>

                  </View>

                </View>



              </ScrollView>



            </View>

            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1, padding: 5
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.2.1</Text>

            </View>

            <View style={{height:10}}></View>



            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Safe for Hot Work  </Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={4}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 52 }}>
                    Random verification to ascertain Hot work checks are effectively followed. </Text>



                </View>




              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>

                 <YardColName/>
                  

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade71: value })}
                            selectedValue={this.state.grade71}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
        placeholder='remarks'

        multiline={true}>

    </TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark71: value })}
                          value={this.state.remark71}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action71: value })}
                          value={this.state.action71}

                        />

                      </View>
                    </View>

                  </View>

                </View>



              </ScrollView>



            </View>


            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1, padding: 5
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.2.3</Text>

            </View>

            <View style={{height:10}}></View>


            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Safe for Hot Work
</Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 55 }}>
                    Periodic verification of work conditions by competent person and specifically after breaks.</Text>



                </View>


              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>

                  <YardColName/>
                 

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade81: value })}
                            selectedValue={this.state.grade81}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>




                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
        placeholder='remarks'

        multiline={true}>

    </TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark81: value })}
                          value={this.state.remark81}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action81: value })}
                          value={this.state.action81}

                        />

                      </View>
                    </View>

                  </View>



                </View>



              </ScrollView>



            </View>


            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1, padding: 5
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.2.4</Text>

            </View>


            <View style={{height:10}}></View>




            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Safe for Hot Work
</Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 30 }}>
                    Safe for Hot Work certifiate adequately displayed.

</Text>



                </View>


              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>

                  <YardColName/>
                 
                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade91: value })}
                            selectedValue={this.state.grade91}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
        placeholder='remarks'

        multiline={true}>

    </TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark91: value })}
                          value={this.state.remark91}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action91: value })}
                          value={this.state.action91}

                        />

                      </View>
                    </View>

                  </View>



                </View>



              </ScrollView>



            </View>



            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1, padding: 5
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.3</Text>

            </View>


            <View style={{height:10}}></View>




            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Safe for Hot Work
</Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 30 }}>
                    Adequate PPE and monitoring for personnel involved towards heavy metal exposure, respiratory protection.</Text>



                </View>


              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>

                  <YardColName/>
                 

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade101: value })}
                            selectedValue={this.state.grade101}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
        placeholder='remarks'

        multiline={true}>

    </TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark101: value })}
                          value={this.state.remark101}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action101: value })}
                          value={this.state.action101}

                        />

                      </View>
                    </View>

                  </View>

                </View>
              </ScrollView>

            </View>





            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1, padding: 5
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.4</Text>

            </View>



            <View style={{height:10}}></View>



            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Drums,container,pressure vessels
</Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 30 }}>
                    Gas bottles in use are protected against overheating (direct sunlight or neqarby hotworks)</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 30 }}>
                    Storage and transportation carried with valve cap attached.
</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 30 }}>
                    Gas cylinders are adequately secured during transportation in upright position

</Text>
                </View>


                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 25 }}>
                    Gas bottles or the cages are marked in a specific colour


</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 16 }}>
                    Arrangement of stoarge is adequate.



</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 30 }}>
                    Connectors, valves, hoses in good condition and are checked prior to use.



</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 25 }}>
                    Bottles are used from upright position only and not lying down.</Text>


                </View>


              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>
                  
                  <YardColName/>


                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade111: value })}
                            selectedValue={this.state.grade111}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
        placeholder='remarks'

        multiline={true}>

    </TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark111: value })}
                          value={this.state.remark111}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action111: value })}
                          value={this.state.action111}

                        />

                      </View>
                    </View>

                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade112: value })}
                            selectedValue={this.state.grade112}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
        placeholder='remarks'

        multiline={true}>

    </TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark112: value })}
                          value={this.state.remark112}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action112: value })}
                          value={this.state.action112}

                        />

                      </View>
                    </View>

                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade113: value })}
                            selectedValue={this.state.grade113}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>




                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
        placeholder='remarks'

        multiline={true}>

    </TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark113: value })}
                          value={this.state.remark113}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action114: value })}
                          value={this.state.action114}

                        />

                      </View>
                    </View>

                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade114: value })}
                            selectedValue={this.state.grade114}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>




                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
        placeholder='remarks'

        multiline={true}>

    </TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark114: value })}
                          value={this.state.remark114}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action114: value })}
                          value={this.state.action114}

                        />

                      </View>
                    </View>

                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade115: value })}
                            selectedValue={this.state.grade115}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
        placeholder='remarks'

        multiline={true}>

    </TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark115: value })}
                          value={this.state.remark115}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action115: value })}
                          value={this.state.action115}

                        />

                      </View>
                    </View>

                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade116: value })}
                            selectedValue={this.state.grade116}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark116: value })}
                          value={this.state.remark116}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action116: value })}
                          value={this.state.action116}

                        />

                      </View>
                    </View>


                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade117: value })}
                            selectedValue={this.state.grade117}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>




                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark117: value })}
                          value={this.state.remark116}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action117: value })}
                          value={this.state.action115}

                        />

                      </View>
                    </View>

                  </View>

                </View>
              </ScrollView>

            </View>



            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1, padding: 5
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.5</Text>

            </View>

            <View style={{height:10}}></View>


            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', }}>

                  <Text 
                  style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Prevention of falling from heights.

</Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13,marginTop:27 }}>
                    Deck edges, platforms suitably barricaded.



</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop:30}}>
                    Deck openings suitably barricaded and grilled to prevent inadvertent fall.



</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13,marginTop:30 }}>
                    Safety harness and Personal fall arrest blocks effectively used by workers.



</Text>



                </View>


              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>

                  <YardColName/>
                  
                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade121: value })}
                            selectedValue={this.state.grade121}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark121: value })}
                          value={this.state.remark121}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action121: value })}
                          value={this.state.action121}

                        />

                      </View>
                    </View>

                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade122: value })}
                            selectedValue={this.state.grade122}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark122: value })}
                          value={this.state.remark122}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action122: value })}
                          value={this.state.action122}

                        />

                      </View>
                    </View>

                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade123: value })}
                            selectedValue={this.state.grade123}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>




                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark123: value })}
                          value={this.state.remark123}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action123: value })}
                          value={this.state.action123}

                        />

                      </View>
                    </View>

                  </View>

                </View>
              </ScrollView>

            </View>



            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1, padding: 5
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.6</Text>

            </View>


            <View style={{height:10}}></View>






            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Prevention of falling from heights.
                  </Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Gear and equipment for rigging and materials handling
                  </Text>



                </View>





              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>

                  <YardColName/>
                 
                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade131: value })}
                            selectedValue={this.state.grade131}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark131: value })}
                          value={this.state.remark131}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action131: value })}
                          value={this.state.action131}

                        />

                      </View>
                    </View>

                  </View>


                </View>
              </ScrollView>

            </View>





            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1, padding: 5
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.7</Text>

            </View>


            <View style={{height:10}}></View>



            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Prevention of falling from heights.

</Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Gear and equipment for rigging and materials handling




</Text>



                </View>





              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>

                  <YardColName/>
                

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade141: value })}
                            selectedValue={this.state.grade141}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark141: value })}
                          value={this.state.remark141}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action141: value })}
                          value={this.state.action151}

                        />

                      </View>
                    </View>

                  </View>


                </View>
              </ScrollView>

            </View>




            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1, padding: 5
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.5</Text>

            </View>


            <View style={{height:10}}></View>




            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Emergency preparedness and Response
                  </Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    FFA including Fire extinguishers, Fire Hoses are adequately rigged in vicinity of work location.</Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    SCBA, First aid kits, and emeregncy evacuation stretcher, tripod are kept ready for use. </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    "Indications of location of first aid stations, fire control stations are adequately visible.evacuation routes"</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Audio Visual Emergency alarm is audible in all areas of work. </Text>
                </View>





              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>

                  <YardColName/>
                  
                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade151: value })}
                            selectedValue={this.state.grade151}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark151: value })}
                          value={this.state.remark151}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action151: value })}
                          value={this.state.action151}

                        />

                      </View>
                    </View>

                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade152: value })}
                            selectedValue={this.state.grade152}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark152: value })}
                          value={this.state.remark152}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action152: value })}
                          value={this.state.action152}

                        />

                      </View>
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade153: value })}
                            selectedValue={this.state.grade153}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark153: value })}
                          value={this.state.remark153}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action153: value })}
                          value={this.state.action153}

                        />

                      </View>
                    </View>

                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade154: value })}
                            selectedValue={this.state.grade154}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark154: value })}
                          value={this.state.remark154}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action154: value })}
                          value={this.state.action154}

                        />

                      </View>
                    </View>

                  </View>



                </View>
              </ScrollView>

            </View>





            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1, padding: 5
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.6</Text>

            </View>

            <View style={{height:10}}></View>



            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', }}>

                  <Text numberOfLines={4}
                    style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Fire and explosion prevention, detection and response</Text>
                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Flammable liquids , solids and gases are stored adequately so that they do not pose a fire hazard. </Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    NO SMOKING signs sufficinetly posted and implemeneted.</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Precautions for spaces towards No Naked lights , No Hot work efffectively implemented in areas which are not tested and deemed safe. </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Safe practises imlemented for monitoring areas during breaks to ensure gas connections are adequately shut and FIRE ROUNDS in arae where hot work was in progress. </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Fire extinguishers in use are sufficinet and adequate for the type of fire.</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Fire Pumps and Hoses are effectively deployable and in readiness.</Text>
                </View>





              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>

                  <YardColName/>
                  
                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade161: value })}
                            selectedValue={this.state.grade161}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
        placeholder='remarks'

        multiline={true}>

    </TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark161: value })}
                          value={this.state.remark161}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action161: value })}
                          value={this.state.action161}

                        />

                      </View>
                    </View>

                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade162: value })}
                            selectedValue={this.state.grade162}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>




                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
        placeholder='remarks'

        multiline={true}>

    </TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark162: value })}
                          value={this.state.remark162}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action162: value })}
                          value={this.state.action162}

                        />

                      </View>
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade163: value })}
                            selectedValue={this.state.grade163}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
        placeholder='remarks'

        multiline={true}>

    </TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark163: value })}
                          value={this.state.remark163}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action163: value })}
                          value={this.state.action163}

                        />

                      </View>
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade164: value })}
                            selectedValue={this.state.grade164}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>




                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
        placeholder='remarks'

        multiline={true}>

    </TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark164: value })}
                          value={this.state.remark164}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action164: value })}
                          value={this.state.action164}

                        />

                      </View>
                    </View>

                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade165: value })}
                            selectedValue={this.state.grade165}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark165: value })}
                          value={this.state.remark165}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action165: value })}
                          value={this.state.action165}

                        />

                      </View>
                    </View>

                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>
                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade166: value })}
                            selectedValue={this.state.grade166}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark166: value })}
                          value={this.state.remark166}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action166: value })}
                          value={this.state.action166}

                        />

                      </View>
                    </View>

                  </View>



                </View>
              </ScrollView>

            </View>



            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1, padding: 5
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.10</Text>

            </View>
            <View style={{height:10}}></View>

            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', }}>

                  <Text numberOfLines={4}
                    style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Fire and explosion prevention, detection and response
                  </Text>


                </View>



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    PPE matrix duly followed. </Text>



                </View>




              </View>

              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>

                  <YardColName/>

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{


                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                          // marginRight: 15,
                          //  justifyContent: 'flex-start',
                          alignItems: 'center',
                          // backgroundColor: '#1273DE',
                          // marginLeft: 20,
                          borderWidth: 1,
                          borderColor: 'grey',



                        }}>

                          <Picker
                            mode="dropdown"
                            placeholder="Type Of users"
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade171: value })}
                            selectedValue={this.state.grade171}
                          >




                            {
                              this.state.picker_value1.map((item, index) => {
                                return (
                                  <Picker.Item label={item.value} value={item.value} key={index} />
                                )
                              })
                            }



                          </Picker>


                        </View>

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:28 }}>

                                            <View style={{ height: 80, width: '100%', flexDirection: 'row', }}>

                                                <View style={{ width: '70%', }}>
                                                     <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                                                        {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                    
                                                        {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                                                    </ImageBackground>
                                                </View>
                                            </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>


                        {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark171: value })}
                          value={this.state.remark171}

                        />


                      </View>

                      <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <TextInput

                          style={{
                            marginBottom: 20, color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Yard Actions'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ action171: value })}
                          value={this.state.action171}

                        />

                      </View>
                    </View>

                  </View>

                </View>



              </ScrollView>



            </View>



          </View>
          {this.state.vesselwork.status == false ?

            <View style={{ height: 50, width: width, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
              <TouchableOpacity
                onPress={() => this.vesselSubmit()}

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
            </View> :
            <View style={{
              height: 50, width: width, backgroundColor: 'white', justifyContent: 'center',
              alignItems: 'center', flexDirection: 'row',
            }}>
              <View
                // onPress={() => this.workplan()}
                // disabled={this.state.status}

                style={{
                  height: 50, width: '50%', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white',
                  //   borderRadius:9,
                  elevation: 5,
                  backgroundColor: '#147BDF',
                  opacity: .5
                }}>

                <Text style={{

                  fontSize: 15,
                  color: 'white',
                  textAlign: 'center'
                }}>Already Submitted</Text>

              </View>

            </View>}

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

  selectphoto: {
    flex: 1,
    // height: undefined,
    // width: undefined
    width: 80,
    height: 50,
    // borderRadius: 100,
    //overflow: "hidden",
   // marginTop: 15,

},


})
