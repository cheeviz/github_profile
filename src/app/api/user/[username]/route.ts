import axios from "axios";

export const dynamic = "force-dynamic";
export async function GET(request: Request, { params }: { params: { username: string } }) {
  const username = params.username;
  try {
    const userResponse = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    });

    const user = userResponse.data;
    const data = {
      login: user.login,
      avatar_url: user.avatar_url,
      html_url: user.url,
      name: user.name,
      bio: user.bio,
      created_at: user.created_at,
      updated_at: user.updated_at,
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
