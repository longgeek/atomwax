<script>
import appConfig from "@/app.config";
import Layout from "@/router/layouts/main";
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';

export default {
    name: "app",
    components: { Layout },
    data: function() {
        return {
            locale: zhCN,
        }
    },
    page: {
        // All subcomponent titles will be injected into this template.
        titleTemplate(title) {
            title = typeof title === "function" ? title(this.$store) : title;
            return title ? `${title} | ${appConfig.title}` : appConfig.title;
        }
    },
};
</script>

<template>
    <a-config-provider :locale="locale">
        <div id="app">
            <Layout>
                <router-view></router-view>
            </Layout>
        </div>
    </a-config-provider>
</template>
