import { useInView } from "../hooks/useInView.js";

/* 스크롤하면 나타나는 효과(.reveal → .reveal.in)를 자기 요소에 적용합니다. */
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, inView] = useInView();
  const cls = [className, "reveal", inView && "in"].filter(Boolean).join(" ");
  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  );
}
