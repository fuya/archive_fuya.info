<template>
  <a class="wrap-link" :href="page.path">
    <div class="post">
      <span class="post-title">
        <span class="wip" v-if="page.frontmatter.wip">WIP</span>
        {{page.title || page.path}}
      </span>
      <div>
        <span class="published-at">{{publishedAt}}</span>
        <ul class="tags">
          <li class="category" v-for="category in page.frontmatter.tags">
            {{category}}
          </li>
        </ul>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["page"],
  computed: {
    publishedAt() {
      return this.page.frontmatter.createdAt
        ? new Date(this.page.frontmatter.createdAt).toLocaleDateString()
        : "----/--/--";
    }
  }
});
</script>

<style lang="stylus" scoped>
@import '../styles/palett.styl';

.wrap-link {
  display: block;
}

.post {
  border: 1px solid $borderColor;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  margin: 0.5em 0;
  line-height: 1;
}

.post:hover {
  background: $accentBackgroundColor;
}

.wip {
  background: #ccc;
  padding: 0 0.5em;
  border-radius: 0.2em;
}

.post-title {
  font-size: 1.4em;
}

.published-at {
  color: $textColor;
}

.tags {
  list-style: none;
  display: inline;
  padding: 0;
}

.category {
  display: inline;
  margin: 0 0.2em;
  padding: 0.1em;
  user-select: none;
}
</style>
