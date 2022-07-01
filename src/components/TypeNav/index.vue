<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="enterShow" @mouseleave="leaveShow">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="show">
            <!-- 路由跳转 通过事件委派+编程式导航 -->
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                @mouseenter="changIndex(index)"
                :class="{ cur: currentIndex == index }"
              >
                <h3>
                  <!-- <router-link
                  :to="{
                    path: '/search',
                    query: {
                      categoryId: c1.categoryId,
                      categoryName: c1.categoryName,
                    },
                  }"
                  >{{ c1.categoryName }}</router-link
                > -->
                  <a
                    :data-categroyname="c1.categoryName"
                    :data-categroyid1="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <!-- v-show="currentIndex == index" -->
                <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div
                    class="subitem"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <!-- <router-link
                        :to="{
                          path: '/search',
                          query: {
                            categoryId: c2.categoryId,
                            categoryName: c2.categoryName,
                          },
                        }"
                        >{{ c2.categoryName }}</router-link
                      > -->
                        <a
                          :data-categroyname="c2.categoryName"
                          :data-categroyid2="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <!-- <router-link
                          :to="{
                            path: '/search',
                            query: {
                              categoryId: c3.categoryId,
                              categoryName: c3.categoryName,
                            },
                          }"
                          >{{ c3.categoryName }}</router-link
                        > -->
                          <a
                            :data-categroyname="c3.categoryName"
                            :data-categroyid3="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import throttle from "lodash/throttle.js";
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      show: true,
    };
  },

  mounted() {
    //console.log(this.$route);
    if (this.$route.path != "/home") {
      this.show = false;
    }
  },
  methods: {
    // changIndex(index) {
    //   this.currentIndex = index;
    // },
    changIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),

    enterShow() {
      this.show = true;
    },
    leaveShow() {
      this.currentIndex = -1;
      if (this.$route.path != "/home") {
        this.show = false;
      }
    },
    //dataset能够拿到节点的属性和属性值
    goSearch(event) {
      let el = event.target;
      let { categroyname, categroyid1, categroyid2, categroyid3 } = el.dataset;
      // console.log(categroyname, categroyid1, categroyid2, categroyid3);
      if (categroyname) {
        let location = { name: "search" };
        let query = { categroyname: categroyname };
        if (categroyid1) {
          query.categroyid1 = categroyid1;
        } else if (categroyid2) {
          query.categroyid2 = categroyid2;
        } else {
          query.categroyid3 = categroyid3;
        }
        location.query = query;
        if (this.$route.params) {
          location.params = this.$route.params;
          this.$router.push(location);
        }
      }
    },
  },
  computed: {
    ...mapState({
      categoryList: (state) => {
        return state.home.categoryList;
      },
    }),
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
              text-decoration: none;
              cursor: pointer;
            }
          }

          .item-list {
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     text-decoration: none;
          //   }
          // }
        }
      }
    }
    .sort-enter,
    .sort-leave-to {
      height: 0px;
    }
    .sort-enter-to,
    .sort-leave {
      height: 461px;
    }
    .sort-enter-active,
    .sort-leave-active {
      transition: all 0.5s linear;
    }
    .cur {
      background-color: skyblue;
    }
  }
}
</style>