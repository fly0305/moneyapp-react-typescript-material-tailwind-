type FeatureState = {
  // Toggles the ability for users to be signed in
  enable_accounts: boolean;

  // Toggles the listing form for users to be able to list a room
  enable_listing_form: boolean;

  // Enable facebook login
  enable_facebook_oauth: boolean;
};

export default FeatureState;
