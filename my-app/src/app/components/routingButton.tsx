
/*
    This file exports button that can be used to route

    *Pass in props: route(string)
    *Default = "/"

*/

import React from "react";
import Button from "./baseComp/button";
import { useRouter } from "next/navigation";

export default function RoutingButton({route = "/"}) {
    const Router = useRouter();
    const handleRouting = () => {
        Router.push(route)
    };

    return (
        <Button onClick={handleRouting}/>
    )
}