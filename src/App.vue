<script>
import appConfig from "@/app.config";
import Layout from "@/router/layouts/main";

export default {
    name: "app",
    components: { Layout },
    data: function() {
        return {}
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
    <div id="app">
        <Layout>
            <router-view></router-view>
        </Layout>
    </div>
</template>
