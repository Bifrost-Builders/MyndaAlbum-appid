"use client";
import { getDatabase, ref, child, get } from "firebase/database";
import { Database } from "firebase/database";
import { readFromFirebase } from '@/app/lib/scripts'
export default function Ev1() {
    readFromFirebase();
    return (
        <>
            <h1>Welcome to devolp section</h1>
        </>
    )
}