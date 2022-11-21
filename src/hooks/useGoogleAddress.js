import { useState, useEffect, useRef } from 'react';
import { createSearchParams } from 'react-router-dom';

export const useGoogleAddress = ({ address, city, province, country }) => {
  const [map, setMap] = useState({ lat: 51.505, lng: -0.09 });
  const controllerRef = useRef(null);

  const params = new createSearchParams({
    address: `${address},${city},${province},${country}`,
    key: process.env.GOOGLE_KEY_API,
  });
  const API = `https://maps.googleapis.com/maps/api/geocode/json?${params}`;

  useEffect(() => {
    const fetchGoogleAPI = async () => {
      controllerRef.current = new AbortController();

      try {
        const response = await fetch(API, {
          signal: controllerRef.current.signal,
        });

        const data = await response.json();

        setMap(data.results[0].geometry.location);
      } catch (error) {
        console.error(
          '🚀 ~ file: useGoogleAddress.js ~ line 25 ~ fetchGoogleAPI ~ error',
          error
        );
      }
    };

    fetchGoogleAPI();

    return () => {
      controllerRef.current.abort();
    };
  }, []);

  return map;
};
