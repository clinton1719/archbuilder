import { configureStore } from '@reduxjs/toolkit'
import formReducer from './slices/formSlice'
import recommendationReducer from './slices/recommendationSlice'
import { recommendationsApi } from './slices/apis/getRecommendations'


export const store = configureStore({
    reducer: {
        form: formReducer,
        recommendation: recommendationReducer,
        [recommendationsApi.reducerPath]: recommendationsApi.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch