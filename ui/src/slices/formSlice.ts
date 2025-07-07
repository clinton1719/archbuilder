import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import type { FormData } from '../types/FormData'

interface FormState {
    formData: FormData | null
}

const initialState: FormState = {
    formData: null,
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFormData: (state, action: PayloadAction<FormState['formData']>) => {
            state.formData = action.payload
        },
        
    },
})

export const { setFormData } = formSlice.actions

export const getFormData = (state: RootState) => state.form.formData

export default formSlice.reducer