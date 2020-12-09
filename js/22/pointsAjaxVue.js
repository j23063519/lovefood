const app = new Vue({
    el: '.containerPoints',
    data() {
        return {
            tableData01: null,
            tableData02: null,
            tableData03: null,
            tableData04: null
        }
    },

    beforeMount() {
        const self = this;
        let number = $("input[name='number']").val()
        let account = $("input[name='account']").val()
        let name = $("input[name='name']").val()
        let phone = $("input[name='phone']").val()
        let pick01 = $("input[name='datePick01']").val()
        let pick02 = $("input[name='datePick02']").val()

        $.ajax({
            url: '../PHP/backStage/points/pointsQuery.php',
            type: 'POST',
            data: { number, account, name, phone, pick01, pick02 },
            success: function (res) {
                self.tableData = res;
            },
            error: function (res) {
                console.log(res);
            },
            dataType: "JSON",
        });
    },

    methods: {
        query() {
            const self = this;
            let number = $("input[name='number']").val()
            let account = $("input[name='account']").val()
            let name = $("input[name='name']").val()
            let phone = $("input[name='phone']").val()
            let pick01 = $("input[name='datePick01']").val()
            let pick02 = $("input[name='datePick02']").val()

            $.ajax({
                url: '../PHP/backStage/points/pointsQuery.php',
                type: 'POST',
                data: { number, account, name, phone, pick01, pick02 },
                success: function (res) {
                    self.tableData01 = res.pointsIssance;
                    self.tableData02 = res.pointsDiscount;
                    self.tableData03 = res.pointsOfMember;
                    self.tableData04 = res;

                    var rMB = res.pointsOfMember;
                    var rPI = res.pointsIssance;
                    var rPD = res.pointsDiscount;

                    for (let i = 0; i < rPI.length; i++) {
                        for (let j = 0; j < rMB.length; j++) {
                            if (rMB[j].MEMBER_ID == rPI[i].MEMBER_ID_for_PI) {
                                rMB[j].TOTAL_ISSANCE = rPI[i].TOTAL_ISSANCE;
                            }
                        }
                    }

                    for (let i = 0; i < rPD.length; i++) {
                        for (let j = 0; j < rMB.length; j++) {
                            if (rMB[j].MEMBER_ID == rPD[i].MEMBER_ID_for_OD) {
                                rMB[j].TOTAL_DISCOUNT = rPD[i].TOTAL_DISCOUNT;
                            }
                        }
                    }

                    console.log(rMB);
                    console.log(rPI);
                    console.log(rPD);
                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res);
                },
                dataType: "JSON",
            });
        }
    }
});
