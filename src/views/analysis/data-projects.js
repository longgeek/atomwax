// import { XuperChainData } from "./data-xuperchain";
// import { OpenHarmonyData } from "./data-openharmony.js";

import { xuperchainCloc }           from "./data-xuperchain-cloc";
import { xuperchainGraal }          from "./data-xuperchain-graal";
import { xuperchainIssue }          from "./data-xuperchain-issue";
import { xuperchainCommit }         from "./data-xuperchain-commit.js";
import { xuperchainContributor }    from "./data-xuperchain-contributor.js";
import { xuperchainPullRequest }    from "./data-xuperchain-pull-request.js";

// import { pikaCloc }                 from "./data-pika-cloc";
// import { pikaIssue }                from "./data-pika-issue";
// import { pikaCommit }               from "./data-pika-commit.js";
import { pikaContributor }          from "./data-pika-contributor.js";
// import { pikaPullRequest }          from "./data-pika-pull-request.js";

const projectData = {
    XuperChain: {
        id: 1,
        image: 'https://openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL3h5YjAvNnc2YS94dXBlcmNoYWluX2ljb25fMjAyMDEyMjUyMzI1NDYucG5n',
        text: 'XuperChain 是百度公司自主研发的底层区块链技术, 支持平行链和侧链的区块链网络',
        // data: {
        //     cloc: xuperchainCloc,
        //     graal: xuperchainGraal,
        //     issue: xuperchainIssue,
        //     commit: xuperchainCommit,
        //     contributor: xuperchainContributor,
        //     pull_request: xuperchainPullRequest,
        // }
    },
    OpenHarmony: {
        id: 2,
        image: 'https://openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL2prcGUvOGtjay9vcGVuaGFybW9ueV9pY29uXzIwMjAxMjI1MjMyNTMzLnBuZw==',
        text: 'OpenHarmony 的定位是一款面向全场景的开源分布式操作系统',
    },
    PIKA: {
        id: 3,
        image: 'https://openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlLzNhd3ovbHE3Mi9waWthX2ljb25fMjAyMDEyMjUyMzI1MjIucG5n',
        text: 'PIKA 是 360 DBA 和基础架构组联合开发的类 Redis 存储系统',
        // data: {
        //     cloc: pikaCloc,
        //     graal: [],
        //     issue: pikaIssue,
        //     commit: pikaCommit,
        //     contributor: pikaContributor,
        //     pull_request: pikaPullRequest,
        // },
        data: {
            cloc: [],
            graal: [],
            issue: [],
            commit: [],
            contributor: pikaContributor,
            pull_request: [],
        }
    },
    TKEStack: {
        id: 4,
        image: 'https://openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL3VocmwvMG1saS90a2VfaWNvbl8yMDIwMTIyNTIzMjQ0Mi5wbmc=',
        text: 'TKEStack 是腾讯开源的一款集强壮性和易用性于一身的企业级容器编排引擎',
        // data: OpenHarmonyData.data,
    },
    UBML: {
        id: 5,
        image: 'https://openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL3B6cjQvMTA0ci91Ym1sX2ljb25fMjAyMDEyMjUyMzI0MTYucG5n',
        text: 'UBML 建模开发体系是浪潮开源的面向企业软件的低代码开发平台核心基础',
        // data: OpenHarmonyData.data,
    },
    'TencentOS Tiny': {
        id: 6,
        image: 'https://openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlLzljeWIvd3FyMi90aW55XzIwMjAxMjI1MjMxNjAyLnBuZw==',
        text: 'TencentOS Tiny 是腾讯公司孵化的一款低功耗、低资源占用物联网的终端操作系统',
        // data: OpenHarmonyData.data,
    },
    'AliOS Things': {
        id: 7,
        image: 'https://openatom.cn/uploads/getImg?uri=aW1hZ2VGaWxlL2prbG8vanJxdy90aGluZ3NfaWNvbl8yMDIwMTIyNTIzMDUzNS5wbmc=',
        text: 'AliOS Things 是面向 IoT 领域的轻量级物联网嵌入式操作系统',
        // data: OpenHarmonyData.data,
    },
};

export { projectData };
export default {
    data() {
        return {
            xuperchainCloc: xuperchainCloc,
            xuperchainGraal: xuperchainGraal,
            xuperchainIssue: xuperchainIssue,
            xuperchainCommit: xuperchainCommit,
            xuperchainContributor: xuperchainContributor,
            xuperchainPullRequest: xuperchainPullRequest,
        }
    }
};
