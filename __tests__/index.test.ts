import { renderHook } from "@testing-library/react-hooks";
import { renderHook as renderHookServer } from "@testing-library/react-hooks/server";
import { useMemo } from "react";
import { useClientMemo } from "../src";

describe("useClientMemo", () => {
  const count = 1;

  const factory = (isBrowser: boolean) => {
    if (!isBrowser) {
      throw new Error("This is browser dependent process!");
    }
    return count + 1;
  };

  const initialValue = 100;

  it("normal useMemo should happens error in server side evaluate", () => {
    const _factory = jest.fn(() => factory(false));

    const { result } = renderHook(() => useMemo(_factory, [count]));

    expect(result.error?.message).toBe("This is browser dependent process!");
    expect(_factory).toHaveBeenCalled();
  });

  it("should return initial value and not called factory on server side evaluate", () => {
    const _factory = jest.fn(() => factory(false));

    const { result } = renderHookServer(() =>
      useClientMemo(_factory, initialValue, [count])
    );

    expect(result.current).toBe(initialValue);
    expect(result.current).not.toBe(count);
    expect(_factory).not.toHaveBeenCalled();
  });

  it("should return factory evaluated value on client side evaluate", () => {
    const _factory = jest.fn(() => factory(true));

    const { result } = renderHook(() =>
      useClientMemo(_factory, initialValue, [count])
    );

    expect(result.current).toBe(count + 1);
    expect(result.current).not.toBe(initialValue);
    expect(_factory).toHaveBeenCalled();
  });
});
