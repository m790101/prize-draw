import { a as axiosClient } from './axioClient-C3MXPnuN.js';
import { _ as _export_sfc, c as createElementBlock, a as createBaseVNode, b as createCommentVNode, F as Fragment, g as renderList, t as toDisplayString, o as openBlock } from './index-BBSC0B_c.js';

const drawRestaurants= async (options) => {
  try {
    const result = await axiosClient.post("/restaurant/draw", options);
    return result.data;
  } catch (error) {
    console.log("error api", error);
    return error;
  }
};

const _sfc_main = {
  name: "Restaurant",
  data() {
    return {
      isDrawing: false,
      showResults: false,
      selectedRestaurant: null,
      restaurants: [],
    };
  },
  methods: {
    async startDraw() {
      this.isDrawing = true;
      this.showResults = false;
      const result = await drawRestaurants();
      console.log("result", result);

      if (result?.status == "200") {
        this.restaurants = result.data.restaurants;
      } else {
        alert("error" + result?.message);
      }

      this.isDrawing = false;
      this.showResults = true;
    },
    selectRestaurant(restaurant) {
      const googleMapsUrl = `https://www.google.com/maps/place/?q=place_id:${restaurant.placeId}`;
      window.open(googleMapsUrl, "_blank");
    },
    closeModal() {
      this.selectedRestaurant = null;
    },

    resetDraw() {
      this.showResults = false;
      this.restaurants = [];
      this.selectedRestaurant = null;
      this.startDraw();
    },
  },
};

const _hoisted_1 = { class: "min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-6" };
const _hoisted_2 = { class: "max-w-6xl mx-auto" };
const _hoisted_3 = {
  key: 0,
  class: "text-center mb-12"
};
const _hoisted_4 = {
  key: 1,
  class: "text-center mb-12"
};
const _hoisted_5 = {
  key: 2,
  class: "space-y-8"
};
const _hoisted_6 = { class: "text-center mb-8" };
const _hoisted_7 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" };
const _hoisted_8 = { class: "p-6" };
const _hoisted_9 = { class: "min-h-[50px]" };
const _hoisted_10 = { class: "text-xl font-bold text-gray-800 mb-2" };
const _hoisted_11 = { class: "text-gray-600 mb-3" };
const _hoisted_12 = { class: "flex items-center mb-3" };
const _hoisted_13 = { class: "flex text-yellow-400" };
const _hoisted_14 = { class: "ml-2 text-gray-600" };
const _hoisted_15 = ["onClick"];
const _hoisted_16 = {
  key: 3,
  class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
};
const _hoisted_17 = { class: "bg-white rounded-xl p-8 max-w-md w-full transform animate-pulse" };
const _hoisted_18 = { class: "text-center" };
const _hoisted_19 = { class: "text-6xl mb-4 block" };
const _hoisted_20 = { class: "text-lg text-gray-600 mb-4" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _cache[7] || (_cache[7] = createBaseVNode("div", { class: "text-center mb-8" }, [
        createBaseVNode("h1", { class: "text-4xl font-bold text-gray-800 mb-2" }, " 🍽️ 今天要吃什麼？ "),
        createBaseVNode("p", { class: "text-lg text-gray-600" }, " 不知道要吃什麼？那用抽的來決定吧！ ")
      ], -1)),
      (!$data.isDrawing && !$data.showResults)
        ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = (...args) => ($options.startDraw && $options.startDraw(...args))),
              class: "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            }, " 🎲 抽獎囉!（目前只限定大安區） ")
          ]))
        : createCommentVNode("", true),
      ($data.isDrawing)
        ? (openBlock(), createElementBlock("div", _hoisted_4, _cache[3] || (_cache[3] = [
            createBaseVNode("div", { class: "inline-block" }, [
              createBaseVNode("div", { class: "animate-spin rounded-full h-16 w-16 border-4 border-orange-500 border-t-transparent mx-auto mb-4" }),
              createBaseVNode("p", { class: "text-lg text-gray-600 animate-pulse" }, " 尋找中 ")
            ], -1)
          ])))
        : createCommentVNode("", true),
      ($data.showResults)
        ? (openBlock(), createElementBlock("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              _cache[4] || (_cache[4] = createBaseVNode("h2", { class: "text-2xl font-semibold text-gray-800 mb-4" }, " 吃爆!! 🎉 ", -1)),
              createBaseVNode("button", {
                onClick: _cache[1] || (_cache[1] = (...args) => ($options.resetDraw && $options.resetDraw(...args))),
                class: "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
              }, " 再抽一次 ")
            ]),
            createBaseVNode("div", _hoisted_7, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.restaurants, (restaurant, index) => {
                return (openBlock(), createElementBlock("div", {
                  key: index,
                  class: "bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                }, [
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("section", _hoisted_9, [
                      createBaseVNode("h3", _hoisted_10, toDisplayString(restaurant.name), 1)
                    ]),
                    createBaseVNode("p", _hoisted_11, toDisplayString(restaurant.description), 1),
                    createBaseVNode("div", _hoisted_12, [
                      createBaseVNode("div", _hoisted_13, [
                        (openBlock(), createElementBlock(Fragment, null, renderList(5, (n) => {
                          return createBaseVNode("span", {
                            key: n,
                            class: "text-lg"
                          }, toDisplayString(n <= restaurant.rating ? "⭐" : "☆"), 1)
                        }), 64))
                      ]),
                      createBaseVNode("span", _hoisted_14, "(" + toDisplayString(restaurant.rating) + "/5)", 1)
                    ]),
                    _cache[5] || (_cache[5] = createBaseVNode("div", { class: "flex justify-between items-center text-sm text-gray-600 mb-4" }, null, -1)),
                    createBaseVNode("button", {
                      onClick: $event => ($options.selectRestaurant(restaurant)),
                      class: "w-full bg-green-700 hover:bg-green-300 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                    }, " 點我進 google map 看看 🎯 ", 8, _hoisted_15)
                  ])
                ]))
              }), 128))
            ])
          ]))
        : createCommentVNode("", true),
      ($data.selectedRestaurant)
        ? (openBlock(), createElementBlock("div", _hoisted_16, [
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, [
                createBaseVNode("span", _hoisted_19, toDisplayString($data.selectedRestaurant.emoji), 1),
                _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "text-2xl font-bold text-gray-800 mb-2" }, "Great Choice!", -1)),
                createBaseVNode("p", _hoisted_20, " You selected " + toDisplayString($data.selectedRestaurant.name) + "! ", 1),
                createBaseVNode("button", {
                  onClick: _cache[2] || (_cache[2] = (...args) => ($options.closeModal && $options.closeModal(...args))),
                  class: "bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
                }, " Awesome! 🎉 ")
              ])
            ])
          ]))
        : createCommentVNode("", true)
    ])
  ]))
}
const Restaurant = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-653eaab5"]]);

export { Restaurant as default };
