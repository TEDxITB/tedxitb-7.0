export interface SponsorshipQueryResult {
  sponsorship: {
    xlSponsor: {
      url: string;
      alt: string;
      width: number;
      height: number;
    }[];
    lSponsor: {
      url: string;
      alt: string;
      width: number;
      height: number;
    }[];
    mSponsor: {
      url: string;
      alt: string;
      width: number;
      height: number;
    }[];
    sSponsor: {
      url: string;
      alt: string;
      width: number;
      height: number;
    }[];
  };
}
