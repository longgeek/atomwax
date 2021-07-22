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
            this.projectData = rsp.data.data;
        })

        // 2. contributors
        this.API.call(
            { action: "Project:DetailContributors", params: {project: this.repo}}
        ).then( rsp => {
            this.authors = rsp.data.data;
        })
    },
    data() {
        return {
            authors: [],
            project: '',
            projectData: {},
            page_title: "",
            page_items: [
                { text: "健康分析", to: {name: "analysis"} },
                { text: this.$route.query.project, to: {name: "analysis-detail", query: {project: this.$route.query.project} }},
                { text: this.$route.query.repo, to: {name: "analysis-detail-repo", query: {project: this.$route.query.project, repo: this.$route.query.repo} }},
                { text: "贡献者统计" },
            ],
            title: "Dashboard",
        };
    },
};











