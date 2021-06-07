<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
}
</script>

<template>
  <!-- start page title -->
  <div class="row">
    <div class="col-12">
      <div class="page-title-box d-flex align-items-center justify-content-between">
        <b-breadcrumb :items="items" class="m-0"></b-breadcrumb>

        <div class="page-title-right">
            <h4 class="mb-0 font-size-18">{{ title }}</h4>
        </div>
      </div>
    </div>
  </div>
  <!-- end page title -->
</template>
