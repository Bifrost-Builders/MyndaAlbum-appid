
/* 

    File for shared info variables

*/

//Items will be displayed in navbar
export const LinkNames = ["Home", "Demo", "QA", "About", "Find your group", "Sign in"];


//Items will be route (index by LinkNames) doest need / at start
export const LinkRoutes = ["", "Demo", "Qa", "About", "findyourgroup", "Auth"]

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
