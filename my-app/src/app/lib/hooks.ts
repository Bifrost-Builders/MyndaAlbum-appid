"use client";
import { useRouter } from "next/router";

export default function useSkipper() {
    const Router = useRouter();
    Router.push("/");
}