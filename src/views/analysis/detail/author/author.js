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
        this.project = this.$route.query.project;
        this.API.call({action: "Project:Detail", params: {project: this.project}}).then(rsp => { this.projectData = rsp.data.data; this.init(); })
    },
    data() {
        return {
            authors: [],
            project: '',
            projectData: {
                detail: {},
            },
            page_title: "",
            page_items: [
                { text: "健康分析", to: {name: "analysis"} },
                { text: this.$route.query.project, to: {name: "analysis-detail", query: {project: this.$route.query.project} }},
                { text: "贡献者统计" },
            ],
            title: "Dashboard",
        };
    },
    methods: {
        init() {
            // 针对贡献者数据结构重新定义
            let contributor = this.projectData.contributors;
            this.authors = [];
            this.authorsInfo = {};

            for (let idx in contributor) {
                let name = contributor[idx][0];
                let nums = contributor[idx][1];
                this.authors.push(name);
                this.authorsInfo[name] = {
                    commit: nums,
                    added: 0,
                    removed: 0,
                    commitDate: [],
                };
            }

            // 遍历 Commit 数据，对应到贡献者上
            let commit = this.projectData.commits;

            for (let i in commit) {
                for (let f in commit[i].files) {
                    if (commit[i].files[f].added && commit[i].files[f].added !== '-') {
                        this.authorsInfo[commit[i].Author].added += Number(commit[i].files[f].added);
                    }
                    if (commit[i].files[f].removed && commit[i].files[f].removed !== '-') {
                        this.authorsInfo[commit[i].Author].removed += Number(commit[i].files[f].removed);
                    }
                }
                // 用户所有提交时间
                this.authorsInfo[commit[i].Author].commitDate.push((new Date(commit[i].CommitDate)).toLocaleString());
            }

            console.log('end: ', this.authorsInfo);
        }
    }
};
