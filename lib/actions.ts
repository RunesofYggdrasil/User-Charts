"use server";

import fetchAPI from "@/app/api/fetch";

export async function handleSubmit(formData: FormData) {
  const rawFormData = {
    rawPostVoteBody: formData.get("postVoteBody"),
  };
  if (
    rawFormData.rawPostVoteBody &&
    typeof rawFormData.rawPostVoteBody == "string"
  ) {
    const postVoteBody = rawFormData.rawPostVoteBody;
    const postVoteRequest = await fetchAPI("PUT", "votes", postVoteBody);
  }
}
