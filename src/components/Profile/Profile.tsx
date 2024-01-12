/* eslint-disable @next/next/no-img-element */
import { LoadingSpinner } from "../Loading";
import { DoughnutChart } from "../DoughnutChart";
import { dateFormat } from "@/lib/dateFormat";
import { FaBookBookmark, FaUsers } from "react-icons/fa6";
import { LanguagesProps, UserProps } from "@/types";

interface ProfileProps {
  user: UserProps[];
  mostLanguages: LanguagesProps;
  loadingOne: boolean;
  loadingTwo: boolean;
}

export function Profile({
  user,
  mostLanguages,
  loadingOne,
  loadingTwo,
}: ProfileProps) {
  return (
    <section className="container m-auto p-auto">
      {loadingOne ? (
        <LoadingSpinner />
      ) : (
        <>
          {user.length <= 0 ? null : (
            <div className="md:w-[928px] m-auto p-auto bg-gray-100 rounded-[18px] shadow-4xl py-[50px] md:px-[45px]">
              <div className="flex flex-col gap-5 md:gap-0">
                {user.map((item, index) => (
                  <div
                    key={index}
                    className="max-w-full px-5 md:px-0 flex gap-2"
                  >
                    <img
                      className="w-[124px] h-[124px] md:w-[164px] md:h-[164px] rounded-lg shadow-3xl"
                      src={item.avatar_url as string}
                      alt={item.name}
                    />

                    <div className="md:mt-2">
                      <h1 className="text-lg md:text-2xl font-bold">
                        {item.name ? item.name : "Informação não encontrada."}
                      </h1>
                      <p className="text-base font-medium text-[#787878]">
                        {item.login} &bull;{" "}
                        <span>{dateFormat(item.created_at)}</span>
                      </p>
                      <p className="text-sm md:text-xl font-medium">
                        {item.bio ? item.bio : "Informação não encontrada."}
                      </p>
                      <div className="flex gap-2 mt-2 md:mt-3">
                        <a
                          className="flex items-center gap-1 cursor-pointer font-medium transition-colors hover:text-gray-200"
                          href={item.repos_url}
                          target="_blank"
                        >
                          <FaBookBookmark size="20" className="text-gray-300" />
                          <b>{item.public_repos}</b>Repos
                        </a>

                        <a className="flex items-center gap-1 font-medium">
                          <FaUsers size="20" className="text-gray-300" />
                          <b>{item.followers}</b>Seguidores
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="md:w-[500px] p-auto m-auto">
                  {loadingTwo ? (
                    <LoadingSpinner />
                  ) : (
                    <>
                      {Object.keys(mostLanguages).length > 0 ? (
                        <div className="md:w-[500px] h-[350px] mt-1 md:mt-5">
                          <h1 className="text-center font-bold text-2xl">
                            Linguagem mais usadas
                          </h1>
                          <DoughnutChart mostLanguages={mostLanguages} />
                        </div>
                      ) : (
                        <h1 className="text-center font-bold text-2xl">
                          Nenhuma linguagem encontrada.
                        </h1>
                      )}
                    </>
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
