import { useState } from "react";
import { PLANS } from "../data.js";
import { useToast } from "../context/ToastContext.jsx";
import { won } from "../utils/format.js";
import Reveal from "./Reveal.jsx";

const EMPTY = { name: "", email: "", pharmacy: "", agree: false };

export default function ApplyForm({ plan, onPlanChange }) {
  const toast = useToast();
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");

  const set = (key) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();

    let msg = "";
    if (!name) msg = "이름을 입력해 주세요.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) msg = "올바른 이메일 주소를 입력해 주세요.";
    else if (!form.agree) msg = "개인정보 수집·이용에 동의해 주세요.";

    setError(msg);
    if (msg) return;

    setForm(EMPTY);
    onPlanChange(PLANS.find((p) => p.featured).id);
    toast(`${name} 약사님, 신청이 접수되었습니다! 안내 메일을 보내드릴게요.`);
  };

  return (
    <section className="section" id="apply">
      <div className="container apply-inner">
        <Reveal className="apply-copy">
          <p className="eyebrow">Apply</p>
          <h2>다음 외국인 고객부터,<br />자신 있게.</h2>
          <p>얼리버드 신청 시 <b>약국 비치용 영어 복약지도 카드(PDF)</b>를 함께 드립니다.</p>
        </Reveal>

        <Reveal as="form" className="apply-form" noValidate onSubmit={onSubmit}>
          <label>이름
            <input name="name" type="text" autoComplete="name" required placeholder="홍길동" value={form.name} onChange={set("name")} />
          </label>
          <label>이메일
            <input name="email" type="email" autoComplete="email" required placeholder="pharm@example.com" value={form.email} onChange={set("email")} />
          </label>
          <label>약국명 <span className="optional">(선택)</span>
            <input name="pharmacy" type="text" placeholder="예: 명동온누리약국" value={form.pharmacy} onChange={set("pharmacy")} />
          </label>
          <label>플랜
            <select name="plan" value={plan} onChange={(e) => onPlanChange(e.target.value)}>
              {PLANS.map((p) => (
                <option value={p.id} key={p.id}>{p.name} — {p.early ? won(p.early) : "별도 문의"}</option>
              ))}
            </select>
          </label>
          <label className="agree">
            <input name="agree" type="checkbox" required checked={form.agree} onChange={set("agree")} />
            <span>개인정보 수집·이용(수강 안내 목적)에 동의합니다.</span>
          </label>
          <p className="form-error" role="alert">{error}</p>
          <button type="submit" className="btn btn-primary btn-block">얼리버드 신청하기</button>
        </Reveal>
      </div>
    </section>
  );
}
