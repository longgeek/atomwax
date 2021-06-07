import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";
import PageIntroduction from "@/components/page-introduction";

import { projectData } from "./data-projects";

/**
 * Starter component
 */
export default {
    page: {
        title: "",
        meta: [{ name: "description", content: appConfig.description }]
    },
    components: { PageHeader, PageIntroduction },
    data() {
        return {
            projectData: projectData,
            page_title: "",
            page_items: [ { text: "健康分析" } ],
            page_icon_class: "mdi mdi-chart-donut-variant",
            page_intro_title: '"健康分析（Project health analysis）" ',
            page_intro_content: '开源项目的健康分析，从代码提交、Issue、拉取次数、贡献者等纬度衡量项目的健康程度。'
        };
    },
    methods: {}
};
