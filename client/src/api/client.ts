import axios from 'axios';
// import Formdata from 'form-data';
// OBSOLETE - REMOVE WHEN MOCK CLIENT PHASED OUT
export interface ListingSummary {
  id: string;
  photoUrl: string;
  suburb: string;
  city: string;
  price: number;
  isOwner?: boolean;
  availableDate: Date;
  title: String;
}

export interface ListingSummaryDto {
  id: string;
  photoUrl: string;
  suburb: string;
  city: string;
  price: number;
  isOwner?: boolean;
  availableDate: string;
  title: string;
  saved: boolean;
}

export interface ListingDetailsDto {
  id: string;
  title: String;
  suburb: string;
  city: string;
  price: number;
  isOwner?: boolean;
  availableDate: string;
  stats?: {
    views: number;
    saves: number;
  };
  preferredGender: string;
  description: string;
  flatmateDescription: string;
  preferredDescription: string;
  photos: string[];
  saved: boolean;
}

export interface ListingFormDataDto {
  title: string;
  description: string;
  flatmate_description?: string;
  preferred_description?: string;
  street: string;
  suburb: string;
  city: string;
  gender_id: number;
  price_per_week: number;
  availableFrom: string;
}

export interface UpdateUserProfileDto {
  photo?: Blob;
  first_name?: string;
  last_name?: string;
}

export interface UpdateUserProfileResponse {
  picture?: string;
  firstName?: string;
  lastName?: string;
}

export class ApiClient {
  static token?: string;

  static setToken(token: string) {
    this.token = token;
  }

  static clearToken() {
    delete this.token;
  }

  static async fetchListings(): Promise<ListingSummaryDto[]> {
    const res = await axios({
      baseURL: process.env.REACT_APP_API_URL,
      headers: { Authorization: this.token },
      url: 'listings',
      method: 'get',
    });
    return res.data;
  }

  static async fetchListingDetailsById(id: string): Promise<ListingDetailsDto> {
    const res = await axios({
      baseURL: process.env.REACT_APP_API_URL,
      headers: { Authorization: this.token },
      url: `listings/${id}`,
      method: 'get',
    });
    return res.data;
  }

  static async inquireById(listingId: string, message: string): Promise<void> {
    await axios({
      baseURL: process.env.REACT_APP_API_URL,
      headers: { Authorization: this.token },
      url: `listings/inquire`,
      data: {
        listingId,
        message,
      },
      method: 'post',
    });
  }

  static async deleteListing(listingId: string) {
    await axios({
      baseURL: process.env.REACT_APP_API_URL,
      headers: { Authorization: this.token },
      url: `listings/${listingId}`,
      method: 'delete',
    });
  }

  static async createListing(data: ListingFormDataDto, images: Blob[]): Promise<ListingSummaryDto> {
    // set up form data
    const formData = new FormData();
    Object.entries(data).forEach(([k, v]) => {
      formData.append(k, v);
    });

    images.forEach((f) => {
      formData.append('images', f);
    });

    try {
      const res = await axios({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          Authorization: this.token,
          'Content-Type': 'multipart/form-data',
        },
        url: `listings/new`,
        data: formData,
        method: 'post',
      });

      console.log(res);

      return res.data;
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  static async saveListing(listingId: string) {
    await axios({
      baseURL: process.env.REACT_APP_API_URL,
      headers: { Authorization: this.token },
      url: `wishlist/add/${listingId}`,
      method: 'post',
    });
  }

  static async unsaveListing(listingId: string) {
    await axios({
      baseURL: process.env.REACT_APP_API_URL,
      headers: { Authorization: this.token },
      url: `wishlist/remove/${listingId}`,
      method: 'post',
    });
  }

  static async updateUserInfo(data: UpdateUserProfileDto): Promise<UpdateUserProfileResponse> {
    const formData = new FormData();
    Object.entries(data).forEach(([k, v]) => {
      if (v !== undefined) {
        formData.append(k, v);
      }
    });

    const res = await axios({
      baseURL: process.env.REACT_APP_API_URL,
      url: `user/details`,
      headers: {
        Authorization: this.token,
        'Content-Type': 'multipart/form-data',
      },
      method: 'patch',
      data: formData,
    });

    return res.data;
  }
}