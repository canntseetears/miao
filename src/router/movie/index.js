export default {
    path:'/movie',
    component: ()=>import('@/views/movie'),
//movie路由->view视图下的movie组件,ta的模板中存放了Header与Tabbar,且需从components导入header,tabbar这两个组件
//此处path就是URL中的/后名称
    children:[
        {
            path:'city',
            component: ()=>import('@/components/City')
        },
        {
            path:'commingsoon',
            component: ()=>import('@/components/Commingsoon')
        },
        {
            path:'search',
            component: ()=>import('@/components/Search')
        },
        {
            path:'nowplaying',
            component: ()=>import('@/components/Nowplaying')
        },
        {
            path:'/movie',
            //重定向即点击movie默认打开的页面
            redirect:'/movie/nowplaying'
        }
    ]
}