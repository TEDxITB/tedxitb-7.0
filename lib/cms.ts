import "server-only";

// Get CMS Data from DatoCMS
export const getCMSData = async <T>(
  query: string,
  tags: string[]
): Promise<T> => {
  const res = await (
    await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.CMS_API_TOKEN}`,
      },
      body: JSON.stringify({
        query: query,
      }),
      // Use on-demand ISR with webhooks
      next: { tags: tags },
    })
  ).json();

  return res.data;
};

// Sponsorship tags & query
export const sponsorshipTags = ["sponsorship"];
export const sponsorshipQuery = `{
  sponsorship {
    lSponsor {
      id
      url
      alt
      width
      height
    }
    mSponsor {
      id
      url
      alt
      width
      height
    }
    sSponsor {
      id
      url
      alt
      width
      height
    }
    xlSponsor {
      id
      url
      alt
      width
      height
    }
  }
}`;

// Documentation tags & query
export const documentationTags = ["documentation"];
export const documentationQuery = `{
  documentation {
    carousel {
      id
      url
      alt
      width
      height
    }
  }
}`;

export const mainEventTopicTags = ["main-event-topic"];
export const mainEventTopicQuery = `{
  allMainEventTopics {
    id
    title
    description {
      blocks
      links
      value
    }
    speaker
    image {
      id
      url
      alt
      width
      height
    }
  }
}`;

export const magazineTags = ["monthly-event"];
export const magazineQuery = `{
  allMonthlyMagazines {
    id
    title
    magazine {
      id
      url
      alt
      width
      height
    }
  }
}`;