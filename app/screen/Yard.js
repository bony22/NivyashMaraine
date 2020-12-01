import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity, Pressable, ImageBackground, Alert, ToastAndroid, ToolbarAndroidComponent } from 'react-native'
import { Card, Left, CardItem, Item, Input, Label, Button, Right, Container, Icon, Picker, Textarea } from 'native-base';
import moment from 'moment';
import YardPicker from '../Component/YardPicker';
import Auth from '../service/Auth';
import YardColName from '../Component/YardColName';


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
        { value: 'Select' },
        { value: '4-5' },
        { value: '3-4' },
        { value: '2-3' },
        { value: '1-2' },
        { value: '0' },

      ],
      yard: {},
      status: false,
      grade11: '',
      remark11: '',
      action11: '',

      grade12: '',
      remark12: '',
      action12: '',

      grade13: '',
      remark13: '',
      action13: '',

      grade14: '',
      remark14: '',
      action14: '',



      grade21: '',
      remark21: '',
      action21: '',

      grade22: '',
      remark22: '',
      action22: '',

      grade23: '',
      remark23: '',
      action23: '',

      grade24: '',
      remark24: '',
      action24: '',



      grade31: '',
      remark31: '',
      action31: '',

      grade32: '',
      remark32: '',
      action32: '',

      grade33: '',
      remark33: '',
      action33: '',

      grade34: '',
      remark34: '',
      action34: '',

      grade35: '',
      remark35: '',
      action35: '',

      grade36: '',
      remark36: '',
      action36: '',

      grade37: '',
      remark37: '',
      action37: '',

      grade41: '',
      remark41: '',
      action41: '',

      grade42: '',
      remark42: '',
      action42: '',

      grade43: '',
      remark43: '',
      action43: '',

      grade44: '',
      remark44: '',
      action44: '',

      grade45: '',
      remark45: '',
      action45: '',


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

      grade82: '',
      remark82: '',
      action82: '',

      grade83: '',
      remark83: '',
      action83: '',
      yardwork:{
        status: false
      },











    };
  }


  async componentDidMount() {

    var yarddetail = await Auth.getYard();
    //  let date = moment().format("DD/MM/YY")+'yard'
    //  var userpwd = await Auth.getPassWord();
    // this.setstate({
    //     allwork:useremail,
    //     // yesno:allwork.

    // })

    this.setState({
      yardwork: yarddetail

    })

    console.log('yadrdddd', this.state.yardwork)
    //   console.log('usernameeeeeeeeee', this.state.user)


  }
  yardSubmit= async () => {
    setTimeout(() => {
      this.callYard()
    }, 500);
  }

  callYard = async () => {


    this.setState({

     

      yard: {
        status: true,
        
        grade11:this.state.grade11,
      remark11: this.state.remark11,
      action11:this.state.action11,

      grade12: this.state.grade12,
      remark12: this.state.remark12,
      action12: this.state.action12,

      grade13: this.state.grade13,
      remark13: this.state.remark13,
      action13: this.state.action13,

      grade14: this.state.grade14,
      remark14: this.state.remark14,
      action14: this.state.action14,



      grade21: this.state.grade21,
      remark21: this.state.remark21,
      action21:this.state.action21 ,

      grade22: this.state.grade22,
      remark22:this.state.remark22 ,
      action22: this.state.action22,

      grade23: this.state.grade23,
      remark23: this.state.remark23,
      action23: this.state.action23,

      grade24:this.state.grade24,
      remark24:this.state.remark24,
      action24:this.state.action24,



      grade31: this.state.grade31,
      remark31: this.state.remark31,
      action31:this.state.action31 ,

      grade32: this.state.grade32,
      remark32: this.state.remark32,
      action32: this.state.action32,

      grade33:this.state.grade33 ,
      remark33:this.state.remark33 ,
      action33:this.state.action33,

      grade34:this.state.grade34,
      remark34:this.state.remark34,
      action34:this.state.action34,

      grade35:this.state.grade35,
      remark35:this.state.remark35,
      action35:this.state.action35,

      grade36:this.state.grade36,
      remark36:this.state.remark36,
      action36:this.state.action36,

      grade37:this.state.grade37,
      remark37:this.state.remark37,
      action37:this.state.action37,

      grade41:this.state.grade41,
      remark41:this.state.remark41 ,
      action41:this.state.action41 ,

      grade42:this.state.grade42,
      remark42: this.state.remark42,
      action42: this.state.action42,

      grade43: this.state.grade43,
      remark43:this.state.remark43,
      action43:this.state.action43,

      grade44:this.state.grade44,
      remark44:this.state.remark44,
      action44:this.state.action44,

      grade45:this.state.grade45,
      remark45:this.state.remark45,
      action45:this.state.action45 ,


      grade51:this.state.grade51,
      remark51:this.state.remark51 ,
      action51:this.state.action51,

      grade61:this.state.grade61 ,
      remark61:this.state.remark61,
      action61:this.state.action61,

      grade71:this.state.grade71,
      remark71:this.state.remark71,
      action71:this.state.action71,


      grade81:this.state.grade81 ,
      remark81: this.state.remark81,
      action81: this.state.action81,

      grade82: this.state.grade82,
      remark82:this.state.remark82 ,
      action82: this.state.action82,

      grade83: this.state.grade83,
      remark83:this.state.remark83,
      action83:this.state.action83 ,

        
      }


    })

    
    // if (this.state.status != true) {
     
      console.log('input dataaaa', this.state.yard)


      await Auth.setYard(this.state.yard);
      let result = await Auth.getYard()
      this.setState({
        yardwork: result,
        // status:true,
      })
      console.log('objectcgnnnnnnnnnnnnnnnnnnnn', this.state.yardwork)
      ToastAndroid.show('data is saved and submitted seccessfully for this day!!!', ToastAndroid.SHORT);
    // }
    // else {

    //   ToastAndroid.show('data is already inserted for this day!!!', ToastAndroid.SHORT);
    // }

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
                HKC convention ref no. : 3.3.5 
              </Text>

            </View>



            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center',marginTop:25 }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject
                  </Text>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Emergency Preparedness
                  </Text>



                </View>

                {/* <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Emergency Preparedness
                  </Text>


                </View> */}






                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', height: 155, }}>

                  <Text numberOfLines={4} style={{ fontFamily: 'Changa-Medium', fontSize: 13,  }}>
                    FFA equipment inclduing fire hoses, fire extinguishers in readiness.
                  </Text>


                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5} style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Medical- First aid kit in location and Hospital facility is prepared with emergency kit.</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Oil Spill- Oil spill kits in vicinity to deal with spillage of hazadous materials.




                                    </Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5} style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Probable acts of nature- System of monitoring of weather or information source for natural calamity.




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
                    {/* //////////// */}

                    {/* <YardPicker /> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100 }}>

                        <View style={{
                          height: 35, width: 90, justifyContent: 'center',
                          //  marginBottom: 13,
                           marginLeft: 15,
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
                        {/* <Text>{this.state.grade11}</Text> */}

                      </View>





                      {/* <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100 }}>

                        <View style={{ height: 50, width: '100%', flexDirection: 'row', }}>

                          <View style={{ width: '70%', marginLeft: 10 }}>
                            <Button
                              //onPress={() => this.imageHandler()}
                              style={styles.chooseButton}
                            >
                              <Text style={{ color: '#000' }}>Choose File</Text>
                            </Button>
                          </View>
                        </View>
                      </View> */}


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


                  {/* LIFT ND SHIFT PICKER */}


                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

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
                            onValueChange={(value) => this.setState({ grade12: value })}
                            selectedValue={this.state.grade12}
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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
                          onChangeText={(value) => this.setState({ remark12: value })}
                          value={this.state.remark12}

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
                          onChangeText={(value) => this.setState({ action12: value })}
                          value={this.state.action12}

                        />

                      </View>
                    </View>


                  </View>

                  {/* ihm er picker */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

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
                            textStyle={{ fontSize: 12, fontFamily: 'Changa-Medium', color: 'black' }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{ width: '100%', color: 'black', height: 30, fontFamily: 'Changa-Medium' }}
                            // selectedValue={this.state.selected}
                            // onValueChange={this.onValueChange.bind(this)}
                            onValueChange={(value) => this.setState({ grade13: value })}
                            selectedValue={this.state.grade13}
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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
                          onChangeText={(value) => this.setState({ remark13: value })}
                          value={this.state.remark13}

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
                          onChangeText={(value) => this.setState({ action13: value })}
                          value={this.state.action13}

                        />

                      </View>
                    </View>

                  </View>

                  {/* loading er picker */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

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
                            onValueChange={(value) => this.setState({ grade14: value })}
                            selectedValue={this.state.grade14}
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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
                          onChangeText={(value) => this.setState({ remark14: value })}
                          value={this.state.remark14}

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
                          onChangeText={(value) => this.setState({ action14: value })}
                          value={this.state.action14}

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
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.6 </Text>

            </View>
            <View style={{height:10}}></View>


            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject

                      </Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Fire and explosion prevention, detection and response</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={5} style={{ fontFamily: 'Changa-Medium', fontSize: 13,  }}>
                    Items are adequately stored in store rooms.</Text>

                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', marginTop: 38, height: 100 }}>

                  <Text numberOfLines={5} style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    There is no Hot Work in vicinity of store rooms</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', marginTop: 15, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Emergency alarms are duly operational. </Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', marginTop: 15, height: 100 }}>

                  <Text numberOfLines={5} style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Hot work only in designated production area only.

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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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


                  {/* LIFT ND SHIFT PICKER */}


                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

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
                            onValueChange={(value) => this.setState({ grade22: value })}
                            selectedValue={this.state.grade22}
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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
                          onChangeText={(value) => this.setState({ remark22: value })}
                          value={this.state.remark22}

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
                          onChangeText={(value) => this.setState({ action22: value })}
                          value={this.state.action22}

                        />

                      </View>
                    </View>


                  </View>

                  {/* ihm er picker */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

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
                            onValueChange={(value) => this.setState({ grade23: value })}
                            selectedValue={this.state.grade23}
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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
                          onChangeText={(value) => this.setState({ remark23: value })}
                          value={this.state.remark23}

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
                          onChangeText={(value) => this.setState({ action23: value })}
                          value={this.state.action23}

                        />

                      </View>
                    </View>

                  </View>

                  {/* loading er picker */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

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
                            onValueChange={(value) => this.setState({ grade24: value })}
                            selectedValue={this.state.grade24}
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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
                          onChangeText={(value) => this.setState({ remark24: value })}
                          value={this.state.remark24}

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
                          onChangeText={(value) => this.setState({ action24: value })}
                          value={this.state.action24}

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
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.4</Text>

            </View>

            <View style={{height:10}}></View>







            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject

        </Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Drums,container,pressure vessels (Gas Bottles)</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={5} style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Gas bottles in use are protected against overheating (direct sunlight or nearby hotworks)
</Text>

                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5} style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 45 }}>
                    Storage and transportation carried with valve cap attached.
</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 45 }}>
                    Gas cylinders are adequately secured during transportation in upright position</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 45 }}>
                    Gas bottles or the cages are marked in a specific colour</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5} style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 45 }}>
                    Arrangement of stoarge room is adequate. </Text>





                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5} style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 45 }}>
                    Connectors, valves, hoses in good condition and are checked prior to use.



</Text>

                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5} style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 45 }}>
                    Bottles are used from upright position only and not lying down.


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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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


                  {/* LIFT ND SHIFT PICKER */}


                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

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
                            onValueChange={(value) => this.setState({ grade32: value })}
                            selectedValue={this.state.grade32}
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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
                          onChangeText={(value) => this.setState({ remark32: value })}
                          value={this.state.remark32}

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
                          onChangeText={(value) => this.setState({ action32: value })}
                          value={this.state.action32}

                        />

                      </View>
                    </View>


                  </View>

                  {/* ihm er picker */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

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
                            onValueChange={(value) => this.setState({ grade33: value })}
                            selectedValue={this.state.grade33}
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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
                          onChangeText={(value) => this.setState({ remark33: value })}
                          value={this.state.remark33}

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
                          onChangeText={(value) => this.setState({ action33: value })}
                          value={this.state.action33}

                        />

                      </View>
                    </View>

                  </View>

                  {/* loading er picker */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

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
                            onValueChange={(value) => this.setState({ grade34: value })}
                            selectedValue={this.state.grade34}
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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
                          onChangeText={(value) => this.setState({ remark34: value })}
                          value={this.state.remark34}

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
                          onChangeText={(value) => this.setState({ action34: value })}
                          value={this.state.action34}

                        />

                      </View>
                    </View>

                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

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
                            onValueChange={(value) => this.setState({ grade35: value })}
                            selectedValue={this.state.grade35}
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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
                          onChangeText={(value) => this.setState({ remark35: value })}
                          value={this.state.remark35}

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
                          onChangeText={(value) => this.setState({ action35: value })}
                          value={this.state.action35}

                        />

                      </View>
                    </View>

                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

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
                            onValueChange={(value) => this.setState({ grade36: value })}
                            selectedValue={this.state.grade36}
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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
                          onChangeText={(value) => this.setState({ remark36: value })}
                          value={this.state.remark36}

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
                          onChangeText={(value) => this.setState({ action36: value })}
                          value={this.state.action36}

                        />

                      </View>
                    </View>

                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, height: 100 }}>

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
                            onValueChange={(value) => this.setState({ grade37: value })}
                            selectedValue={this.state.grade37}
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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
                          onChangeText={(value) => this.setState({ remark37: value })}
                          value={this.state.remark37}

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
                          onChangeText={(value) => this.setState({ action37: value })}
                          value={this.state.action37}

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
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.6</Text>

            </View>

            <View style={{height:10}}></View>



            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text numberOfLines={3}
                    style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Gear and equipment for rigging and materials handling</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', height: 100 }}>

                  <Text numberOfLines={5} style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 30 }}>
                    Lifting gear in use is in visually good condition</Text>

                </View>




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', height: 100 }}>

                  <Text numberOfLines={5} style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 50 }}>
                    Plates are stored on imperbeable floor only.</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 50 }}>
                    Crane drivers exercise due care while loading-shifting and are guided by signal man.</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 68 }}>
                    Roads are kept clear of plates</Text>



                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', height: 100 }}>

                  <Text numberOfLines={5} style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 50   }}>
                    Random checks to ensure safety features of Cranes are working</Text>





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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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


                  {/* LIFT ND SHIFT PICKER */}


                  <View style={{ flexDirection: 'row', alignItems: 'center', height: 100 }}>

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
                            onValueChange={(value) => this.setState({ grade42: value })}
                            selectedValue={this.state.grade42}
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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
                          onChangeText={(value) => this.setState({ remark42: value })}
                          value={this.state.remark42}

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
                          onChangeText={(value) => this.setState({ action42: value })}
                          value={this.state.action42}

                        />

                      </View>
                    </View>


                  </View>

                  {/* ihm er picker */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', height: 100 }}>

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
                            onValueChange={(value) => this.setState({ grade43: value })}
                            selectedValue={this.state.grade43}
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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
                          onChangeText={(value) => this.setState({ remark43: value })}
                          value={this.state.remark43}

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
                          onChangeText={(value) => this.setState({ action43: value })}
                          value={this.state.action43}

                        />

                      </View>
                    </View>

                  </View>

                  {/* loading er picker */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', height: 100 }}>

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
                            onValueChange={(value) => this.setState({ grade44: value })}
                            selectedValue={this.state.grade44}
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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
                          onChangeText={(value) => this.setState({ remark44: value })}
                          value={this.state.remark44}

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
                          onChangeText={(value) => this.setState({ action44: value })}
                          value={this.state.action44}

                        />

                      </View>
                    </View>

                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', height: 100 }}>

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
                            onValueChange={(value) => this.setState({ grade45: value })}
                            selectedValue={this.state.grade45}
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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
                          onChangeText={(value) => this.setState({ remark45: value })}
                          value={this.state.remark45}

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
                          onChangeText={(value) => this.setState({ action45: value })}
                          value={this.state.action45}

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
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.7</Text>

            </View>
            <View style={{height:10}}></View>


            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center',marginBottom:25 }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>

                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    General </Text>

                    


                </View>

                {/* <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center',marginBottom:60,borderWidth:1 }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    General </Text>


                </View> */}



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 35 }}>
                    Housekeeping and illumination in yard.</Text>



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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.9</Text>

            </View>

            <View style={{height:10}}></View>




            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', marginBottom:25}}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>

                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    General </Text>



                </View>

                {/* <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    General </Text>


                </View> */}



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 30}}>
                    Health and Sanitaion is adequate. </Text>



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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.4.10</Text>

            </View>


            <View style={{height:10}}></View>

            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center',marginBottom:25 }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>

                    
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    General </Text>



                </View>

                {/* <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    General </Text>


                </View> */}



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 40 }}>
                    PPE matrix duly followed.</Text>



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
                            textStyle={{ fontSize: 12, }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "white", fontSize: 15 }} />}
                            style={{
                              width: '100%', color: 'black', height: 30,
                              //  fontFamily: 'Changa-Medium'
                            }}
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
                        {/* <Text>{this.state.grade71}</Text> */}

                      </View>





                      <TouchableOpacity 
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }} >
                HKC convention ref no. : 3.3.2.5</Text>

            </View>
            <View style={{height:10}}></View>


            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>

                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Hazardous material storage and handling </Text>


                </View>

                {/* <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Hazardous material storage and handling </Text>


                </View> */}




                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginBottom:28}}>
                    Hazardous wastes are stored in designated spaces only.</Text>



                </View>



                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={5}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Duly appointed and trained workers are handling hazardous wastes.</Text>



                </View>


                <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', margin: 10, height: 100 }}>

                  <Text numberOfLines={2}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 52 }}>
                    Emergency containment items present in vicinity of storage area.</Text>



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
                            textStyle={{
                              fontSize: 12,
                              fontFamily: 'Changa-Medium',
                              color: 'black'
                            }}
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "black", fontSize: 15 }} />}
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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
                            onValueChange={(value) => this.setState({ grade82: value })}
                            selectedValue={this.state.grade82}
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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
                          onChangeText={(value) => this.setState({ remark82: value })}
                          value={this.state.remark82}

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
                          onChangeText={(value) => this.setState({ action82: value })}
                          value={this.state.action82}

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
                            onValueChange={(value) => this.setState({ grade83: value })}
                            selectedValue={this.state.grade83}
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
                                        style={{ justifyContent: 'center', alignItems: 'center',  width: 100,marginLeft:20 }}>

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
                          onChangeText={(value) => this.setState({ remark83: value })}
                          value={this.state.remark83}

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
                          onChangeText={(value) => this.setState({ action83: value })}
                          value={this.state.action83}

                        />

                      </View>
                    </View>

                  </View>

                </View>



              </ScrollView>



            </View>















          </View>


 {this.state.yardwork.status == false ?


          <View style={{ height: 50, width: '100%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
            <Pressable
               onPress={() => this.yardSubmit()}

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

            </Pressable>
          </View>
          :
          <View style={{
                        height: 50, width: width, backgroundColor: 'white', justifyContent: 'center',
                        alignItems: 'center', flexDirection: 'row',
                    }}>
                        <Pressable
                            // onPress={() => this.workplan()}
                            // disabled={this.state.status}

                            style={{
                                height: 50, width: '50%', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white',
                                //   borderRadius:9,
                                elevation: 5,
                                backgroundColor: '#147BDF',
                                opacity:.5
                            }}>

                            <Text style={{

                                fontSize: 15,
                                color: 'white',
                                textAlign: 'center'
                            }}>Already Submitted</Text>

                        </Pressable>

                    </View> 
                        } 


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
