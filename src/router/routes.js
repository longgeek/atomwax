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
    {
        path: '/analysis/detail/repo:project?:repo?',
        name: 'analysis-detail-repo',
        meta: { authRequired: false },
        component: () => import('@/views/analysis/detail/repo/repo.vue'),
    },
    {
        path: '/analysis/detail/repo/author:project?:repo?',
        name: 'analysis-detail-repo-author',
        meta: { authRequired: false },
        component: () => import('@/views/analysis/detail/repo/author/author.vue'),
    },
    {
        path: '/analysis/detail/repo/language:project?:repo?',
        name: 'analysis-detail-repo-language',
        meta: { authRequired: false },
        component: () => import('@/views/analysis/detail/repo/language/language.vue'),
    },
]
