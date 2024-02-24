import type { StructuredText as StructuredTextType } from "datocms-structured-text-utils";

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
    mMediaPartner: ImageCMS[];
    lMediaPartner: ImageCMS[];
    xlMediaPartner: ImageCMS[];
  };
}

export interface DocumentationQueryResult {
  documentation: {
    carousel: ImageCMS[];
  };
}

export interface MainEventTopicQueryResult {
  allMainEventTopics: {
    id: string;
    title: string;
    description: StructuredTextType;
    speaker: string;
    image: ImageCMS;
  }[];
}

type Magazine = {
  id: string;
  url: string;
  alt: string;
  width: string;
  height: string;
};

export interface MagazineQueryResult {
  allMonthlyMagazines: {
    id: string;
    title: string;
    magazine: Magazine[];
  }[];
}

export interface MainEventMagazineQueryResult {
  mainEventMagazine: {
    paragraph: string;
    title: string;
    magazine: Magazine[];
  };
}

export interface StudentSpeakerCandidate {
  id: string;
  image: ImageCMS;
  name: string;
  instagramUrl: string;
  videoUrl: string;
  topic: string;
}
export interface StudentSpeakerQueryResult {
  allStudentSpeakerCandidates: StudentSpeakerCandidate[];
}
