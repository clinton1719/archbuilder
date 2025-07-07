import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface Recommendation {
    patterns: string[] | null
}

const initialState: Recommendation = {
    patterns: null,
}


export const recommendationSlice = createSlice({
    name: 'recommendation',
    initialState,
    reducers: {
        getRecommendation: (state, action: PayloadAction<Recommendation['patterns']>) => {
            state.patterns = action.payload
        },

    },
})


export const { getRecommendation } = recommendationSlice.actions

export const getPatterns = (state: RootState) => state.recommendation.patterns

export default recommendationSlice.reducer