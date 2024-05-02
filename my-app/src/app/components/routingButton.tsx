"use client";
/*
    This file exports button that can be used to route

    *Pass in props: route(string)
    *Default = "/"

*/

import React from "react";
import Button from "./baseComp/button";
import Link from "next/link";
import { useRef } from "react";
import handleClickByRef from "../lib/scripts";

type tpr = {
    route?: string,
    title?: string,
}

export default function RoutingButton({ route = "/", title }: tpr) {
    const linkRef = React.useRef(null);

    return (
        <>
        <Link href={route} style={{ display: 'none' }} ref={linkRef} />
            <Button onClick={() => handleClickByRef(linkRef)} title={ title } />
        </>
    )
}