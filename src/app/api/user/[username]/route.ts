import axios from "axios";

const github_url = "https://github.com";

export const dynamic = "force-dynamic";
export async function GET(request: Request, { params }: { params: { username: string } }) {
  const username = params.username;
  try {
    const userResponse = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    });

    const user = userResponse.data;

    const repos_url = user.type === "Organization" ? `${github_url}/orgs/${user.login}/repositories` : `${github_url}/${user.login}?tab=repositories`;

    const data = {
      login: user.login,
      name: user.name,
      bio: user.bio,
      avatar_url: user.avatar_url,
      html_url: user.url,
      repos_url: repos_url,
      public_repos: user.public_repos,
      followers: user.followers,
      created_at: user.created_at,
    };

    return Response.json(data);
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      const responseData = error.response.data;

      if (responseData.message === "Not Found" && error.response.status === 404)
        return new Response(`${username} não encontrado!`, {
          status: 404,
        });
    }
    throw error;
  }
}
