import Image from "next/image";
import { LoadingSpinner } from "../Loading";
import { DoughnutChart } from "../DoughnutChart";

interface User {
  login: string;
  name: string;
  html_url: string;
  bio: string;
  avatar_url: String;
}

interface ProfileProps {
  user: User[];
  mostLanguages: { [key: string]: number };
  loading: boolean;
}

export function Profile({ user, mostLanguages, loading }: ProfileProps) {
  return (
    <section className="container m-auto p-auto">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {user.length <= 0 ? null : (
            <div className="w-[928px] m-auto p-auto bg-gray-100 rounded-[18px] shadow-4xl py-[50px] px-[45px]">
              <div className="flex flex-col">
                {user.map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <Image
                      className="rounded-lg shadow-3xl"
                      width={164}
                      height={164}
                      src={item.avatar_url as string}
                      alt={item.name}
                    />

                    <div className="mt-3">
                      {item.name == null ? (
                        <h1 className="text-xl font-bold">Informação não encontrada.</h1>
                      ) : (
                        <h1 className="text-2xl font-bold">{item.name}</h1>
                      )}
                      <p className="text-base font-medium text-[#787878]">{item.login}</p>
                      {item.bio == null ? (
                        <p className="text-xl font-medium">Informação não encontrada.</p>
                      ) : (
                        <p className="text-xl font-medium">{item.bio}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="w-[500px] p-auto m-auto">
                  {Object.keys(mostLanguages).length > 0 ? (
                    <div className="w-[500px] h-[350px]">
                      <h1 className="text-center font-bold text-2xl">Linguagem mais usadas</h1>
                      <DoughnutChart mostLanguages={mostLanguages} />
                    </div>
                  ) : (
                    <h1 className="text-center font-bold text-2xl">Nenhuma linguagem encontrada.</h1>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}
