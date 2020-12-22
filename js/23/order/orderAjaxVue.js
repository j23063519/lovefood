
Vue.component('user',{
    template:`
    <div>
        <li>{{user}}</li>
    </div>
    `,
    data(){
        return{
            user: null
        }
    },
    created(){
        this.user = $.cookie('account');
    }
})



const app = new Vue({
    el: '.containerOrder',
    data:{
        
            tableData:null,
            isShow:false, //綁定 v-show值
            paymentMethod:null,
            detail:null,
            code:'',
    },
    


    methods: {
        query(){
                const self = this;
                let orderNum = $("input[name='orderNum']").val();
                let memberNum = $("input[name='memberNum']").val();
                let phone = $("input[name='phone']").val();
                let memberAccount = $("input[name='memberAccount']").val();
                let pick1 = $("input[name='datePick1']").val();
                let pick2 = $("input[name='datePick2']").val();
                let orderStatus = $("input[name='orderStatus']:checked").val();

                $.ajax({
                    url:'../PHP/backStage/order/orderQuery.php', //檔案請注意路徑,是相對於引用檔並非相對於此檔案
                    data:{orderNum,memberNum,phone,memberAccount,pick1,pick2,orderStatus},
                    type:'POST',
                    dataType:'JSON',
                    traditional: true,
                    success: function(res){
                         console.log(res);
                         self.tableData = res;
                        for(i=0; i<self.tableData.length; i++){
                            // self.tableData[i].isShow = !isShow;
                            self.$set(self.tableData[i],'isShow',false) //更新self.tableData讓他有isShow
                        }
                    },
                    error: function(res){
                        console.log(res);
                    },
                });
            
        },
        ship(e){//出貨生成QR code
            const self = this;
            let orderNum = $(e.target).val();
            console.log(orderNum)
            $.ajax({

                url:'../PHP/backStage/order/test.php', //檔案請注意路徑,是相對於引用檔並非相對於此檔案
                data:{orderNum},
                type:'GET',
                dataType:'text',
                traditional: true,
                success: function(res){
                    //  console.log(res);
                     self.code = res;
                     console.log(self.code);
                },
                error: function(res){
                    console.log(res);
                },
            });
        }
    },
});