"use client";

import { Profile } from "@/components/Profile";
import { Search } from "@/components/Search";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "chart.js/auto";
import axios from "axios";

export interface UserProps {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<UserProps[]>([]);
  const [mostLanguages, setMostLanguages] = useState<any>({});

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
      toast.error(error.response.data, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Search onSearch={onHandleKeyDown} />
      <Profile user={data} mostLanguages={mostLanguages} loading={loading} />
    </main>
  );
}
