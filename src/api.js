/**
 * For API list settings
 */
import Vue from 'vue'

var API_URL = "/api/1.0"

export default {
    global: {
        search:                 (params)        => { return Vue.axios.get(API_URL + '/search', params) },
        column:                 (params)        => { return Vue.axios.get(API_URL + '/column/common', params) },
        column_post:            (data)          => { return Vue.axios.post(API_URL + '/column/common', data) },
        column_excel:           (params)        => { return Vue.axios.get(API_URL + '/column/excel', params) },
        column_post_excel:      (data)          => { return Vue.axios.post(API_URL + '/column/excel', data) },
        idc_rack:               (id)            => { return Vue.axios.get(API_URL + '/statistic/idc/' + id) },
    },
    coverage: {
        coverage:               ()              => { return Vue.axios.get(API_URL + '/statistic/coverage') },
        uncoverage_server:      API_URL + '/statistic/uncoverage/host',
        uncoverage_netdevice:   API_URL + '/statistic/uncoverage/netdevice',
    },
    ticket: {
        list:                   (params)        => { return Vue.axios.get(API_URL + '/ticket/instance', { params: params }) },
        create:                 (data)          => { return Vue.axios.post(API_URL + '/ticket/instance', data) },
        detail:                 (id, params)    => { return Vue.axios.get(API_URL + '/ticket/instance/' + id, { params: params }) },
        config:                 (process_code)  => { return Vue.axios.get(API_URL + '/ticket/config/' + process_code) },
        jira_exist:             (keywords)      => { return Vue.axios.get(API_URL + '/ticket/jira/exist/' + keywords) },
        detail_edit:            (id, data)      => { return Vue.axios.put(API_URL + '/ticket/instance/' + id, data) },
        filter_fields:          ()              => { return Vue.axios.get(API_URL + '/ticket') },
    },
    user: {
        get:                    ()              => { return Vue.axios.get(API_URL + '/me') },
    },
    server: {
        idc:                    ()              => { return Vue.axios.get(API_URL + '/host/idc') },
        list:                   (params)        => { return Vue.axios.get(API_URL + '/host', { params: params }) },
        edit:                   (id, data)      => { return Vue.axios.put(API_URL + '/host/' + id, data) },
        edit_multi:             (data)          => { return Vue.axios.put(API_URL + '/host', data) },
        create:                 (data)          => { return Vue.axios.post(API_URL + '/host', data) },
        remove:                 (params)        => { return Vue.axios.delete(API_URL + '/host', params) },
        detail:                 (params)        => { return Vue.axios.get(API_URL + '/host', params) },
        fitting:                (id)            => { return Vue.axios.get(API_URL + '/host/fitting/' + id) },
        upload_confirm:         (data)          => { return Vue.axios.post(API_URL + '/host/excel/list', data) },
        upload_check:           (data)          => { return Vue.axios.post(API_URL + '/host/excel/check', data, { header: { 'Content-Type': 'multipart/form-data' } }) },
        export:                 (data)          => { return Vue.axios.post(API_URL + '/host/excel/export', data, { responseType: 'blob' }) },
        download:               API_URL + '/host/demo',
        curl:                   (data)          => { return Vue.axios.post(API_URL + '/host/agent/task', data) },
    },
    netdevice: {
        idc:                    ()              => { return Vue.axios.get(API_URL + '/netdevice/idc') },
        list:                   (params)        => { return Vue.axios.get(API_URL + '/netdevice', { params: params }) },
        edit:                   (id, data)      => { return Vue.axios.put(API_URL + '/netdevice/' + id, data) },
        edit_multi:             (data)          => { return Vue.axios.put(API_URL + '/netdevice', data) },
        create:                 (data)          => { return Vue.axios.post(API_URL + '/netdevice', data) },
        remove:                 (params)        => { return Vue.axios.delete(API_URL + '/netdevice', params) },
        detail:                 (params)        => { return Vue.axios.get(API_URL + '/netdevice', { params: params }) },
        upload_confirm:         (data)          => { return Vue.axios.post(API_URL + '/netdevice/excel/list', data) },
        upload_check:           (data)          => { return Vue.axios.post(API_URL + '/netdevice/excel/check', data, { header: { 'Content-Type': 'multipart/form-data' } }) },
        export:                 (data)          => { return Vue.axios.post(API_URL + '/netdevice/excel/export', data, { responseType: 'blob' }) },
        download:               API_URL + '/netdevice/demo',
    },
    fitting: {
        idc:                    ()              => { return Vue.axios.get(API_URL + '/fitting/idc') },
        list:                   (params, type)  => { return Vue.axios.get(API_URL + '/fitting/' + type, { params: params }) },
        edit:                   (data, type, id)  => { return Vue.axios.put(API_URL + '/fitting/' + type + '/' + id, data) },
        edit_multi:             (data, type)    => { return Vue.axios.put(API_URL + '/fitting/' + type, data) },
        create:                 (data, type)    => { return Vue.axios.post(API_URL + '/fitting/' + type, data) },
        detail:                 (params, type)  => { return Vue.axios.get(API_URL + '/fitting/' + type, { params: params }) },
        import:                 (data)          => { return Vue.axios.post(API_URL + '/fitting/excel/import', data, { header: { 'Content-Type': 'multipart/form-data' } }) },
        export:                 (data)          => { return Vue.axios.post(API_URL + '/fitting/excel/export', data, { responseType: 'blob' }) },
        download:               API_URL + '/fitting/demo',
        inventory:              (params)        => { return Vue.axios.get(API_URL + '/inventory', { params: params }) },
    },
    vm: {
        curl:                   (data)          => { return Vue.axios.post(API_URL + '/vm/agent/task', data) },
        list:                   (params)        => { return Vue.axios.get(API_URL + '/vm', { params: params }) },
        detail:                 (params)        => { return Vue.axios.get(API_URL + '/vm', { params: params }) },
    },
    aliyun: {
        ecs: {
            list:               (params)        => { return Vue.axios.get(API_URL + '/cloudhost', { params: params }) },
            detail:             (InstanceId)    => { return Vue.axios.get(API_URL + '/cloudhost/' + InstanceId) },
        }
    },
    idc: {
        list:                   (params)        => { return Vue.axios.get(API_URL + '/idc', params) },
        edit:                   (id, data)      => { return Vue.axios.put(API_URL + '/idc/' + id, data) },
        create:                 (data)          => { return Vue.axios.post(API_URL + '/idc', data) },
        detail:                 (id, params)    => { return Vue.axios.get(API_URL + '/idc/' + id, params) },
        statistic:              (id)            => { return Vue.axios.get(API_URL + '/statistic/num/idc/' + id) },
        room: {
            edit:               (id, data)      => { return Vue.axios.put(API_URL + '/idc/room/' + id, data) },
        },
        col: {
            edit:               (id, data)      => { return Vue.axios.put(API_URL + '/idc/col/' + id, data) },
            create:             (data)          => { return Vue.axios.post(API_URL + '/idc/col', data) },
        },
        rack: {
            edit:               (id, data)      => { return Vue.axios.put(API_URL + '/idc/rack/' + id, data) },
            detail:             (id, params)    => { return Vue.axios.get(API_URL + '/idc/rack/' + id, params) },
            remove:             (params)        => { return Vue.axios.delete(API_URL + '/idc/rack', params) },
            create:             (data)          => { return Vue.axios.post(API_URL + '/idc/rack', data) },
        }
    },
    supplier: {
        list:                   (params)        => { return Vue.axios.get(API_URL + '/supplier', params) },
        edit:                   (id, data)      => { return Vue.axios.put(API_URL + '/supplier/' + id, data) },
        create:                 (data)          => { return Vue.axios.post(API_URL + '/supplier', data) },
        detail:                 (params)    => { return Vue.axios.get(API_URL + '/supplier', params) },
        remove:                 (params)        => { return Vue.axios.delete(API_URL + '/supplier', params) },
    },
    malfunction: {
        list:                   (params)        => { return Vue.axios.get(API_URL + '/malfunction', params) },
        maps:                   ()              => { return Vue.axios.get(API_URL + '/malfunction/base/info') },
        logs:                   (id, params)    => { return Vue.axios.get(API_URL + '/malfunction/syslog/' + id, params) },
        logs_update:            (id, data)      => { return Vue.axios.put(API_URL + '/malfunction/syslog/' + id, data) },
        edit:                   (id, data)      => { return Vue.axios.put(API_URL + '/malfunction/' + id, data) },
        create:                 (data)          => { return Vue.axios.post(API_URL + '/malfunction', data) },
        detail:                 (id, params)    => { return Vue.axios.get(API_URL + '/malfunction/' + id, params) },
        repair:                 (data)          => { return Vue.axios.post(API_URL + '/malfunction/repair', data) },
        remove:                 (params)        => { return Vue.axios.delete(API_URL + '/malfunction/malfunction', params) },
        selftest:               (data)          => { return Vue.axios.post(API_URL + '/malfunction/maas/machine/selftest', data) },
        update_status:          (data)          => { return Vue.axios.put(API_URL + '/malfunction/status', data) },
        update_process:         (data)          => { return Vue.axios.post(API_URL + '/malfunction/process', data) },
    },
    account: {
        user: {
            list:               (params)        => { return Vue.axios.get(API_URL + '/auth/user', params) },
            edit:               (id, data)      => { return Vue.axios.put(API_URL + '/auth/user/' + id, data) },
            role:               (params)        => { return Vue.axios.get(API_URL + '/auth/user_role', params) },
            role_post:          (data)          => { return Vue.axios.post(API_URL + '/auth/user_role', data) },
            role_remove:        (params)        => { return Vue.axios.delete(API_URL + '/auth/user_role', params) },
            department_post:    (data)          => { return Vue.axios.post(API_URL + '/auth/group_user', data) },
            department_remove:  (params)        => { return Vue.axios.delete(API_URL + '/auth/group_user', params) },
            logs:               (params)        => { return Vue.axios.get(API_URL + '/activities', params) },
            group:              (params)        => { return Vue.axios.get(API_URL + '/auth/group_user', params) },
            create:             (data)          => { return Vue.axios.post(API_URL + '/auth/user', data) },
            remove:             (params)        => { return Vue.axios.delete(API_URL + '/auth/user', params) },
            detail:             (params)        => { return Vue.axios.get(API_URL + '/auth/user', params) },
        },
        department: {
            list:               (params)        => { return Vue.axios.get(API_URL + '/auth/group', params) },
            edit:               (id, data)      => { return Vue.axios.put(API_URL + '/auth/group/' + id, data) },
            role:               (params)        => { return Vue.axios.get(API_URL + '/auth/group_role', params) },
            role_post:          (data)          => { return Vue.axios.post(API_URL + '/auth/group_role', data) },
            role_remove:        (params)        => { return Vue.axios.delete(API_URL + '/auth/group_role', params) },
            user:               (params)        => { return Vue.axios.get(API_URL + '/auth/group_user', params) },
            user_post:          (data)          => { return Vue.axios.post(API_URL + '/auth/group_user', data) },
            user_remove:        (params)        => { return Vue.axios.delete(API_URL + '/auth/group_user', params) },
            create:             (data)          => { return Vue.axios.post(API_URL + '/auth/group', data) },
            remove:             (params)        => { return Vue.axios.delete(API_URL + '/auth/group', params) },
            detail:             (params)        => { return Vue.axios.get(API_URL + '/auth/group', params) },
            resource:           (id)            => { return Vue.axios.get(API_URL + '/auth/group/resource/' + id) },
            resource_bind:      (data)          => { return Vue.axios.post(API_URL + '/auth/resource/acl', data) },
            resource_unbind:    (data)          => { return Vue.axios.delete(API_URL + '/auth/resource/acl', data) },
        },
        role: {
            list:               (params)        => { return Vue.axios.get(API_URL + '/auth/role', params) },
            edit:               (id, data)      => { return Vue.axios.put(API_URL + '/auth/role/' + id, data) },
            user:               (params)        => { return Vue.axios.get(API_URL + '/auth/user_role', params) },
            user_post:          (data)          => { return Vue.axios.post(API_URL + '/auth/user_role', data) },
            user_remove:        (params)        => { return Vue.axios.delete(API_URL + '/auth/user_role', params) },
            permission:         (params)        => { return Vue.axios.get(API_URL + '/auth/role_permission', params) },
            permission_post:    (data)          => { return Vue.axios.post(API_URL + '/auth/role_permission', data) },
            permission_remove:  (params)        => { return Vue.axios.delete(API_URL + '/auth/role_permission', params) },
            group:              (params)        => { return Vue.axios.get(API_URL + '/auth/group_user', params) },
            create:             (data)          => { return Vue.axios.post(API_URL + '/auth/role', data) },
            remove:             (params)        => { return Vue.axios.delete(API_URL + '/auth/role', params) },
            detail:             (params)        => { return Vue.axios.get(API_URL + '/auth/role', params) },
        },
        permission: {
            list:               (params)        => { return Vue.axios.get(API_URL + '/auth/permission', params) },
            edit:               (id, data)      => { return Vue.axios.put(API_URL + '/auth/permission/' + id, data) },
            role:               (params)        => { return Vue.axios.get(API_URL + '/auth/role_permission', params) },
            role_post:          (data)          => { return Vue.axios.post(API_URL + '/auth/role_permission', data) },
            role_remove:        (data)          => { return Vue.axios.delete(API_URL + '/auth/role_permission', data) },
            create:             (data)          => { return Vue.axios.post(API_URL + '/auth/permission', data) },
            remove:             (params)        => { return Vue.axios.delete(API_URL + '/auth/permission', params) },
            detail:             (params)        => { return Vue.axios.get(API_URL + '/auth/permission', params) },
        }
    },
    notifications: {
        create:                 (data)          => { return Vue.axios.post(API_URL + '/notice', data) },
        list:                   (params)        => { return Vue.axios.get(API_URL + '/notice/user', params) },
        admin_list:             (params)        => { return Vue.axios.get(API_URL + '/notice', params) },
        edit:                   (id, data)      => { return Vue.axios.put(API_URL + '/notice/' + id, data) },
        detail:                 (id, params)    => { return Vue.axios.get(API_URL + '/notice/' + id, params) },
        remove:                 (id)            => { return Vue.axios.delete(API_URL + '/notice/' + id) },
        type:                   (params)        => { return Vue.axios.get(API_URL + '/notice/type', params) },
        read:                   (id, data)      => { return Vue.axios.put(API_URL + '/notice/user/' + id, data) },
        read_all:               ()              => { return Vue.axios.put(API_URL + '/notice/read') },
        unread_list:            (params)        => { return Vue.axios.get(API_URL + '/notice/user', params) },
        source:                 (id, params)    => { return Vue.axios.get(API_URL + '/notice/source/' + id, params) },
    },
    changelog: {
        list:                   (params)        => { return Vue.axios.get(API_URL + '/versionlog', params) },
        edit:                   (id, data)      => { return Vue.axios.put(API_URL + '/versionlog/' + id, data) },
        create:                 (data)          => { return Vue.axios.post(API_URL + '/versionlog', data) },
        remove:                 (id)            => { return Vue.axios.delete(API_URL + '/versionlog/' + id) },
    },
    tags: {
        list:                   (params)        => { return Vue.axios.get(API_URL + '/tag', params) },
        edit:                   (id, data)      => { return Vue.axios.put(API_URL + '/tag/' + id, data) },
        detail:                 (id, params)    => { return Vue.axios.get(API_URL + '/tag/' + id, params) },
        bind_resource:          (data)          => { return Vue.axios.post(API_URL + '/tag/source', data) },
        detail_resource:        (id, params)    => { return Vue.axios.get(API_URL + '/tag/source/' + id, params) },
        create:                 (data)          => { return Vue.axios.post(API_URL + '/tag', data) },
        unbind:                 (id, params)    => { return Vue.axios.delete(API_URL + '/tag/source/' + id, params) },
        remove:                 (id)            => { return Vue.axios.delete(API_URL + '/tag/' + id) },
    },
    vlan: {
        list:                   (params)        => { return Vue.axios.get(API_URL + '/vlan', params) },
        edit:                   (id, data)      => { return Vue.axios.put(API_URL + '/vlan/' + id, data) },
        detail:                 (id, params)    => { return Vue.axios.get(API_URL + '/vlan/' + id, params) },
        create:                 (data)          => { return Vue.axios.post(API_URL + '/vlan', data) },
        remove:                 (params)        => { return Vue.axios.delete(API_URL + '/vlan', params) },
    },
    ops_routine: {
        list:                   (params)        => { return Vue.axios.get(API_URL + '/ops-routine', params) },
        edit:                   (id, data)      => { return Vue.axios.put(API_URL + '/ops-routine/' + id, data) },
        detail:                 (id, params)    => { return Vue.axios.get(API_URL + '/ops-routine/' + id, params) },
        create:                 (data)          => { return Vue.axios.post(API_URL + '/ops-routine', data) },
        remove:                 (params)        => { return Vue.axios.delete(API_URL + '/ops-routine', params) },
    },
    oa: {
        token:                  ()              => {
            const params = new URLSearchParams();
            params.append('loginid', process.env.VUE_APP_OA_LOGINID);
            params.append('password', process.env.VUE_APP_OA_PASSWORD);
            return Vue.axios.post(
                process.env.VUE_APP_OA_URL + '/api/VerifyLogin.jsp',
                params,
                {
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }
            )
        },
        workflow:               (params, token) => {
            return Vue.axios.post(
                process.env.VUE_APP_OA_URL + '/api/workflow/CreateRequest.jsp',
                params,
                {
                    headers: {
                        'sessionkey': token,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            )
        },
    },
    // 对接标哥提供的脚本系统 API
    script: {
        token:                  ()              => {
            const data = {
                key: process.env.VUE_APP_SCRIPT_KEY,
                secret: process.env.VUE_APP_SCRIPT_SECRET,
            }
            return Vue.axios.post (
                process.env.VUE_APP_SCRIPT_URL + '/auth',
                data,
            )
        },
        dhcp:                   (data)          => {
            return Vue.axios.post (
                process.env.VUE_APP_SCRIPT_URL + '/dhcp',
                data,
            )
        },
        dns:                    (data)          => {
            return Vue.axios.post (
                process.env.VUE_APP_SCRIPT_URL + '/dns',
                data,
            )
        },
    },
    // 建莹对接江林的 MegAgent 管理 API
    agent: {
        Token:                  ()              => {
            const params = {
                username: process.env.VUE_APP_AGENT_USERNAME,
                password: process.env.VUE_APP_AGENT_PASSWORD,
            }
            return Vue.axios.post (
                process.env.VUE_APP_AGENT_URL + '/api/user/login',
                params,
            )
        },
        work: {
            post:               (params, headers) => {
                return Vue.axios.get (
                    process.env.VUE_APP_AGENT_URL + '/api/worker/list',
                    {
                        params: params,
                        headers: headers,
                    }
                )
            },
            execute:            (data, headers) => {
                return Vue.axios.post (
                    process.env.VUE_APP_AGENT_URL + '/api/worker/update',
                    data,
                    { headers: headers }
                )
            },
        },
        assignment: {
            post:               (params, headers) => {
                return Vue.axios.get (
                    process.env.VUE_APP_AGENT_URL + '/api/crontab/list',
                    {
                        params: params,
                        headers: headers,
                    }
                )
            },
            detail:             (params, headers) => {
                return Vue.axios.get(
                    process.env.VUE_APP_AGENT_URL + '/api/crontab/detail',
                    { params, headers }
                )
            },
            update:             (data, headers) => {
                return Vue.axios.post(
                    process.env.VUE_APP_AGENT_URL + '/api/crontab/update',
                    data,
                    { headers: headers }
                )
            },
        },
        node: {
            post:               (params, headers) => {
                return Vue.axios.get(process.env.VUE_APP_AGENT_URL + '/api/version/list',
                { params: params,
                  headers: headers
                }
            )},
            detail:             (params, headers) => {
                return Vue.axios.get(
                    process.env.VUE_APP_AGENT_URL + '/api/version/detail',
                    { params, headers }
                )
            },
            update:             (data, headers) => {
                return Vue.axios.post(
                    process.env.VUE_APP_AGENT_URL + '/api/version/update',
                    data,
                    { headers: headers }
                )
            },
            heartbeat:          (params, headers) => {
                return Vue.axios.get(
                    process.env.VUE_APP_AGENT_URL + '/api/version/heartbeat',
                    { params, headers }
                )
            },
            delete:             (data, headers)  => {
                return Vue.axios.post(
                    process.env.VUE_APP_AGENT_URL + '/api/version/delete',
                    data,
                    { headers: headers }
                )
            },
        },
        plugin: {
            post:               (params, headers) => {
                return Vue.axios.get(
                    process.env.VUE_APP_AGENT_URL + '/api/plugin/list',
                    { params: params,
                      headers: headers
                    }
                )
            },
            update:             (data, headers) => {
                return Vue.axios.post(
                    process.env.VUE_APP_AGENT_URL + '/api/plugin/update',
                    data,
                    { headers: headers }
                )
            },
            detail:             (params, headers) => {
                return Vue.axios.get(
                    process.env.VUE_APP_AGENT_URL + '/api/plugin/detail',
                    { params, headers }
                )
            },
        },
        safe: {
            post:               (params, headers) => {
                return Vue.axios.get(
                    process.env.VUE_APP_AGENT_URL + '/api/sec/list',
                    { params: params,
                      headers: headers
                    }
                )
            },
            detail:             (params, headers) => {
                return Vue.axios.get(
                    process.env.VUE_APP_AGENT_URL + '/api/sec/detail',
                    { params, headers }
                )
            },
            update:             (data, headers) => {
                return Vue.axios.post(
                    process.env.VUE_APP_AGENT_URL + '/api/sec/update',
                    data,
                    { headers: headers }
                )
            },
        },
        dataset: {
            post:               (params, headers) => {
                return Vue.axios.get(
                    process.env.VUE_APP_AGENT_URL + '/api/dataset/list',
                    { params: params,
                      headers: headers
                    }
                )
            },
            detail:             (params, headers) => {
                return Vue.axios.get(
                    process.env.VUE_APP_AGENT_URL + '/api/dataset/detail',
                    { params, headers }
                )
            },
            delete:             (data, headers) => {
                return Vue.axios.post(
                    process.env.VUE_APP_AGENT_URL + '/api/dataset/delete',
                    data,
                    { headers: headers }
                )
            },
            allcoll:            (headers) => {
                return Vue.axios.get(
                    process.env.VUE_APP_AGENT_URL + '/api/dataset/allcollectfields',
                    { headers }
                )
            },
            allnode:            (headers) => {
                return Vue.axios.get(
                    process.env.VUE_APP_AGENT_URL + '/api/dataset/allnodelist',
                    { headers }
                )
            },
            create:             (data, headers) => {
                return Vue.axios.post(
                    process.env.VUE_APP_AGENT_URL + '/api/dataset/create',
                    data,
                    { headers: headers }
                )
            },
            update:             (data, headers) => {
                return Vue.axios.post(
                    process.env.VUE_APP_AGENT_URL + '/api/dataset/update',
                    data,
                    { headers: headers }
                )
            },
            ips:                (params, headers) => {
                return Vue.axios.get(
                    process.env.VUE_APP_AGENT_URL + '/api/dataset/nodesofgroup',
                    { params, headers }
                )
            },
            fields:             (params, headers) => {
                return Vue.axios.get(
                    process.env.VUE_APP_AGENT_URL + '/api/dataset/fieldsofcollect',
                    { params, headers }
                )
            },
        },
    },
}
