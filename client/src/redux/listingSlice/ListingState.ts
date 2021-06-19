import { ListingDetailsDto, ListingSummaryDto } from '../../api/client';

type ListingState = {
  listings: ListingSummaryDto[];
  shouldFetch: boolean;
  details: { [id: string]: ListingDetailsDto };
  usersListingId?: string;
};

export default ListingState;
