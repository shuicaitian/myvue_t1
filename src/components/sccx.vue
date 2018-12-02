<template>
    <div class="my-split bg-warning" ref="mysplit" style="height:100px">
        <Split v-if=isLandscape v-model="split1" mode="horizontal">
            <div slot="left" class="DGraph bg-success demo-split-pane">
                <h1 v-if=true>{{ msg }}</h1>
                <yjqx ref="Cyjqx" v-on:cdichange_event="curDataIndexChanged"></yjqx>
            </div>
            <div slot="right" class="DTable bg-danger demo-split-pane">
                <h1>Shengchan biaoge</h1>
                <yjrdbg ref="Cyjrdbg"></yjrdbg>
            </div>
        </Split>
        <Split v-else v-model="split1" mode="vertical">
            <div slot="top" class="DGraph bg-success demo-split-pane">
                <h1>{{ msg }}{{curDataIndex}}</h1>
                <yjqx ref="Cyjqx" v-on:cdichange_event="curDataIndexChanged"></yjqx>
            </div>
            <div slot="bottom" class="DTable bg-danger demo-split-pane">
                <h1>Shengchan Biaoge{{msg}}</h1>
                <yjrdbg ref="Cyjrdbg"></yjrdbg>
            </div>
        </Split>
        <!--p>{{ds}}</p-->
    </div>
</template>

<script>
    import yjqx from '@/components/yjqx'
    import yjrdbg from '@/components/yjrdbg'
    
    export default {
        name: 'sccx',
        components: {
            yjqx,
            yjrdbg
        },
        data() {
            return {
                msg: '生产 cha xun!',
                //dbPortUrl:"http://localhost:8080/www/php/daa01port.php",
                dbPortUrl:"",//"http://192.168.10.132/php/daa01port.php",
                isLandscape: false,
                split1: 0.6,
                ds: [],
                dsfld: [],
                curDataIndex: 0
            }
        },
        mounted() {
            let sf = this;
            let curHeight = window.screen.height - 50;
            window.addEventListener(
                "onorientationchange" in window ? "orientationchange" : "resize",
                function() {
                    if (window.orientation === 90 || window.orientation === -90) {
                        sf.isLandscape = true;
                        $(".my-split").css("width", window.screen.width + "px");
    
                        $(".my-split").css("height", curHeight + "px");
                        sf.split1 = 0.7;
                        $(".DGraph").css("width", "100%");
                        $(".DGraph").css("height", curHeight + "px");
                        sf.$refs.Cyjqx.drawLine();
                        sf.msg = '-=-=-=' + sf.isLandscape;
                        sf.msg += $(".my-split").css("height") + "___" + curHeight;
                    } else {
                        sf.isLandscape = false;
                        $(".my-split").css("width", window.screen.width + "px");
    
                        $(".my-split").css("height", curHeight + "px");
                        sf.split1 = 0.5;
                        $(".DGraph").css("width", window.screen.width + "px");
                        $(".DGraph").css("height", sf.split1 * curHeight + "px");
                        sf.$refs.Cyjqx.drawLine();
                        sf.msg = '||||||' + sf.isLandscape + $(".my-split").css("height") + "__" + sf.split1 * curHeight;
                    };
    
                });
            $(".my-split").css("height", window.screen.height - 50 + "px");
            $(".my-split").css("width", window.screen.width + "px");
            $(".DGraph").css("height", sf.split1 * curHeight + "px");
            //set dbportHostIP
            //this.msg=DBPortURL.baseURL;
            this.dbPortUrl=DBPortURL.baseURL;
            //axios
            this.axios.get(this.dbPortUrl).then(body => {
                //this.axios.get("http://localhost:3001/123").then(body=>{
                //this.axios.post("http://api.komavideo.com/news/list").then(body=>{
                this.ds = body.data;
                this.$refs.Cyjrdbg.data1 = this.ds;
                this.json2arr(this.ds, this.$refs.Cyjqx.chartopt.dataset.source);
                this.$refs.Cyjqx.drawLine();
            });
        }, //---end mounted
        methods: {
            //json对象转二维数组
            //同时设置字段列表。
            json2arr: function(jn, ar) {
                ar.splice(0, ar.length);
                this.dsfld.splice(0, this.dsfld.length); //fields ini
                for (var k in jn[0]) {
                    this.dsfld.push(k);
                }
                ar.push(this.dsfld);
                for (var i = 0; i < jn.length; i++) {
                    var arrrow = [];
                    for (var j in jn[i]) {
                        arrrow.push(jn[i][j]);
                    }
                    ar.push(arrrow);
                }
                return ar;
            },
            curDataIndexChanged: function(pval) {
                this.curDataIndex = pval.result;
                this.$refs.Cyjrdbg.scroll2index(this.curDataIndex);
                //alert(this.curDataIndex);
            }
        }, //---end methods
        watch: {
            curDataIndex: 'curDataIndexChanged'
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    a {
        color: #42b983;
    }
    
    .my-split {
        border: 5px solid #dcdee2;
        padding: 8px;
        margin: auto;
    }
    
    .demo-split-pane {
        padding: 10px;
    }
</style>
