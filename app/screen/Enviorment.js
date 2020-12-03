import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity, Pressable, ImageBackground, Alert, ToastAndroid } from 'react-native'
import { Card, Left, CardItem, Item, Input, Label, Button, Right, Container, Icon, Picker, Textarea } from 'native-base';
import moment from 'moment';
import YardPicker from '../Component/YardPicker';
import Auth from '../service/Auth';
import YardColName from '../Component/YardColName';
import ImagePicker from 'react-native-image-picker';



const { height, width } = Dimensions.get("window")
export default class Enviorment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourcePath: '',

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
      environmentwork: {},
      environment: {},
      status: false,
     




      grade11: '',
      remark11: '',
      action11: '',
      resourcePath11: '',


      grade12: '',
      remark12: '',
      action12: '',
      resourcePath12: '',


      grade13: '',
      remark13: '',
      action13: '',
      resourcePath13: '',

      grade21: '',
      remark21: '',
      action21: '',
      resourcePath21: '',

      grade31: '',
      remark31: '',
      action31: '',
      resourcePath31: '',


      grade41: '',
      remark41: '',
      action41: '',
      resourcePath41: '',


      grade51: '',
      remark51: '',
      action51: '',
      resourcePath51: '',


      grade61: '',
      remark61: '',
      action61: '',
      resourcePath61: '',


      grade71: '',
      remark71: '',
      action71: '',
      resourcePath71: '',



      grade81: '',
      remark81: '',
      action81: '',
      resourcePath81: '',


      grade91: '',
      remark91: '',
      action91: '',
      resourcePath91: '',

      grade101: '',
      remark101: '',
      action101: '',
      resourcePath101: '',

      grade111: '',
      remark111: '',
      action111: '',
      resourcePath111: '',



    };
  }




  async componentDidMount() {

    var environetail = await Auth.getEnvironment();
    //  let date = moment().format("DD/MM/YY")+'yard'
    //  var userpwd = await Auth.getPassWord();
    // this.setstate({
    //     allwork:useremail,
    //     // yesno:allwork.

    // })

    this.setState({
      environmentwork: environetail

    })

    console.log('environment', this.state.environmentwork)
    //   console.log('usernameeeeeeeeee', this.state.user)


  }


  environmentSubmit = async () => {


    this.setState({



      environment: {
        status: true,
        grade11: this.state.grade11,
        remark11: this.state.remark11,
        action11: this.state.action11,
        resourcePath11:this.state.resourcePath11,


        grade12: this.state.grade12,
        remark12: this.state.remark12,
        action12: this.state.action12,
        resourcePath12:this.state.resourcePath12,


        grade13: this.state.grade13,
        remark13: this.state.remark13,
        action13: this.state.action13,
        resourcePath13:this.state.resourcePath13,


        grade21: this.state.grade21,
        remark21: this.state.remark21,
        action21: this.state.action21,
        resourcePath21:this.state.resourcePath21,

        grade31: this.state.grade31,
        remark31: this.state.remark31,
        action31: this.state.action31,
        resourcePath31:this.state.resourcePath31,


        grade41: this.state.grade41,
        remark41: this.state.remark41,
        action41: this.state.action41,
        resourcePath41:this.state.resourcePath41,


        grade51: this.state.grade51,
        remark51: this.state.remark51,
        action51: this.state.action51,
        resourcePath51:this.state.resourcePath51,


        grade61: this.state.grade61,
        remark61: this.state.remark61,
        action61: this.state.action61,
        resourcePath61:this.state.resourcePath61,


        grade71: this.state.grade71,
        remark71: this.state.remark71,
        action71: this.state.action71,
        resourcePath71:this.state.resourcePath71,



        grade81: this.state.grade81,
        remark81: this.state.remark81,
        action81: this.state.action81,
        resourcePath81:this.state.resourcePath81,

        grade91: this.state.grade91,
        remark91: this.state.remark91,
        action91: this.state.action91,
        resourcePath91:this.state.resourcePath91,

        grade101: this.state.grade101,
        remark101: this.state.remark101,
        action101: this.state.action101,
        resourcePath101:this.state.resourcePath101,

        grade111: this.state.grade111,
        remark111: this.state.remark111,
        action111: this.state.action111,
        resourcePath111:this.state.resourcePath111,




      }


    })


    // if (this.state.status != true) {

    console.log('input dataaaa', this.state.environment)


    await Auth.setEnvironment(this.state.environment);
    let result = await Auth.getEnvironment()
    this.setState({
      environmentwork: result,
      // status:true,
    })
    console.log('objectcgnnnnnnnnnnnnnnnnnnnn', this.state.environmentwork)
    ToastAndroid.show('data is saved and submitted seccessfully for this day!!!', ToastAndroid.SHORT);
    // }
    // else {

    //   ToastAndroid.show('data is already inserted for this day!!!', ToastAndroid.SHORT);
    // }

  }

  callEnviron = async () => {
    setTimeout(() => {
      this.environmentSubmit()
    }, 500);
  }


  selectFile11 = async () => {
    var options = {
      title: 'Select Image',
      //   customButtons: [
      //     { 
      //       name: 'customOptionKey', 
      //       title: 'Choose file from Custom Option' 
      //     },
      //   ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath11: source,
        });
        console.log("imageeeeee", this.state.resourcePath11)
      }
    });
  };

  selectFile12 = async () => {
    var options = {
      title: 'Select Image',
      //   customButtons: [
      //     { 
      //       name: 'customOptionKey', 
      //       title: 'Choose file from Custom Option' 
      //     },
      //   ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath12: source,
        });
        console.log("imageeeeee", this.state.resourcePath12)
      }
    });
  };

  selectFile13 = async () => {
    var options = {
      title: 'Select Image',
      //   customButtons: [
      //     { 
      //       name: 'customOptionKey', 
      //       title: 'Choose file from Custom Option' 
      //     },
      //   ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath13: source,
        });
        console.log("imageeeeee", this.state.resourcePath13)
      }
    });
  };

  selectFile21 = async () => {
    var options = {
      title: 'Select Image',
      //   customButtons: [
      //     { 
      //       name: 'customOptionKey', 
      //       title: 'Choose file from Custom Option' 
      //     },
      //   ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath21: source,
        });
        console.log("imageeeeee", this.state.resourcePath21)
      }
    });
  };
  
  selectFile31 = async () => {
    var options = {
      title: 'Select Image',
      //   customButtons: [
      //     { 
      //       name: 'customOptionKey', 
      //       title: 'Choose file from Custom Option' 
      //     },
      //   ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath31: source,
        });
        console.log("imageeeeee", this.state.resourcePath31)
      }
    });
  };

  selectFile41 = async () => {
    var options = {
      title: 'Select Image',
      //   customButtons: [
      //     { 
      //       name: 'customOptionKey', 
      //       title: 'Choose file from Custom Option' 
      //     },
      //   ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath41: source,
        });
        console.log("imageeeeee", this.state.resourcePath41)
      }
    });
  };

  selectFile51 = async () => {
    var options = {
      title: 'Select Image',
      //   customButtons: [
      //     { 
      //       name: 'customOptionKey', 
      //       title: 'Choose file from Custom Option' 
      //     },
      //   ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath51: source,
        });
        console.log("imageeeeee", this.state.resourcePath51)
      }
    });
  };

  selectFile61 = async () => {
    var options = {
      title: 'Select Image',
      //   customButtons: [
      //     { 
      //       name: 'customOptionKey', 
      //       title: 'Choose file from Custom Option' 
      //     },
      //   ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath61: source,
        });
        console.log("imageeeeee", this.state.resourcePath61)
      }
    });
  };

  selectFile71 = async () => {
    var options = {
      title: 'Select Image',
      //   customButtons: [
      //     { 
      //       name: 'customOptionKey', 
      //       title: 'Choose file from Custom Option' 
      //     },
      //   ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath71: source,
        });
        console.log("imageeeeee", this.state.resourcePath71)
      }
    });
  };

  selectFile81 = async () => {
    var options = {
      title: 'Select Image',
      //   customButtons: [
      //     { 
      //       name: 'customOptionKey', 
      //       title: 'Choose file from Custom Option' 
      //     },
      //   ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath81: source,
        });
        console.log("imageeeeee", this.state.resourcePath81)
      }
    });
  };

  selectFile91 = async () => {
    var options = {
      title: 'Select Image',
      //   customButtons: [
      //     { 
      //       name: 'customOptionKey', 
      //       title: 'Choose file from Custom Option' 
      //     },
      //   ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath91: source,
        });
        console.log("imageeeeee", this.state.resourcePath91)
      }
    });
  };

  selectFile101 = async () => {
    var options = {
      title: 'Select Image',
      //   customButtons: [
      //     { 
      //       name: 'customOptionKey', 
      //       title: 'Choose file from Custom Option' 
      //     },
      //   ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath101: source,
        });
        console.log("imageeeeee", this.state.resourcePath101)
      }
    });
  };

  selectFile111 = async () => {
    var options = {
      title: 'Select Image',
      //   customButtons: [
      //     { 
      //       name: 'customOptionKey', 
      //       title: 'Choose file from Custom Option' 
      //     },
      //   ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath111: source,
        });
        console.log("imageeeeee", this.state.resourcePath111)
      }
    });
  };





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
              <Text style={{ fontWeight: 'bold', fontSize: 15, padding: 5 }} >
                HKC convention ref no. : 3.4.2 </Text>

            </View>



            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 65, }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold', }}>
                    Subject</Text>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    IHM Management-General</Text>


                </View>
                <View style={{ height: 15 }}></View>

                {/* <View style={{ justifyContent: 'center', alignItems: 'center', width: 80, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    IHM Management-General</Text>


                </View> */}






                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 100, }}>

                  <Text numberOfLines={4} style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    IHM listed materials are unambigoiusly marked and understood by workers working in vicinity.
                  </Text>

                </View>


                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 100 }}>

                  <Text numberOfLines={4} style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Removal , labelling, storage, segregation, transport, treatment and disposal in accordance with procedures laid down in SRFP. </Text>


                </View>


                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 100 }}>

                  <Text numberOfLines={4}
                    style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Substances identified as PCHM- Potentially containing hazardous materials are handled in accordnace with laid down procedures. '
                   </Text>
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



                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
                          borderBottomColor: 'black', borderBottomWidth: 1,
                        }}

                        placeholder='Grading'
                        placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                        multiline={true}
                        onChangeText={(value) => this.setState({ grade11: value })}
                        value={this.state.grade11}

                      />



                    </View>






                    <TouchableOpacity
                      onPress={() => this.selectFile11()}

                      style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                      <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                        <View style={{ width: '70%', }}>
                          <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                            {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}

                            <Image source={{ uri: this.state.resourcePath11.uri }}
            style={[styles.selectphoto]} resizeMode="cover" />

                            {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                          </ImageBackground>
                        </View>
                      </View>
                    </TouchableOpacity>


                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                      {/* <TextInput
        placeholder='remarks'

        multiline={true}>

    </TextInput> */}

                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
                          borderBottomColor: 'black', borderBottomWidth: 1,

                        }}

                        placeholder='Remarks'
                        placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                        multiline={true}
                        onChangeText={(value) => this.setState({ remark11: value })}
                        value={this.state.remark11}

                      />


                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
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


                  {/* LIFT ND SHIFT PICKER */}


                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}



                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
                          borderBottomColor: 'black', borderBottomWidth: 1,
                        }}

                        placeholder='Grading'
                        placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                        multiline={true}
                        onChangeText={(value) => this.setState({ grade12: value })}
                        value={this.state.grade12}

                      />
                    </View>






                    <TouchableOpacity
                      onPress={() => this.selectFile12()}

                      style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                      <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                        <View style={{ width: '70%', }}>
                          <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                            {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                            <Image source={{ uri: this.state.resourcePath12.uri }}
                                                          style={[styles.selectphoto]} resizeMode="cover" />

                            {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                          </ImageBackground>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                      {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                      <TextInput

                        style={{

                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
                          borderBottomColor: 'black', borderBottomWidth: 1,

                        }}

                        placeholder='Remarks'
                        placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                        multiline={true}
                        onChangeText={(value) => this.setState({ remark12: value })}
                        value={this.state.remark12}

                      />


                    </View>

                    <View style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
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

                  {/* ihm er picker */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    {/* <YardPicker /> */}


                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
                          borderBottomColor: 'black', borderBottomWidth: 1,
                        }}

                        placeholder='Grading'
                        placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                        multiline={true}
                        onChangeText={(value) => this.setState({ grade13: value })}
                        value={this.state.grade13}

                      />


                    </View>





                    <TouchableOpacity
                      onPress={() => this.selectFile13()}

                      style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                      <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                        <View style={{ width: '70%', }}>
                          <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                            {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                            <Image source={{ uri: this.state.resourcePath13.uri }}
                                                         style={[styles.selectphoto]} resizeMode="cover" />

                            {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                          </ImageBackground>
                        </View>
                      </View>
                    </TouchableOpacity>


                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                      {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                      <TextInput

                        style={{

                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
                          borderBottomColor: 'black', borderBottomWidth: 1,
                        }}

                        placeholder='Remarks'
                        placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                        multiline={true}
                        onChangeText={(value) => this.setState({ remark13: value })}
                        value={this.state.remark13}

                      />


                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                      <TextInput

                        style={{

                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
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



              </ScrollView>



            </View>


            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15, padding: 5 }} >
                HKC convention ref no. : 3.4.2.4 </Text>

            </View>

            <View style={{ height: 10 }}></View>

            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 65, }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject

                      </Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    IHM Management-General</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={3} style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Removal, handling and remediation adequate.</Text>

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



                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
                          borderBottomColor: 'black', borderBottomWidth: 1,
                        }}

                        placeholder='Grading'
                        placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                        multiline={true}
                        onChangeText={(value) => this.setState({ grade21: value })}
                        value={this.state.grade21}

                      />


                    </View>






                    <TouchableOpacity
                      onPress={() => this.selectFile21()}

                      style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                      <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                        <View style={{ width: '70%', }}>
                          <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                            {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                            
<Image source={{ uri: this.state.resourcePath21.uri }}
            style={[styles.selectphoto]} resizeMode="cover" />

                            {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                          </ImageBackground>
                        </View>
                      </View>
                    </TouchableOpacity>


                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                      {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
                          borderBottomColor: 'black', borderBottomWidth: 1,

                        }}

                        placeholder='Remarks'
                        placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                        multiline={true}
                        onChangeText={(value) => this.setState({ remark21: value })}
                        value={this.state.remark21}

                      />


                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
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



              </ScrollView>



            </View>




            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15, padding: 5 }} >
                HKC convention ref no. : 3.4.2.5 </Text>

            </View>



            <View style={{ height: 10 }}></View>


            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 65, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject

        </Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    IHM Management-General</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={3} style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Storage and labelling after removal</Text>

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


                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
                          borderBottomColor: 'black', borderBottomWidth: 1,
                        }}

                        placeholder='Grading'
                        placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                        multiline={true}
                        onChangeText={(value) => this.setState({ grade31: value })}
                        value={this.state.grade31}

                      />

                    </View>






                    <TouchableOpacity
                      onPress={() => this.selectFile31()}

                      style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                      <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                        <View style={{ width: '70%', }}>
                          <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                            {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                            <Image source={{ uri: this.state.resourcePath31.uri }}
                                                          style={[styles.selectphoto]} resizeMode="cover" />

                            {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                          </ImageBackground>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>



                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
                          borderBottomColor: 'black', borderBottomWidth: 1,

                        }}

                        placeholder='Remarks'
                        placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                        multiline={true}
                        onChangeText={(value) => this.setState({ remark31: value })}
                        value={this.state.remark31}

                      />


                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
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



              </ScrollView>



            </View>


            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15, padding: 5 }} >
                HKC convention ref no. : 3.4.2.6 </Text>

            </View>



            <View style={{ height: 10 }}></View>





            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 65, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject

        </Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    IHM Management-General</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={3} style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Treatment, transportation and disposal</Text>

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

                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                        <TextInput

                          style={{
                            width: 100, justifyContent: 'center',
                            alignContent: 'center', alignItems: 'center',
                            color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Grading'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ grade41: value })}
                          value={this.state.grade41}

                        />
                      </View>






                      <TouchableOpacity
                        onPress={() => this.selectFile41()}

                        style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                        <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                          <View style={{ width: '70%', }}>
                            <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                              {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}

                              <Image source={{ uri: this.state.resourcePath41.uri }}
            style={[styles.selectphoto]} resizeMode="cover" />

                              {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                            </ImageBackground>
                          </View>
                        </View>
                      </TouchableOpacity>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                        {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                        <TextInput

                          style={{
                            width: 100, justifyContent: 'center',
                            alignContent: 'center', alignItems: 'center',
                            color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,

                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark41: value })}
                          value={this.state.remark41}

                        />


                      </View>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                        <TextInput

                          style={{
                            width: 100, justifyContent: 'center',
                            alignContent: 'center', alignItems: 'center',
                            color: 'black',
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
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15, padding: 5 }} >
                HKC convention ref no. : 3.4.3.1 </Text>

            </View>



            <View style={{ height: 10 }}></View>






            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 65, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject

</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    IHM Management-General</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={4} style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    ASBESTOS Management adequate as per SRFP.</Text>

                </View>

              </View>



              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>

                  <YardColName />

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>



                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
                          borderBottomColor: 'black', borderBottomWidth: 1,
                        }}

                        placeholder='Grading'
                        placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                        multiline={true}
                        onChangeText={(value) => this.setState({ grade51: value })}
                        value={this.state.grade51}

                      />

                    </View>






                    <TouchableOpacity
                      onPress={() => this.selectFile51()}

                      style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                      <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                        <View style={{ width: '70%', }}>
                          <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                            {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                            <Image source={{ uri: this.state.resourcePath51.uri }}
                                                          style={[styles.selectphoto]} resizeMode="cover" />

                            {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                          </ImageBackground>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                      {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
                          borderBottomColor: 'black', borderBottomWidth: 1,
                        }}

                        placeholder='Remarks'
                        placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                        multiline={true}
                        onChangeText={(value) => this.setState({ remark51: value })}
                        value={this.state.remark51}

                      />


                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
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



              </ScrollView>



            </View>



            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15, padding: 5 }} >
                HKC convention ref no. : 3.4.3.2 </Text>

            </View>




            <View style={{ height: 10 }}></View>




            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 65, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject

</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    IHM Management-General</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={5} style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    PCBS and material containing PCBS adequately removed in accordance with HKC requirements and SRFP procedures. </Text>

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



                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
                          borderBottomColor: 'black', borderBottomWidth: 1,
                        }}

                        placeholder='Grading'
                        placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                        multiline={true}
                        onChangeText={(value) => this.setState({ grade61: value })}
                        value={this.state.grade61}

                      />


                    </View>





                    <TouchableOpacity
                      onPress={() => this.selectFile61()}

                      style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                      <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                        <View style={{ width: '70%', }}>
                          <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                            {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                            <Image source={{ uri: this.state.resourcePath61.uri }}
                                                   style={[styles.selectphoto]} resizeMode="cover" />

                            {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                          </ImageBackground>
                        </View>
                      </View>
                    </TouchableOpacity>


                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                      {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
                          borderBottomColor: 'black', borderBottomWidth: 1,

                        }}

                        placeholder='Remarks'
                        placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                        multiline={true}
                        onChangeText={(value) => this.setState({ remark61: value })}
                        value={this.state.remark61}

                      />


                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
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



              </ScrollView>



            </View>





            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15, padding: 5 }} >
                HKC convention ref no. : 3.4.3.3</Text>

            </View>


            <View style={{ height: 10 }}></View>


            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 65, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject
                  </Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    IHM Management-General</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={4} style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Ozone depleting substances  adequately removed in accordance with HKC requirements and SRFP procedures. </Text>

                </View>

              </View>



              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>

                  <YardColName />

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>


                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
                          borderBottomColor: 'black', borderBottomWidth: 1,
                        }}

                        placeholder='Grading'
                        placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                        multiline={true}
                        onChangeText={(value) => this.setState({ grade71: value })}
                        value={this.state.grade71}

                      />


                    </View>





                    <TouchableOpacity
                      onPress={() => this.selectFile71()}

                      style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10, alignSelf: 'center' }}>

                      <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                        <View style={{ width: '70%', }}>
                          <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                            {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                            <Image source={{ uri: this.state.resourcePath71.uri }}
                                                        style={[styles.selectphoto]} resizeMode="cover" />

                            {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                          </ImageBackground>
                        </View>
                      </View>
                    </TouchableOpacity>



                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                    

                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
                          borderBottomColor: 'black', borderBottomWidth: 1,
                        }}

                        placeholder='Remarks'
                        placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                        multiline={true}
                        onChangeText={(value) => this.setState({ remark71: value })}
                        value={this.state.remark71}

                      />


                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                      <TextInput

                        style={{
                          width: 100, justifyContent: 'center',
                          alignContent: 'center', alignItems: 'center',
                          color: 'black',
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



              </ScrollView>



            </View>







            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15, padding: 5 }} >
                HKC convention ref no. : 3.4.3.4</Text>

            </View>

            <View style={{ height: 10 }}></View>



            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 65, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    IHM Management-General</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={5} style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Paints and Coatings  adequately removed in accordance with HKC requirements and SRFP procedures. </Text>

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
                    

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                      <TextInput

style={{
    width: 100, justifyContent: 'center',
    alignContent: 'center', alignItems: 'center',
    color: 'black',
    borderBottomColor: 'black', borderBottomWidth: 1,
}}

placeholder='Grading'
placeholderTextColor="grey" underlineColorAndroid={'transparent'}
multiline={true}
onChangeText={(value) => this.setState({ grade81: value })}
value={this.state.grade81}

/>

                      </View>






                      <TouchableOpacity
                      onPress={() => this.selectFile81()}

                        style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10 ,alignSelf:'center'}}>

                        <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent:'center'}}>

                          <View style={{ width: '70%', }}>
                            <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                              {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                        <Image source={{ uri: this.state.resourcePath81.uri }}
                                                  style={[styles.selectphoto]} resizeMode="cover" />

                              {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                            </ImageBackground>
                          </View>
                        </View>
                      </TouchableOpacity>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                        {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                        <TextInput

                          style={{
                            width: 100, justifyContent: 'center',
                            alignContent: 'center', alignItems: 'center',
                            color: 'black',
                            borderBottomColor: 'black', borderBottomWidth: 1,
                            
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark81: value })}
                          value={this.state.remark81}

                        />


                      </View>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                        <TextInput

                          style={{
                            width: 100, justifyContent: 'center',
                            alignContent: 'center', alignItems: 'center',
                            color: 'black',
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



              </ScrollView>



            </View>



            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15, padding: 5 }} >
                HKC convention ref no. : 3.4.4</Text>

            </View>



            <View style={{ height: 10 }}></View>

            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 65, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    IHM Management-General</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={4} style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Prevention of adverse effects to the environment</Text>

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

                   

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                      <TextInput

style={{
    width: 100, justifyContent: 'center',
    alignContent: 'center', alignItems: 'center',
    color: 'black',
    borderBottomColor: 'black', borderBottomWidth: 1,
}}

placeholder='Grading'
placeholderTextColor="grey" underlineColorAndroid={'transparent'}
multiline={true}
onChangeText={(value) => this.setState({ grade91: value })}
value={this.state.grade91}

/>



                      </View>






                      <TouchableOpacity
                      onPress={() => this.selectFile91()}

                        style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10,alignSelf:'center' }}>

                        <View style={{ height: 80, width: '100%', flexDirection: 'row',justifyContent:'center' }}>

                          <View style={{ width: '70%', }}>
                            <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                              {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                         <Image source={{ uri: this.state.resourcePath91.uri }}
            style={[styles.selectphoto]} resizeMode="cover" />

                              {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                            </ImageBackground>
                          </View>
                        </View>
                      </TouchableOpacity>



                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                        {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                        <TextInput

                          style={{
                            width: 100, justifyContent: 'center',
alignContent: 'center', alignItems: 'center',
color: 'black',
borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark91: value })}
                          value={this.state.remark91}

                        />


                      </View>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120}}>

                        <TextInput

                          style={{
                            width: 100, justifyContent: 'center',
                            alignContent: 'center', alignItems: 'center',
                            color: 'black',
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



              </ScrollView>



            </View>




            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15, padding: 5 }} >
                HKC convention ref no. : 3.4.4.1</Text>

            </View>

            <View style={{ height: 10 }}></View>



            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 65, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    IHM Management-General</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={4} style={{ fontFamily: 'Changa-Medium', fontSize: 13, }}>
                    Spill prevention, control and countermeasures</Text>

                </View>

              </View>



              <ScrollView
                horizontal={true}


              >
                <View style={{ flex: 1 }}>

                  <YardColName />

                  {/* picker box gulo for hot work */}

                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                      <TextInput

style={{
    width: 100, justifyContent: 'center',
    alignContent: 'center', alignItems: 'center',
    color: 'black',
    borderBottomColor: 'black', borderBottomWidth: 1,
}}

placeholder='Grading'
placeholderTextColor="grey" underlineColorAndroid={'transparent'}
multiline={true}
onChangeText={(value) => this.setState({ grade101: value })}
value={this.state.grade101}

/>

                      </View>





                      <TouchableOpacity
                      onPress={() => this.selectFile101()}

                        style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10,alignSelf:'center' }}>

                        <View style={{ height: 80, width: '100%', flexDirection: 'row',justifyContent:'center' }}>

                          <View style={{ width: '70%', }}>
                            <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                              {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                           <Image source={{ uri: this.state.resourcePath101.uri }}
            style={[styles.selectphoto]} resizeMode="cover" />

                              {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                            </ImageBackground>
                          </View>
                        </View>
                      </TouchableOpacity>



                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>


                        {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                        <TextInput

                          style={{
                            width: 100, justifyContent: 'center',
alignContent: 'center', alignItems: 'center',
color: 'black',
borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark101: value })}
                          value={this.state.remark101}

                        />


                      </View>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                        <TextInput

                          style={{
                            width: 100, justifyContent: 'center',
                            alignContent: 'center', alignItems: 'center',
                            color: 'black',
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



              </ScrollView>



            </View>






            <View style={{

              height: 50, width: '100%', alignItems: 'center',
              justifyContent: 'flex-start', flexDirection: 'row',
              borderWidth: 1
            }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15, padding: 5 }} >
                HKC convention ref no. : 3.4.4.2</Text>

            </View>


            <View style={{ height: 10 }}></View>


            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', }}>



              <View style={{ width: '30%', flexDirection: 'column', alignItems: 'center' }}>



                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: 65, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Subject</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', }}>

                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    IHM Management-General</Text>


                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: 65, alignSelf: 'center', height: 102 }}>

                  <Text numberOfLines={3} style={{ fontFamily: 'Changa-Medium', fontSize: 13, marginTop: 20 }}>
                    Storm-water pollution prevention</Text>

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
                   
                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                      <TextInput

style={{
    width: 100, justifyContent: 'center',
    alignContent: 'center', alignItems: 'center',
    color: 'black',
    borderBottomColor: 'black', borderBottomWidth: 1,
}}

placeholder='Grading'
placeholderTextColor="grey" underlineColorAndroid={'transparent'}
multiline={true}
onChangeText={(value) => this.setState({ grade111: value })}
value={this.state.grade111}

/>

                      </View>






                      <TouchableOpacity
                      onPress={() => this.selectFile111()}

                        style={{ justifyContent: 'center', alignItems: 'center', width: 120, margin: 10,alignSelf:'center' }}>

                        <View style={{ height: 80, width: '100%', flexDirection: 'row', justifyContent:'center'}}>

                          <View style={{ width: '70%', }}>
                            <ImageBackground source={require('../assets/camera.jpg')} style={[styles.selectphoto]} resizeMode="cover">
                              {/* //onPress={() => this.imageHandler()}
                                                        style={styles.chooseButton} */}
                                                        <Image source={{ uri: this.state.resourcePath111.uri }}
                                                  style={[styles.selectphoto]} resizeMode="cover" />

                              {/* <Text style={{ color: '#000' }}>Choose File</Text> */}
                            </ImageBackground>
                          </View>
                        </View>
                      </TouchableOpacity>


                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120}}>


                        {/* <TextInput
placeholder='remarks'

multiline={true}>

</TextInput> */}

                        <TextInput

                          style={{
                            width: 100, justifyContent: 'center',
alignContent: 'center', alignItems: 'center',
color: 'black',
borderBottomColor: 'black', borderBottomWidth: 1,
                          }}

                          placeholder='Remarks'
                          placeholderTextColor="grey" underlineColorAndroid={'transparent'}
                          multiline={true}
                          onChangeText={(value) => this.setState({ remark111: value })}
                          value={this.state.remark111}

                        />


                      </View>

                      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 120 }}>

                        <TextInput

                          style={{
                            width: 100, justifyContent: 'center',
                            alignContent: 'center', alignItems: 'center',
                            color: 'black',
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



              </ScrollView>



            </View>



          </View>


          {this.state.environmentwork.status == false ?
            <View style={{ height: 50, width: '100%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
              <TouchableOpacity
                onPress={() => this.callEnviron()}

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
            </View> : <View style={{
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
