<script>
export default {
    components: {},
    props: {
        icon: {
            type: String,
            default: 'bx bxs-server',
        },
        title: {
            type: String,
            default: '',
        },
        content: {
            type: String,
            default: '',
        },
    },
}
</script>

<template>
    <!-- start page introduction -->
    <div class="row">
        <div class="col-12">
            <div class="page-introduction">
                <i class="_icon" :class="icon"></i>
                <span class="_box">
                    <div class="_title">{{ title }}</div>
                    <div class="_content">{{ content }}</div>
                </span>
            </div>
        </div>
    </div>
    <!-- end page introduction -->
</template>
