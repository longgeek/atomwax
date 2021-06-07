/**
 * 全局关系映射配置
 */
Array.range = function(a, b, step){ var A= []; if(typeof a== 'number'){ A[0]= a; step= step || 1; while(a+step<= b){ A[A.length]= a+= step; } } else{ var s= 'abcdefghijklmnopqrstuvwxyz'; if(a=== a.toUpperCase()){ b=b.toUpperCase(); s= s.toUpperCase(); } s= s.substring(s.indexOf(a), s.indexOf(b)+ 1); A= s.split(''); } return A; }
export default {
    device: {
        asset_type: {
            1: '固资',
            2: '借货',
            3: '供应商',
        },
        height: [1, 2, 3, 4, 6, 8, 16, 48],
        position: Array.range(1, 50),
        cpu: [1, 2, 4, 8, 16, 32, 64],
        memory: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
        nic: Array.range(1, 24),
    },
    ticket: {
        '申请、变更、故障处理虚拟机': 'vm',
        '申请实习生 VPN 权限': 'vpn',
        'GitLab 相关申请': 'gitlab',
        '申请财务共享盘权限': 'finance-share-disk',
        '业务运维通用需求工单': 'general',
        'ownCloud 相关申请': 'ownCloud',
        '申请堡垒机权限': 'jumpserver',
        'JIRA 相关申请': 'jira',
        'WIKI 相关申请': 'wiki',
        '申请内部 SMTP 服务': 'smtp',
        '单点登录接入申请与变更': 'sso',
        '域名解析申请与变更': 'domain',
        'OP 消息队列申请与变更': 'mq',
        'OP ELK 申请': 'elk',
        'OP 数据库、权限申请与变更': 'database',
        'CBG-IFS 权限申请': 'cbg-ifs',
        '旷视第三方人员权限申请': 'megvii-third-pary',
        'Office 365 邮件相关需求': 'meeting-room',
        '阿里云子账户申请': 'aliyun-subuser',
        '申请 IP 绑定、解绑': 'ip',
        '阿里云主机 ECS 申请': 'aliyun-ecs',
        '申请设备上架': 'device-on-racking',
        '数据中心通用需求工单': 'idc',
        '共享文件夹权限申请': 'share-folder',
        '申请 NAT 地址映射': 'nat',
        '申请 ACL 访问控制': 'acl',
        '钉钉相关申请': 'dingding',
        '服务器登录权限申请': 'server-login-permission',
    },
    permission_module_name: {
        vm: '虚拟机管理',
        role: '角色管理',
        host: '服务器管理',
        netdevice: '网络设备管理',
        cloudhost: 'aliyun 云主机管理',
        permission: '权限规则管理',
        agent:'agent管理',
        work: '作业管理',
        assignment: '任务管理',
        node: '节点管理',
        plugin: '插件管理',
        safe:'安全插件',
        dataSet:'数据集合'
    },
    permission_method_name: {
        get: '查看',
        put: '编辑',
        post: '新增',
        delete: '删除',
    },
    aliyun_map_ecs: {
        "cn-qingdao": { name: "华北1（青岛）", endpoint: "ecs-cn-hangzhou.aliyuncs.com" },
        "cn-beijing": { name: "华北2（北京）", endpoint: "ecs-cn-hangzhou.aliyuncs.com" },
        "cn-chengdu": { name: "西南1（成都）", endpoint: "ecs.cn-chengdu.aliyuncs.com" },
        "cn-zhangjiakou":  { name: "华北3（张家口）",     endpoint: "ecs.cn-zhangjiakou.aliyuncs.com" },
        "cn-huhehaote":    { name: "华北5（呼和浩特）",   endpoint: "ecs.cn-huhehaote.aliyuncs.com" },
        "cn-hangzhou": { name: "华东1（杭州）",  endpoint: "ecs-cn-hangzhou.aliyuncs.com" },
        "cn-shanghai": { name: "华东2（上海）",  endpoint: "ecs-cn-hangzhou.aliyuncs.com" },
        "cn-shenzhen": { name: "华南1（深圳）",  endpoint: "ecs-cn-hangzhou.aliyuncs.com" },
        "cn-heyuan":   { name: "华南2（河源）",  endpoint: "ecs.cn-heyuan.aliyuncs.com" },
        "cn-wulanchabu":   { name: "乌兰察布",   endpoint: "ecs.cn-wulanchabu.aliyuncs.com" },
        "cn-hongkong": { name: "香港", endpoint: "ecs-cn-hangzhou.aliyuncs.com" },
        "ap-southeast-1":  { name: "新加坡",  endpoint: "ecs-cn-hangzhou.aliyuncs.com" },
        "ap-southeast-2":  { name: "澳大利亚（悉尼）",   endpoint: "ecs.ap-southeast-2.aliyuncs.com" },
        "ap-southeast-3":  { name: "马来西亚（吉隆坡）",  endpoint: "ecs.ap-southeast-3.aliyuncs.com" },
        "ap-southeast-5":  { name: "印度尼西亚（雅加达）",    endpoint: "ecs.ap-southeast-5.aliyuncs.com" },
        "ap-northeast-1":  { name: "日本（东京）",    endpoint: "ecs.ap-northeast-1.aliyuncs.com" },
        "eu-west-1": { name: "英国（伦敦）",    endpoint: "ecs.eu-west-1.aliyuncs.com" },
        "us-west-1": { name: "美国（硅谷）",    endpoint: "ecs-cn-hangzhou.aliyuncs.com" },
        "us-east-1": { name: "美国（弗吉尼亚）",    endpoint: "ecs-cn-hangzhou.aliyuncs.com" },
        "eu-central-1":    { name: "德国（法兰克福）",    endpoint: "ecs.eu-central-1.aliyuncs.com" },
        "me-east-1":   { name: "阿联酋（迪拜）",  endpoint: "ecs.me-east-1.aliyuncs.com" },
        "ap-south-1":  { name: "印度（孟买）", endpoint: "ecs.ap-south-1.aliyuncs.com" },
        "cn-shanghai-finance-1":   { name: "华东2 金融云",    endpoint: "ecs-cn-hangzhou.aliyuncs.com" },
        "cn-shenzhen-finance-1":   { name: "华南1 金融云",   endpoint: "ecs-cn-hangzhou.aliyuncs.com" },
        "cn-north-2-gov-1":    { name: "华北2 阿里政务云1",   endpoint: "ecs.aliyuncs.com" },
    },
    // 运维日常工作类型, 用作级联选择
    ops_routine_types: [
        {
            "账号、权限、办公系统类": [
                {
                    "权限需求": [
                        "VPN权限",
                        "Git-Core权限",
                        "邮件组身份发送权限",
                        "WIKI系统权限",
                        "JIRA系统权限",
                        "钉钉工作台应用权限",
                        "钉钉子管理员权限",
                        "owncloud权限",
                        "财务共享权限",
                    ]
                },
                {
                    "应用系统需求": [
                        "JIRA创建或关闭项目",
                        "JIRA工作流管理",
                        "JIRA字段管理",
                        "JIRA项目权限管理",
                        "JIRA界面管理",
                        "JIRA问题类型管理",
                        "JIRA其他使用问题",
                        "WIKI创建或关闭空间",
                        "WIKI空间权限管理",
                        "WIKI数据迁移",
                        "WIKI其他使用问题",
                        "钉钉组织结构管理",
                        "钉钉人工处理的入转调离",
                        "钉钉工作台应用管理",
                        "钉钉日志查询与备份",
                        "钉钉审批流维护",
                        "钉钉其他应用维护",
                        "OneDrive应用",
                        "SharePoint应用",
                        "GitLab配置增加、删除、修改需求",
                        "其他应用系统需求",
                        "邮件无法收取、发送、退信原因",
                        "邮件撤回",
                        "单点登录接入",
                        "邮件其他使用功能延展",
                        "会议室新增、删除、修改、上线、下线",
                        "OTP种子生成",
                    ]
                },
                {
                    "账号相关需求": [
                        "内部账号、邮箱的创建与关闭",
                        "内部账号、邮箱的修改与变更",
                        "内部账号、邮箱重置密码",
                        "排查账号锁定原因",
                        "Git账号锁定解锁",
                        "回流人员账号开启",
                        "外包人员账号有效期设置",
                        "离职人员账号禁用",
                    ]
                },
                {
                    "基础设施服务支持": [
                        "绑定、解绑、查询IP地址",
                        "无法获取IP地址排查",
                        "作用域管理与维护",
                        "NPS网络策略调整与排查",
                        "域名解析创建、删除、变更",
                        "域名解析问题排查",
                        "Windows补丁安装",
                        "Windows服务部署系统",
                        "Windows服务出现问题后的故障处理",
                    ]
                }
            ],
        },
        {
            "内部虚拟化资源类": [
                { "虚拟机开通、释放、变更与配置": [], },
                { "虚拟机故障排查": [], },
                { "虚拟机其他需求": [], }
            ],
        },
        {
            "公有云类": [
                { "资源的开通、释放、变更与配置": [], },
                { "资源的故障排查": [], },
                { "资源续费": [], },
                { "资源其他需求": [], },
                { "子账号开通、权限授权": [], },
            ],
        },
        {
            "运维组件或中间件": [
                {
                    "数据库": [
                        "MySQL支持",
                        "PgSqL支持",
                        "SQL Server支持",
                        "InfluxDB支持",
                        "ES支持",
                    ],
                },
                {   "键值存储": ["Redis支持", "Etcd"]   },
                {
                    "消息队列": [
                        "Kafka支持",
                        "Rabbit MQ支持",
                        "NSQ支持",
                    ],
                },
                {   "ETL": ["ETL支持"]  },
                {   "存储": ["M8-IFS NAS支持", "ownCloud支持"]  },
                {   "监控": ["监控配置支持"]    },
                {   "消息通知服务": ["服务开通与关闭", "服务使用支持"]  },
                {   "SMTP": ["SMTP账号的开通与关闭", "SMTP发件服务支持"]    },
                {   "Mirror/Harbor/Maven": ["仓库权限开通与关闭", "镜像仓库使用支持"]   },
                {   "堡垒机": ["堡垒机权限开通、关闭及调整", "堡垒机使用支持"]  },
                {   "GitLab": []    },
                {   "Jenkins": ["Jenkins使用支持"]  },
                {   "反向代理": ["新增、修改、删除支持"]    },
                {   "其他组件或服务": []    }
            ]
        },
        {
            "生态公司支持类": [
                {
                    AX: [
                        "计算集群维护与问题处理",
                        "安全域维护、调试与支持",
                        "权限需求",
                        "应用系统需求",
                        "账号相关需求",
                        "基础设施服务支持",
                        "内部虚拟化资源类",
                        "公有云类",
                        "运维组件或中间件",
                        "其他系统运维变更",
                    ],
                },
                {
                    JG: [
                        "权限需求",
                        "应用系统需求",
                        "账号相关需求",
                        "基础设施服务支持",
                        "内部虚拟化资源类",
                        "公有云类",
                        "运维组件或中间件",
                        "其他系统运维变更",
                    ],
                },
                {
                    JH: [
                        "权限需求",
                        "应用系统需求",
                        "账号相关需求",
                        "基础设施服务支持",
                        "内部虚拟化资源类",
                        "公有云类",
                        "运维组件或中间件",
                        "其他系统运维变更",
                    ],
                },
                {
                    BZJ: [
                        "权限需求",
                        "应用系统需求",
                        "账号相关需求",
                        "基础设施服务支持",
                        "内部虚拟化资源类",
                        "公有云类",
                        "运维组件或中间件",
                        "其他系统运维变更",
                    ],
                },
                {
                    '其他': [],
                }

            ]
        },
        {
            "其他系统运维变更": [
                { "官网": ["变更、上线", "故障排查"], },
                { DHR: ["变更、上线", "故障排查"], },
                { "学习平台": ["变更、上线", "故障排查"], },
                { "其他系统": ["变更、上线", "故障排查"], },
            ]
        },
        {
            "业务线": [
                { CBG: [], },
                { RBG: [], },
                { LBG: [], },
                { EBG: [], },
                { 数字化: [], },
                { 其他: [], },
            ]
        },
        {
            "MCD 业务": [
                { BaseServices: [], },
                { IaaS: [], },
                { FR: [], },
                { System: [], },
                { "九霄": [], },
            ],
        },
    ],
}
