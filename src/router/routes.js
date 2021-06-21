export default [
    {
        path: '/',
        redirect: '/analysis',
    },
    {
        path: '/analysis',
        name: 'analysis',
        meta: { authRequired: false },
        component: () => import('@/views/analysis/analysis.vue'),
    },
    {
        path: '/analysis/detail:project?',
        name: 'analysis-detail',
        meta: { authRequired: false },
        component: () => import('@/views/analysis/detail/detail.vue'),
    },
    {
        path: '/analysis/detail/author:project?',
        name: 'analysis-detail-author',
        meta: { authRequired: false },
        component: () => import('@/views/analysis/detail/author/author.vue'),
    },
    {
        path: '/analysis/detail/language:project?',
        name: 'analysis-detail-language',
        meta: { authRequired: false },
        component: () => import('@/views/analysis/detail/language/language.vue'),
    },
]
