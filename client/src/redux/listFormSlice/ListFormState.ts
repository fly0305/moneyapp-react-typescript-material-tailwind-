type ListFormState = {
  currentStep: 1 | 2 | 3 | 4 | 5 | 6;
  step1?: ListForm1State;
  step2?: ListForm2State;
  step3?: ListForm3State;
  step4?: ListForm4State;
  step5?: ListForm5State;
};

export interface ListForm1State {
  street: string;
  suburb: string;
  city: { label: string; value: string };
}

export interface ListForm2State {
  photos: string[];
}

export interface ListForm3State {
  listingTitle: string;
  weeklyPrice: number;
  description: string;
  dateAvailable: string;
}

export interface ListForm4State {
  flatmateDescription?: string;
}

export interface ListForm5State {
  preferredGender: { label: string; value: number };
  personDescription: [{ label: string; value: string }];
}

export default ListFormState;
