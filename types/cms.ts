export interface ImageCMS {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface SponsorshipQueryResult {
  sponsorship: {
    xlSponsor: ImageCMS[];
    lSponsor: ImageCMS[];
    mSponsor: ImageCMS[];
    sSponsor: ImageCMS[];
  };
}

export interface DocumentationQueryResult {
  documentation: {
    carousel: ImageCMS[];
  };
}
