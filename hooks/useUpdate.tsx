import { useEffect, useState } from "react";
import * as Updates from "expo-updates";

const useUpdate = () => {
  const [isLoading, setIsLoadingUpdate] = useState(false);
  useEffect(() => {
    const update = async () => {
      setIsLoadingUpdate(true);
      if (!__DEV__) {
        const { isAvailable } = await Updates.checkForUpdateAsync();
        if (isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        }
      }
      setIsLoadingUpdate(false);
    };
    update();
  }, []);

  return isLoading;
};

export default useUpdate;
