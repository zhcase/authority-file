module.exports = {
    title: '前端规范小册',
    description: '',
    themeConfig: {
        logo: '/assets/img/logo.png',
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/css/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebarDepth: 3,
        sidebar: {
            '/foo/': [
                '',     /* /foo/ */
                'one',  /* /foo/one.html */
                'two'   /* /foo/two.html */
            ],

            '/bar/': [
                '',      /* /bar/ */
                'three', /* /bar/three.html */
                'four'   /* /bar/four.html */
            ],

            // fallback
            '/': [
                '',        /* / */
                'contact', /* /contact.html */
                'about'    /* /about.html */
            ],
        }
        // sidebar: [
        //     {
        //         title: '基础（更新中...）',   // 必要的
        //         collapsable: false, // 可选的, 默认值是 true,
        //         // sidebarDepth: -1,    // 可选的, 默认值是 1
        //         children: [
        //             {
        //                 title: '样式规范',   // 必要的
        //                 sidebarDepth: 1,
        //                 // path: '/css',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //                 children: [{
        //                     title: 'css样式',   // 必要的
        //                     path: '/css/specification',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //                 }]
        //             },
        //         ]
        //     },
        //     {
        //         title: 'JS语法规范',
        //         collapsable: false, // 可选的, 默认值是 true,
        //         initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        //         children: [
        //             {
        //                 title: 'js规范',   // 必要的
        //                 path: '/js/specification',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //             },

        //         ]
        //     },
        // ]
    }

}










