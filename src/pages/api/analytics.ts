import { NextApiRequest, NextApiResponse } from "next";

interface AnalyticsRequest extends NextApiRequest {
  body: string;
}

interface AnalyticsResponse extends Response {
  body: any;
}

const GoogleAnalytics = async (req: AnalyticsRequest, res: NextApiResponse) => {
  try {
    const response: AnalyticsResponse = await fetch(
      "https://www.google-analytics.com/collect",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: req.body,
      }
    );

    if (response.ok) {
      console.log("Request to Google Analytics was successful for monitoring");
      res.status(response.status).send(response.body);
    } else {
      console.error(
        "Request to Google Analytics failed with status:",
        response.status
      );
      res.status(response.status).send(response.body);
    }
  } catch (error) {
    console.error(
      "An error occurred while sending request to Google Analytics:",
      error
    );
    res.status(500).send("Internal Server Error");
  }
};

export default GoogleAnalytics;
