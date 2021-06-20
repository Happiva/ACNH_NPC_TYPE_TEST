const defUrl = "https://acnh-npc-test.netlify.app/";

function shareResult() {
    var resultImg = document.querySelector('.resultImage');
    var resultAlt = resultImg.firstElementChild.alt;

    const title = "동물의 숲 NPC로 알아보는 성격 유형 결과"
    const shareDesc = resultList[resultAlt].name;
    const shareImg = defUrl + 'images/img-' + resultAlt + '.png';
    const shareURL = defUrl + 'page/result-' + resultAlt + '.html';

    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: title,
          description: shareDesc,
          imageUrl: shareImg,           
          link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
          },
        },
        buttons: [
          {
            title: '결과 보기',
            link: {
              mobileWebUrl: shareURL,
              webUrl: shareURL,
            },
          }
        ]
      });
}