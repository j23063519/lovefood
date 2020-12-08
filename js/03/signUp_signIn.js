
// main
Vue.component('member', {
  data() {
    return {
      // 註冊信箱 placeholder
      signInemail: '信箱',

      // 註冊信箱內容 v-model(html)
      emailSend: '',

      // input檢查 報錯顯示紅框
      redbordercolorsignInemail: '',
      redbordercolorsignInpass: '',
      redbordercolorsignInpassconf: '',
      redbordercolorsendcheck: '',

      // 註冊密碼 placeholder
      signInpass: '密碼',

      // 註冊密碼內容 v-model(html)
      signInpasssend: '',

      // 註冊密碼確認 placeholder
      signInpassconf: '確認密碼',

      // 註冊密碼確認 v-model(html)
      signInpassconfsend: '',

      // 註冊驗證發送碼 placeholder
      signInsendcheckcode: '驗證碼確認',

      // 註冊驗證發送碼 v-model(html)
      signInsendcheckcodesend: '',

      // 綁定input:type=password or text 密碼
      passtotex: 'password',

      // 綁定input:type=password or text 密碼確認
      passtotexconfir: 'password',
    };
  },
  template: `
        <div class="member">
          <form id="member" method="post" action="#../PHP/Frontend/JoinR.php">
            <input type="email" :placeholder="signInemail" name="account" v-model="emailSend" :class="{redbordercolorsignInemail:redbordercolorsignInemail}" :change="delchi('emailSend')" @click="classnone1" />
            <input :type="passtotex" :placeholder="signInpass" v-model="signInpasssend" :class="{redbordercolorsignInpass:redbordercolorsignInpass}" @click="classnone2"/>
            <input :type="passtotexconfir" :placeholder="signInpassconf" v-model="signInpassconfsend" name="pwd" :class="{redbordercolorsignInpassconf:redbordercolorsignInpassconf}" @click="classnone3" />
            <div class="checkEmail"  >
              <input class="checkEmail" type="text" :placeholder="signInsendcheckcode" v-model="signInsendcheckcodesend" :class="{redbordercolorsendcheck:redbordercolorsendcheck}" @click="classnone4" >
              <button class="checkEmail" @click="emailcheck(emailSend)" type="button">發送驗證碼</button>
            </div>
            <button class="subSignup" type="submit" @click="check">註冊</button>
            <button class="changeTOmember" type="button">會員登入</button>
          </form>
          <div class="lineBor">
            <div class="lineL"></div>
            <span class="signUp">你可以快速註冊</span>
            <div class="lineR"></div>
          </div>
          <div class="fbgoogle">
            <img src="../img/03/Icon awesome-facebook.png">
            <img src="../img/03/Icon awesome-google-plus.png">
          </div>
        </div>
      `,
  methods: {
    // 註冊空白檢查
    check(event) {

      // 信箱空白檢查
      if (this.signInemail == '信箱' && this.emailSend == '') {
        // alert('信箱是空的');
        this.signInemail = '信箱不可為空白';
        this.redbordercolorsignInemail = true;
        event.preventDefault();
      }

      // 密碼空白檢查
      if (this.signInpass == '密碼' && this.signInpasssend == '') {
        this.signInpass = '密碼不可為空白';
        this.redbordercolorsignInpass = true;
        event.preventDefault();
      }

      // 確認密碼空白檢查
      if (this.signInpassconf == '確認密碼' && this.signInpassconfsend == '') {
        this.signInpassconf = '確認密碼不可為空白';
        this.redbordercolorsignInpassconf = true;
        event.preventDefault();
      }

      // 驗證碼確認空白檢查
      if (this.signInsendcheckcode == '驗證碼確認' && this.signInsendcheckcodesend == '') {
        this.signInsendcheckcode = '驗證碼不可空白';
        this.redbordercolorsendcheck = true;
        event.preventDefault();
      }

      // 密碼及確認密碼需相同
      if (this.signInpasssend != this.signInpassconfsend) {
        this.passtotex = 'text';
        this.passtotexconfir = 'text',
        this.signInpasssend = '',
        this.signInpassconfsend = '',
        this.signInpass = '與確認密碼相異';
        this.signInpassconf = '與密碼相異';
        this.redbordercolorsignInpass = true;
        this.redbordercolorsignInpassconf = true;
        event.preventDefault();
      }
    },

    // 帳號登入禁止中文可使用email
    delchi(clear) {
      this[clear] = this[clear].replace(/[^\a-\z\A-\Z0-9\@._-]/g, '');
    },

    // 當input被點擊時去除紅框class及改變type型態
    classnone1() {
      this.redbordercolorsignInemail = false
    },
    classnone2() {
      this.redbordercolorsignInpass = false
      this.passtotex = 'password';
    },
    classnone3() {
      this.redbordercolorsignInpassconf = false
      this.passtotexconfir = 'password';
    },
    classnone4() {
      this.redbordercolorsendcheck = false
    },

    // 寄信驗證
    emailcheck(email) {
      // 驗證其他人輸入的值是否抓到
      // if (email != '') {
      //   alert(email);
      // }

      // 寄信驗證
      Email.send({
        SecureToken: "83e722aa-e25e-440b-b4ea-b3d5d6cf95b8",
        To: email,
        From: "tibamelovefood@gmail.com",
        Subject: "lovefood<tibamelovefood@gmail.com>",
        Body: "And this is the body"
      })
        .then(
          message => alert(message)
        );
    },
  },
  mounted() {

  },
});

Vue.component('seller', {
  template: `
        <div class="seller">
          <form id="seller" method="post" action="#">
            <input class="seller" type="email" placeholder="信箱" />
            <input class="seller" type="password" placeholder="密碼" />
            <input class="seller" type="password" placeholder="確認密碼" />
            <input class="seller" type="text" placeholder="公司名稱" />
            <input class="seller" type="text" placeholder="統一編號" />
            <input class="seller" type="text" placeholder="登記地址" />
            <input class="seller" type="text" placeholder="聯絡電話" />
            <button class="seller" type="submit">註冊</button>
            <button class="changeTOmember" id="goTOmember" type="button">會員登入</button>
          </form>
        </div>
      </div>
      `,
});

new Vue({
  el: '#signUpsignIn',
  //el是vue的固定屬性，el:document.getElementById('signUp'),
  data: { //變數放這裡
    act: '',
    content: 'member',
    // different part
    moveR: '',
    moveL: '',
    overlay: '',
    overlaycontainer: '',
    movesignUpmm: '',
    movesignInmm: '',
    // isA: true,
  },
  methods: {
    activeButton(item) {
      if (this.act != false) {
        this.act = false
        this.content = item
        // console.log(this.content);
      }
    },
    activeButton1(item) {
      if (this.act != true) {
        this.act = true
        this.content = item
      }
    },
    signUpR() {
      this.moveR = true
      this.moveL = false
      this.overlay = false
      this.overlaycontainer = false
      this.movesignUpmm = false
      this.movesignInmm = false
    },
    signInL() {
      this.moveR = false
      this.moveL = true
      this.overlay = true
      this.overlaycontainer = true
      this.movesignUpmm = true
      this.movesignInmm = true
    },
  },
});

function doFirst() {
  // 會員登入
  changeTOmember = document.getElementsByClassName('changeTOmember')[0];
  // 註冊
  changeTosignup = document.getElementsByClassName('changeTosignup')[0];

  // 會員登入(函式)
  changeTOmember.addEventListener('click', changeTOmemberf);
  // 註冊(函式)
  changeTosignup.addEventListener('click', changeTosignupf);
}

// 會員登入(函式)
function changeTOmemberf() {
  signUp = document.getElementById('signUp');
  signUp.classList.add('signUpmm');
  signUp.classList.add('rwdsignUp');
  signIn = document.getElementById('signIn');
  signIn.classList.add('signInmm');
  signIn.classList.add('rwdsignIn');
  overlayContainer = document.getElementById('overlayContainer');
  overlayContainer.classList.add('overL');
  // 解決會員登入的小問題
  // window.addEventListener('resize', back);
}
// 註冊(函式)
function changeTosignupf() {
  signUp = document.getElementById('signUp');
  signUp.classList.remove('signUpmm');
  signUp.classList.remove('rwdsignUp');
  signIn = document.getElementById('signIn');
  signIn.classList.remove('signInmm');
  signIn.classList.remove('rwdsignIn');
  if (!signUp.classList.contains('rwdsignUp')) {
    signUp.classList.add('signUpmm');
    // signUp.classList.add('rwdsignUp');
    signIn.classList.add('signInmm');
    // signIn.classList.add('rwdsignIn');
    overlayContainer.classList.add('overL');
  }
}
window.addEventListener('load', doFirst);
document.addEventListener("click", doFirst);
