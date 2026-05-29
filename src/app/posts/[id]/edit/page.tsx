"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const { id: idStr } = useParams<{ id: string }>();
  const id = Number(idStr);

  return <div>{id}번 글 수정페이지</div>;
}
