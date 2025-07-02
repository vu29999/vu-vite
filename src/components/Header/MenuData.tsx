const menuData = [
    {
        title: "학과안내",
        path: "/intro/greeting",
        sub: [
            {
                title: "인사말",
                path: "/intro/greeting",
                // subSub: [
                //     { title: "menu sub-sub 01", path: "/menu/sub01/01" },
                //     { title: "menu sub-sub 02", path: "/menu/sub01/02" }
                // ]

            },
            {
                title: "Guide",
                path: "/intro/guide",
            },
            {
                title: "탭",
                path: "/intro/tabmn01",
                subSub: [
                    { title: "tab-mn01", path: "/intro/tabmn01" },
                    { title: "tab-mn02", path: "/intro/tabmn02" },
                    { title: "tab-mn03", path: "/intro/tabmn03" }
                ]
            }
        ]
    },
    {
        title: "about",
        path: "/about/about",
        sub: [
            {
                title: "about sub 01",
                path: "/about/about",
                subSub: [
                    { title: "about sub-sub 01", path: "/about/sub01/01" }
                ]
            },
            {
                title: "about sub 02",
                path: "/about/about02",
                subSub: []
            }
        ]
    },
    {
        title: "team",
        path: "/team/team",
        sub: [
            {
                title: "team 01",
                path: "/team/team",
                // subSub: [
                //     { title: "team sub-sub 01", path: "/team/sub01/01" }
                // ]
            },
            {
                title: "team 02",
                path: "/team/team02",
                subSub: []
            }
        ]
    },
    {
        title: "MenuStyle",
        path: "/header01",
        sub: [
            {
                title: "MenuStyle 01",
                path: "/header01",
            },
            {
                title: "MenuStyle 02",
                path: "/header02",
                subSub: []
            }
        ]
    },
    {
        title: "contact",
        path: "/contact",
    },
];

export default menuData;