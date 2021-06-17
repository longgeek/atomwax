/**
 * For API list settings
 */
import Vue from 'vue'

var API_URL = "/api/v1"

export default {
    call:                 (data)            => { return Vue.axios.post(API_URL, data) },
}
