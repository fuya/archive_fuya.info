<template>
  <ul>
    <li v-for="page in pages">
      <a :href="page.path">{{page.title || page.path}} ({{new Date(page.frontmatter.createdAt).toLocaleDateString()}})</a>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["dirName"],
  computed: {
    pages() {
      const { pages } = this.$site;
      console.log(pages);
      return pages
        .filter(
          page =>
            page.path.startsWith(`/${this.dirName}/`) &&
            page.path !== `/${this.dirName}/`
        )
        .sort((x, y) => x.frontmatter.createdAt < y.frontmatter.createdAt);
    }
  }
});
</script>
