/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { FAB } from 'react-native-elements';
import { DataTable } from 'react-native-paper';


import tw from 'tailwind-react-native-classnames';
import { Button, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import AddItem from '../components/AddItem';
import { AddItems } from '../slices/ReceiptSlice';

import { useDispatch } from 'react-redux';

const InputItemsScreen = ({ navigation }) => {
      const [addNItem, setaddNItem] = useState(false)
      const [list, setlist] = useState([])
      const dispatch = useDispatch()



      // let items = useSelector(state => state.receipt.Items)


      const funcChange = (item) => {
            console.log("nnnnnnn", item)
            setlist([...list, item])
            console.log("YYYYYYYYYYYYYYY", list)
      }
      return (
            <>
                  <View style={tw`h-full w-full p-4 bg-blue-400`}>
                        <ScrollView style={tw`h-full flex-col flex-1 border-2  w-full bg-red-50 p-3`}>
                              <DataTable>
                                    <DataTable.Header>
                                          <DataTable.Title>Item</DataTable.Title>
                                          <DataTable.Title numeric>Quantity</DataTable.Title>
                                          <DataTable.Title numeric>Cost</DataTable.Title>
                                    </DataTable.Header>
                                    {/* {!list && <Text>AT Moment nothing exist in your list </Text>} */}
                                    {list?.map((item, i) => {

                                          return (
                                                <DataTable.Row key={i}>
                                                      <DataTable.Cell>{item.iname}</DataTable.Cell>
                                                      <DataTable.Cell numeric>{item.quantity}</DataTable.Cell>
                                                      <DataTable.Cell numeric>{item.totalAmount}</DataTable.Cell>
                                                </DataTable.Row>
                                          )

                                    })}
                                    {/* <View><Text>{item.iname}</Text></View>
                                                <View><Text>{item.quantity}</Text></View>
                                                <View><Text>{item.totalAmount}</Text></View> */}
                                    {/* <DataTable.Row key={i}>
                                                <DataTable.Cell>{item.iname}</DataTable.Cell>
                                                <DataTable.Cell numeric>{item.quantity}</DataTable.Cell>
                                                <DataTable.Cell numeric>{item.totalAmount}</DataTable.Cell>
                                          </DataTable.Row> */}

                              </DataTable>
                        </ScrollView>

                        <TouchableOpacity style={tw`relative bg-green-300 my-0.5`} onPress={() => setaddNItem(!addNItem)}>

                              <Button onPress={() => {
                                    navigation.navigate('ReceiptScreen')
                                    dispatch(AddItems(list))

                              }} title="Proceed to get receipt" color="#8f00ff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`relative mb-0.5`} onPress={() => setaddNItem(!addNItem)}>

                              <Button onPress={() => {
                                    console.log("PPPPPPP")
                                    setaddNItem(!addNItem)
                                    
                                   

                              }} title={`${addNItem ? "Done" : "Add Item"}`} color="#8f00ff" />
                        </TouchableOpacity>
                        {addNItem ? <AddItem change={funcChange} /> : null}


                  </View>

            </>
      )
}

export default InputItemsScreen

