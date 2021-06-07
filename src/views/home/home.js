import Vue from 'vue'
import appConfig from "@/app.config";
import Layout from "@/router/layouts/main";
import PageHeader from "@/components/page-header";
import PageIntroduction from "@/components/page-introduction";

import zhCN from "ant-design-vue/lib/locale/zh_CN";

const components = { Layout, PageHeader, PageIntroduction };

const pagination = {
    total: 0,
    pageSize: 10,
    showSizeChanger: true,
    showQuickJumper: true,
    pageSizeOptions: ["10", "20", "50", "100"],
    showTotal: total => `合计: ${total} 条.`,
}

// 填充数据
const data = function() {
    return {
        zhCN: zhCN,
        data: [],
        pagination: pagination,
        loading: false,
        locale: {emptyText: '结果为空'},
        columns: [],
        selectedRowKeys: [],
        page_title: "",
        page_items: [ { text: "Home", to: { name: "home" } }, ],
        page_icon_class: "bx bx-server",
        page_intro_title: '"服务器资产管理（Server asset management）" ',
        page_intro_content: '查询服务器基本信息、网络信息、资产信息、配置信息以及详细的硬件信息。同时也可以对服务器信息进行更改、状态管理、IPMI 操作、变更记录等管理功能。'
    }
}
const page =  {
    title: "",
    meta: [{ name: "description", content: appConfig.description }]
};

// 方法集
const methods = {
    handleTableChange(pagination, filters, sorter) {
        console.log('http-pagination: ', pagination);
        const pager = { ...this.pagination };
        pager.current = pagination.current;
        this.pagination = pager;
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    },
    // 获取表格内容
    fetch(params = {}) {
        console.log('http-params: ', params);
        this.loading = true;
        Vue.axios
            .get('https://randomuser.me/api')
            .then(rsp => {
                console.log('http-response: ', rsp);
                const pagination = { ...this.pagination };
                // Read total count from server
                // pagination.total = data.totalCount;
                pagination.total = 200;
                this.loading = false;
                this.data = rsp.data.results;
                this.pagination = pagination;
                this.columns = [
                    {
                        title: 'Name',
                        dataIndex: 'name',
                        sorter: true,
                        width: '20%',
                        scopedSlots: { customRender: 'name' },
                    },
                    {
                        title: 'Gender',
                        dataIndex: 'gender',
                        filters: [
                            { text: 'Male', value: 'male' },
                            { text: 'Female', value: 'female' },
                        ],
                        width: '20%',
                    },
                    {
                        title: 'Email',
                        dataIndex: 'email',
                    },
                ];
            })

        // reqwest({
        //     url: 'https://randomuser.me/api',
        //     method: 'get',
        //     data: {
        //         results: 10,
        //         ...params,
        //     },
        //     type: 'json',
        // }).then(data => {
        //     const pagination = { ...this.pagination };
        //     // Read total count from server
        //     // pagination.total = data.totalCount;
        //     pagination.total = 200;
        //     this.loading = false;
        //     this.data = data.results;
        //     this.pagination = pagination;
        //     this.columns = [
        //         {
        //             title: 'Name',
        //             dataIndex: 'name',
        //             sorter: true,
        //             width: '20%',
        //             scopedSlots: { customRender: 'name' },
        //         },
        //         {
        //             title: 'Gender',
        //             dataIndex: 'gender',
        //             filters: [
        //                 { text: 'Male', value: 'male' },
        //                 { text: 'Female', value: 'female' },
        //             ],
        //             width: '20%',
        //         },
        //         {
        //             title: 'Email',
        //             dataIndex: 'email',
        //         },
        //     ];
        // });
    },
    // 选中表格
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
};

export default {
    page: page,
    data: data,
    methods: methods,
    components: components,
    mounted() {
        this.fetch();
    },
};
