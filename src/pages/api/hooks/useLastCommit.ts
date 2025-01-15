import { useEffect, useState } from "react";
import moment from "moment";

const GITHUB_API_URL = process.env.NEXT_PUBLIC_GITHUB_API_URL;

export const useLastCommit = (): string | null => {
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    const fetchLastCommit = async () => {
      try {
        if (!GITHUB_API_URL) {
          throw new Error("GITHUB_API_URL is not defined");
        }
        const headers: HeadersInit = {};
        if (process.env.NEXT_PUBLIC_GITHUB_TOKEN_API) {
          headers.Authorization = `${process.env.NEXT_PUBLIC_GITHUB_TOKEN_API}`;
        }

        const response = await fetch(GITHUB_API_URL, { headers });
        const data = await response.json();
        if (data && data.length > 0) {
          const lastCommitDate = data[0].commit.author.date;
          setLastUpdated(moment(lastCommitDate).fromNow());
          // console.log("Fetch data berhasil:", data);
        }
      } catch (error) {
        console.error("Failed to fetch last commit:", error);
      }
    };

    fetchLastCommit();
  }, []);

  return lastUpdated;
};
