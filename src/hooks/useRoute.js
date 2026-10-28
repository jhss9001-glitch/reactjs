import { useEffect, useState } from "react";

/* 주소의 해시(#/why)를 페이지 이름("why")으로 읽습니다. 예전 링크(#why)도 그대로 동작합니다. */
const read = () => location.hash.replace(/^#\/?/, "");

export function useRoute() {
  const [route, setRoute] = useState(read);

  useEffect(() => {
    const onChange = () => {
      setRoute(read());
      // 페이지가 바뀌면 맨 위에서 시작
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}
