<template>
    <div>
        <h1>{{cdi}}</h1>
        <button v-on:click="mytest()">Say Hi</button>
        <div id="myChart" style="width:100%;height:100%" class="my-ct bg-warning">
            <h1>aaaaa</h1>
        </div>
    </div>
</template>

<script>
    // 引入基本模板
    let echarts = require('echarts/lib/echarts')
    // 引入柱状图组件
    require('echarts/lib/chart/bar')
    require('echarts/lib/chart/line')
    
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    require('echarts/lib/component/grid')
    require('echarts/lib/component/legend')
    require('echarts/lib/component/dataset')
    
    export default {
        name: 'yjqx',
        data() {
            return {
                msg: 'oil well graph.',
                cdi: 0,
                mChart: {},
                chartopt: {
                    dataset: {
                        source: []
                    },
                    grid: [{
                            x: '19%',
                            y: '1%',
                            width: '80%',
                            height: '30%'
                        },
                        {
                            x: '19%',
                            y: '33%',
                            width: '80%',
                            height: '23%'
                        },
                        {
                            x: '19%',
                            y: '60%',
                            width: '80%',
                            height: '23%'
                        }
                    ],
                    xAxis: [{
                            type: 'category',
                            gridIndex: 0,
                            axisPointer: {
                                show: true,
                                label: {
                                    show: false
                                }
                            }
                        },
                        {
                            type: 'category',
                            show: false,
                            gridIndex: 1,
                            axisPointer: {
                                show: true,
                                label: {
                                    show: false
                                }
                            }
                        },
                        {
                            type: 'category',
                            gridIndex: 2,
                            axisPointer: {
                                id: 'iiid',
                                show: true,
                                value: 3,
                                handle: {
                                    show: true,
                                    margin: 30,
                                    color: '#B80C00'
                                }
                            }
                        }
                    ],
                    yAxis: [{
                            gridIndex: 0
                        },
                        {
                            gridIndex: 1
                        },
                        {
                            gridIndex: 2,
                            name: 'hs(%)',
    
                            nameLocation: 'middle',
                            nameTextStyle: {
                                color: "blue",
                                fontSize: 16,
                                padding: 10
                            },
                            nameRotate: 90,
                            min: 'dataMin'
                        }
                    ],
                    series: [{
                            type: 'line',
                            xAxisIndex: 0,
                            yAxisIndex: 0
                        },
                        {
                            type: 'line',
                            xAxisIndex: 1,
                            yAxisIndex: 1
                        },
                        {
                            type: 'line',
                            xAxisIndex: 2,
                            yAxisIndex: 2,
                            encode: {
                                x: 'rq',
                                y: 'hs'
                            }
                        }
                    ],
                    tooltip: {
                        trigger: 'axis',
    
                        axisPointer: {
                            type: 'cross',
                            snap: true,
                            crossStyle: {
                                color: '#999'
                            }
                        },
                        formatter: function(params, ticket, callback) {
                            /* console.log(params)
                             var res = 'Function formatter : <br/>' + params[0].name;
                             for (var i = 0, l = params.length; i < l; i++) {
                                 res += '<br/>' + params[i].seriesName + ' : ' + params[i].value+'吨';
                             }
                             setTimeout(function (){
                                 // 仅为了模拟异步回调
                                 callback(ticket, res);
                             }, 1000)
                             return 'loading';
                             alert(params[0].dataIndex);
                             */
                            //this.cdi=params[0].dataIndex;
                            var res = ""; //=Object.keys(params);
                            res += '<br/>' + params[0].seriesName + ':' + params[0].value[1];
                            // 仅为了模拟异步回调
                            //callback(ticket, res);
    
                            window.cdichange(params[0].dataIndex);
                            return '';
                            //return res;
                        }
                        //formatter: "Template formatter: <br/>{b}<br/>{a}:{c}<br/>{a1}:{c1}"
                    },
                    axisPointer: {
                        link: {
                            xAxisIndex: 'all'
                        },
                        label: {
                            backgroundColor: '#777'
                        }
                    },
                } //---end chartopt
            } //---end return
        }, //---end data
        mounted() {
            let curHeight = window.screen.height - 50;
            $("#myChart").css("height", this.$parent.split1 * curHeight + "px");
            this.drawLine();
            window['cdichange'] = val => {
                this.cdichange(val);
            }
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                this.mChart = echarts.init(document.getElementById('myChart'));
                let option = this.chartopt;
    
                //
                // 绘制图表
                if (option && typeof option === "object") {
                    this.mChart.setOption(option, true);
                };
    
                // alert(mChart.toString());
                this.mChart.resize();
            },
            mytest() {
                //let a=myChart.getOption();
                //alert(JSON.stringify(a));
                // alert("hihihi")
    
    
                /* this.chartopt.xAxis[2].axisPointer.value+=1;
        
            this.mChart.setOption(this.chartopt);*/
    
                this.mChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: 9
                });
            },
            cdichange(pval) {
                this.cdi = pval;
                this.$emit('cdichange_event', {
                    result: pval
                });
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
