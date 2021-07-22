import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Analysis Detail
 */

export default {
    page: {
        title: "",
        meta: [{ name: "description", content: appConfig.description }]
    },
    components: { PageHeader },
    created() {
        this.repo = this.$route.query.repo;
        this.project = this.$route.query.project;

        // 1. project detail
        this.API.call(
            { action: "Project:DetailRepo", params: {project: this.project, repo: this.repo}}
        ).then( rsp => {
            this.projectData.detail = rsp.data.data;
        })

        // 2. cloc
        this.API.call(
            { action: "Project:DetailCloc", params: {project: this.repo}}
        ).then( rsp => {
            this.projectData.cloc = rsp.data.data;
        })

        // 3. contributors
        this.API.call(
            { action: "Project:DetailContributors", params: {project: this.repo}}
        ).then( rsp => {
            this.projectData.contributors = rsp.data.data;
        })

        // 4. 获取 pull request 数据
        this.API.call(
            {
                action: "Project:DetailPullRequestsChart",
                params: {project: this.repo}
            }
        ).then( rsp => {
            this.yearData.pull_request = rsp.data.data;
            this.genChartYears(rsp.data.data);
        })

        // 4. 获取 issue 数据
        this.API.call(
            {
                action: "Project:DetailIssueChart",
                params: {project: this.repo}
            }
        ).then( rsp => {
            this.yearData.issue = rsp.data.data;
            this.genChartYears(rsp.data.data);
        })

        // 5. commits
        this.API.call(
            {
                action: "Project:DetailCommitsChart",
                params: {project: this.repo}
            }
        ).then( rsp => {
            this.yearData.commit = rsp.data.data;
            this.genChartYears(rsp.data.data);
        })
    },
    data() {
        return {
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
                { text: this.$route.query.project, to: {name: "analysis-detail", query: { project: this.$route.query.project}} },
                { text: this.$route.query.repo },
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
