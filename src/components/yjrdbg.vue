<style>
    .ivu-table .demo-table-info-row td {
        background-color: #2db7f5;
        color: #fff;
    }
    
    .ivu-table .demo-table-error-row td {
        background-color: #ff6600;
        color: #fff;
    }
</style>

<template>
    <div>
        <Table width="100%" border highlight-row ref="table" :row-class-name="rowClassName" :columns="columns1" :data="data1" :height="tableHeight" @on-row-click="handleRowClick"></Table>
    
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableHeight: 250,
                columns1: [{
                        title: 'sn',
                        type: 'index',
                        width: 30,
                        align: 'center',
                        fixed: 'left'
                    },
                    {
                        title: '日期',
                        key: 'rq',
                        width: 80,
                        fixed: 'left'
                    },
                    {
                        title: '日产液',
                        key: 'rye',
                        width: 80
                    },
                    {
                        title: '日产油',
                        key: 'ry',
                        width: 80
                    },
                    {
                        title: 'hs',
                        key: 'hs',
                        width: 80
                    },
                    {
                        title: 'bbz',
                        key: 'bz',
                        width: 80,
                        fixed: 'right'
                    }
                ],
                data1: []
            }
        },
        mounted() {
    
            this.myscroll();
            // 设置表格高度 
            //this.tableHeight=300;
        },
        methods: {
            handleRowClick(row, index) {
                //alert(index);
                //console.log(currentRow)
                //console.log(oldCurrentRow)
            },
            scroll2index(index) {
                //before set classname in rowClassName
                document.getElementsByClassName('rowindex' + index)[0].scrollIntoView();
                //clear cur style
                $(".demo-table-info-row").removeClass("demo-table-info-row");
                $(".rowindex" + index).addClass("demo-table-info-row");
            },
            myscroll() {
                var mytable = document.getElementsByClassName('ivu-table-body')[0];
                setTimeout(() => { //这里要延迟下滚动
                    //mytable.scroll(0, 2420*3/8);
                    //document.getElementsByClassName('demo-table-error-row')[0].scrollIntoView();
                    this.scroll2index(5);
                }, 400);
    
                return;
            },
            rowClassName(row, index) {
                let rcn = '';
                rcn = 'rowindex' + index;
                if (index === 1) {
                    rcn += ' demo-table-info-row';
                } else if (index === 3) {
                    rcn += ' demo-table-error-row';
                }
                return rcn;
            }
        }
    }
</script>
