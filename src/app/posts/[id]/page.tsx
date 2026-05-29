"use client";

import type { PostWithContentDto } from "@/type/post";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostWithContentDto | null>(null);

  useEffect(() => {
    fetch(`${NEXT_PUBLIC_API_BASE_URL}/api/v1/posts/${id}`)
      .then((res) => res.json())
      .then(setPost);
  }, []);

  if (post == null) return <div>로딩중...</div>;

  return (
    <>
      <h1>글 상세페이지</h1>

      <div>번호 : {post.id}</div>
      <div>제목: {post.title}</div>
      <div style={{ whiteSpace: "pre-line" }}>{post.content}</div>
    </>
  );
}