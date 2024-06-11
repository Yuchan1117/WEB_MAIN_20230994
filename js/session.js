// function session_set() { //세션 저장
//     let session_id = document.querySelector("#typeEmailX"); // DOM 트리에서 ID 검색
//     let session_pass = document.querySelector("#typePasswordX"); // DOM 트리에서 pass 검색
//     if (sessionStorage) {
//         let en_text = encrypt_text(session_pass.value);
//         sessionStorage.setItem("Session_Storage_id", session_id.value);
//         sessionStorage.setItem("Session_Storage_pass", en_text);

//     } else {
//          alert("로컬 스토리지 지원 x");
//     }
// }
function session_set(){ //세션 저장(객체)    
    let id = document.querySelector("#typeEmailX");
    let password = document.querySelector("#typePasswordX");
    let random = new Date(); // 랜덤 타임스탬프

    

    const obj = { // 객체 선언
    id : id.value, otp : random
    }
    
    if (sessionStorage) {
        const objString = JSON.stringify(obj); // 객체 -> JSON 문자열 변환
        let en_text = encrypt_text(objString); // 암호화
        sessionStorage.setItem("Session_Storage_object", objString);
        sessionStorage.setItem("Session_Storage_encrypted", en_text);

        setTimeout(function() {
            session_check_expire();
        }, 300000); // 5분 
    }
    else {
        alert("세션 스토리지 지원 x");
    }   
}

function session_join_set(){ //세션 저장(객체)    
    let f_name = document.querySelector("#firstName").value;
    let l_name = document.querySelector("#lastName").value;
    let b_day = document.querySelector("#birthdayDate").value;
    let gender = document.querySelector("#inlineRadioOptions");
    let email = document.querySelector("#emailAddress").value;
    let p_number = document.querySelector("#phoneNumber").value;
    let class_check = document.querySelector(".select form-control-lg");
    let random = new Date(); // 랜덤 타임스탬프
     
    // const newSignUp = new SignUp(f_name, l_name, b_day, gender, email, p_number, class_check, random);
    // console.log(newSignUp.fullName); // John Doe
    // console.log(newSignUp.contactInfo); // johndoe@email.com 123-456-7890
    const newSignUp = { // 객체 리터럴 사용
        firstName: f_name,
        lastName: l_name,
        birthdayDate: b_day,
        gender: gender,
        emailAddress: email,
        phoneNumber: p_number,
        classCheck: class_check,
        timestamp: random
    };
 
    if (sessionStorage) {
        const objString = JSON.stringify(newSignUp); // 객체 -> JSON 문자열 변환
        let en_text = encrypt_text(objString); // 암호화
        sessionStorage.setItem("Session_Storage_new_user", objString);
        sessionStorage.setItem("Session_Storage_new_user_encryted", en_text);
    } else {
        alert("세션 스토리지 지원 x");
    }
}
    

function session_get() { //세션 읽기
    if (sessionStorage) {
        return sessionStorage.getItem("Session_Storage_encrypted");
    } else {
        alert("세션 스토리지 지원 x");
    }
}

function session_join_get() { // 세션 읽기 (회원가입)
    if (sessionStorage) {
        let encryptedData = sessionStorage.getItem("Session_Storage_new_user_encrypted");
        let decryptedData = decrypt_text(encryptedData);
        let userData = JSON.parse(decryptedData);
        console.log(userData);
    } else {
        alert("세션 스토리지 지원 x");
    }
}
                  
function session_check() { //세션 검사
    if (sessionStorage.getItem("Session_Storage_id")) {
        alert("이미 로그인 되었습니다.");
        location.href='../login/index_login.html'; // 로그인된 페이지로 이동
    }
}
      
function session_del() {//세션 삭제
    if (sessionStorage) {
        sessionStorage.removeItem("Session_Storage_id");
        alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
    } else {
        alert("세션 스토리지 지원 x");
    }
}