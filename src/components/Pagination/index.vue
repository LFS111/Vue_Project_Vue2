<template>
  <div class="pagination">
    <!-- 上部分 -->
    <!-- <h1>start:{{ continuess.start }}--end:{{ continuess.end }}</h1> -->
    <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">
      上一页
    </button>
    <button
      v-if="continuess.start > 1"
      @click="$emit('getPageNo', 1)"
      :class="{ active: pageNo == 1 }"
    >
      1
    </button>
    <button v-if="continuess.start > 2">···</button>
    <!-- 中间部分 -->

    <button
      v-for="(page, index) in continuess.end"
      :key="index"
      v-show="page >= continuess.start"
      @click="$emit('getPageNo', page)"
      :class="{ active: pageNo == page }"
    >
      {{ page }}
    </button>
    <!-- 下部分 -->
    <button v-if="continuess.end < totalPages - 1">···</button>
    <button
      v-if="continuess.end < totalPages"
      @click="$emit('getPageNo', totalPages)"
      :class="{ active: pageNo == totalPages }"
    >
      {{ totalPages }}
    </button>
    <button
      :disabled="pageNo == totalPages"
      @click="$emit('getPageNo', pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">{{ total }}</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "PageSize", "continues", "total"],
  computed: {
    totalPages() {
      return Math.ceil(this.total / 3);
    },
    continuess() {
      const { pageNo, continues, totalPages } = this;
      let start = 0,
        end = 0;
      if (continues > totalPages) {
        start = 1;
        end = totalPages;
      } else {
        start = pageNo - Math.floor(continues / 2);
        end = pageNo + Math.floor(continues / 2);
        if (start < 1) {
          start = 1;
          end = continues;
        }
        if (end > totalPages) {
          end = totalPages;
          start = totalPages - continues + 1;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  .active {
    background-color: skyblue;
  }
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>