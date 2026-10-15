import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = "rajeshnambi1122";

    // Search for PRs made by the user to repos they don't own
    const res = await fetch(
      `https://api.github.com/search/issues?q=author:${username}+type:pr+is:merged+-user:${username}&sort=updated&order=desc&per_page=6`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 }, // cache 1 hour
      }
    );

    if (!res.ok) {
      return NextResponse.json({ prs: [] });
    }

    const data = await res.json();

    const prs = (data.items ?? []).map((pr: any) => {
      // Extract owner/repo from repository_url
      const repoUrl: string = pr.repository_url ?? "";
      const repoParts = repoUrl.replace("https://api.github.com/repos/", "").split("/");
      const owner = repoParts[0] ?? "";
      const repo = repoParts[1] ?? "";

      return {
        id: pr.number,
        title: pr.title,
        url: pr.html_url,
        repo: `${owner}/${repo}`,
        repoUrl: `https://github.com/${owner}/${repo}`,
        state: pr.state,
        merged: !!pr.pull_request?.merged_at,
        createdAt: pr.created_at,
      };
    });

    return NextResponse.json({ prs });
  } catch (err) {
    console.error("GitHub PR fetch error:", err);
    return NextResponse.json({ prs: [] });
  }
}
