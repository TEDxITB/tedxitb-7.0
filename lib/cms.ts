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
