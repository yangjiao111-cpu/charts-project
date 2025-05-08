$(function () {
    //监控区域tab栏切换
    (function () {
        $(".monitor .tabs").on('click', "a", function () {
            $(this).addClass("active")
            $(this).siblings("a").removeClass("active")
            $(".monitor .content").eq($(this).index()).show().siblings(".content").hide()
        })
        $(".marquee-view .marquee").each(function () {
            const rows = $(this).children().clone()
            $(this).append(rows)
        })
    })();
    (function () {
        var myChart = echarts.init(document.querySelector(".point .pie"));
        let option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
            series: [
                {
                    name: '点位统计',
                    type: 'pie',
                    radius: ['10%', '70%'],
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    label: {
                        fontSize: 10
                    },
                    labelLine: {
                        length: 6,
                        length2: 8
                    },
                    itemStyle: {
                        borderRadius: 5
                    },
                    data: [
                        { value: 20, name: '云南' },
                        { value: 26, name: '北京' },
                        { value: 24, name: '山东' },
                        { value: 25, name: '河北' },
                        { value: 20, name: '江苏' },
                        { value: 25, name: '浙江' },
                        { value: 30, name: '四川' },
                        { value: 42, name: '湖北' }
                    ]
                }
            ]
        };
        myChart.setOption(option);
        //当浏览器缩放时，图表也等比例缩放
        window.addEventListener('resize', function () {
            myChart.resize()
        })
    })();
    //user柱状图
    (function () {
        let mychart = echarts.init(document.querySelector(".users .bar"))
        let item = {
            name: '',
            value: 1200,
            itemStyle: {
                color: '#254065'
            },
            emphasis: {
                itemStyle: {
                    color: '#254065'
                }
            },
            tooltip: {
                extraCssText: 'opacity:0'
            },
        }
        let option = {
            tooltip: {
                trigger: 'item',
            },
            color: new echarts.graphic.LinearGradient(
                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                0, 0, 0, 1,
                [
                    { offset: 0, color: '#00fffb' }, // 0 起始颜色
                    { offset: 1, color: '#0061ce' }  // 1 结束颜色
                ]
            ),
            grid: {
                left: '0',
                right: '3%',
                bottom: '3%',
                top: '4%',
                containLabel: true,
                show: true,
                borderColor: 'rgba(0, 240, 255, 0.3)'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                    axisTick: {
                        alignWithLabel: false,
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)',
                        }
                    },
                    axisLabel: {
                        fontSize: 10,
                        color: '#4c9bfd'
                    },
                }
            ],
            yAxis: [
                {
                    axisTick: {
                        alignWithLabel: false,
                        show: false
                    },
                    // type: 'value'
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)',
                        }
                    },
                    axisLabel: {
                        fontSize: 10,
                        color: '#4c9bfd'
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)',
                        }
                    }
                }
            ],
            series: [
                {
                    name: 'Direct',
                    type: 'bar',
                    barWidth: '60%',
                    data: [2100, 1900, 1700, 1560, 1400,
                        item,
                        item,
                        item,
                        900, 750, 600, 480, 240]
                }
            ]
        };
        mychart.setOption(option)
        window.addEventListener("resize", function () {
            mychart.resize()
        })
    })();
    (function () {
        let data = [
            { orders: '20,301,987', amount: '99834' },
            { orders: '301,987', amount: '9834' },
            { orders: '1,987', amount: '3834' },
            { orders: '987', amount: '834' }
        ]
        let i = 0, n
        $(".order a").on('click', function () {
            $(this).addClass("active").siblings("a").removeClass("active")
            const idex = $(this).index()
            i = idex
            $(".order h4").eq(0).html(data[idex].orders)
            $(".order h4").eq(1).html(data[idex].amount)
        })
        setinter()
        function setinter() {
            n = setInterval(function () {
                i++
                i %= $(".order a").length
                $(".order a").eq(i).click()
            }, 3000)
        }
        $(".order").on("mouseenter", () => {
            clearInterval(n)
        })
        $(".order").on("mouseleave", () => {
            setinter()
        })
    })()
        //销售区域
        ; (function () {
            let data = {
                year: [
                    [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                    [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
                ],
                quarter: [
                    [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
                    [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
                ],
                month: [
                    [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
                    [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
                ],
                week: [
                    [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
                    [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
                ]
            }
            let myChart = echarts.init(document.querySelector(".sales .line"))
            let option = {
                tooltip: {
                    trigger: 'axis'
                },
                color: ['#00f2f1', '#ed3f35'],
                legend: {
                    textStyle: {
                        color: '#4c9bfd' // 图例文字颜色
                    },
                    right: '10%' // 距离右边10%
                },
                grid: {
                    top: '20%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    show: true,
                    borderColor: '#012f4a',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    axisTick: {
                        show: false // 去除刻度线
                    },
                    axisLabel: {
                        color: '#4c9bfd' // 文本颜色
                    },
                    axisLine: {
                        show: false // 去除轴线
                    },
                    boundaryGap: false  // 去除轴内间距
                },
                yAxis: {
                    type: 'value',
                    axisTick: {
                        show: false  // 去除刻度
                    },
                    axisLabel: {
                        color: '#4c9bfd' // 文字颜色
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#012f4a' // 分割线颜色
                        }
                    }
                },
                series: [{
                    name: '预期销售额',
                    data: data.year[0],
                    type: 'line',
                    smooth: true
                }, {
                    name: '实际销售额',
                    data: data.year[1],
                    type: 'line',
                    smooth: true
                }
                ]
            }
            myChart.setOption(option)
            window.addEventListener('resize', () => {
                myChart.resize()
            })
            //定时器
            let arr = ['year', 'quarter', 'month', 'week']
            let i = 0, n
            function setinter() {
                n = setInterval(() => {
                    i++
                    i %= $(".caption a").length
                    $(".caption a").eq(i).click()
                }, 3000)
            }
            setinter()
            $(".caption a").on("click", function () {
                $(this).addClass("active").siblings("a").removeClass("active")
                const idex = $(this).index()
                option.series[0].data = data[arr[idex - 1]][0]
                option.series[1].data = data[arr[idex - 1]][1]
                myChart.setOption(option)
                i = idex - 1
            })
            $(".sales").on("mouseenter", () => {
                clearInterval(n)
            })
            $(".sales").on("mouseleave", () => {
                setinter()
            })
        })()
        ; (function () {
            let myChart = echarts.init(document.querySelector(".channel .radar"))
            const lineStyle = {
                width: 1,
                opacity: 0.5
            };
            let option = {
                radar: {
                    indicator: [
                        { name: '机场', max: 100 },
                        { name: '商场', max: 100 },
                        { name: '火车站', max: 100 },
                        { name: '汽车站', max: 100 },
                        { name: '地铁', max: 100 }
                    ],
                    radius: '65%',
                    shape: 'circle',
                    splitNumber: 4,
                    center: ['50%', '50%'],
                    axisName: {
                        color: 'rgb(238, 197, 102)'
                    },
                    splitLine: {
                        lineStyle: {
                            splitLine: {
                                lineStyle: {
                                    color: 'rgba(255, 255, 255, 0.5)',
                                    // width: 2,
                                    // type: 'dashed'
                                }
                            },
                        }
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.5)'
                            // width: 1,
                            // type: 'solid'
                        }
                    },
                    name: {
                        // 修饰雷达图文本颜色
                        textStyle: {
                            color: '#4c9bfd'
                        }
                    },
                    // 线条样式
                    lineStyle: {
                        normal: {
                            color: '#fff',
                            // width: 1
                        }
                    },
                    splitArea: {
                        show: false
                    },

                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(238, 197, 102, 0.5)'
                    }
                },
                series: [
                    {
                        name: 'Beijing',
                        type: 'radar',
                        lineStyle: lineStyle,
                        data: [[90, 19, 56, 11, 34]],
                        symbol: 'none',
                        itemStyle: {
                            color: '#F9713C'
                        },
                        areaStyle: {
                            color: 'rgba(238, 197, 102, 0.6)',
                        },
                        // symbol 标记的样式(拐点），还可以取值'rect' 方块 ,'arrow' 三角等
                        symbol: 'circle',
                        // 拐点的大小  
                        symbolSize: 5,
                        // 小圆点（拐点）设置为白色
                        itemStyle: {
                            color: '#fff'
                        },
                        // 在圆点上显示相关数据
                        label: {
                            show: true,
                            color: '#fff',
                            fontSize: 10
                        },
                    },
                ],
                tooltip: {
                    show: true,
                    position: ['60%', '10%'],
                }
            };
            myChart.setOption(option)
            window.addEventListener("resize", () => myChart.resize())
        })()
        ; (function () {
            let myChart = echarts.init(document.querySelector(".gauge"))
            option = {
                series: [
                    {
                        name: '销售进度',
                        type: 'pie',
                        radius: ['130%', '150%'],
                        center: ['48%', '80%'],
                        labelLine: {
                            show: false
                        },
                        hoverOffset: 0,
                        data: [
                            {
                                value: 75,
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(
                                        // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                                        0,
                                        0,
                                        0,
                                        1,
                                        [
                                            { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                            { offset: 1, color: "#005fc1" } // 1 结束颜色
                                        ]
                                    )
                                }
                            },
                            { value: 25, itemStyle: { color: '#12274d' } },
                            { value: 100, itemStyle: { color: 'transparent' } }
                        ],
                        startAngle: 180,
                    }
                ]
            };
            myChart.setOption(option)
            window.addEventListener('resize', function () {
                myChart.resize()
            })
        })()
        //top模块
        ; (function () {
            var hotData = [
                {
                    city: '北京',  // 城市
                    sales: '25, 179',  // 销售额
                    flag: true, //  上升还是下降
                    brands: [   //  品牌种类数据
                        { name: '可爱多', num: '9,086', flag: true },
                        { name: '娃哈哈', num: '8,341', flag: true },
                        { name: '喜之郎', num: '7,407', flag: false },
                        { name: '八喜', num: '6,080', flag: false },
                        { name: '小洋人', num: '6,724', flag: false },
                        { name: '好多鱼', num: '2,170', flag: true },
                    ]
                },
                {
                    city: '河北',
                    sales: '23,252',
                    flag: false,
                    brands: [
                        { name: '可爱多', num: '3,457', flag: false },
                        { name: '娃哈哈', num: '2,124', flag: true },
                        { name: '喜之郎', num: '8,907', flag: false },
                        { name: '八喜', num: '6,080', flag: true },
                        { name: '小洋人', num: '1,724', flag: false },
                        { name: '好多鱼', num: '1,170', flag: false },
                    ]
                },
                {
                    city: '上海',
                    sales: '20,760',
                    flag: true,
                    brands: [
                        { name: '可爱多', num: '2,345', flag: true },
                        { name: '娃哈哈', num: '7,109', flag: true },
                        { name: '喜之郎', num: '3,701', flag: false },
                        { name: '八喜', num: '6,080', flag: false },
                        { name: '小洋人', num: '2,724', flag: false },
                        { name: '好多鱼', num: '2,998', flag: true },
                    ]
                },
                {
                    city: '江苏',
                    sales: '23,252',
                    flag: false,
                    brands: [
                        { name: '可爱多', num: '2,156', flag: false },
                        { name: '娃哈哈', num: '2,456', flag: true },
                        { name: '喜之郎', num: '9,737', flag: true },
                        { name: '八喜', num: '2,080', flag: true },
                        { name: '小洋人', num: '8,724', flag: true },
                        { name: '好多鱼', num: '1,770', flag: false },
                    ]
                },
                {
                    city: '山东',
                    sales: '20,760',
                    flag: true,
                    brands: [
                        { name: '可爱多', num: '9,567', flag: true },
                        { name: '娃哈哈', num: '2,345', flag: false },
                        { name: '喜之郎', num: '9,037', flag: false },
                        { name: '八喜', num: '1,080', flag: true },
                        { name: '小洋人', num: '4,724', flag: false },
                        { name: '好多鱼', num: '9,999', flag: true },
                    ]
                }
            ]
            let sup = ""
            $(hotData).each(function (i, e) {
                let flag
                if (this.flag) flag = "icon-up"
                else flag = "icon-down"
                sup += `
                    <li>
                        <span>${this.city}</span>
                        <span>${this.sales}<s class="${flag}"></s></span>
                    </li>
                `
            })
            $(".top .sup").html(sup)
            function subRender(index) {
                let sub = ""
                $(".top .sup li").removeClass("active").eq(index).addClass("active")
                $(hotData[index].brands).each(function () {
                    let flag
                    if (this.flag) flag = "icon-up"
                    else flag = "icon-down"
                    sub += `
                <li><span>${this.name}</span><span>${this.num} <s class="${flag}"></s></span></li>
            `
                })
                $(".top .sub").html(sub)
            }
            let timerId, index = 0
            subRender(index)
            function setInter() {
                timerId = setInterval(function () {
                    index++
                    index %= hotData.length
                    subRender(index)
                }, 1000)
            }
            $(".top .sup").on("mouseenter", "li", function () {
                clearInterval(timerId)
                subRender($(this).index())
                index = $(this).index()
            })
            $(".top .sup").on("mouseleave", "li", function () {
                setInter(index)
            })
            setInter()
        })()
})