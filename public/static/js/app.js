webpackJsonp([31,29],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(105),i=r(a),u=n(327),o=r(u),s=n(137),g=r(s),c=n(149),l=r(c);n(230),n(135);var m=n(261),d=r(m);"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){d.default.attach(document.body)},!1),i.default.use(o.default);var p=new o.default({routes:g.default,mode:"history",strict:!1,scrollBehavior:function(e,t,n){return n?n:{x:0,y:e.meta.savedPosition||0}}});p.beforeEach(function(e,t,n){t.meta.keepAlive&&(t.meta.savedPosition=document.body.scrollTop),n()}),new i.default({router:p,store:l.default}).$mount("#weixin")},18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="http://127.0.0.1:8003/files/images/",a=void 0;t.baseUrl=a="http://127.0.0.1:8003",t.baseUrl=a,t.imgurl=r},27:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.allgroup=t.getHistory=t.login=t.chatData=t.album=t.burse=t.collect=t.circle=t.userWord=t.userInfo=t.groupChat=t.dialog=t.contactList=t.searchList=void 0;var i=n(59),u=a(i),o=n(146),s=r(o),g=n(142),c=r(g),l=n(143),m=r(l),d=n(147),p=r(d),h=n(144),f=r(h),j=n(141),v=r(j),b=n(139),y=r(b),w=n(138),x=r(w),_=n(145),E=r(_),M=n(140),k=r(M),O=n(49),S=a(O),A=function(e){return new u.default(function(t,n){t(e)})};t.searchList=function(){return A(s.search)},t.contactList=function(){return A(c.contacts)},t.dialog=function(){return A(m.dialog)},t.groupChat=function(){return A(E.groupchat)},t.userInfo=function(e){return(0,S.default)("/user/info",{user_id:e})},t.userWord=function(){return A(p.userWord)},t.circle=function(){return A(f.circle)},t.collect=function(){return A(v.collect)},t.burse=function(){return A(y.burse)},t.album=function(){return A(x.album)},t.chatData=function(){return A(k.chatmore)},t.login=function(e){return(0,S.default)("/user/login",e)},t.getHistory=function(e){return(0,S.default)("/chat/history",e)},t.allgroup=function(e){return(0,S.default)("/user/all",e)}},49:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(42),i=r(a),u=n(61),o=r(u),s=n(59),g=r(s),c=n(57),l=r(c),m=n(58),d=r(m),p=n(41),h=r(p),f=n(18);t.default=function(){var e=(0,h.default)(i.default.mark(function e(){var t,n,r,a,u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",m=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"fetch";return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c=c.toUpperCase(),u=f.baseUrl+u,"GET"==c&&(t="",(0,d.default)(s).forEach(function(e){t+=e+"="+s[e]+"&"}),""!==t&&(t=t.substr(0,t.lastIndexOf("&")),u=u+"?"+t)),!window.fetch||"fetch"!=m){e.next=21;break}return n={credentials:"include",method:c,headers:{Accept:"application/json","Content-Type":"application/json"},mode:"cors",cache:"force-cache"},"POST"==c&&Object.defineProperty(n,"body",{value:(0,l.default)(s)}),e.prev=6,e.next=9,fetch(u,n);case 9:return r=e.sent,e.next=12,r.json();case 12:return a=e.sent,e.abrupt("return",a);case 16:throw e.prev=16,e.t0=e.catch(6),new Error(e.t0);case 19:e.next=22;break;case 21:return e.abrupt("return",new g.default(function(e,t){var n=void 0;n=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject;var r="";"POST"==c&&(r=(0,l.default)(s)),n.open(c,u,!0),n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.send(r),n.onreadystatechange=function(){if(4==n.readyState)if(200==n.status){var r=n.response;"object"!==("undefined"==typeof r?"undefined":(0,o.default)(r))&&(r=JSON.parse(r)),e(r)}else t(n)}}));case 22:case"end":return e.stop()}},e,void 0,[[6,16]])}));return function(){return e.apply(this,arguments)}}()},86:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.RECORD_MUTE="RECORD_MUTE",t.COMPUTER_SHOW="COMPUTER_SHOW",t.SAVE_MESSAGE="SAVE_MESSAGE",t.SAVE_BEGINDIALOGUE="SAVE_BEGINDIALOGUE",t.SAVE_DIALOGUE="SAVE_DIALOGUE",t.INIT_DIALOGUE="INIT_DIALOGUE",t.GET_USERINFO="GET_USERINFO",t.ENLARGE_HEAD="ENLARGE_HEAD",t.SAVE_THEMIMG="SAVE_THEMIMG",t.CHANGE_RED="CHANGE_RED",t.LOGIN_COVER="LOGIN_COVER",t.GET_ALLGROUP="GET_ALLGROUP"},135:function(e,t){"use strict";!function(e,t){var n=e.documentElement,r="orientationchange"in window?"orientationchange":"resize",a=function(){var e=n.clientWidth;e&&(n.style.fontSize=20*(e/320)+"px")};e.addEventListener&&(t.addEventListener(r,a,!1),e.addEventListener("DOMContentLoaded",a,!1))}(document,window)},137:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(267),i=r(a),u=function(e){return n.e(4,function(){return e(n(276))})},o=function(e){return n.e(6,function(){return e(n(275))})},s=function(e){return n.e(7,function(){return e(n(274))})},g=function(e){return n.e(10,function(){return e(n(272))})},c=function(e){return n.e(28,function(){return e(n(273))})},l=function(e){return n.e(2,function(){return e(n(268))})},m=function(e){return n.e(12,function(){return e(n(269))})},d=function(e){return n.e(11,function(){return e(n(270))})},p=function(e){return n.e(1,function(){return e(n(277))})},h=function(e){return n.e(8,function(){return e(n(278))})},f=function(e){return n.e(27,function(){return e(n(279))})},j=function(e){return n.e(0,function(){return e(n(282))})},v=function(e){return n.e(9,function(){return e(n(283))})},b=function(e){return n.e(24,function(){return e(n(284))})},y=function(e){return n.e(25,function(){return e(n(281))})},w=function(e){return n.e(14,function(){return e(n(294))})},x=function(e){return n.e(26,function(){return e(n(280))})},_=function(e){return n.e(5,function(){return e(n(271))})},E=function(e){return n.e(3,function(){return e(n(296))})},M=function(e){return n.e(15,function(){return e(n(293))})},k=function(e){return n.e(13,function(){return e(n(295))})},O=function(e){return n.e(17,function(){return e(n(291))})},S=function(e){return n.e(20,function(){return e(n(288))})},A=function(e){return n.e(22,function(){return e(n(286))})},L=function(e){return n.e(16,function(){return e(n(292))})},G=function(e){return n.e(21,function(){return e(n(287))})},I=function(e){return n.e(23,function(){return e(n(285))})},P=function(e){return n.e(19,function(){return e(n(289))})},R=function(e){return n.e(18,function(){return e(n(290))})};t.default=[{path:"/",component:i.default,children:[{path:"",redirect:"/dialogue"},{path:"/dialogue",component:u},{path:"/singlechat",component:o,children:[{path:"/singlechat/chatmessage",component:g}]},{path:"/groupchat",component:s,children:[{path:"/groupchat/groupchatmessage",component:c}]},{path:"/addressbook",component:l,meta:{keepAlive:!0},children:[{path:"/addressbook/details",component:m,children:[{path:"/addressbook/details/more",component:d}]}]},{path:"/find",component:p,children:[{path:"/find/friendcircle",component:h},{path:"/find/miniapps",component:f}]},{path:"/search",component:k},{path:"/me",component:j,children:[{path:"/me/settings",component:M,children:[{path:"/me/settings/newmessage",component:O},{path:"/me/settings/disturbance",component:S},{path:"/me/settings/chat",component:A},{path:"/me/settings/privacy",component:L},{path:"/me/settings/currency",component:G},{path:"/me/settings/aboutwc",component:I},{path:"/me/settings/help",component:P},{path:"/me/settings/login",component:R}]},{path:"/me/personaldetails",component:v},{path:"/me/cardbag",component:x},{path:"/me/photoalbum",component:b},{path:"/me/collect",component:y},{path:"/me/wallet",component:w}]},{path:"/computer",component:_},{path:"/transfer",component:E}]}]},138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.album=void 0;var r=n(18);t.album=[{albummonth:"5月",albumday:"26",puretext:["人生很多事，终究是会随着时间好起来的。像很多人原本只是胖，久了就变好胖。"],diagram:[{diagramimg:[r.imgurl+"li.jpg",r.imgurl+"zhongyu.jpg"],diagramtext:"美女"},{diagramimg:[r.imgurl+"chuqiao.jpg",r.imgurl+"tao.jpg",r.imgurl+"d.jpg",r.imgurl+"yabao.jpg",r.imgurl+"chuqiao.jpg",r.imgurl+"chuqiao.jpg"],diagramtext:"胖兔"}]},{albummonth:"5月",albumday:"20",puretext:[],diagram:[{diagramimg:[r.imgurl+"hu.jpg"],diagramtext:"人生很多事，终究是会随着时间好起来的。像很多人原本只是胖，久了就变好胖。"}]},{albummonth:"5月",albumday:"10",puretext:["福建福清发现千年古墓 出土精美鱼纹砖","陕西将每年发布消费环境指数","英国警方继续搜捕曼彻斯特恐袭案嫌疑人同伙"],diagram:[]},{albummonth:"4月",albumday:"20",puretext:["福建福清发现千年古墓 出土精美鱼纹砖","陕西将每年发布消费环境指数","英国警方继续搜捕曼彻斯特恐袭案嫌疑人同伙"],diagram:[{diagramimg:[r.imgurl+"li.jpg",r.imgurl+"zhongyu.jpg",r.imgurl+"tao.jpg",r.imgurl+"d.jpg",r.imgurl+"yabao.jpg"],diagramtext:"美女"},{diagramimg:[r.imgurl+"li.jpg",r.imgurl+"zhongyu.jpg"],diagramtext:"美女"},{diagramimg:[r.imgurl+"yabao.jpg"],diagramtext:"胖兔"},{diagramimg:[r.imgurl+"li.jpg",r.imgurl+"zhongyu.jpg",r.imgurl+"zhongyu.jpg",r.imgurl+"zhongyu.jpg"],diagramtext:"美女"},{diagramimg:[r.imgurl+"chuqiao.jpg",r.imgurl+"tao.jpg",r.imgurl+"d.jpg",r.imgurl+"yabao.jpg"],diagramtext:"胖兔"}]},{albummonth:"3月",albumday:"06",puretext:["福建福清发现千年古墓 出土精美鱼纹砖","陕西将每年发布消费环境指数","英国警方继续搜捕曼彻斯特恐袭案嫌疑人同伙"],diagram:[{diagramimg:[r.imgurl+"li.jpg",r.imgurl+"zhongyu.jpg",r.imgurl+"tao.jpg",r.imgurl+"d.jpg",r.imgurl+"yabao.jpg"],diagramtext:"美女"},{diagramimg:[r.imgurl+"li.jpg",r.imgurl+"zhongyu.jpg"],diagramtext:"美女"},{diagramimg:[r.imgurl+"yabao.jpg"],diagramtext:"胖兔"},{diagramimg:[r.imgurl+"li.jpg",r.imgurl+"zhongyu.jpg",r.imgurl+"zhongyu.jpg",r.imgurl+"zhongyu.jpg"],diagramtext:"美女"},{diagramimg:[r.imgurl+"chuqiao.jpg",r.imgurl+"tao.jpg",r.imgurl+"d.jpg",r.imgurl+"yabao.jpg"],diagramtext:"胖兔"}]}]},139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.burse=void 0;var r=n(18);t.burse={"腾讯服务":[{servicelogo:r.imgurl+"facetoface.jpg",servicename:"面对面红包"},{servicelogo:r.imgurl+"fees.jpg",servicename:"手机充值"},{servicelogo:r.imgurl+"mac.jpg",servicename:"理财通"},{servicelogo:r.imgurl+"weili.jpg",servicename:"微粒贷借钱"},{servicelogo:r.imgurl+"qq.jpg",servicename:"Q币充值"},{servicelogo:r.imgurl+"leftfees.jpg",servicename:"生活缴费"},{servicelogo:r.imgurl+"cityservice.jpg",servicename:"城市服务"},{servicelogo:r.imgurl+"repay.jpg",servicename:"信用卡还款"},{servicelogo:r.imgurl+"publicbenefit.jpg",servicename:"腾讯公益"}],"第三方服务":[{servicelogo:r.imgurl+"che.jpg",servicename:"摩拜单车"},{servicelogo:r.imgurl+"didi.jpg",servicename:"滴滴出行"},{servicelogo:r.imgurl+"huoche.jpg",servicename:"火车票机票"},{servicelogo:r.imgurl+"jiudian.jpg",servicename:"酒店"},{servicelogo:r.imgurl+"meituan.jpg",servicename:"美团外卖"},{servicelogo:r.imgurl+"wuma.jpg",servicename:"58到家"},{servicelogo:r.imgurl+"meili.jpg",servicename:"美丽说"},{servicelogo:r.imgurl+"jd.jpg",servicename:"京东优选"},{servicelogo:r.imgurl+"movie.jpg",servicename:"电影演出赛事"},{servicelogo:r.imgurl+"play.jpg",servicename:"吃喝玩乐"}]}},140:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.chatmore={0:[{chatSvgid:"#personimg",chatSvgname:"相册"},{chatSvgid:"#shot",chatSvgname:"拍摄"},{chatSvgid:"#camera",chatSvgname:"视频聊天"},{chatSvgid:"#positions",chatSvgname:"位置"},{chatSvgid:"#redbag",chatSvgname:"红包"},{chatSvgid:"#banktransfer",chatSvgname:"转账"},{chatSvgid:"#person",chatSvgname:"名片"},{chatSvgid:"#voiceinput",chatSvgname:"语音输入"}],1:[{chatSvgid:"#wxcollect",chatSvgname:"我的收藏"}]}},141:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.collect=void 0;var r=n(18);t.collect=[{wxid:"achuqiao",headurl:r.imgurl+"chuqiao.jpg",petname:"a楚乔",sex:1,remarks:"楚乔",collectext:"儿童节快到了，这边为大家推荐一款宝宝性格养成书哈。月销近万哦，会发声的绘本故事呢",collectimg:"",collectime:"今天"},{wxid:"caiawei",headurl:r.imgurl+"caiwei.jpg",petname:"采薇",sex:1,remarks:"",collectext:"",collectimg:r.imgurl+"d.jpg",collectime:"昨天"},{wxid:"liangshaoqing",headurl:r.imgurl+"liangshaoqing.jpg",petname:"梁少卿",sex:0,remarks:"",collectext:"",collectimg:r.imgurl+"d.jpg",collectime:"昨天"},{wxid:"chenchangsheng",headurl:r.imgurl+"chenchangsheng.jpg",petname:"陈长生",sex:0,remarks:"",collectext:"思落",collectimg:"",collectime:"昨天"},{wxid:"ayuwenyue",headurl:r.imgurl+"yuwenyue.jpg",petname:"a宇文玥",sex:0,remarks:"",collectext:"",collectimg:r.imgurl+"chenyuan.jpg",collectime:"昨天"}]},142:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.contacts=void 0;var a,i,u,o=n(87),s=r(o),g=n(18);t.contacts={A:[(a={wxid:"achuqiao",headurl:g.imgurl+"chuqiao.jpg",petname:"a楚乔",sex:1,remarks:"楚乔",sdasd:"披荆斩棘",phone:"13333333333",sendobject:1,gallery:[g.imgurl+"yuwenyue.jpg",g.imgurl+"c.jpg",g.imgurl+"chenchangsheng.jpg"],district:"奴籍少女",source:"通过搜索手机号添加",newmeassage:"从前有个剑客，他人很冷，心很冷，剑很冷，最后冷死了"},(0,s.default)(a,"sendobject",1),(0,s.default)(a,"Messageblob",""),a),{wxid:"ayuwenyue",headurl:g.imgurl+"yuwenyue.jpg",petname:"a宇文玥",sex:0,remarks:"",sdasd:"涅槃而生",phone:"13000000000",gallery:[g.imgurl+"wudaoya.jpg",g.imgurl+"h.jpg",g.imgurl+"hexiao.jpg"],district:"宇文府",source:"通过搜索微信号添加",newmeassage:"你的肩膀，那么近却那么远，到最后想说的话都未曾讲。!",sendobject:1,Messageblob:""}],B:[],C:[{wxid:"caiawei",headurl:g.imgurl+"caiwei.jpg",petname:"采薇",sex:1,remarks:"",sdasd:"",phone:"13000000000",gallery:[g.imgurl+"caiwei.jpg",g.imgurl+"lichun.jpg"],district:"淳公主的侍女",source:"通过群聊添加",newmeassage:"一发型师在给一个女客人做头发的时候把她脸给烫伤了，后来经过协商。。。。他把她给娶了。。。",sendobject:1,Messageblob:""},{wxid:"chenchangsheng",headurl:g.imgurl+"chenchangsheng.jpg",petname:"陈长生",sex:0,remarks:"",sdasd:"逆天改命",phone:"13002566500",gallery:[g.imgurl+"b1.jpg",g.imgurl+"chenchangsheng.jpg",g.imgurl+"xiaoyu.jpg"],district:"河边",source:"通过搜索微信号添加",newmeassage:"你因为穷做过什么违心的事？——上班。",sendobject:1,Messageblob:""},{wxid:"chenyuan",headurl:g.imgurl+"chenyuan.jpg",petname:"程鸢",sex:0,remarks:"",sdasd:"",phone:"13002566500",gallery:[g.imgurl+"b1.jpg",g.imgurl+"chenyuan.jpg",g.imgurl+"yexun.jpg"],district:"燕洵手下将军",source:"通过群聊添加",newmeassage:"跟长辈聊天时，我们总是用尽方法想讨他们开心，而长辈三言两语就可以让我们烦心。",sendobject:1,Messageblob:""}],D:[{wxid:"dinglan",headurl:g.imgurl+"dinglan.jpg",petname:"丁澜",sex:0,remarks:"临惜",sdasd:"",phone:"13002566500",gallery:[g.imgurl+"b1.jpg",g.imgurl+"chenyuan.jpg",g.imgurl+"yexun.jpg"],district:"楚乔的五哥",source:"通过搜索微信号添加",newmeassage:"越是没有能力改变自己生活的人，越喜欢批评别人的改变。",sendobject:1,Messageblob:""}],E:[],F:[{wxid:"fengmian",headurl:g.imgurl+"fengmian.jpg",petname:"风眠",sex:0,remarks:"风眠",sdasd:"",phone:"13002566500",gallery:[g.imgurl+"b1.jpg",g.imgurl+"fengmian.jpg",g.imgurl+"yuanchun.jpg"],district:"燕洵的书童",source:"通过群聊添加",newmeassage:"身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。",sendobject:1,Messageblob:""}],G:[],H:[(i={wxid:"hexiao",headurl:g.imgurl+"hexiao.jpg",petname:"贺萧",sex:0,remarks:"",sdasd:"",phone:"13002566500",gallery:[g.imgurl+"b1.jpg",g.imgurl+"fengmian.jpg",g.imgurl+"yuanchun.jpg"],district:"燕洵的书童",source:"通过搜索手机号添加"},(0,s.default)(i,"source","通过群聊添加"),(0,s.default)(i,"newmeassage","全国人民都上听了，单吊敬业福。"),(0,s.default)(i,"sendobject",1),(0,s.default)(i,"Messageblob",""),i)],I:[],J:[(u={wxid:"jinghan",headurl:g.imgurl+"jinghan.jpg",petname:"景邯",sex:0,remarks:"",sdasd:"",phone:"13000000000",gallery:[g.imgurl+"jinghan.jpg",g.imgurl+"zhongyu.jpg"],district:"大夏云绸封地景小王爷",source:"通过群聊添加"},(0,s.default)(u,"source","通过群聊添加"),(0,s.default)(u,"newmeassage","春节发现，原来“喜新厌旧”还可以说成“辞旧迎新”这般高尚！"),(0,s.default)(u,"sendobject",1),(0,s.default)(u,"Messageblob",""),u),{wxid:"jingsi",headurl:g.imgurl+"jingsi.jpg",petname:"锦偲",sex:1,remarks:"",sdasd:"",phone:"13000000000",gallery:[g.imgurl+"jingsi.jpg",g.imgurl+"yuwenyue.jpg"],district:"青山院大丫鬟",source:"通过群聊添加",newmeassage:"刚领导问我：“你觉得这个项目最大的风险是什么？” ，我：“我怕加班猝死。。。”",sendobject:1,Messageblob:""}],K:[],L:[{wxid:"lanshuyi",headurl:g.imgurl+"lanshuyi.jpg",petname:"兰淑仪",sex:1,remarks:"兰淑仪",sdasd:"",phone:"13000000000",gallery:[g.imgurl+"lanshuyi.jpg",g.imgurl+"yuwenyue.jpg"],district:"大魏淑仪，来历成谜。",source:"通过群聊添加",newmeassage:"名人用过的东西叫“文物”；凡人用过的视为“废物”。",sendobject:1,Messageblob:""},{wxid:"liangshaoqing",headurl:g.imgurl+"liangshaoqing.jpg",petname:"梁少卿",sex:0,remarks:"",sdasd:"",phone:"13000000000",gallery:[g.imgurl+"lanshuyi.jpg",g.imgurl+"yuwenyue.jpg"],district:"二货书生",source:"通过搜索手机号添加",newmeassage:"名人酗酒称“豪饮”；凡人多喝叫“贪杯”。",sendobject:1,Messageblob:""},{wxid:"lichun",headurl:g.imgurl+"lichun.jpg",petname:"李策",sex:0,remarks:"",sdasd:"默默守护",phone:"13000000000",gallery:[g.imgurl+"lanshuyi.jpg",g.imgurl+"yuwenyue.jpg"],district:"南梁太子",source:"通过群聊添加",newmeassage:"名人蓬头垢面谓“艺术气质”；凡人不修边幅叫“流里流气”。",sendobject:1,Messageblob:""}],M:[{wxid:"mengfeng",headurl:g.imgurl+"mengfeng.jpg",petname:"蒙枫",sex:1,remarks:"",sdasd:"我是个杀手！",phone:"13000000000",gallery:[g.imgurl+"mengfeng.jpg",g.imgurl+"yuwenyue.jpg"],district:"往生营",source:"通过搜索手机号添加",newmeassage:"名人的空话谓“指导”；凡人的实话叫“唠叨”。",sendobject:1,Messageblob:""}],N:[],O:[],P:[],Q:[],R:[],S:[{wxid:"shugeuifei",headurl:g.imgurl+"shugeuifei.jpg",petname:"魏贵妃",sex:1,remarks:"",sdasd:"本宫乏了~",phone:"13000000000",gallery:[g.imgurl+"mengfeng.jpg",g.imgurl+"yuwenyue.jpg"],district:"魏阀",source:"通过群聊添加",newmeassage:"名人的空话谓“指导”；凡人的实话叫“唠叨”。",sendobject:1,Messageblob:""}],T:[],U:[],V:[],W:[{wxid:"wudaoya",headurl:g.imgurl+"wudaoya.jpg",petname:"乌道涯",sex:0,remarks:"",sdasd:"本宫乏了~",phone:"13000000000",gallery:[g.imgurl+"wudaoya.jpg",g.imgurl+"zhaosong.jpg"],district:"燕北",source:"通过群聊添加",newmeassage:"钱财多的回家少，美貌多的穿衣少，想法多的成事少，劳累多的收入少，权力多的时间少，情人多的安宁少，朋友多的困难少，锻炼多的疾病少。 ",sendobject:1,Messageblob:""}],X:[{wxid:"812571880",headurl:g.imgurl+"chen.jpg",petname:"百里辰",sex:1,sdasd:"披荆斩棘",phone:"15800319949",sendobject:1,gallery:[g.imgurl+"chen.jpg",g.imgurl+"cangdu.jpg",g.imgurl+"b1.jpg"],district:"上海 闵行",newmeassage:"你的肩膀，那么近却那么远，到最后想说的话都未曾讲。",Messageblob:""},{wxid:"xiaoheilong",headurl:g.imgurl+"h.jpg",petname:"小黑龙",sex:1,remarks:"吃货",sdasd:"我是个小吃货，啦啦啦啦~",phone:"13000000000",gallery:[g.imgurl+"h.jpg",g.imgurl+"d.jpg",g.imgurl+"hu.jpg"],district:"大陆道尊",source:"通过群聊添加",newmeassage:"皇叔是仁德的；爱民是如子的；特长是会哭的；眼泪是充足的。",sendobject:1,Messageblob:""},{wxid:"xiaoyu",headurl:g.imgurl+"xiaoyu.jpg",petname:"萧玉",sex:1,remarks:"",sdasd:"美女~",phone:"13000000000",gallery:[g.imgurl+"xiaoyu.jpg",g.imgurl+"yuwenyue.jpg"],district:"南梁",source:"通过群聊添加",newmeassage:"孔明是伟大的；治国是有方的；用兵是如神的；放火是专长的。 ",sendobject:1,Messageblob:""}],Y:[{wxid:"yexun",headurl:g.imgurl+"yexun.jpg",petname:"燕洵",sex:0,remarks:"",sdasd:"楚乔......",phone:"13000000000",gallery:[g.imgurl+"yexun.jpg",g.imgurl+"yuwenyue.jpg"],district:"西凉",source:"通过群聊添加",newmeassage:"庞统是可惜的；出场是很少的；长相是挺丑的；死的是很惨的。",sendobject:1,Messageblob:""},{wxid:"yuanchun",headurl:g.imgurl+"yuanchun.jpg",petname:"元淳",sex:1,remarks:"",sdasd:"喜欢燕洵",phone:"13000000000",gallery:[g.imgurl+"yuanchun.jpg",g.imgurl+"yuwenyue.jpg"],district:"西魏公主",source:"通过群聊添加",newmeassage:"云长是红脸的；胡子是很长的；自负是肯定的；倒霉是迟早的。",sendobject:1,Messageblob:""}],Z:[{wxid:"zhaosong",headurl:g.imgurl+"zhaosong.jpg",petname:"赵嵩",sex:0,remarks:"",sdasd:"小八小八小八",phone:"13000000000",gallery:[g.imgurl+"zhaosong.jpg",g.imgurl+"yuwenyue.jpg"],district:"大魏十三皇子",source:"通过群聊添加",newmeassage:"翼德是莽撞的；粗中是有细的；嗓门是挺大的；睡觉是睁眼的。",sendobject:1,Messageblob:""}]}},143:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dialog=void 0;var r=n(18);t.dialog=[{wxid:"fileTransfer",headurl:r.imgurl+"robot.jpg",petname:"机器人聊天",remarks:"机器人聊天",newmeassage:"请从通讯录的联系人进入机器人单人聊天",sendobject:1}]},144:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.circle=void 0;var r=n(18);t.circle=[{wxid:"chenchangsheng",headurl:r.imgurl+"chenchangsheng.jpg",petname:"陈长生",sex:0,remarks:"",statements:"逆天改命",time:"20分钟前",postimage:[],like:["楚乔","嗯"],comment:[],reviewshow:!1,reviewhide:!1,criticism:!1,flag:!0,suporthtml:"赞"},{wxid:"812571880",headurl:r.imgurl+"chen.jpg",petname:"百里辰",sex:1,remarks:"",statements:"身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。",time:"5分钟前",postimage:[r.imgurl+"chen.jpg",r.imgurl+"cangdu.jpg",r.imgurl+"chuqiao.jpg",r.imgurl+"h.jpg",r.imgurl+"dinglan.jpg",r.imgurl+"fengmian.jpg"],like:["嗯"],comment:[{wxid:"enen",petname:"嗯",remarks:"嗯",commentext:"看好你呦！"},{wxid:"achuqiao",petname:"a楚乔",remarks:"楚乔",commentext:"披荆斩棘"}],reviewshow:!1,reviewhide:!1,criticism:!1,flag:!0,suporthtml:"赞"},{wxid:"chenyuan",headurl:r.imgurl+"chenyuan.jpg",petname:"程鸢",sex:0,remarks:"",statements:"",time:"20分钟前",postimage:[r.imgurl+"d.jpg"],like:[],comment:[{wxid:"enen",petname:"嗯",remarks:"嗯",commentext:"看好你呦！"},{wxid:"achuqiao",petname:"a楚乔",remarks:"楚乔",commentext:"披荆斩棘"}],reviewshow:!1,reviewhide:!1,criticism:!1,flag:!0,suporthtml:"赞"},{wxid:"shugeuifei",headurl:r.imgurl+"mengfeng.jpg",petname:"魏贵妃",sex:0,remarks:"",statements:"",time:"1小时前",postimage:[r.imgurl+"mengfeng.jpg",r.imgurl+"wudaoya.jpg"],like:[],comment:[{wxid:"enen",petname:"嗯",remarks:"嗯",commentext:"看好你呦！"},{wxid:"achuqiao",petname:"a楚乔",remarks:"楚乔",commentext:"披荆斩棘"}],reviewshow:!1,reviewhide:!1,criticism:!1,flag:!0,suporthtml:"赞"}]},145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.groupchat=void 0;var r=n(18);t.groupchat={petname:"微信交流群~",grouphead:[{username:"chenchangsheng",avatar:r.imgurl+"chenchangsheng.jpg",petname:"陈长生",remarks:"",content:"今天下雨",sendobject:1},{username:"812571880",avatar:r.imgurl+"chen.jpg",petname:"百里辰",content:"今天下雨",sendobject:1},{username:"achuqiao",avatar:r.imgurl+"chuqiao.jpg",petname:"a楚乔",remarks:"楚乔",sendobject:1,content:"嗯"},{username:"caiawei",avatar:r.imgurl+"caiwei.jpg",petname:"采薇",remarks:"",phone:"13000000000",sendobject:1,content:"一发型师在给一个女客人做头发的时候把她脸给烫伤了，后来经过协商。。。。他把她给娶了。。。"}]}},146:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.search=[{title:"朋友圈"},{title:"文章"},{title:"公众号"},{title:"小说"},{title:"音乐"},{title:"表情"}]},147:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.userWord=void 0;var r=n(18);t.userWord=[{wxid:"812571880",headurl:r.imgurl+"chen.jpg",sendobject:0,Messageblob:"人生没有彩排，每天都是直播，不仅收视率低，而且工资不高。"}]},148:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(42),i=r(a),u=n(41),o=r(u),s=n(27),g=n(86);t.default={getUserInfo:function(e){var t=this,n=e.commit;e.state;return(0,o.default)(i.default.mark(function e(){var r,a;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("user_id"),e.next=3,(0,s.userInfo)(r);case 3:a=e.sent,n(g.GET_USERINFO,a.user_info);case 5:case"end":return e.stop()}},e,t)}))()},getDialog:function(e){var t=this,n=e.commit,r=e.state;return(0,o.default)(i.default.mark(function e(){var a;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r.contactList.length>0)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,s.dialog)();case 4:a=e.sent,n(g.SAVE_BEGINDIALOGUE,a);case 6:case"end":return e.stop()}},e,t)}))()}}},149:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(105),i=r(a),u=n(16),o=r(u),s=n(150),g=r(s),c=n(148),l=r(c);i.default.use(o.default);var m={mute:!1,computershow:!0,infor:{},contactList:[],userInfo:{},newImg:"",imagestatus:!1,firendwarn:!0,consumerthing:!1,allgroup:[]};t.default=new o.default.Store({state:m,actions:l.default,mutations:g.default})},150:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,i=n(87),u=r(i),o=n(153),s=r(o),g=n(60),c=r(g),l=n(86);t.default=(a={},(0,u.default)(a,l.RECORD_MUTE,function(e,t){e.mute=t}),(0,u.default)(a,l.COMPUTER_SHOW,function(e,t){e.computershow=t}),(0,u.default)(a,l.SAVE_MESSAGE,function(e,t){e.infor={},e.infor=t}),(0,u.default)(a,l.SAVE_BEGINDIALOGUE,function(e,t){e.contactList=t}),(0,u.default)(a,l.SAVE_DIALOGUE,function(e,t){e.contactList=[t].concat((0,c.default)(e.contactList));var n=new s.default(e.contactList);e.contactList=[].concat((0,c.default)(n))}),(0,u.default)(a,l.GET_USERINFO,function(e,t){e.userInfo=t}),(0,u.default)(a,l.SAVE_THEMIMG,function(e,t){var n=t.newImg,r=t.imagestatus;e.newImg=n,e.imagestatus=r}),(0,u.default)(a,l.CHANGE_RED,function(e,t){e.firendwarn=t}),(0,u.default)(a,l.LOGIN_COVER,function(e,t){e.consumerthing=t}),(0,u.default)(a,l.GET_ALLGROUP,function(e,t){e.allgroup=t}),a)},230:function(e,t){},248:function(e,t){},267:function(e,t,n){n(248);var r=n(3)(null,n(314),null,null);e.exports=r.exports},314:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[n("keep-alive",[e.$route.meta.keepAlive?n("router-view"):e._e()],1)],1),e._v(" "),n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[e.$route.meta.keepAlive?e._e():n("router-view")],1)],1)},staticRenderFns:[]}}});