import { NextApiRequest, NextApiResponse } from "next";
import { NEST_API_BASE_URL } from "./config"; // Assure-toi que ce chemin est correct

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  try {
    const apiUrl = `${NEST_API_BASE_URL}/parcours`;

    let response;
    if (method === "GET") {
      response = await fetch(apiUrl);
    } else if (method === "POST" || method === "PUT") {
      response = await fetch(apiUrl, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      });
    } else if (method === "DELETE") {
      const id = req.query.id as string; // Typage explicite de l'ID
      response = await fetch(`${apiUrl}/${id}`, { method });
    } else {
      res.status(405).end(`Method ${method} Not Allowed`);
      return;
    }

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Erreur API Proxy Next.js :", error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
}

