"use client";

import { Profile } from "@/components/Profile";
import { Search } from "@/components/Search";
import API from "@/lib/api";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "chart.js/auto";

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

      const userResponse = await API.get(`/api/user/${search}`);
      setData([userResponse.data]);

      const mostLanguagesResponse = await API.get(`/api/languages/${search}`);
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
      <ToastContainer />
      <Search onSearch={onHandleKeyDown} />
      <Profile user={data} mostLanguages={mostLanguages} loading={loading} />
    </main>
  );
}
