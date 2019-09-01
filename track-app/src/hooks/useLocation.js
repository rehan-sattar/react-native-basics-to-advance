import React, { useEffect, useState } from "react";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";

export default (isFocused, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);
  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 2000,
          distanceInterval: 10
        },
        callback
      );
      setSubscriber(sub);
    } catch (err) {
      console.log(err);
      setErr(err);
    }
  };

  useEffect(() => {
    if (isFocused) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }
  }, [isFocused]);

  return [err];
};
