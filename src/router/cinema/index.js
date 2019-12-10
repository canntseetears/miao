export default{
    path:'/cinema',
    component: ()=>import('@/views/cinema'),
    children:[
        {/*子路由注意path不能加/ 否则就还是全局匹配，直接输入路径名即可 */
            path:'city',
            component: ()=>import('@/components/Clist')
        },
        {
            path:'brand',
            component: ()=>import('@/components/Brand')
        },
        {
            path:'feature',
            component: ()=>import('@/components/Feature')
        }
    ]
}