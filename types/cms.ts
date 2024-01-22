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

export interface MagazineQueryResult {
  allMonthlyMagazines: {
    id: string;
    title: string;
    magazine: {
      id: string;
      url: string;
      alt: string;
      width: string;
      height: string;
    }[];
  }[];
}

export interface StudentSpeakerCandidate {
  id: string;
  image: ImageCMS;
  name: string;
  instagramUrl: string;
  videoUrl: string;
  isSelected: boolean;
}
export interface StudentSpeakerQueryResult {
  allStudentSpeakerCandidates: StudentSpeakerCandidate[];
}
