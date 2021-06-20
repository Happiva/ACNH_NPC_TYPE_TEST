const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result")
const endPoint = 16;
const select = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function calculateResult() {
    var result = select.indexOf(Math.max(...select));
    return result;
}

function showResult() {
    let result = calculateResult();
    const resultName = document.querySelector('.resultnpc');

    resultName.innerHTML = `당신은...${resultList[result].name}입니다!`;

    var resultImg = document.createElement('img');
    const imgSection= document.querySelector('.resultImage');
    var imgURL = `../images/img-${result}.png`;
    resultImg.src = imgURL;
    resultImg.alt = result;
    resultImg.classList.add('img-fluid');
    imgSection.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = resultList[result].desc;
}

function goResult() {
    qna.style.WebKitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";
        },450);
    },450);
    showResult();
}

function begin() {
    main.style.WebKitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";
        },450);
        let qIdx = 0;
        goNext(qIdx);
    },450);
    
}

function addAnswer(answerText, qIdx, idx) {
    var answerBox = document.querySelector('.answerBox'); //선택지 고르는 영역.
    var answerBtn = document.createElement('button');
    answerBtn.classList.add('answerList');
    answerBtn.classList.add('py-3');
    answerBtn.classList.add('mx-auto');
    answerBtn.classList.add('my-auto');
    answerBtn.classList.add('fadeIn');

    answerBox.appendChild(answerBtn);
    answerBtn.innerHTML = answerText; //답변 버튼안에는 선택지 text 넣어줌.

    answerBtn.addEventListener("click", function() {
        var children = document.querySelectorAll('.answerList');
        for(let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.WebKitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(() => {
            var target = dataList[qIdx].a[idx].type;
            for(let i = 0; i < target.length; i++) {
                select[target[i]] += 1;
            }

            for(let i = 0; i < children.length; i++) {
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        }, 450);
    }, false);
}

function goNext(qIdx) {
    if(qIdx === endPoint) {
        goResult();
        return;
    }
    var qBox = document.querySelector('.qBox');
    var qNum = document.querySelector('.qnum');
    qNum.innerHTML = `Q ${qIdx+1}`;
    qBox.innerHTML = dataList[qIdx].q; //qBox에 data.js의 qna를 가져옴
    for(let i in dataList[qIdx].a) {
        addAnswer(dataList[qIdx].a[i].answer, qIdx, i);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx + 1) + '%';
}