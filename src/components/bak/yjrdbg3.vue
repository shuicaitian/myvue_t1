<style>
    .ivu-table .demo-table-info-row td{
        background-color: #2db7f5;
        color: #fff;
        max-height:12px;
    }
    .ivu-table .demo-table-error-row td{
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table td.demo-table-info-column{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-name {
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-age {
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-address {
        background-color: #187;
        color: #fff;
    }
</style>
<template>
    <div>
    <p>Custom row styles:</p>
    <Table width="100%" border highlight-row ref="table" :row-class-name="rowClassName" :columns="columns1" :data="data1" :height="tableHeight"></Table>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                tableHeight: 250,
                columns1: [
                    {
                        title:'sn',
                        type:'index',
                        width:30,
                        align:'center',
                        fixed:'left'
                    },
                    {
                        title: 'Name',
                        key: 'name',
                        width:80,
                        fixed:'left'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width:100,
                        fixed:'right'
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width:200
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Joe Black',
                        age: 309,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                                        {
                        name: 'Joe Black',
                        age: 530,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                                        {
                        name: 'Joe Black',
                        age: 320,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                                        {
                        name: 'Joe Black',
                        age: 35,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        mounted() {
            this.myscroll();
            // 设置表格高度 
            this.tableHeight=300;
        },
        methods: {
            myscroll(){
                var mytable=document.getElementsByClassName('ivu-table-body')[0];
                setTimeout(() => {//这里要延迟下滚动
                //mytable.scroll(0, 2420*3/8);
                document.getElementsByClassName('demo-table-error-row')[0].scrollIntoView();
                }, 400);

                return; 
            },
            rowClassName (row, index) {
                if (index === 1) {
                    return 'demo-table-info-row';
                } else if (index === 3) {
                    return 'demo-table-error-row';
                }
                return '';
            }
        }
    }
</script>
