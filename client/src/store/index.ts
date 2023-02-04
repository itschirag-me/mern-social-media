import { configureStore } from '@reduxjs/toolkit'
import LoaderReducer from './LoaderReducer'

const store = configureStore({
  reducer: {
    loader: LoaderReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store;