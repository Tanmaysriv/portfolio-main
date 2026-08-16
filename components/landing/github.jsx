"use client";

import { useEffect, useState } from "react";

export default function Github() {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          "https://api.github.com/users/Tanmaysriv/repos"
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();

        setRepositories(
          data
            .filter((repo) => !repo.fork)
            .sort(
              (a, b) =>
                new Date(b.updated_at) - new Date(a.updated_at)
            )
        );
      } catch (error) {
        console.error("Failed to fetch GitHub repositories:", error);
        setRepositories([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Keep the rest of your existing JSX here.
}