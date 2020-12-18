const app = new Vue({
    el: '.containerFinance',
    data: {
        loginAccount: null,
        financeTotalSelling: 0,
        financeTotalOrder: 0,
        donationDetals: null,
        donationLog: null,
        totalDonation: null,
        showTab: true,
        showDetails: true
    },

    mounted() {

        // const self = this;
        // let DONATION_ID = $("input[name='DONATION_ID']").val();
        // let name = $("input[name='name']").val();
        // let email = $("input[name='email']").val();
        // let pID_tID = $("input[name='pID_tID']").val();
        // let dateStart = $("input[name='dateStart']").val();
        // let dateEnd = $("input[name='dateEnd']").val();

        // $.ajax({
        //     url: '../PHP/backStage/finance/donationQuery.php',
        //     type: 'POST',
        //     data: { DONATION_ID, name, email, pID_tID, dateStart, dateEnd },
        //     success: function (res) {
        //         self.donationLog = res;

        //         for (let i = 0; i < res.length; i++) {
        //             let donationPlan = res[i].DONATION_PLAN;

        //             if (donationPlan == 1) {
        //                 res[i].DONATION_PLAN = "單次扣款";
        //             } else if (donationPlan == 2) {
        //                 res[i].DONATION_PLAN = "定期捐款";
        //             } else {
        //                 res[i].DONATION_PLAN = "資料錯誤";
        //             }

        //         }

        //         var totalDonation = 0;

        //         for (let i = 0; i < res.length; i++) {
        //             let singleDonation = parseInt(res[i].AMOUNT);
        //             totalDonation = totalDonation + singleDonation;
        //         }

        //         self.totalDonation = totalDonation;

        //         console.log(self.totalDonation);
        //         console.log(res.donationDetals);
        //         console.log(res);
        //     },
        //     error: function (res) {
        //         console.log("回傳失敗！");
        //         console.log(res.responseText);
        //     },
        //     dataType: "JSON",
        // });

        const self = this;

        $.ajax({
            url: '../PHP/Frontend/sessionR.php',
            success: function (res) {
                $.cookie('account', `${res}`, 3);
                self.loginAccount = res;

                console.log(self.loginAccount);
            },
            dataType: "text",
            error: function (res) {
                console.log(res);
            }
        })

    },

    methods: {

        queryFinance() {

            const self = this;

            let dateStart = $("input[name='dateStart']").val();
            let dateEnd = $("input[name='dateEnd']").val();
            let supplierId = $("input[name='supplierId']").val();

            $.ajax({
                url: '../PHP/backStage/finance/financeQuery.php',
                type: 'POST',
                data: { dateStart, dateEnd, supplierId },
                dataType: 'JSON',
                success: function (res) {
                    // console.log(res);

                    var rTS = res;
                    var selling = 0;

                    console.log(rTS);

                    for (let i = 0; i < rTS.length; i++) {
                        selling = selling + (rTS[0].ORDER_DETAIL_QUANTITY * rTS[0].PRODUCT_SELLING_PRICE);
                    }

                    self.financeTotalSelling = selling;

                    console.log(self.financeTotalSelling);

                    // console.log(rTS);
                    // console.log(rTS[0].ORDER_DETAIL_QUANTITY * rTS[0].PRODUCT_SELLING_PRICE);

                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res.responseText);
                }
            });

        },

        query() {
            this.showDetails = false;

            const self = this;
            let DONATION_ID = $("input[name='DONATION_ID']").val();
            let name = $("input[name='name']").val();
            let email = $("input[name='email']").val();
            let pID_tID = $("input[name='pID_tID']").val();
            let dateStart = $("input[name='dateStart']").val();
            let dateEnd = $("input[name='dateEnd']").val();

            $.ajax({
                url: '../PHP/backStage/finance/donationQuery.php',
                type: 'POST',
                data: { DONATION_ID, name, email, pID_tID, dateStart, dateEnd },
                success: function (res) {

                    self.donationDetals = res.donationDetals;
                    self.donationLog = res;

                    for (let i = 0; i < res.length; i++) {
                        let donationPlan = res[i].DONATION_PLAN;

                        if (donationPlan == 1) {
                            res[i].DONATION_PLAN = "單次扣款";
                        } else if (donationPlan == 2) {
                            res[i].DONATION_PLAN = "定期捐款";
                        } else {
                            res[i].DONATION_PLAN = "資料錯誤";
                        }

                    }

                    var totalDonation = 0;

                    for (let i = 0; i < res.length; i++) {
                        let singleDonation = parseInt(res[i].AMOUNT);
                        totalDonation = totalDonation + singleDonation;
                    }

                    self.totalDonation = totalDonation;

                    console.log(self.totalDonation);
                    console.log(res);

                    let queryDateStart = document.querySelector("#queryDateStart");
                    let showDateStart = document.querySelector("#showDateStart");
                    let queryDateEnd = document.querySelector("#queryDateEnd");
                    let showDateEnd = document.querySelector("#showDateEnd");

                    showDateStart.innerHTML = queryDateStart.value;
                    showDateEnd.innerHTML = queryDateEnd.value;

                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res.responseText);
                },
                dataType: "JSON",
            });
        },

        showContent(e) {
            this.showDetails = false;

            const self = this;
            let DONATION_ID = $(e.target).data('id');

            $.ajax({
                url: '../PHP/backStage/finance/donationDetails.php',
                type: 'POST',
                data: { DONATION_ID },
                dataType: "JSON",
                success: function (res) {
                    self.donationDetals = res;

                    for (let i = 0; i < res.length; i++) {

                        if (res[i].DONATION_ID = DONATION_ID) {
                            self.donationDetals = [];
                            self.donationDetals.push(res[i]);
                        }

                        let sDD = self.donationDetals;

                        if (sDD[i].DONATION_GENDER == 1) {
                            self.donationDetals[i].DONATION_GENDER = "男";
                        } else if (sDD[i].DONATION_GENDER == 2) {
                            self.donationDetals[i].DONATION_GENDER = "女";
                        } else {
                            self.donationDetals[i].DONATION_GENDER = "其他";
                        }

                        if (sDD[i].DONATION_PLAN == 1) {
                            self.donationDetals[i].DONATION_PLAN = "單次扣款";
                        } else if (sDD[i].DONATION_PLAN == 2) {
                            self.donationDetals[i].DONATION_PLAN = "定期捐款";
                        } else {
                            self.donationDetals[i].DONATION_PLAN = "資料錯誤";
                        }

                        if (sDD[i].DONATION_METHOD == 1) {
                            self.donationDetals[i].DONATION_METHOD = "信用卡";
                        }

                        if (sDD[i].DONATION_DELIVERY_METHOD == 1) {
                            self.donationDetals[i].DONATION_DELIVERY_METHOD = "免寄收據";
                        } else if (sDD[i].DELIVERY_METHOD == 2) {
                            self.donationDetals[i].DONATION_DELIVERY_METHOD = "每次寄發";
                        } else {
                            self.donationDetals[i].DONATION_DELIVERY_METHOD = "資料錯誤";
                        }

                        Object.keys(self.donationDetals[0]).forEach(function (key) {
                            if (self.donationDetals[0][key] === null) {
                                self.donationDetals[0][key] = "未填寫";
                            }
                        });

                    }

                    console.log(res);
                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res);
                },

            });

        },

        updateDonationDetails() {

            const self = this;

            let name_ED = $("input[name='name_ED']").val();
            let nationality_ED = $("input[name='nationality_ED']").val();
            let pID_tID_ED = $("input[name='pID_tID_ED']").val();
            let birthday_ED = $("input[name='birthday_ED']").val();
            let address_ED = $("input[name='address_ED']").val();
            let email_ED = $("input[name='email_ED']").val();
            let gender_ED = $("input[name='gender_ED']").val();
            let remarks_ED = $("input[name='remarks_ED']").val();
            let receiptTitle_ED = $("input[name='receiptTitle_ED']").val();
            let receipt_pID_tID_ED = $("input[name='receipt_pID_tID_ED']").val();
            let deliveryMethod_ED = $("input[name='deliveryMethod_ED']").val();
            let selectedId_ED = $("input[name='selectedId_ED']").val();

            if (gender_ED == '男') {
                gender_ED = 1;
            } else if (gender_ED == '女') {
                gender_ED = 2;
            } else {
                gender_ED = 3;
            }

            if (deliveryMethod_ED == '免寄收據') {
                deliveryMethod_ED = 1;
            } else {
                deliveryMethod_ED = 2;
            }

            $.ajax({
                url: '../PHP/backStage/finance/donationUpdate.php',
                type: 'POST',
                data: { name_ED, nationality_ED, pID_tID_ED, birthday_ED, address_ED, email_ED, gender_ED, remarks_ED, receiptTitle_ED, receipt_pID_tID_ED, deliveryMethod_ED, selectedId_ED },
                success: function (res) {
                    console.log(res);
                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res.responseText);
                },
                dataType: "JSON",
            });

        },

        backToPreviousPage() {
            this.showDetails = true;
        }


    },


});