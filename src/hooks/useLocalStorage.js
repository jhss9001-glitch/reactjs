import { useCallback, useState } from "react";

const store = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, val) { try { localStorage.setItem(key, val); } catch { /* 저장 불가 환경 무시 */ } },
};

/* 문자열 값을 localStorage에 저장·복원하는 useState */
export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => store.get(key) ?? initial);
  const update = useCallback((next) => {
    setValue(next);
    store.set(key, next);
  }, [key]);
  return [value, update];
}
