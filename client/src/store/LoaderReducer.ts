import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const LoaderSlice = createSlice({
    name: 'loader',
    initialState: {
        value: true
    },
    reducers: {
        startLoader: (state) => {
            state.value = true
        },
        stopLoader: (state) => {
            state.value = false
        }
    }
})

export const { startLoader, stopLoader } = LoaderSlice.actions;

export default LoaderSlice.reducer;