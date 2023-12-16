/* eslint-disable @next/next/no-img-element */
import { LoadingSpinner } from "../Loading";
import { DoughnutChart } from "../DoughnutChart";
import { LanguagesProps, UserProps } from "@/app/page";
import { dateFormat } from "@/lib/dateFormat";

interface ProfileProps {
  user: UserProps[];
  mostLanguages: LanguagesProps;
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
            <div className="md:w-[928px] m-auto p-auto bg-gray-100 rounded-[18px] shadow-4xl py-[50px] px-[45px]">
              <div className="flex flex-col gap-5 md:gap-0">
                {user.map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <img
                      className="w-[124px] h-[124px] md:w-[164px] md:h-[164px] rounded-lg shadow-3xl"
                      src={item.avatar_url as string}
                      alt={item.name}
                    />

                    <div className="md:mt-3">
                      {item.name == null ? (
                        <h1 className="text-xl font-bold">Informação não encontrada.</h1>
                      ) : (
                        <h1 className="text-lg md:text-2xl font-bold">{item.name}</h1>
                      )}
                      <p className="text-base font-medium text-[#787878]">
                        {item.login} &bull; <span>{dateFormat(item.created_at)}</span>
                      </p>
                      {item.bio == null ? (
                        <p className="text-xl font-medium">Informação não encontrada.</p>
                      ) : (
                        <p className="text-sm md:text-xl font-medium">{item.bio}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="md:w-[500px] p-auto m-auto">
                  {Object.keys(mostLanguages).length > 0 ? (
                    <div className="md:w-[500px] h-[350px]">
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
