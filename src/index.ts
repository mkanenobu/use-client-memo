import { useEffect, useState, type DependencyList } from "react";

export const useClientMemo = <T, K = undefined>(
  factory: () => T,
  initialValue: K,
  deps?: DependencyList
): T | K => {
  const [value, setValue] = useState<T | K>(initialValue);

  useEffect(() => {
    const newValue = factory();
    setValue(newValue);
  }, deps);

  return value;
};
