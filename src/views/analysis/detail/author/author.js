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

        // 1. project detail
        this.API.call(
            { action: "Project:Detail", params: {project: this.project}}
        ).then( rsp => {
            this.projectData = rsp.data.data;
        })

        // 2. contributors
        this.API.call(
            { action: "Project:DetailContributors", params: {project: this.project}}
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
                { text: "贡献者统计" },
            ],
            title: "Dashboard",
        };
    },
};











