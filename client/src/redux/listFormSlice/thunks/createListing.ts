import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiClient, ListingFormDataDto } from '../../../api/client';
import { RootState } from '../../store';
import ListFormState from '../ListFormState';

export const createListing = createAsyncThunk('listingForm/create', async (payload, API) => {
  const listingInfo = (API.getState() as RootState).listForm;

  const { step1, step2, step3, step4, step5 } = listingInfo;

  if (step1 && step2 && step3 && step4 && step5) {
    const data: ListingFormDataDto = {
      title: step3.listingTitle,
      description: step3.description,
      flatmate_description: step4.flatmateDescription,
      preferred_description: step5.personDescription.map((i) => i.value).join(', '),
      street: step1.street,
      suburb: step1.suburb,
      city: step1.city.value,
      gender_id: step5.preferredGender.value,
      price_per_week: step3.weeklyPrice,
      availableFrom: step3.dateAvailable,
    };

    const images = step2.photos.map((dataURI) => {
      const byteString = atob(dataURI.split(',')[1]);
      // separate out the mime component
      const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      // write the bytes of the string to an ArrayBuffer
      const ab = new ArrayBuffer(byteString.length);
      // create a view into the buffer
      const ia = new Uint8Array(ab);
      // set the bytes of the buffer to the correct values
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      // write the ArrayBuffer to a blob, and you're done
      const blob = new Blob([ab], { type: mimeString });

      return blob;
    });

    const res = await ApiClient.createListing(data, images);

    return res;
  } else {
    throw new Error('Invalid listing');
  }
});

export const createListingReducers = (builder: ActionReducerMapBuilder<ListFormState>) => {
  builder.addCase(createListing.fulfilled, (state, { payload }) => {
    state = { currentStep: 1 };
  });
  builder.addCase(createListing.rejected, (state, { payload }) => {
    console.log(state);
  });
};
