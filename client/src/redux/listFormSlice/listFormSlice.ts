import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ListFormState, {
  ListForm1State,
  ListForm2State,
  ListForm3State,
  ListForm4State,
  ListForm5State,
} from './ListFormState';
import { createListingReducers } from './thunks/createListing';

interface SubmitFormPayload<T> {
  data: T;
  goBack?: boolean;
}

const listFormSlice = createSlice({
  name: 'listForm',
  initialState: { currentStep: 1 } as ListFormState,
  reducers: {
    submitStep1: (state, { payload }: PayloadAction<SubmitFormPayload<ListForm1State>>) => {
      state.step1 = payload.data;
      state.currentStep = payload.goBack ? 1 : 2;
    },
    submitStep2: (state, { payload }: PayloadAction<SubmitFormPayload<ListForm2State>>) => {
      state.step2 = payload.data;
      state.currentStep = payload.goBack ? 1 : 3;
    },
    submitStep3: (state, { payload }: PayloadAction<SubmitFormPayload<ListForm3State>>) => {
      state.step3 = payload.data;
      state.currentStep = payload.goBack ? 2 : 4;
    },
    submitStep4: (state, { payload }: PayloadAction<SubmitFormPayload<ListForm4State>>) => {
      state.step4 = payload.data;
      state.currentStep = payload.goBack ? 3 : 5;
    },
    submitStep5: (state, { payload }: PayloadAction<SubmitFormPayload<ListForm5State>>) => {
      state.step5 = payload.data;
      state.currentStep = payload.goBack ? 4 : 6;
    },
  },
  extraReducers: (builder) => {
    createListingReducers(builder);
  },
});

const { reducer, actions } = listFormSlice;

export const { submitStep1, submitStep2, submitStep3, submitStep4, submitStep5 } = actions;

export default reducer;
