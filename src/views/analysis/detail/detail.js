import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

import Emailsent from "@/components/widgets/emailsent";

/**
 * Analysis Detail
 */
export default {
    page: {
        title: "",
        meta: [{ name: "description", content: appConfig.description }]
    },
    components: { PageHeader, Emailsent },
    created() {
        this.project = this.$route.query.project;
        this.API.call({action: "Project:Detail", params: {project: this.project}}).then(rsp => { this.projectData = rsp.data.data; this.init(); })
    },
    data() {
        return {
            projectData: {
                detail: {},
                cloc: {},
                commits: [],
            },
            project: '',
            page_title: "",
            page_items: [
                { text: "健康分析", to: {name: "analysis"} },
                { text: this.$route.query.project },
            ],
            title: "Dashboard",
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
                commit: {
                    2019: {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0},
                    2020: {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0},
                    2021: {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0},
                },
                issue: {
                    2019: {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0},
                    2020: {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0},
                    2021: {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0},
                },
                pull_request: {
                    2019: {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0},
                    2020: {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0},
                    2021: {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0},
                }
            }
        };
    },
    methods: {
        init() {
            // 1. 获取 commit 数据
            let commit = this.projectData.commits;
            for (let i in commit) {
                let commitYear;
                let commitMonth;

                if (commit[i].hasOwnProperty('CommitData')) {
                    commitYear = new Date(commit[i].CommitDate).getUTCFullYear();
                    commitMonth = new Date(commit[i].CommitDate).getMonth();
                } else {
                    commitYear = new Date(commit[i].data.CommitDate).getUTCFullYear();
                    commitMonth = new Date(commit[i].data.CommitDate).getMonth();
                }
                if (commitYear == 2019) this.yearData.commit[2019][commitMonth] += 1;
                if (commitYear == 2020) this.yearData.commit[2020][commitMonth] += 1;
                if (commitYear == 2021) this.yearData.commit[2021][commitMonth] += 1;
            }

            // 2. 获取 issue 数据
            let issue = this.projectData.issue;
            for (let i in issue) {
                let issueYear;
                let issueMonth;

                if (issue[i].hasOwnProperty('data')) {
                    issueYear = new Date(issue[i].data.created_at).getUTCFullYear();
                    issueMonth = new Date(issue[i].data.created_at).getMonth();
                } else {
                    issueYear = new Date(issue[i].created_at).getUTCFullYear();
                    issueMonth = new Date(issue[i].created_at).getMonth();
                }
                if (issueYear == 2019) this.yearData.issue[2019][issueMonth] += 1;
                if (issueYear == 2020) this.yearData.issue[2020][issueMonth] += 1;
                if (issueYear == 2021) this.yearData.issue[2021][issueMonth] += 1;
            }


            // 3. 获取 pull request 数据
            let pull_request = this.projectData.pull_requests;
            for (let i in pull_request) {
                let requestYear = new Date(pull_request[i].data.created_at).getUTCFullYear();
                let requestMonth = new Date(pull_request[i].data.created_at).getMonth();
                if (requestYear == 2019) this.yearData.pull_request[2019][requestMonth] += 1;
                if (requestYear == 2020) this.yearData.pull_request[2020][requestMonth] += 1;
                if (requestYear == 2021) this.yearData.pull_request[2021][requestMonth] += 1;
            }

            this.changeYear(this.year);
        },
        changeYear(year){
            this.year = year;
            this.series1 = [
                {
                    name: "Commit 数",
                    data: Object.values(this.yearData.commit[this.year]),
                },
                {
                    name: "Issue 数",
                    data: Object.values(this.yearData.issue[this.year]),
                },
                {
                    name: "Pull Request",
                    data: Object.values(this.yearData.pull_request[this.year]),
                }
            ];
        },
    }
};
