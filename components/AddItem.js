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
import { AddItems } from '../slices/ReceiptSlice'


const ItemDeatil = {
      iname: '',
      quantity: 1,
      pricePerQuantity: 0,
      discount: 0,
      gst: 0,

}

const RegisterValidationSchema = yup.object().shape({
      quantity: yup.number().required('required'),
      pricePerQuantity: yup.number().required('required'),
      iname: yup.string().required('Name is required'),
})




const AddItem = ({change}) => {
      
      // item =
      const [totalAmount, settotalAmount] = useState(0)
console.log(change)
      const dispatch = useDispatch()

      return (
            <>
            <View style={tw`h-52 mx-2 rounded overflow-hidden `}>
           
                  <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={tw`text-white mx-auto`}>Add new item</Text>
                        <Formik
                              initialValues={ItemDeatil}
                              onSubmit={values => {

                              }}
                              validateOnMount={true}
                              validationSchema={RegisterValidationSchema}
                        >
                              {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (


                                    <ScrollView style={tw`h-full border-2 border-indigo-500 w-full flex-col bg-gray-50`}>


                                          <Input
                                                label="Item name"
                                                
                                                labelStyle={[tw`-mb-2 mt-1`, { color: "#8f00ff" }]}
                                                keyboardType="default"
                                                onChangeText={handleChange('iname')}
                                                onBlur={handleBlur('iname')}
                                                value={values.iname.toString()}
                                          />
                                          {(errors.iname && touched.iname) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.iname}</Text> : null}
                                           
                                           <View style={tw`-mt-3 flex-row mx-auto`}>
<View>
                               <Input
                                                label="Quantity"
                                                labelStyle={[tw`mt-1`, { color: "#8f00ff" }]}
                                                keyboardType="default"
                                                onChangeText={handleChange('quantity')}
                                                onBlur={handleBlur('quantity')}
                                                value={values.quantity.toString()}
                                          />
                                          {(errors.quantity && touched.quantity) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.quantity}</Text> : null}
      
</View>
           <View>

                                          <Input
                                                label="Discount"
                                                labelStyle={[tw`mt-1`, { color: "#8f00ff" }]}
                                                keyboardType="default"
                                                onChangeText={handleChange('discount')}
                                                onBlur={handleBlur('discount')}
                                                value={values.discount.toString()}
                                          />
                                          {(errors.discount && touched.discount) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.discount}</Text> : null}
</View>
<View>
                                          <Input
                                                label="Tax (GST)"
                                                labelStyle={[tw`mt-1`, { color: "#8f00ff" }]}
                                                keyboardType="default"
                                                onChangeText={handleChange('gst')}
                                                onBlur={handleBlur('gst')}
                                                value={values.gst.toString()}
                                          />
                                          {(errors.gst && touched.gst) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.gst}</Text> : null}
                                          </View>
                                          </View>
                                          <View style={tw`mx-3`}>

                                         
                                          <Input
                                                label="Price Per Item"
                                                labelStyle={[tw`-mt-1 -mb-2`, { color: "#8f00ff" }]}
                                                keyboardType="default"
                                                onChangeText={handleChange('pricePerQuantity')}
                                                onBlur={handleBlur('pricePerQuantity')}
                                                value={values.pricePerQuantity.toString()}
                                          />
                                          {(errors.pricePerQuantity && touched.pricePerQuantity) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.pricePerQuantity}</Text> : null}
                                          </View>

                                         
                                          <Text style={tw`font-bold text-lg mx-auto text-gray-600`}>Total Item Amount --- ${(values.pricePerQuantity + values.gst * values.pricePerQuantity - values.discount * values.pricePerQuantity) * values.quantity}</Text>

                                          <TouchableOpacity style={tw`h-40 mt-12 mb-4 mx-16`} >
                                                <Button onPress={() => {
                                                      change({ ...values, totalAmount:(values.pricePerQuantity + values.gst * values.pricePerQuantity - values.discount * values.pricePerQuantity) * values.quantity })
                                                      // change({ ...values, totalAmount })
                                                }} title="NEXT"><Text>Next</Text></Button>
                                          </TouchableOpacity>
                                    </ScrollView>
                              )}
                        </Formik>
                  </ScrollView>
                         
            </View>

            </>
      )
}
export default AddItem;