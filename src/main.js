import Vue from 'vue'
import moment from 'moment'
import BootstrapVue from 'bootstrap-vue'
import VueMask from 'v-mask'
import VueRouter from 'vue-router'
import vco from "v-click-outside"
import router from './router/index'

import api from '@/api.js'
import config from '@/config.js'

import "@/design/index.scss";
import store from '@/state/store'

import App from './App.vue'

import axios from '@/plugins/axios'
import VueAxios from 'vue-axios'

import VueApexCharts from 'vue-apexcharts'
Vue.component('apexchart', VueApexCharts)

Vue.use(VueAxios, axios)

Vue.use(VueRouter)

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call( this, to ).catch( err => err )
}

Vue.use(vco)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueMask)

Vue.prototype.LOGIN = () => window.location.href = process.env.VUE_APP_LOGIN + '?next_url=' + window.location.href;
Vue.prototype.LOGOUT = () => window.location.href = process.env.VUE_APP_LOGOUT;
Vue.prototype.API = api
Vue.prototype.CONF = config
Vue.prototype.USER = {}


// 获取 MegAgent 管理 API token
Vue.prototype.getToken = function(){
    return new Promise((resolve, reject) => {
        this.API.agent.Token()
            .then(rsp => {
                if (rsp.data.hasOwnProperty('code') && rsp.data.code === 20000) {
                    resolve(rsp.data.data.token);
                } else {
                    reject();
                    this.$bvToast.toast('获取授权失败', { title: '提示', variant: 'danger' });
                }
            })
    })
}

// 获取脚本系统 API token
Vue.prototype.scriptToken = function(){
    return new Promise((resolve, reject) => {
        this.API.script.token()
            .then(rsp => {
                if (rsp.data.hasOwnProperty('status_code') && rsp.data.status_code === 2000) {
                    resolve(rsp.data.token);
                } else {
                    reject();
                    this.$bvToast.toast('获取脚本系统授权失败', { title: '提示', variant: 'danger' });
                }
            })
    })
}


Vue.prototype._g_sleep = function(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}
Vue.prototype._g_dropdown_hide = function (ref) {
    this.$refs[ref].hide();
}

// Filters
Vue.filter("ellipsis", function (value, num) {
    if (!value) return '';
    if (value.length > num) {
        return value.slice(0, num) + '...';
    }
    return value;
})

/**
 * kbConvert
 * convert KB to the GB or TB
 */
Vue.filter("kbConvert", function (kb) {
    if (kb) {
        kb = Math.ceil(kb / 1024 / 1024);
        if (kb > 1024) {
            kb = Math.ceil((kb / 1024)).toString() + ' TB';
        } else {
            kb = kb.toString() + ' GB';
        }
    }
    return kb;
})

/**
 * unitConvert
 * convert unit
 */
Vue.filter("unitConvert", function (size, unit) {
    if (size && unit) {
        // 如果 unit 在 size 里直接返回
        if (size.indexOf(unit) != -1) {
            return size;
        }

        // 转换 size 为 KB
        size = size.replace(/\s+/g, '');
        if (size.indexOf('MB') != -1) {
            size = size.split('MB')[0];
            size = Math.ceil(size * 1024);
        } else if (size.indexOf('GB') != -1) {
            size = size.split('GB')[0];
            size = Math.ceil(size * 1024 * 1024);
        } else if (size.indexOf('TB') != -1) {
            size = size.split('TB')[0];
            size = Math.ceil(size * 1024 * 1024 * 1024);
        } else {
            size = '';
        }

        if (size) {
            // 转换 size KB 为 unit
            if (unit == 'mb' || unit == 'MB') {
                size = Math.ceil(size / 1024);
            } else if (unit == 'gb' || unit == 'GB') {
                size = Math.ceil(size / 1024 / 1024);
            } else if (unit == 'tb' || unit == 'TB') {
                size = Math.ceil(size / 1024 / 1024);
            }
            size = size.toString() + ' ' + unit;
        }
    }
    return size;
})
/**
 * uppercase
 * Convert string to uppercase
 */
Vue.filter("uppercase", function (str) {
    if (str) { str = str.toUpperCase() }
    return str;
})

/**
 * lowercase
 * Convert string to lowercase
 */
Vue.filter("lowercase", function (str) {
    if (str) { str = str.toLowerCase() }
    return str;
})



/**
 * toChinaTime
 * convert time to the china format
 */
Vue.filter("toChinaTime", function (time) {
    Date.prototype.toRelativeTime = function (now_threshold) {
        var delta = new Date() - this;
        now_threshold = parseInt(now_threshold, 10);

        if (isNaN(now_threshold)) { now_threshold = 0; }
        if (delta <= now_threshold) { return '1 秒'; }

        var units = null;
        var conversions = {
            '毫秒': 1,        // ms    -> ms
            '秒': 1000,       // ms    -> sec
            '分钟': 60,       // sec   -> min
            '小时': 60,       // min   -> hour
            '天': 24,         // hour  -> day
            '个月': 30,       // day   -> month (roughly)
            '年': 12          // month -> year
        };

        for (var key in conversions) {
            if (delta < conversions[key]) {
                break;
            } else {
                units = key; // keeps track of the selected key over the iteration
                delta = delta / conversions[key];
            }
        }

        // pluralize a unit when the difference is greater than 1.
        delta = Math.floor(delta);
        return [delta, units].join(" ");
    };
    const date = new Date(time).toRelativeTime();
    if (date.indexOf('毫秒') !== -1) { return "1 秒前" }
    return date + '前';
})

/**
 * toLocalDay
 * convert time to the local day format
 */
Vue.filter("toLocalDay", function (time) {
    if (!time) { return; }
    const localtime = moment.utc(time).toDate();
    return moment(localtime).format('YYYY-MM-DD');
})

/**
 * toLocalTime
 * convert time to the local time format
 */
Vue.filter("toLocalTime", function (time) {
    if (!time) { return; }
    const localtime = moment.utc(time).toDate();
    return moment(localtime).format('YYYY-MM-DD HH:mm:ss');
})



/**
 * reverse
 * reverse array
 */
Vue.filter("reverse", function (array) {
    if (!array) { return; }
    return array.reverse();
})


/**
 * limitTo
 * limitTo string
 */
Vue.filter( "limitTo", function (str, index) {
    if (!str) { return; }
    return str.slice(0, index);
})


/**
 * diffToday
 * 计算距今天多少个月、天
 */
Vue.filter( "diffToday", function (day, format) {
    if (!day || !format) { return; }
    return moment(day).diff(moment(new Date().toLocaleDateString()), format)
})

/**
 * highlightText
 * 高亮文本返回 HTML
 */
Vue.filter( "highlightText", function (text, keyword, color) {
    if (!text || !keyword || !color) { return; }
    for (var i in keyword) {
        var key = keyword[i];
        var replaceReg = new RegExp(key, 'g');
        var replaceString = '<span style="background: ' + color + ';">' + key + '</span>';
        text = text.replace(replaceReg, replaceString);
    }
    return text;
})


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
