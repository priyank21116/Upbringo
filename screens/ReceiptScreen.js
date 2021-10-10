/* eslint-disable prettier/prettier */
import React, { useState } from 'react'

import tw from 'tailwind-react-native-classnames';
import { Button, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { DataTable } from 'react-native-paper';

import { useSelector } from 'react-redux';
import { captureScreen } from 'react-native-view-shot';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { Icon } from 'react-native-elements';

import AddItem from '../components/AddItem';

const ReceiptScreen = ({ navigation }) => {
      const [edit, setedit] = useState(false)
      const [toeditItem, settoeditItem] = useState({})
      const { cname, cphone, date, Items } = useSelector(state => state.receipt)
      const [total, settotal] = useState(0)

      const takeScreenShot = () => {
            console.log("TO TAKE SCREEN SHOT")
            // To capture Screenshot
            captureScreen({
                  // Either png or jpg (or webm Android Only), Defaults: png
                  format: 'jpg',
                  // Quality 0.0 - 1.0 (only available for jpg)
                  quality: 0.8,
            }).then(
                  //callback function to get the result URL of the screnshot
                  (uri) => {
                        console.log(uri)
                  },
                  (error) => console.error('Oops, Something Went Wrong', error),
            );
      };


      const createPDF = async () => {
            console.log("LLLLLLLLLLLL")
            let options = {
                  html: '<h1>PDF TEST</h1>',
                  fileName: 'test',
                  directory: 'Documents',
            };

            let file = await RNHTMLtoPDF.convert(options)
            // console.log(file.filePath);

            alert(file.filePath);
      }

      return (
            <View style={tw`w-full h-full bg-blue-900`}>
                  <ScrollView style={tw` p-2 w-11/12 h-full mx-auto my-4 rounded-2xl  border-4 border-green-400 bg-red-50`}>

                        <Text style={tw`text-3xl mx-auto mt-12 font-bold`}>PickShop</Text>
                        <Text style={tw`text-base mx-auto`}>Address</Text>

                        <Text style={tw`mx-auto`}>988 Glushan ikbana,lodi nagar,nakpara,Jaipur, Rajasthan,India,674200</Text>
                        <View style={tw`flex-row my-3 mx-auto border-t pt-1 border-gray-600`}>
                              <View style={tw`w-1/2 mx-auto`}>
                                    <Text>Billing to :-</Text>
                                    <Text>{cname}</Text>
                              </View>
                              <View style={tw`w-1/2 mx-auto`}>
                                    <Text>Phone no -</Text>
                                    <Text>{cphone}</Text>
                              </View>
                        </View>

                        <DataTable>
                              <DataTable.Header>
                                    <DataTable.Title>Item</DataTable.Title>
                                    <DataTable.Title numeric>Quantity</DataTable.Title>
                                    <DataTable.Title numeric>Discount</DataTable.Title>
                                    <DataTable.Title numeric>Cost</DataTable.Title>



                              </DataTable.Header>
                              {/* {!list && <Text>AT Moment nothing exist in your list </Text>} */}
                              {Items[0]?.map((item, i) => {

                                    return (
                                          <TouchableOpacity key={i} onPress={()=>{
                                                settoeditItem(item)
                                                setedit(true)
                                          }}>
                                                <DataTable.Row >
                                                      <DataTable.Cell>{item.iname}</DataTable.Cell>
                                                      <DataTable.Cell numeric>{item.quantity}</DataTable.Cell>
                                                      <DataTable.Cell numeric>{item.discount}</DataTable.Cell>
                                                      <DataTable.Cell numeric>{item.totalAmount}</DataTable.Cell>

                                                </DataTable.Row>
                                          </TouchableOpacity>
                                    )

                              })}

                              <View style={tw`border-b`}></View>
                              <View style={tw`flex-row justify-between`}>
                                    <Text > TOTAL AMOUNT</Text>
                                    <Text>{"768"}</Text>
                              </View>



                        </DataTable>
                        <Text style={tw`-mb-10 mt-6 mx-auto`}>{date}</Text>


                        <TouchableOpacity style={tw` mt-12 mb-4 mx-12`} >
                              <Button color="#8f00ff" onPress={() => { takeScreenShot() }} title="Take Screenshot"></Button>
                        </TouchableOpacity>

                        <TouchableOpacity style={tw`mb-4 mx-12`} >
                              <Button color="#8f00ff" onPress={() => { createPDF() }} title="Download receipt"></Button>
                        </TouchableOpacity>



                  </ScrollView>
                  {/* {edit ? <AddItem item={toeditItem} /> : null} */}

            </View>
      )
}

export default ReceiptScreen


