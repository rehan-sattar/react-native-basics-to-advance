import React, { useEffect, useState } from "react";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";

export default (isFocused, callback) => {
  const [err, setErr] = useState(null);
  /**
   * If useState is referencing some props and state variables, they should be added to
   * the second argument array. [recomended]
   * - This rule is not for functions.
   */
  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 2000,
            distanceInterval: 10
          },
          callback
        );
      } catch (err) {
        setErr(err);
      }
    };
    if (isFocused) {
      startWatching();
    } else {
      if (subscriber) subscriber.remove();
      subscriber = null;
    }
    return () => {
      if (subscriber) subscriber.remove();
    };
  }, [isFocused, callback]);

  return [err];
};
