import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Analysis Detail
 */

const cols = {
    index: { title: '#', sorter: false },
    name: { title: '项目名称', sorter: (a, b) => a.name.length - b.name.length },
    star: { title: 'Star', sorter: (a, b) => a.star - b.star },
    watch: { title: 'Watch', sorter: (a, b) => a.watch - b.watch },
    fork: { title: 'Fork', sorter: (a, b) => a.fork - b.fork },
    commits: { title: 'Commits', sorter: (a, b) => a.commits - b.commits },
    issue: { title: 'Issue', sorter: (a, b) => a.issue - b.issue },
    pull_requests: { title: 'PR', sorter: (a, b) => a.pull_requests - b.pull_requests },
    contributors: { title: '贡献者', sorter: (a, b) => a.contributors - b.contributors },
    line_of_code: { title: '代码行数', sorter: (a, b) => a.line_of_code - b.line_of_code },
}

const pagination = {
    total: 0,
    page: 1,
    pageSize: 10,
    showSizeChanger: true,
    showQuickJumper: false,
    pageSizeOptions: ['10', '20', '50', '100'],
    showTotal: total => `合计: ${total} 条`,
}

export default {
    page: {
        title: "",
        meta: [{ name: "description", content: appConfig.description }]
    },
    components: { PageHeader },
    created() {
        this.project = this.$route.query.project;

        // 生成 table column
        for ( const field in cols ) {
            const set = cols[field];
            const col = {
                ellipsis: true,
                title: set.title,
                sorter: set.hasOwnProperty('sorter') ? set.sorter : true,
                fixed: set.hasOwnProperty('fixed') ? set.fixed : false,
                dataIndex: set.dataIndex || field,
                scopedSlots: set.scopedSlots || { customRender: field },
            };
            this.cols.push(col);
        }

        // 1. project detail
        this.API.call(
            { action: "Project:Detail", params: {project: this.project}}
        ).then( rsp => {
            this.projectData.detail = rsp.data.data;
            // 如果是 org 则获取所有项目列表
            if (this.projectData.detail.hasOwnProperty('org') && this.projectData.detail.org) {
                this.API.call(
                    { action: "Project:DetailProjectList", params: {project: this.project}}
                ).then( rsp => {
                    this.projectData.repos = rsp.data.data;
                    const repos = [];
                    for (let i in rsp.data.data) {
                        let obj = rsp.data.data[i];
                        obj.index = parseInt(i);
                        repos.push(obj);
                    }
                    this.projectData.repos = repos;
                })
            }
        })

        // 2. cloc
        this.API.call(
            { action: "Project:DetailCloc", params: {project: this.project}}
        ).then( rsp => {
            this.projectData.cloc = rsp.data.data;
        })

        // 3. contributors
        this.API.call(
            { action: "Project:DetailContributors", params: {project: this.project}}
        ).then( rsp => {
            this.projectData.contributors = rsp.data.data;
        })

        // 4. 获取 pull request 数据
        this.API.call(
            {
                action: "Project:DetailPullRequestsChart",
                params: {project: this.project}
            }
        ).then( rsp => {
            this.yearData.pull_request = rsp.data.data;
            this.genChartYears(rsp.data.data);
        })

        // 4. 获取 issue 数据
        this.API.call(
            {
                action: "Project:DetailIssueChart",
                params: {project: this.project}
            }
        ).then( rsp => {
            this.yearData.issue = rsp.data.data;
            this.genChartYears(rsp.data.data);
        })

        // 5. commits
        this.API.call(
            {
                action: "Project:DetailCommitsChart",
                params: {project: this.project}
            }
        ).then( rsp => {
            this.yearData.commit = rsp.data.data;
            this.genChartYears(rsp.data.data);
        })
    },
    data() {
        return {
            cols: [],
            pagination: pagination,
            projectData: {
                detail: {
                    image: "",
                },
                cloc: {},
                commits: [],
                repos: [],
            },
            project: '',
            page_title: "",
            page_items: [
                { text: "健康分析", to: {name: "analysis"} },
                { text: this.$route.query.project },
            ],
            title: "Dashboard",
            chartYears: [],
            chartOptions: {
                chart: {
                    offsetY: -10
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 135,
                        dataLabels: {
                            name: {
                                fontSize: "13px",
                                color: undefined,
                                offsetY: 60
                            },
                            value: {
                                offsetY: 22,
                                fontSize: "16px",
                                color: undefined,
                                formatter: function(val) {
                                    return val + "%";
                                }
                            }
                        }
                    }
                },
                colors: ["#556ee6"],
                fill: {
                    type: "gradient",
                    gradient: {
                        shade: "dark",
                        shadeIntensity: 0.15,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 65, 91]
                    }
                },
                stroke: {
                    dashArray: 4
                },
                labels: [""]
            },
            series: [0],
            series1: [
                {
                    name: "Commit 数",
                    data: []
                },
                {
                    name: "Issue 数",
                    data: []
                },
                {
                    name: "Pull Request",
                    data: []
                }
            ],
            chartOptions1: {
                chart: {
                    stacked: true,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: true
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: "15%",
                        endingShape: "rounded"
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: [
                        "一",
                        "二",
                        "三",
                        "四",
                        "五",
                        "六",
                        "七",
                        "八",
                        "九",
                        "十",
                        "十一",
                        "十二"
                    ]
                },
                colors: ["#556ee6", "#f1b44c", "#34c38f"],
                legend: {
                    position: "bottom"
                },
                fill: {
                    opacity: 1
                }
            },
            year: 2021,
            yearData: {
                commit: {},
                issue: {},
                pull_request: {}
            }
        };
    },
    methods: {
        changeYear(year) {
            this.year = year;
            this.series1 = [
                {
                    name: "Commit 数",
                    data: this.yearData.commit[this.year] ? Object.values(this.yearData.commit[this.year]) : [],
                },
                {
                    name: "Issue 数",
                    data: this.yearData.issue[this.year] ? Object.values(this.yearData.issue[this.year]) : [],
                },
                {
                    name: "Pull Request",
                    data: this.yearData.pull_request[this.year] ? Object.values(this.yearData.pull_request[this.year]) : [],
                }
            ];
        },
        genChartYears(data) {
            for (let i in Object.keys(data)) {
                let year = Object.keys(data)[i];
                if (this.chartYears.indexOf(year) == -1) {
                    this.chartYears.push(year);
                }
            }
            this.chartYears.sort();
            this.changeYear(this.year);
        }
    },
};
