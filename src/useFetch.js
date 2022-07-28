import { useEffect, useState } from "react";

export function useFetch(uri) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((data) => data.json())
      .then((data) => setData(data))
      .then(setLoading(false))
      .catch(setError);
  }, [uri]);
  return { loading, data, error };
}
