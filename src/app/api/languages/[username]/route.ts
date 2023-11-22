import axios from "axios";

export async function GET(request: Request, { params }: { params: { username: string } }) {
  const username = params.username;

  try {
    const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    });
    const repos = reposResponse.data;

    const allLanguages: Record<string, number> = {};

    for (let repo of repos) {
      const langResponse = await axios.get(repo.languages_url, {
        headers: {
          authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
      });

      const langData: Record<string, number> = langResponse.data;

      for (let [language, bytes] of Object.entries(langData)) {
        allLanguages[language] = (allLanguages[language] || 0) + bytes;
      }
    }

    if (Object.keys(allLanguages).length === 0) {
      return new Response("Nenhuma linguagem foi encontrada", {
        status: 404,
      });
    }

    const totalBytes: number = Object.values(allLanguages).reduce((total, bytes) => total + bytes, 0);

    const LanguageWithPercentage: Record<string, number> = Object.fromEntries(
      Object.entries(allLanguages).map(([languages, bytes]) => [
        languages,
        Number(((bytes / totalBytes) * 100).toFixed(2)),
      ]),
    );

    return Response.json(LanguageWithPercentage);
  } catch (error) {
    throw error;
  }
}
