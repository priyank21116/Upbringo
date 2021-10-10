/* eslint-disable prettier/prettier */
import { createSlice } from "@reduxjs/toolkit";


const Receipt = {
      cname: '',
      cphone: null,
      date: null,
      Items: []
}

export const ReceiptSlice = createSlice({
      name: 'Receipt',
      initialState: Receipt,
      reducers: {
            AddnameNnum: (state, actions) => {
                 const {cname,cphone,date} = actions.payload
                 state.cname=cname
                 state.cphone = cphone
                 state.date = date
            },
            AddItems:(state, actions)=>{
                    state.Items =[...state.Items,actions.payload]
            }

      }
})


export const { AddnameNnum ,AddItems} = ReceiptSlice.actions

export default ReceiptSlice.reducer