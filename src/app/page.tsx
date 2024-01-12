"use client";

import { Profile } from "@/components/Profile";
import { Search } from "@/components/Search";
import { useState } from "react";
import axios from "axios";
import "chart.js/auto";
import { ToastError } from "@/lib/Toast";
import { LanguagesProps, UserProps } from "@/types";

export default function Home() {
  const [LoadingOne, setLoadingOne] = useState(false);
  const [LoadingTwo, setLoadingTwo] = useState(false);
  const [data, setData] = useState<UserProps[]>([]);
  const [mostLanguages, setMostLanguages] = useState<LanguagesProps>({});

  const onHandleKeyDown = async (search: string) => {
    try {
      setLoadingOne(true);

      setData([]);
      setMostLanguages({});

      await axios
        .get(`/api/user/${search}`)
        .then((userResponse) => {
          setData([userResponse.data]);
          setLoadingOne(false);
          setLoadingTwo(true);

          return axios.get(`/api/languages/${search}`);
        })
        .then((mostLanguagesResponse) => {
          setMostLanguages(mostLanguagesResponse.data);
          setLoadingTwo(false);
        });
    } catch (error: any) {
      ToastError(error.response.data);
    } finally {
      setLoadingOne(false);
      setLoadingTwo(false);
    }
  };

  return (
    <>
      <Search onSearch={onHandleKeyDown} />
      <Profile
        user={data}
        mostLanguages={mostLanguages}
        loadingOne={LoadingOne}
        loadingTwo={LoadingTwo}
      />
    </>
  );
}
