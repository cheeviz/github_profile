"use client";

import { Profile } from "@/components/Profile";
import { Search } from "@/components/Search";
import { useState } from "react";
import "chart.js/auto";
import axios from "axios";
import { ToastError } from "@/lib/Toast";

export interface UserProps {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  public_repos: number;
  followers: number;
  created_at: string;
}

export interface LanguagesProps {
  [key: string]: string;
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<UserProps[]>([]);
  const [mostLanguages, setMostLanguages] = useState<LanguagesProps>({});

  const onHandleKeyDown = async (search: string) => {
    try {
      setLoading(true);
      
      setData([]);
      setMostLanguages({});

      const userResponse = await axios.get(`/api/user/${search}`);
      setData([userResponse.data]);

      const mostLanguagesResponse = await axios.get(`/api/languages/${search}`);
      setMostLanguages(mostLanguagesResponse.data);
    } catch (error: any) {
      ToastError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Search onSearch={onHandleKeyDown} />
      <Profile user={data} mostLanguages={mostLanguages} loading={loading} />
    </>
  );
}
