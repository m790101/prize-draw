import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createBaseVNode, b as createCommentVNode, d as createStaticVNode, e as onMounted, r as ref, f as computed, w as withDirectives, v as vModelText, t as toDisplayString, F as Fragment, g as renderList, h as createVNode, i as createBlock } from './index-BBSC0B_c.js';
import { a as axiosClient } from './axioClient-C3MXPnuN.js';

const setPrizeList = async (data) => {
  try {
    const result = await axiosClient.post("/prizes", data);
    return result.data;
  } catch (error) {
    console.log("error api", error);
    return error;
  }
};

const drawWinner = async (sessionData) => {
  try {
    const result = await axiosClient.post("/draw", sessionData);
    return result.data;
  } catch (error) {
    console.log("error api", error);
    return error;
  }
};

const _sfc_main$2 = {  };

const _hoisted_1$2 = {
  class: "animate-spin h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
};

function _sfc_render(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [
    createBaseVNode("circle", {
      class: "opacity-25",
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      "stroke-width": "4"
    }, null, -1),
    createBaseVNode("path", {
      class: "opacity-75",
      fill: "currentColor",
      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    }, null, -1)
  ])))
}
const Loader = /*#__PURE__*/_export_sfc(_sfc_main$2, [['render',_sfc_render]]);

const _hoisted_1$1 = {
  key: 0,
  class: ""
};

// Props

const _sfc_main$1 = {
  __name: 'Skeleton',
  props: {
  isLoading: {
    type: Boolean,
    default: false,
  },
},
  setup(__props) {


return (_ctx, _cache) => {
  return (__props.isLoading)
    ? (openBlock(), createElementBlock("div", _hoisted_1$1, _cache[0] || (_cache[0] = [
        createStaticVNode("<div class=\"mb-2\" data-v-1570b178><div class=\"h-7 bg-gray-300 rounded animate-pulse mx-auto w-32\" data-v-1570b178></div></div><div class=\"mb-4\" data-v-1570b178><div class=\"h-8 bg-gray-400 rounded animate-pulse mx-auto w-48\" data-v-1570b178></div></div><div class=\"px-4 py-2\" data-v-1570b178><div class=\"h-4 bg-gray-300 rounded animate-pulse mx-auto w-64\" data-v-1570b178></div></div>", 3)
      ])))
    : createCommentVNode("", true)
}
}

};
const Skeleton = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-1570b178"]]);

const _hoisted_1 = { class: "container mx-auto lg:max-w-(--breakpoint-lg) pt-6 md:pt-10 pb-10 md:pb-48 px-3 md:px-6 min-h-screen" };
const _hoisted_2 = { class: "bg-white rounded-lg shadow-lg p-6 mb-6" };
const _hoisted_3 = { class: "flex flex-col justify-center gap-4 mb-4" };
const _hoisted_4 = { class: "bg-white rounded-lg shadow-lg p-6 mb-6" };
const _hoisted_5 = { class: "flex justify-between items-center mb-4" };
const _hoisted_6 = {
  id: "prizeCount",
  class: "text-gray-500 text-sm"
};
const _hoisted_7 = {
  id: "prizesList",
  class: "grid gap-3"
};
const _hoisted_8 = {
  key: 0,
  class: "text-gray-500 text-center py-8",
  id: "emptyMessage"
};
const _hoisted_9 = { key: 0 };
const _hoisted_10 = { class: "bg-white rounded-lg shadow-lg p-6" };
const _hoisted_11 = { class: "text-center mb-6" };
const _hoisted_12 = ["disabled"];
const _hoisted_13 = { key: 1 };
const _hoisted_14 = { key: 2 };
const _hoisted_15 = {
  key: 0,
  id: "winnerSection",
  class: ""
};
const _hoisted_16 = { class: "bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 rounded-lg p-6 text-center" };
const _hoisted_17 = {
  id: "winnerDisplay",
  class: "text-2xl font-bold text-green-600 mb-4"
};


const _sfc_main = {
  __name: 'Home',
  setup(__props) {

onMounted(async () => {});

const prizeInput = ref("");
const prizeList = ref([]);
const sessionReady = ref(false);
const winner = ref("");
const sessionId = ref("");

// Loading states
const isStartingSession = ref(false);
const drawLoading = ref(false);

const addPrize = () => {
  const prizeToArray = prizeInput.value
    .trim()
    .split("\n")
    .map((e) => e.trim())
    .filter((e) => e);
  prizeList.value = [...prizeList.value, ...prizeToArray];
  prizeInput.value = "";
};
const startSession = async () => {
  isStartingSession.value = true;
  const result = await setPrizeList({ names: prizeList.value });
  if (result?.status == "200") {
    sessionId.value = result.data.id;
    sessionReady.value = true;
  } else {
    console.log("error",result?.message);
  }
  isStartingSession.value = false;
};

const setWinner = async () => {
  drawLoading.value = true;
  const result = await drawWinner({ uId: sessionId.value });
  if (result?.status == "200") {
    winner.value = result.data.name;
  } else {
    alert("error" + result?.message);
    reset();
  }
  drawLoading.value = false;
};

const clearPrizes = () => {
  prizeList.value = [];
};

const reset = () => {
  winner.value = "";
  sessionReady.value = false;
  sessionId.value = "";
  prizeInput.value = "";
  prizeList.value = [];
};

const prizeTotalNum = computed(() => {
  return prizeList.value.length;
});

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("main", _hoisted_1, [
    createBaseVNode("section", _hoisted_2, [
      _cache[1] || (_cache[1] = createBaseVNode("h2", { class: "text-2xl font-semibold text-gray-800 mb-4" }, "Add New Prize", -1)),
      createBaseVNode("div", _hoisted_3, [
        withDirectives(createBaseVNode("textarea", {
          type: "text",
          id: "prizeInput",
          placeholder: "Enter prize names (one per line)...\nExample:\niPhone 15\n$100 Gift Card\nWireless Headphones",
          class: "flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none min-h-48",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((prizeInput).value = $event))
        }, null, 512), [
          [vModelText, prizeInput.value]
        ]),
        createBaseVNode("button", {
          class: "px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium",
          onClick: addPrize
        }, " Add Prize ")
      ])
    ]),
    createBaseVNode("section", _hoisted_4, [
      createBaseVNode("div", _hoisted_5, [
        _cache[2] || (_cache[2] = createBaseVNode("h2", { class: "text-2xl font-semibold text-gray-800" }, "Prizes", -1)),
        createBaseVNode("span", _hoisted_6, toDisplayString(prizeTotalNum.value) + " prizes", 1)
      ]),
      createBaseVNode("div", _hoisted_7, [
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(prizeList.value, (prize, index) => {
            return (openBlock(), createElementBlock("li", { key: index }, toDisplayString(prize), 1))
          }), 128))
        ]),
        (prizeList.value.length === 0)
          ? (openBlock(), createElementBlock("p", _hoisted_8, " No prizes added yet. Add some prizes to get started! "))
          : createCommentVNode("", true)
      ]),
      (prizeList.value.length > 0)
        ? (openBlock(), createElementBlock("div", _hoisted_9, [
            createBaseVNode("button", {
              class: "mt-3 px-6 py-3 bg-blue-500 w-full text-white rounded-lg hover:bg-blue-600 transition-colors font-medium",
              onClick: clearPrizes
            }, " Clear Prizes ")
          ]))
        : createCommentVNode("", true)
    ]),
    createBaseVNode("div", _hoisted_10, [
      _cache[6] || (_cache[6] = createBaseVNode("h2", { class: "text-2xl font-semibold text-gray-800 mb-4" }, "Draw Winner", -1)),
      createBaseVNode("div", _hoisted_11, [
        (!sessionReady.value)
          ? (openBlock(), createElementBlock("button", {
              key: 0,
              id: "drawButton",
              onClick: startSession,
              class: "px-8 py-4 bg-gradient-to-r from-red-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all font-bold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto min-w-[200px]",
              disabled: prizeList.value.length === 0
            }, [
              (isStartingSession.value)
                ? (openBlock(), createBlock(Loader, { key: 0 }))
                : createCommentVNode("", true),
              (isStartingSession.value)
                ? (openBlock(), createElementBlock("span", _hoisted_13, "Starting Session..."))
                : (openBlock(), createElementBlock("span", _hoisted_14, "🚀 Press to Start Session"))
            ], 8, _hoisted_12))
          : createCommentVNode("", true),
        (sessionReady.value)
          ? (openBlock(), createElementBlock("button", {
              key: 1,
              id: "drawButton",
              onClick: setWinner,
              class: "px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all font-bold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            }, " 🎲 Draw! "))
          : createCommentVNode("", true),
        _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-sm text-gray-500 mt-2" }, "Need at least 1 prize to draw", -1))
      ]),
      createVNode(Skeleton, {
        isLoading: !winner.value && drawLoading.value
      }, null, 8, ["isLoading"]),
      (winner.value)
        ? (openBlock(), createElementBlock("div", _hoisted_15, [
            createBaseVNode("div", _hoisted_16, [
              _cache[4] || (_cache[4] = createBaseVNode("h3", { class: "text-xl font-bold text-gray-800 mb-2" }, "🎊 Winner! 🎊", -1)),
              createBaseVNode("div", _hoisted_17, toDisplayString(winner.value), 1),
              _cache[5] || (_cache[5] = createBaseVNode("p", { class: "px-4 py-2 rounded-lg" }, "press draw button to draw next one", -1))
            ]),
            createBaseVNode("div", { class: "flex justify-center mt-5" }, [
              createBaseVNode("button", {
                onClick: reset,
                class: "px-6 py-3 bg-red-400 text-white rounded-lg font-bold text-lg shadow-lg disabled:opacity-50"
              }, "reset all")
            ])
          ]))
        : createCommentVNode("", true)
    ])
  ]))
}
}

};

export { _sfc_main as default };
