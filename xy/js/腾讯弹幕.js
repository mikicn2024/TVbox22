//灏忓績鍎挎偁鎮�//
var rule = {
    title: '鑵捐瑙嗛',
    host: 'https://v.qq.com',
    homeUrl: '/x/bu/pagesheet/list?_all=1&append=1&channel=cartoon&listpage=1&offset=0&pagesize=21&iarea=-1&sort=18',
    detailUrl: 'https://node.video.qq.com/x/api/float_vinfo2?cid=fyid',
    searchUrl: '**',
    searchable: 2,
    filterable: 1,
    multi: 1,
    url: '/x/bu/pagesheet/list?_all=1&append=1&channel=fyclass&listpage=1&offset=((fypage-1)*21)&pagesize=21&iarea=-1',
    filter_url: 'sort={{fl.sort or 75}}&iyear={{fl.iyear}}&year={{fl.year}}&itype={{fl.type}}&ifeature={{fl.feature}}&iarea={{fl.area}}&itrailer={{fl.itrailer}}&gender={{fl.sex}}',
    filter_url: 'sort={{fl.sort or 75}}&iyear={{fl.iyear}}&year={{fl.year}}&itype={{fl.type}}&ifeature={{fl.feature}}&iarea={{fl.area}}&itrailer={{fl.itrailer}}&gender={{fl.sex}}',
    filter: {
        "choice": [{
            "key": "sort",
            "name": "鎺掑簭",
            "value": [{
                "n": "鏈€鐑�",
                "v": "75"
            }, {
                "n": "鏈€鏂�",
                "v": "83"
            }, {
                "n": "濂借瘎",
                "v": "81"
            }]
        }, {
            "key": "iyear",
            "name": "骞翠唬",
            "value": [{
                "n": "鍏ㄩ儴",
                "v": "-1"
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }]
        }],
        "tv": [{
            "key": "sort",
            "name": "鎺掑簭",
            "value": [{
                "n": "鏈€鐑�",
                "v": "75"
            }, {
                "n": "鏈€鏂�",
                "v": "79"
            }, {
                "n": "濂借瘎",
                "v": "16"
            }]
        }, {
            "key": "feature",
            "name": "绫诲瀷",
            "value": [{
                "n": "鍏ㄩ儴",
                "v": "-1"
            }, {
                "n": "鐖辨儏",
                "v": "1"
            }, {
                "n": "鍙よ",
                "v": "2"
            }, {
                "n": "鎮枒",
                "v": "3"
            }, {
                "n": "閮藉競",
                "v": "4"
            }, {
                "n": "瀹跺涵",
                "v": "5"
            }, {
                "n": "鍠滃墽",
                "v": "6"
            }, {
                "n": "浼犲",
                "v": "7"
            }, {
                "n": "姝︿緺",
                "v": "8"
            }, {
                "n": "鍐涙梾",
                "v": "9"
            }, {
                "n": "鏉冭皨",
                "v": "10"
            }, {
                "n": "闈╁懡",
                "v": "11"
            }, {
                "n": "鐜板疄",
                "v": "13"
            }, {
                "n": "闈掓槬",
                "v": "14"
            }, {
                "n": "鐚庡",
                "v": "15"
            }, {
                "n": "绉戝够",
                "v": "16"
            }, {
                "n": "绔炴妧",
                "v": "17"
            }, {
                "n": "鐜勫够",
                "v": "18"
            }]
        }, {
            "key": "iyear",
            "name": "骞翠唬",
            "value": [{
                "n": "鍏ㄩ儴",
                "v": "-1"
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }]
        }],
        "movie": [{
            "key": "sort",
            "name": "鎺掑簭",
            "value": [{
                "n": "鏈€鐑�",
                "v": "75"
            }, {
                "n": "鏈€鏂�",
                "v": "83"
            }, {
                "n": "濂借瘎",
                "v": "81"
            }]
        }, {
            "key": "type",
            "name": "绫诲瀷",
            "value": [{
                "n": "鍏ㄩ儴",
                "v": "-1"
            }, {
                "n": "鐘姜",
                "v": "4"
            }, {
                "n": "鍔卞織",
                "v": "2"
            }, {
                "n": "鍠滃墽",
                "v": "100004"
            }, {
                "n": "鐑",
                "v": "100061"
            }, {
                "n": "鎮枒",
                "v": "100009"
            }, {
                "n": "鐖辨儏",
                "v": "100005"
            }, {
                "n": "绉戝够",
                "v": "100012"
            }, {
                "n": "鎭愭€�",
                "v": "100010"
            }, {
                "n": "鍔ㄧ敾",
                "v": "100015"
            }, {
                "n": "鎴樹簤",
                "v": "100006"
            }, {
                "n": "瀹跺涵",
                "v": "100017"
            }, {
                "n": "鍓ф儏",
                "v": "100022"
            }, {
                "n": "濂囧够",
                "v": "100016"
            }, {
                "n": "姝︿緺",
                "v": "100011"
            }, {
                "n": "鍘嗗彶",
                "v": "100021"
            }, {
                "n": "鑰佺墖",
                "v": "100013"
            }, {
                "n": "瑗块儴",
                "v": "3"
            }, {
                "n": "璁板綍鐗�",
                "v": "100020"
            }]
        }, {
            "key": "year",
            "name": "骞翠唬",
            "value": [{
                "n": "鍏ㄩ儴",
                "v": "-1"
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }]
        }],
        "variety": [{
            "key": "sort",
            "name": "鎺掑簭",
            "value": [{
                "n": "鏈€鐑�",
                "v": "75"
            }, {
                "n": "鏈€鏂�",
                "v": "23"
            }]
        }, {
            "key": "iyear",
            "name": "骞翠唬",
            "value": [{
                "n": "鍏ㄩ儴",
                "v": "-1"
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }]
        }],
        "cartoon": [{
            "key": "sort",
            "name": "鎺掑簭",
            "value": [{
                "n": "鏈€鐑�",
                "v": "75"
            }, {
                "n": "鏈€鏂�",
                "v": "83"
            }, {
                "n": "濂借瘎",
                "v": "81"
            }]
        }, {
            "key": "area",
            "name": "鍦板尯",
            "value": [{
                "n": "鍏ㄩ儴",
                "v": "-1"
            }, {
                "n": "鍐呭湴",
                "v": "1"
            }, {
                "n": "鏃ユ湰",
                "v": "2"
            }, {
                "n": "娆х編",
                "v": "3"
            }, {
                "n": "鍏朵粬",
                "v": "4"
            }]
        }, {
            "key": "type",
            "name": "绫诲瀷",
            "value": [{
                "n": "鍏ㄩ儴",
                "v": "-1"
            }, {
                "n": "鐜勫够",
                "v": "9"
            }, {
                "n": "绉戝够",
                "v": "4"
            }, {
                "n": "姝︿緺",
                "v": "13"
            }, {
                "n": "鍐掗櫓",
                "v": "3"
            }, {
                "n": "鎴樻枟",
                "v": "5"
            }, {
                "n": "鎼炵瑧",
                "v": "1"
            }, {
                "n": "鎭嬬埍",
                "v": "7"
            }, {
                "n": "榄斿够",
                "v": "6"
            }, {
                "n": "绔炴妧",
                "v": "20"
            }, {
                "n": "鎮枒",
                "v": "17"
            }, {
                "n": "鏃ュ父",
                "v": "15"
            }, {
                "n": "鏍″洯",
                "v": "16"
            }, {
                "n": "鐪熶汉",
                "v": "18"
            }, {
                "n": "鎺ㄧ悊",
                "v": "14"
            }, {
                "n": "鍘嗗彶",
                "v": "19"
            }, {
                "n": "缁忓吀",
                "v": "3"
            }, {
                "n": "鍏朵粬",
                "v": "12"
            }]
        }, {
            "key": "iyear",
            "name": "骞翠唬",
            "value": [{
                "n": "鍏ㄩ儴",
                "v": "-1"
            }, {
                "n": "2025",
                "v": "2025"
            }, {
                "n": "2024",
                "v": "2024"
            }, {
                "n": "2023",
                "v": "2023"
            }, {
                "n": "2022",
                "v": "2022"
            }, {
                "n": "2021",
                "v": "2021"
            }, {
                "n": "2020",
                "v": "2020"
            }, {
                "n": "2019",
                "v": "2019"
            }, {
                "n": "2018",
                "v": "2018"
            }, {
                "n": "2017",
                "v": "2017"
            }, {
                "n": "2016",
                "v": "2016"
            }, {
                "n": "2015",
                "v": "2015"
            }]
        }],
        "child": [{
            "key": "sort",
            "name": "鎺掑簭",
            "value": [{
                "n": "鏈€鐑�",
                "v": "75"
            }, {
                "n": "鏈€鏂�",
                "v": "76"
            }, {
                "n": "濂借瘎",
                "v": "20"
            }]
        }, {
            "key": "sex",
            "name": "鎬у埆",
            "value": [{
                "n": "鍏ㄩ儴",
                "v": "-1"
            }, {
                "n": "濂冲",
                "v": "1"
            }, {
                "n": "鐢峰",
                "v": "2"
            }]
        }, {
            "key": "area",
            "name": "鍦板尯",
            "value": [{
                "n": "鍏ㄩ儴",
                "v": "-1"
            }, {
                "n": "鍐呭湴",
                "v": "3"
            }, {
                "n": "鏃ユ湰",
                "v": "2"
            }, {
                "n": "鍏朵粬",
                "v": "1"
            }]
        }, {
            "key": "iyear",
            "name": "骞撮緞娈�",
            "value": [{
                "n": "鍏ㄩ儴",
                "v": "-1"
            }, {
                "n": "0-3宀�",
                "v": "1"
            }, {
                "n": "4-6宀�",
                "v": "2"
            }, {
                "n": "7-9宀�",
                "v": "3"
            }, {
                "n": "10宀佷互涓�",
                "v": "4"
            }, {
                "n": "鍏ㄥ勾榫勬",
                "v": "7"
            }]
        }],
        "doco": [{
            "key": "sort",
            "name": "鎺掑簭",
            "value": [{
                "n": "鏈€鐑�",
                "v": "75"
            }, {
                "n": "鏈€鏂�",
                "v": "74"
            }]
        }, {
            "key": "itrailer",
            "name": "鍑哄搧鏂�",
            "value": [{
                "n": "鍏ㄩ儴",
                "v": "-1"
            }, {
                "n": "BBC",
                "v": "1"
            }, {
                "n": "鍥藉鍦扮悊",
                "v": "4"
            }, {
                "n": "HBO",
                "v": "3175"
            }, {
                "n": "NHK",
                "v": "2"
            }, {
                "n": "鍘嗗彶棰戦亾",
                "v": "7"
            }, {
                "n": "ITV",
                "v": "3530"
            }, {
                "n": "鎺㈢储棰戦亾",
                "v": "3174"
            }, {
                "n": "ZDF",
                "v": "3176"
            }, {
                "n": "鑵捐鑷埗",
                "v": "15"
            }, {
                "n": "鍚堜綔鏈烘瀯",
                "v": "6"
            }, {
                "n": "鍏朵粬",
                "v": "5"
            }]
        }, {
            "key": "type",
            "name": "绫诲瀷",
            "value": [{
                "n": "鍏ㄩ儴",
                "v": "-1"
            }, {
                "n": "鑷劧",
                "v": "4"
            }, {
                "n": "缇庨",
                "v": "10"
            }, {
                "n": "绀句細",
                "v": "3"
            }, {
                "n": "浜烘枃",
                "v": "6"
            }, {
                "n": "鍘嗗彶",
                "v": "1"
            }, {
                "n": "鍐涗簨",
                "v": "2"
            }, {
                "n": "绉戞妧",
                "v": "8"
            }, {
                "n": "璐㈢粡",
                "v": "14"
            }, {
                "n": "鎺㈤櫓",
                "v": "15"
            }, {
                "n": "缃",
                "v": "7"
            }, {
                "n": "绔炴妧",
                "v": "12"
            }, {
                "n": "鏃呮父",
                "v": "11"
            }]
        }]
    },
    headers: {
        'User-Agent': 'PC_UA'
    },
    timeout: 5000,
    cate_exclude: '浼氬憳|娓告垙|鍏ㄩ儴',
    class_name: '绮鹃€�&鐢靛奖&鐢佃鍓�&缁艰壓&鍔ㄦ极&灏戝効&绾綍鐗�',
    class_url: 'choice&movie&tv&variety&cartoon&child&doco',
    limit: 20,
    play_parse: true,
    lazy: $js.toString(() => {
        try {
            let bata = JSON.parse(response);
            log(bata)
            if (bata.url.includes("http")) {
                input = {
                    header: {
                        'User-Agent': ""
                    },
                    parse: 0,
                    url: bata.url,
                    jx: 0,
                    danmaku: 'http://127.0.0.1:9978/proxy?do=danmu&site=js&url=' + input.split("?")[0]
                };
            } else {
                input = {
                    header: {
                        'User-Agent': ""
                    },
                    parse: 0,
                    url: input.split("?")[0],
                    jx: 1,
                    danmaku: 'http://127.0.0.1:9978/proxy?do=danmu&site=js&url=' + input.split("?")[0]
                };
            }
        } catch {
            input = {
                header: {
                    'User-Agent': ""
                },
                parse: 0,
                url: input.split("?")[0],
                jx: 1,
                danmaku: 'http://127.0.0.1:9978/proxy?do=danmu&site=js&url=' + input.split("?")[0]
            };
        }
    }),

    鎺ㄨ崘: '.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    涓€绾�: '.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    浜岀骇: $js.toString(() => {
        VOD = {};
        let d = [];
        let video_list = [];
        let video_lists = [];
        let QZOutputJson;
        let html = fetch(input, fetch_params);
        let sourceId = /get_playsource/.test(input) ? input.match(/id=(\d*?)&/)[1] : input.split("cid=")[1];
        let cid = sourceId;
        let detailUrl = "https://v.qq.com/detail/m/" + cid + ".html";
        try {
            let json = JSON.parse(html);
            VOD = {
                vod_url: input,
                vod_name: json.c.title,
                type_name: json.typ.join(","),
                vod_actor: json.nam.join(","),
                vod_year: json.c.year,
                vod_content: json.c.description,
                vod_remarks: json.rec,
                vod_pic: urljoin2(input, json.c.pic)
            }
        } catch (e) {}
        if (/get_playsource/.test(input)) {
            eval(html);
            let indexList = QZOutputJson.PlaylistItem.indexList;
            indexList.forEach(function(it) {
                let dataUrl = "https://s.video.qq.com/get_playsource?id=" + sourceId + "&plat=2&type=4&data_type=3&range=" + it + "&video_type=10&plname=qq&otype=json";
                eval(fetch(dataUrl, fetch_params));
                let vdata = QZOutputJson.PlaylistItem.videoPlayList;
                vdata.forEach(function(item) {
                    d.push({
                        title: item.title,
                        pic_url: item.pic,
                        desc: item.episode_number + "\t\t\t鎾斁閲忥細" + item.thirdLine,
                        url: item.playUrl
                    })
                });
                video_lists = video_lists.concat(vdata)
            })
        } else {
            let json = JSON.parse(html);
            video_lists = json.c.video_ids;
            let url = "https://v.qq.com/x/cover/" + sourceId + ".html";
            if (video_lists.length === 1) {
                let vid = video_lists[0];
                let o_url = "https://union.video.qq.com/fcgi-bin/data?otype=json&tid=1804&appid=20001238&appkey=6c03bbe9658448a4&union_platform=1&idlist=" + vid;
                let o_html = fetch(o_url, fetch_params);
                eval(o_html);
                if (QZOutputJson.results && QZOutputJson.results.length > 0) {
                    let it1 = QZOutputJson.results[0].fields;
                    url = "https://v.qq.com/x/cover/" + cid + "/" + vid + ".html";
                    d.push({
                        title: it1.title,
                        url: url
                    })
                } else {
                    url = "https://v.qq.com/x/cover/" + cid + "/" + vid + ".html";
                    d.push({
                        title: "姝ｇ墖鎾斁",
                        url: url
                    })
                }
            } else if (video_lists.length > 1) {
                for (let i = 0; i < video_lists.length; i += 30) {
                    video_list.push(video_lists.slice(i, i + 30))
                }
                video_list.forEach(function(it, idex) {
                    let o_url = "https://union.video.qq.com/fcgi-bin/data?otype=json&tid=1804&appid=20001238&appkey=6c03bbe9658448a4&union_platform=1&idlist=" + it.join(",");
                    let o_html = fetch(o_url, fetch_params);
                    eval(o_html);
                    QZOutputJson.results.forEach(function(it1) {
                        it1 = it1.fields;
                        let url = "https://v.qq.com/x/cover/" + cid + "/" + it1.vid + ".html";
                        d.push({
                            title: it1.title,
                            pic_url: it1.pic160x90.replace("/160", ""),
                            desc: it1.video_checkup_time,
                            url: url,
                            type: it1.category_map && it1.category_map.length > 1 ? it1.category_map[1] : ""
                        })
                    })
                })
            }
        }

        let playFrom = [];
        let playUrl = [];

        let ygKeywords = ["棰勫憡", "鑺辩诞", "鐗囪姳", "鐗硅緫", "骞曞悗", "閲囪", "鍒朵綔", "MV", "涓婚鏇�"];

        let yg = d.filter(function(it) {
            return it.type && ygKeywords.some(keyword => it.type.includes(keyword));
        });
        let zp = d.filter(function(it) {
            return !(it.type && ygKeywords.some(keyword => it.type.includes(keyword)));
        });

        if (zp.length > 0) {
            playFrom.push("姝ｇ墖");
            playUrl.push(zp.map(it => it.title + "$" + it.url).join("#"));
        }

        if (yg.length > 0) {
            let 棰勫憡 = yg.filter(it => it.type && it.type.includes("棰勫憡"));
            let 鑺辩诞鐗囪姳 = yg.filter(it => it.type && (it.type.includes("鑺辩诞") || it.type.includes("鐗囪姳")));
            let 鐗硅緫 = yg.filter(it => it.type && (it.type.includes("鐗硅緫") || it.type.includes("骞曞悗")));

            if (棰勫憡.length > 0) {
                playFrom.push("棰勫憡");
                playUrl.push(棰勫憡.map(it => it.title + "$" + it.url).join("#"));
            }
            if (鑺辩诞鐗囪姳.length > 0) {
                playFrom.push("鑺辩诞鐗囪姳");
                playUrl.push(鑺辩诞鐗囪姳.map(it => it.title + "$" + it.url).join("#"));
            }
            if (鐗硅緫.length > 0) {
                playFrom.push("鐗硅緫");
                playUrl.push(鐗硅緫.map(it => it.title + "$" + it.url).join("#"));
            }
        }

        VOD.vod_play_from = playFrom.join("$$$");
        VOD.vod_play_url = playUrl.join("$$$");
    }),
    鎼滅储: $js.toString(() => {
        let d = [],
            keyword = input.split("/")[3];
        let seenIds = new Set();

        function vodSearch(keyword, page = 0) {
            return request('https://pbaccess.video.qq.com/trpc.videosearch.mobile_search.MultiTerminalSearch/MbSearch?vplatform=2', {
                body: JSON.stringify({
                    version: "25042201",
                    clientType: 1,
                    filterValue: "",
                    uuid: "B1E50847-D25F-4C4B-BBA0-36F0093487F6",
                    retry: 0,
                    query: keyword,
                    pagenum: page,
                    isPrefetch: true,
                    pagesize: 30,
                    queryFrom: 0,
                    searchDatakey: "",
                    transInfo: "",
                    isneedQc: true,
                    preQid: "",
                    adClientInfo: "",
                    extraInfo: {
                        isNewMarkLabel: "1",
                        multi_terminal_pc: "1",
                        themeType: "1",
                        sugRelatedIds: "{}",
                        appVersion: ""
                    }
                }),
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.139 Safari/537.36',
                    'Content-Type': 'application/json',
                    'Origin': 'https://v.qq.com',
                    'Referer': 'https://v.qq.com/'
                },
                method: 'POST'
            });
        }

        const nonMainContentKeywords = [
            '锛�', '#', '鐗硅緫', '鈥�', '鍓緫', '鐗囪姳', '鐙', '涓撹', '绾韩',
            '鍒朵綔', '骞曞悗', '瀹ｄ紶', 'MV', '涓婚鏇�', '鎻掓洸', '褰╄泲',
            '绮惧僵', '闆嗛敠', '鐩樼偣', '鍥為【', '瑙ｈ', '璇勬祴', '鍙嶅簲', 'reaction'
        ];

        function isMainContent(title) {
            if (!title) return false;
            if (title.includes('<em>') || title.includes('</em>')) return false;
            return !nonMainContentKeywords.some(keyword => title.includes(keyword));
        }

        function isQQPlatform(playSites) {
            if (!playSites || !Array.isArray(playSites)) return true; // 濡傛灉娌℃湁骞冲彴淇℃伅锛岄粯璁や繚鐣�
            return playSites.some(site => site.enName && site.enName.toLowerCase() === 'qq');
        }

        try {
            let html = vodSearch(keyword, 0);
            let json = JSON.parse(html);

            function processItemList(itemList) {
                if (!itemList) return;

                itemList.forEach(it => {
                    if (it.doc && it.doc.id && it.videoInfo &&
                        isMainContent(it.videoInfo.title) &&
                        isQQPlatform(it.videoInfo.playSites)) {

                        const itemId = it.doc.id;
                        if (!seenIds.has(itemId)) {
                            seenIds.add(itemId);
                            d.push({
                                title: it.videoInfo.title,
                                img: it.videoInfo.imgUrl || "",
                                url: itemId,
                                desc: it.videoInfo.secondLine || ""
                            });
                        }
                    }
                });
            }

            if (json.data && json.data.normalList) {
                processItemList(json.data.normalList.itemList);
            }

            if (json.data && json.data.areaBoxList) {
                json.data.areaBoxList.forEach(box => {
                    processItemList(box.itemList);
                });
            }

        } catch (e) {
            log("鎼滅储鍑洪敊: " + e.message);
        }

        setResult(d);
    })

};
