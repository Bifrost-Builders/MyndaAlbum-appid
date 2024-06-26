
/*

    Color pallete:

    Backgrounds
    <!-- bg-blue-600 -->
    <!-- bg-blue-700 -->
    <!-- bg-white -->
    <!-- bg-slate-100 -->
    <!-- bg-black -->

    Text
    text-white
    text-black
    text-slate-100
    text-gray-100
    text-blue-600
    text-blue-700


*/

/* 

    File for shared info variables

*/


export const appName = "TimelineX"; // Breyta fyrir vefapps nafnið
// import { appName } from "@/app/lib/sharedInfo"; til að importa þar sem þarf

//Items will be displayed in navbar
export const LinkNames = ["Home", "Demo", "QA", "About", "Find your group", "Sign in"];


//Items will be route (index by LinkNames) doest need / at start
export const LinkRoutes = ["", "Demo", "Qa", "About", "findyourgroup", "Auth"]
  

export const UserNavData = [
    {
        title: "Overview",
        Url_Path: "/secure",
    },
    {
        title: "Settings",
        Url_Path: "/secure/settings",
    },
    {
        title: "Log out",
        action: "yes",
        Url_Path: "",
    },
];

/*
    Array thats stores data that is supposed to be displayed in user left side navbar
    Dynamic
*/
//ekki tengt
export const sideBarLinks = [
    {
        imgPath: "/undraw_sweet_home_dkhr.png",
        route: "/secure",
        label: "Home",
    },
    {
        imgPath: "/undraw_Edit_photo_re_ton4.png",
        route: "/",
        label: "Add image",
    },
    {
        imgPath: "/undraw_add_friends_re_3xte.png",
        route: "/ev1",
        label: "Add freinds",
    },
]
