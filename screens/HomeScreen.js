/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import tw from 'tailwind-react-native-classnames';
import { Button, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image, KeyboardAvoidingView } from 'react-native';
import { Icon } from 'react-native-elements'
import DatePicker from 'react-native-date-picker'

import * as yup from 'yup';
import { Formik } from 'formik';

import { Input } from 'react-native-elements/dist/input/Input';

import { useDispatch } from 'react-redux';
import { AddnameNnum } from '../slices/ReceiptSlice'

import impp from '../images/shoplogo.png'

const CustomerDetails = {
      cname: '',
      cphone: null,

}

const RegisterValidationSchema = yup.object().shape({
      cphone: yup.number().required('Mobile  number is required').positive().integer().min(10),
      cname: yup.string().required('Name is required'),
      date: yup.string().required('Date and time is required'),
})


const HomeScreen = ({ navigation }) => {
      const [opend, setOpend] = useState(false)
      const [date, setdate] = useState(new Date())
 console.log(date)

      const dispatch = useDispatch()

      return (

            <Formik
                  initialValues={CustomerDetails}
                  onSubmit={values => {

                  }}
                  validateOnMount={true}
                  validationSchema={RegisterValidationSchema}
            >
                  {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (

   

                        <ScrollView style={tw`h-full w-full flex-col bg-indigo-100`}>

                              <View style={tw`h-64 bg-gray-900 border-b-4 border-green-600`}>
                                    <Image style={tw`w-80 h-60 mx-auto -ml-1 justify-center`} source={require('../images/shoplogo.png')} />
                              </View>
                              <View style={tw`h-96 border-t-4 border-green-600 bg-indigo-100 py-12 px-8 `}>

                                    <Input
                                          label="Enter name"
                                          labelStyle={[tw`mt-4`, { color: "#8f00ff" }]}
                                          keyboardType="default"
                                          onChangeText={handleChange('cname')}
                                          onBlur={handleBlur('cname')}
                                          value={values.cname}
                                    />
                                    {(errors.cname && touched.cname) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.cname}</Text> : null}
                                    <Input
                                          label="Enter mobile number"
                                          labelStyle={[tw`mt-4`, { color: "#8f00ff" }]}
                                          keyboardType="number-pad"
                                          onChangeText={handleChange('cphone')}
                                          onBlur={handleBlur('cphone')}
                                          value={values.cphone}
                                    />
                                    {(errors.cphone && touched.cphone) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.cphone}</Text> : null}

                                    <Button title="Select date" color="#8f00ff" style={tw`h-40 mx-16 mb-6`} onPress={() => setOpend(true)} />
                                    <DatePicker
                                          modal
                                          open={opend}
                                          mode="datetime"
                                          date={date}
                                          onConfirm={(date) => {
                                                setOpend(false)
                                                handleChange('date')
                                          }}
                                          onCancel={() => {
                                                setOpend(false)
                                          }}
                                    />
                                    {/* <Text style={[tw`mx-auto`,{color:"#8f00ff"}]}>date</Text> */}
                                    {(errors.date && touched.date) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.date}</Text> : null}


                                    {/* <TextInput
                              mode='outlined'
                              label="Enter Contact number"
                              value={text}
                              onChangeText={text => setText(text)}
                        /> */}

                                    <TouchableOpacity style={tw`h-40 mt-6 mx-16`} >
                                          <Button onPress={() => {
                                                dispatch(AddnameNnum({ ...values, date: date.toString() }))
                                                console.log({ ...values, date: date.toString() })
                                                navigation.navigate('InputItemsScreen')

                                          }}
                                                title="NEXT">
                                                <Text>Next</Text>
                                          </Button>

                                    </TouchableOpacity>
                              </View>
                        </ScrollView>
                  )}
            </Formik>
      );
};

export default HomeScreen;


