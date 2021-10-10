/* eslint-disable prettier/prettier */
import {configureStore } from '@reduxjs/toolkit';

import ReceiptSlice from './slices/ReceiptSlice';

const store = configureStore({
      reducer:{
            receipt :ReceiptSlice
      }
 })

 export default store