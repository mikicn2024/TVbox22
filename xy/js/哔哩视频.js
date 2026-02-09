/**
鍐呭浠呬緵浜ゆ祦瀛︿範浣跨敤 濡備镜鐘簡鎮ㄧ殑鏉冪泭 璇烽€氱煡浣滆€� 灏嗗強鏃跺垹闄や镜鏉冨唴瀹�
澶忓:
鍩轰簬鍘焜s浠ｇ爜鍦ㄥ熀纭€涓婁慨鏀逛簡棰勫憡鏄剧ず闂锛岀幇涓嶄細鏄剧ず棰勫憡
2025.12.27淇鎼滅储闂
2025.12.28灞忚斀鎼滅储鏃犵粨鏋� 鍐嶄紭鍖栨悳绱㈠搷搴旈€熷害
 */


var rule = {
    title:'鍝斿摡褰辫[瀹榏',
    host:'https://api.bilibili.com',
    url:'/fyclass-fypage&vmid=$vmid',
    detailUrl:'/pgc/view/web/season?season_id=fyid',
    filter_url:'fl={{fl}}',
    vmid鑾峰彇鏁欑▼:'鐧诲綍鍚庤闂甴ttps://api.bilibili.com/x/web-interface/nav,鎼滅储mid灏辨槸,cookie闇€瑕� bili_jct,DedeUserID,SESSDATA鍙傛暟',
    searchUrl:'/x/web-interface/search/type?keyword=**&page=fypage&search_type=media_bangumi&search_type=media_ft',
    searchable:1,
    filterable:1,
    quickSearch:0,
    headers:{
        'User-Agent':'PC_UA',
        "Referer": "https://www.bilibili.com",
        "Cookie":"b_nut=1754358399; buvid3=0F2F49F9-DB89-BB64-8C82-0FC19C89700C99838infoc; bsource=search_baidu; _uuid=D75882107-8DA4-5CEB-610BF-1C947B575F6F00241infoc; buvid4=708DFED9-5C46-1145-2E55-C666A6DCD00D00431-125080509-2JaJVUbLMmiKSv6f1hrFWOzvO5HPB0qiGQ88G7/gWinLq9zArOyfN4Sxbea0Elu2; bmg_af_switch=1; bmg_src_def_domain=i0.hdslb.com; buvid_fp=a648a8f1a55caf7d8a9f1cf0a7012532; rpdid=0zbfvUmrTi|gvd1C9k3|4EB|3w1UJ6Qk; b_lsid=3F6610F34_19B627D262F; home_feed_column=4; browser_resolution=1100-2444; theme-tip-show=SHOWED; theme-avatar-tip-show=SHOWED; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjcxNDM0NjAsImlhdCI6MTc2Njg4NDIwMCwicGx0IjotMX0.Mq61VKWaA2PwrfGmjz5wdxxTq4gAEl8OCW1aC1vcyAg; bili_ticket_expires=1767143400; CURRENT_FNVAL=16; CURRENT_QUALITY=0; sid=pp8jodon"
    },
    tab_order:['bilibili'],//绾胯矾椤哄簭,鎸夐噷闈㈢殑椤哄簭浼樺厛锛屾病鍐欑殑渚濇鎺掑悗闈�
    timeout:5000,
    class_name:'鐣墽&鍥藉垱&鐢靛奖&鐢佃鍓�&绾綍鐗�&缁艰壓&鍏ㄩ儴&杩界暘&杩藉墽&鏃堕棿琛�',
    class_url:'1&4&2&5&3&7&鍏ㄩ儴&杩界暘&杩藉墽&鏃堕棿琛�',
    filter:{"鍏ㄩ儴":[{"key":"tid","name":"鍒嗙被","value":[{"n":"鐣墽","v":"1"},{"n":"鍥藉垱","v":"4"},{"n":"鐢靛奖","v":"2"},{"n":"鐢佃鍓�","v":"5"},{"n":"璁板綍鐗�","v":"3"},{"n":"缁艰壓","v":"7"}]},{"key":"order","name":"鎺掑簭","value":[{"n":"鎾斁鏁伴噺","v":"2"},{"n":"鏇存柊鏃堕棿","v":"0"},{"n":"鏈€楂樿瘎鍒�","v":"4"},{"n":"寮瑰箷鏁伴噺","v":"1"},{"n":"杩界湅浜烘暟","v":"3"},{"n":"寮€鎾椂闂�","v":"5"},{"n":"涓婃槧鏃堕棿","v":"6"}]},{"key":"season_status","name":"浠樿垂","value":[{"n":"鍏ㄩ儴","v":"-1"},{"n":"鍏嶈垂","v":"1"},{"n":"浠樿垂","v":"2%2C6"},{"n":"澶т細鍛�","v":"4%2C6"}]}],"鏃堕棿琛�":[{"key":"tid","name":"鍒嗙被","value":[{"n":"鐣墽","v":"1"},{"n":"鍥藉垱","v":"4"}]}]},
    play_parse:true,
    // play_json:[{re:'*', json:{jx:1, parse:0,header:JSON.stringify({"user-agent":"PC_UA"})}}],
    pagecount:{"1":1,"2":1,"3":1,"4":1,"5":1,"7":1,"鏃堕棿琛�":1},
     lazy: $js.toString(() => {
        try {
            let api = "" + input.split("?")[0];
            console.log(api);
            let response = fetch(api, {
                method: 'get',
                headers: {
                    'User-Agent': 'okhttp/3.14.9',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            let bata = JSON.parse(response);
            if (bata.url.includes("qiyi")) {
                input = {
                    parse: 0,
                    url: bata.url,
                    jx: 0,
                    danmaku: "http://121.41.93.205/dm.php?url=" + input.split("?")[0]
                };
            } else {
                input = {
                    parse: 0,
                    url: input.split("?")[0],
                    jx: 1,
                    danmaku: "http://121.41.93.205/dm.php?url=" + input.split("?")[0]
                };
            }
        } catch {
            input = {
                parse: 0,
                url: input.split("?")[0],
                jx: 1,
                danmaku: "http://121.41.93.205/dm.php?url=" + input.split("?")[0]
            };
        }
    }),
    limit:5,
    鎺ㄨ崘:'js:let d=[];function get_result(url){let videos=[];let html=request(url);let jo=JSON.parse(html);if(jo["code"]===0){let vodList=jo.result?jo.result.list:jo.data.list;vodList.forEach(function(vod){let aid=(vod["season_id"]+"").trim();let title=vod["title"].trim();let img=vod["cover"].trim();let remark=vod.new_ep?vod["new_ep"]["index_show"]:vod["index_show"];if(!title.includes("棰勫憡")){videos.push({vod_id:aid,vod_name:title,vod_pic:img,vod_remarks:remark})}})}return videos}function get_rank(tid,pg){return get_result("https://api.bilibili.com/pgc/web/rank/list?season_type="+tid+"&pagesize=20&page="+pg+"&day=3")}function get_rank2(tid,pg){return get_result("https://api.bilibili.com/pgc/season/rank/web/list?season_type="+tid+"&pagesize=20&page="+pg+"&day=3")}function home_video(){let videos=get_rank(1).slice(0,5);[4,2,5,3,7].forEach(function(i){videos=videos.concat(get_rank2(i).slice(0,5))});return videos}VODS=home_video();',
    涓€绾�:'js:let d=[];let vmid=input.split("vmid=")[1].split("&")[0];function get_result(url){let videos=[];let html=request(url);let jo=JSON.parse(html);if(jo["code"]===0){let vodList=jo.result?jo.result.list:jo.data.list;vodList.forEach(function(vod){let aid=(vod["season_id"]+"").trim();let title=vod["title"].trim();let img=vod["cover"].trim();let remark=vod.new_ep?vod["new_ep"]["index_show"]:vod["index_show"];if(!title.includes("棰勫憡") && !remark.includes("棰勫憡")){videos.push({vod_id:aid,vod_name:title,vod_pic:img,vod_remarks:remark})}})}return videos}function get_rank(tid,pg){return get_result("https://api.bilibili.com/pgc/web/rank/list?season_type="+tid+"&pagesize=20&page="+pg+"&day=3")}function get_rank2(tid,pg){return get_result("https://api.bilibili.com/pgc/season/rank/web/list?season_type="+tid+"&pagesize=20&page="+pg+"&day=3")}function get_zhui(pg,mode){let url="https://api.bilibili.com/x/space/bangumi/follow/list?type="+mode+"&follow_status=0&pn="+pg+"&ps=10&vmid="+vmid;return get_result(url)}function get_all(tid,pg,order,season_status){let url="https://api.bilibili.com/pgc/season/index/result?order="+order+"&pagesize=20&type=1&season_type="+tid+"&page="+pg+"&season_status="+season_status;return get_result(url)}function get_timeline(tid,pg){let videos=[];let url="https://api.bilibili.com/pgc/web/timeline/v2?season_type="+tid+"&day_before=2&day_after=4";let html=request(url);let jo=JSON.parse(html);if(jo["code"]===0){let videos1=[];let vodList=jo.result.latest;vodList.forEach(function(vod){let aid=(vod["season_id"]+"").trim();let title=vod["title"].trim();let img=vod["cover"].trim();let remark=vod["pub_index"]+"銆€"+vod["follows"].replace("绯诲垪","");if(!title.includes("棰勫憡") && !remark.includes("棰勫憡")){videos1.push({vod_id:aid,vod_name:title,vod_pic:img,vod_remarks:remark})}});let videos2=[];for(let i=0;i<7;i++){let vodList=jo["result"]["timeline"][i]["episodes"];vodList.forEach(function(vod){if(vod["published"]+""==="0" && !vod["title"].includes("棰勫憡")){let aid=(vod["season_id"]+"").trim();let title=vod["title"].trim();let img=vod["cover"].trim();let date=vod["pub_ts"];let remark=date+"   "+vod["pub_index"];videos2.push({vod_id:aid,vod_name:title,vod_pic:img,vod_remarks:remark})}})}videos=videos2.concat(videos1)}return videos}function cate_filter(d,cookie){if(MY_CATE==="1"){return get_rank(MY_CATE,MY_PAGE)}else if(["2","3","4","5","7"].includes(MY_CATE)){return get_rank2(MY_CATE,MY_PAGE)}else if(MY_CATE==="鍏ㄩ儴"){let tid=MY_FL.tid||"1";let order=MY_FL.order||"2";let season_status=MY_FL.season_status||"-1";return get_all(tid,MY_PAGE,order,season_status)}else if(MY_CATE==="杩界暘"){return get_zhui(MY_PAGE,1)}else if(MY_CATE==="杩藉墽"){return get_zhui(MY_PAGE,2)}else if(MY_CATE==="鏃堕棿琛�"){let tid=MY_FL.tid||"1";return get_timeline(tid,MY_PAGE)}else{return[]}}VODS=cate_filter();',
    浜岀骇:{
        is_json:true,
        title:".result.title;.result.share_sub_title",
        img:".result.cover",
        desc:".result.new_ep.desc;.result.publish.pub_time;.result.subtitle",
        content:".result.evaluate",
        tabs:"js:pdfa=jsp.pdfa;TABS=['B绔�']",
        lists:".result.episodes",
        list_text:'title',
        list_url:'cid',
    },
    浜岀骇:'js:function zh(num){let p="";if(Number(num)>1e8){p=(num/1e8).toFixed(2)+"浜�"}else if(Number(num)>1e4){p=(num/1e4).toFixed(2)+"涓�"}else{p=num}return p}let html=request(input);let jo=JSON.parse(html).result;let id=jo["season_id"];let title=jo["title"];let pic=jo["cover"];let areas=jo["areas"][0]["name"];let typeName=jo["share_sub_title"];let date=jo["publish"]["pub_time"].substr(0,4);let dec=jo["evaluate"];let remark=jo["new_ep"]["desc"];let stat=jo["stat"];let status="寮瑰箷: "+zh(stat["danmakus"])+"銆€鐐硅禐: "+zh(stat["likes"])+"銆€鎶曞竵: "+zh(stat["coins"])+"銆€杩界暘杩藉墽: "+zh(stat["favorites"]);let score=jo.hasOwnProperty("rating")?"璇勫垎: "+jo["rating"]["score"]+"銆€"+jo["subtitle"]:"鏆傛棤璇勫垎"+"銆€"+jo["subtitle"];let vod={vod_id:id,vod_name:title,vod_pic:pic,type_name:typeName,vod_year:date,vod_area:areas,vod_remarks:remark,vod_actor:status,vod_director:score,vod_content:dec};let ja=jo["episodes"].filter(ep=>!ep.title.includes("棰勫憡") && !(ep.badge && ep.badge.includes("棰勫憡")));let playurls1=[];let playurls2=[];ja.forEach(function(tmpJo){let eid=tmpJo["id"];let cid=tmpJo["cid"];let link=tmpJo["link"];let part=tmpJo["title"].replace("#","-")+" "+tmpJo["long_title"]+"["+tmpJo["badge"]+"]";playurls1.push(part+"$"+eid+"_"+cid);playurls2.push(part+"$"+link)});let playUrl=playurls1.length>0?playurls1.join("#")+"$$$"+playurls2.join("#"):"";vod["vod_play_from"]="$$$bilibili";vod["vod_play_url"]=playUrl;VOD=vod;',
    鎼滅储:'js:let encodedKeyword = encodeURIComponent(KEY);let url1 = "https://api.bilibili.com/x/web-interface/search/type?search_type=media_bangumi&keyword=" + encodedKeyword + "&page=" + MY_PAGE;let url2 = "https://api.bilibili.com/x/web-interface/search/type?search_type=media_ft&keyword=" + encodedKeyword + "&page=" + MY_PAGE;let html1 = request(url1);let html2 = request(url2);let jo1 = JSON.parse(html1);let jo2 = JSON.parse(html2);let videos = [];function cleanHtml(text) {if (!text) return "";return text.replace(/<[^>]+>/g, "").replace(/&quot;/g, \'"\').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");}if (jo1["code"] === 0 && jo1["data"]["numResults"] > 0) {let result1 = jo1["data"]["result"];for (let i = 0; i < result1.length; i++) {let vod = result1[i];let aid = (vod["season_id"] + "").trim();let title = cleanHtml(vod["title"]).trim();let img = vod["cover"].trim();let remark = cleanHtml(vod["index_show"]).trim();if (!title.includes("棰勫憡") && !remark.includes("棰勫憡")) {videos.push({vod_id: aid,vod_name: title,vod_pic: img,vod_remarks: remark});}}}if (jo2["code"] === 0 && jo2["data"]["numResults"] > 0) {let result2 = jo2["data"]["result"];for (let i = 0; i < result2.length; i++) {let vod = result2[i];let aid = (vod["season_id"] + "").trim();let title = cleanHtml(vod["title"]).trim();let img = vod["cover"].trim();let remark = cleanHtml(vod["index_show"]).trim();if (!title.includes("棰勫憡") && !remark.includes("棰勫憡")) {videos.push({vod_id: aid,vod_name: title,vod_pic: img,vod_remarks: remark});}}}VODS = videos;'
}
