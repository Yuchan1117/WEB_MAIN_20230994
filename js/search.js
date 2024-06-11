// function search_message(){
//     alert("검색을 수행합니다!");
// }
const bannedWords = ['바보', '멍청이', '놈', '찐따', '뚱땡이'];

const search_message = () => {
    const c = '검색을 수행합니다';
    alert(c);
    };

function googleSearch() {
    const searchTerm = document.getElementById("search_input").value; // 검색어로 설정

    if (searchTerm.length === 0) {
        alert("검색어를 입력해주세요.");
        return false; // 함수 중단
    }
    for (let word of bannedWords) {
        if (searchTerm.includes(word)) {
            alert("비속어는 사용할 수 없습니다.");
            return false; // 함수 중단
        }
    }

const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
// 새 창에서 구글 검색을 수행
window.open(googleSearchUrl, "_blank"); // 새로운 창에서 열기.
return false;
}

document.getElementById("search_btn").addEventListener('click', search_message);