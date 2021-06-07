import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";


import { projectData } from "../../data-projects";

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
        this.init();
    },
    data() {
        return {
            project: '',
            projectData: projectData,
            page_title: "",
            page_items: [
                { text: "健康分析", to: {name: "analysis"} },
                { text: this.$route.query.project, to: {name: "analysis-detail", query: {project: this.$route.query.project} }},
                { text: "编程语言分布" },
            ],
            title: "Dashboard",
        };
    },
    methods: {
        init() {
        }
    }
};
