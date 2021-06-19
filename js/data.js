/*
0. 여울
1. 패트릭
2. 죠니
3. 스승
4. 고순
5. 도루묵
6. 여욱
7. 너굴
8. 고숙
9. 마스터
10. 부엉
11. 늘봉
12. 펠리
13. 펠리미
14. k.k
15. 낯선 고양이
*/

const dataList = [
    {
        q: '자리에 앉는다면 어디에 앉는 편?',
        a: [
            {
                answer: '구석 자리.',
                type: [4 , 7 , 0 , 6 , 2 , 1 , 5 , 3],
            },
            {
                answer: '중앙 자리',
                type: [10 , 12 , 13 , 9 , 11 , 14. , 15 , 8],
            },                        
        ],
    },
    {
        q: '대학교 OT, 누군가와 눈이 마주쳤다.',
        a: [
            {
                answer: '가까이 가서 말을 걸어본다.',
                type: [4 , 7 , 0 , 6 , 2 , 1 , 5 , 3],
            },
            {
                answer: '당황해서 피한다.',
                type: [10 , 12 , 13 , 9 , 11 , 14. , 15 , 8],
            },            
        ],
    },
    {
        q: '친구의 애인이 바람펴서 친구가 헤어졌다.',
        a: [
            {
                answer: '걔네 학교 쳐들어가!! 미친XXX!! 신랄하게 욕해준다.',
                type: [4 , 7 , 0 , 6 , 2 , 1 , 5 , 3],
            },
            {
                answer: '그런 쓰레기는 생각하지 말자. 술을 사주며 위로해준다.',
                type: [10 , 12 , 13 , 9 , 11 , 14. , 15 , 8],
            },
            
        ],
    },
    {
        q: '첫 월급을 받았다. 이 월급을 어떻게 쓸까?',
        a: [
            {
                answer: '주변 사람들에게 맛있는 것을 쏜다.',
                type: [0 , 2 , 1 , 3],
            },
            {
                answer: '쓰지 않고 저축해둔다.',
                type: [4 , 7 , 6 , 5],
            },            
        ],
    },
    {
        q: '좋아하는 사람과 대화를 하고 있다.',
        a: [
            {
                answer: '아아~ 그렇구나!^^ 풍부한 호응과 리액션을 한다.',
                type: [0 , 2 , 1 , 3],
            },
            {
                answer: '뭐 좋아하세요? 취미가 뭔가요? 그 사람에 대해 알고싶은 것들을 물어본다.',
                type: [4 , 7 , 6 , 5],
            },            
        ],
    },
    {
        q: '친구와 1,N을 할때 금액이 나누기 애매하다.',
        a: [
            {
                answer: '그냥 이만큼만 보내~! 거스름돈은 그냥 내가 낸다.',
                type: [0 , 2 , 1 , 3],
            },
            {
                answer: '집가면 10원단위까지 N빵 한다.',
                type: [4 , 7 , 6 , 5],
            },            
        ],
    },
    {
        q: '도서관에 왔다. 어떤 책을 고를까?',
        a: [
            {
                answer: '논픽션',
                type: [10 , 9 , 8 , 11],
            },
            {
                answer: '픽션',
                type: [13,12,14,15],
            },                       
        ],
    },
    {
        q: '모동숲 게임이 드디어 온다! 게임이 오기전 내가 하는 일은?',
        a: [
            {
                answer: '인기주민을 얻으려면 어떻게 노가다를 할지 확률을 찾아본다.',
                type: [10 , 9 , 8 , 11],
            },
            {
                answer: '게임이 배송되는 날을 두근두근 기다린다.',
                type: [13,12,14,15],
            },
            
        ],
    },
    {
        q: '좋아하는 아이돌의 신곡 뮤비가 나왔다.',
        a: [
            {
                answer: '뮤비 속 세계관과 각 멤버들의 역할, 해석까지 다 찾아본다.',
                type: [10 , 9 , 8 , 11],
            },
            {
                answer: '이번 뮤비 노래도 좋고 연출 예쁘네ㅎㅎ 애들도 너무 잘나왔다ㅠㅠ  평범하게 뮤비를 감상한다.',
                type: [13,12,14,15],
            },
            
        ],
    },
    {
        q: '장기자랑 포스터 발견! 나는 포스터를 보고...',
        a: [
            {
                answer: '주변인의 성화로 한 곡 뽑게 된다.',
                type: [0 , 1],
            },
            {
                answer: '당연히 내가 1등! 보자마자 신청서를 낸다.',
                type: [2 , 3],
            },            
        ],
    },
    {
        q: '친구가 어제 산 내 물건을 실수로 망가뜨렸다...',
        a: [
            {
                answer: '내가 어제 줄서서 산 한정판... 오열한다.',
                type: [4 , 5],
            },
            {
                answer: '그거 한정판이라 10만벨이야. 친절히 가격을 안내하여 보상을 유도한다.',
                type: [7 , 6],
            },
            
        ],
    },
    {
        q: '신나는 수학 여행! 자유시간이 주어졌다.',
        a: [
            {
                answer: '집합 시간 칼같이 지켜서 돌아온다.',
                type: [9 , 8],
            },
            {
                answer: '구경하다가 뒤늦게 헐레벌떡 뛰어온다.',
                type: [11 , 10],
            },            
        ],
    },
    {
        q: '해외의 유명 레스토랑, 자리가 없어 낯선 사람과 합석하게 되었다.',
        a: [
            {
                answer: '모르는 사람은 불편해ㅠㅠ 밥만 후딱 먹어야지.',
                type: [12 , 13],
            },
            {
                answer: '이것도 인연인데, 말 걸어봐야겠다!',
                type: [14. , 15],
            },            
        ],
    },
    {
        q: '친구에게 카톡을 보냈는데 하루가 넘게 읽지 않는다...',
        a: [
            {
                answer: '혹시 내가 뭐 잘못한거 있었나?? 고민한다.',
                type: [0],
            },
            {
                answer: '바쁜가보네. 언젠가 읽겠지 뭐.',
                type: [1],
            },            
        ],
    },
    {
        q: '내일 오후 수업이 휴강해서 교양수업 하나밖에 없다!!',
        a: [
            {
                answer: '내일은 학교 쉬겠습니다~! 자체휴강을 계획하고 오늘 밤부터 불태운다.',
                type: [2],
            },
            {
                answer: '내일 일찍 끝나니까 놀러가야지~! 오후 약속을 만든다.',
                type: [3],
            },            
        ],
    },
    {
        q: '누군가를 괴롭히는 학생을 보았다.',
        a: [
            {
                answer: '학교폭력일지도 몰라..!! 경찰에 얼른 신고해야지.',
                type: [4],
            },
            {
                answer: '거기 뭐야!! 일단 호통친다.',
                type: [5],
            },            
        ],
    },
    {
        q: '카메라 안켜는 온라인 시험...!',
        a: [
            {
                answer: '어차피 다들 책 볼텐데 내가 안 보면 나만 손해야!',
                type: [6],
            },
            {
                answer: '그래도 시험인데, 정정당당히 내 실력으로 승부할 거다!',
                type: [7],
            },            
        ],
    },
    {
        q: '아르바이트 하는 카페의 단골손님에게 서비스를 주려 한다.',
        a: [
            {
                answer: '이거 서비스에요~ 쿠키를 챙겨드린다.',
                type: [8],
            },
            {
                answer: '손님 모르게 음료를 정량 초과하여 넣어드린다.',
                type: [9],
            },            
        ],
    },
    {
        q: '내일은 레포트 마감일.. 제시간에 내려면 밤을 새야한다...',
        a: [
            {
                answer: '으악 왜 미리 안 해놨냐... 마감 직전까지 벼락치기해서 겨우 낸다.',
                type: [10],
            },
            {
                answer: '과제 하나쯤은 괜찮아... 어차피 못할것같으니 편하게 잔다.',
                type: [11],
            },            
        ],
    },
    {
        q: '친구에게 생일선물을 주려 한다.',
        a: [
            {
                answer: '친구의 취향을 고려하여 선물한다.',
                type: [12],
            },
            {
                answer: '친구가 필요할 것 같은 물건을 선물한다.',
                type: [13],
            },           
        ],
    },
    {
        q: '당신에게 여행의 의미는?',
        a: [
            {
                answer: '새로운 곳으로의 도전.',
                type: [14],
            },
            {
                answer: '새로운 곳에서의 만남.',
                type: [15],
            },            
        ],
    },
]

const resultList = [
    {
        name: "여울",
        desc: "누구에게나 다정한 성품을 가진 당신은 항상 주변으로부터 사랑과 챙김을 많이 받습니다. 다소  덜렁거리는 면도 있지만 그런 모습마저 귀여워 보이게 만드는 당신은 <여울>이 가장 잘 어울린답니다!",        
    },
    {
        name: "패트릭",
        desc: "매사에 쿨하고 뒤끝없는 당신. 하고 싶은 말을 돌려하지 않고 말하는 직설적인 면도 있어서 때로는 의도치 않게 상처를 주기도 하지만, 앞 뒤 다르지 않고 매사에 솔직하며 친구들과의 의리를 잘 지키는 당신의 모습은 멀리서 봐도 빛이 난답니다.  쿨워터향 뿜뿜인 당신은 <패트릭>이 가장 잘 어울린답니다!",
    },
    {
        name: "죠니",
        desc: "항상 남들의 주목을 받고 싶어하고,  대화의 중심에 서는 사람이에요. 활발한데다 붙임성까지 좋아 주변에 사람들이 끊이질 않네요! 사교적이고 매력이 철철 넘치는 당신은 <죠니>가 가장 잘 어울린답니다!",
    },
    {
        name: "스승",
        desc: "당신은 사람들과 어울리는것을 좋아하며, 주변 사람들을 웃게 만드는 코미디언같은 매력을 가졌습니다! 주위를 향한 진심어린 응원도 아끼지 않으니, 당연히 인기쟁이랍니다! 때로는 우울하고 내 마음대로 되지 않는 날이 있겠지만, 그 마저 툭툭 털고 금세 다시 일어나는 비타민같은 당신은 <스승>이 가장 잘 어울린답니다.",
    },
    {
        name: "고순",
        desc: "본인을 평범한 사람이라고 생각하지만, 사실 당신은 친절한 언행과 밝은 기운으로 주변 사람들에게 사랑받고 있답니다. 항상 사람들에게 공감해주고 미소지어주는 따뜻한 당신은 바로 <고순>입니다!",
    },
    {
        name: "도루묵",
        desc: "불의를 보면 절대 참지 못하는 열정적인 행동파인 당신. 항상 올바르게 살아야하고, 규칙은 반드시 지켜야하는 원칙주의자 기질도 가지고 있습니다. 그렇다보니 다소 거친 성향도 없지않아 있지만, 본인만의 올곧은 신념을 지키는 정의로운 사람인 당신은 <도루묵>이 가장 잘 어울린답니다!",
    },
    {
        name: "여욱",
        desc: "지적이고 똑똑한 당신. 거기다가 말까지 똑부러지게 잘해서 당신에게 말로 이길 수 있는 사람은 없을거에요. 다소 이기적인 면도 있지만 미워할 수 없게하는 매력을 가졌어요. 그런 당신은 <여욱>이 가장 잘 어울린답니다!",
    },
    {
        name: "너굴",
        desc: "돈관리를 잘하고 세상사에 관심이 많습니다. 현실감각도 좋아서 가끔 당신을 욕심쟁이로 보는 사람도 있겠지만, 사실 정이 많고 주변사람들을 잘 돌본답니다. 겉바속촉의 매력을 가진 당신은 <너굴>이 가장 잘 어울린답니다!",
    },
    {
        name: "고숙",
        desc: "꿈을 향해 도전하는 용기와 끈기를 가진 당신! 겉으론 냉철해보이지만 사실 속으론 주변사람들을 참 잘 챙긴답니다. 주변 사람들이 당신을 배울점이 많은 사람으로 보고 있지 않나요? 그런 당신은 <고숙>이가 가장 잘 어울린답니다!",
    },
    {
        name: "마스터",
        desc: "말수가 적고 항상 자기 할 일에 몰두해있는 당신. 하지만 과묵하게 자기 할 일을 하는 모습마저 사람들에게는 매력적으로 보인다는 사실을 알고 있나요? 친해지기까지 시간이 좀 걸리지만, 친해지면 볼 수 있는 당신만의 우직하고 단단한 내면은 사람들이 당신에게 더욱 푹 빠지게 할지도 몰라요! 그런 당신은 <마스터>가 가장 잘 어울린답니다!",
    },
    {
        name: "부엉",
        desc: "내가 좋아하는 분야는 끊임없이 파고드는 덕후기질 만렙인 당신. 때로는 자기 관심사에 푹 빠져서 끊임없이 수다를 떨어 듣는 사람들을 피곤하게 만들기도 하지만 호기심 많은 어린아이같은 당신의 귀여움은 주변인들을 웃음짓게 만든답니다. 그런 당신은 <부엉>이 가장 잘 어울립니다!",
    },
    {
        name: "늘봉",
        desc: "자연을 거닐며 생각하기를 좋아하는 느긋하고 낙관적인 당신. 따뜻한 햇살, 구름없는 맑은 하늘처럼 작은 것에도 항상 감사하는 따뜻한 마음씨를 가졌습니다. 바쁜 세상에서 조금 느리게 보일수도 있겠지만, 당신만이 가진 여유로움은 사람들에게 꼭 필요한 것이 아닐까요? 느긋하고 따뜻한, 세상의 소금같은 당신은 <늘봉>이가 가장 잘 어울린답니다!",
    },
    {
        name: "펠리",
        desc: "꼼꼼하고 차분한 성격을 가진 당신의 첫인상은 사람들 눈에 별로 튀지 않는, 모범생같은 사람으로 보일지도 몰라요. 하지만, 하나에 푹 빠지면 새벽까지 밤을 새가며 완전히 몰두할 수 있는 누구보다 뜨거운 열정을 내면에 숨기고 있답니다. 겉으론 평범해도 내면에 비범한 열정을 가진 당신은 <펠리>가 가장 잘 어울린답니다!",
    },
    {
        name: "펠리미",
        desc: "겉으론 관심없는 척 하지만, 속으론 항상 주변사람들을 챙기려하는 츤데레 성격을 가진 당신. 신경 안쓰는 척 하지만 주변사람들이 지나가며 이야기한 말들도 다 기억하고 챙겨주지 않나요? 가끔 게을러 질때도, 예민해질때도 있지만 당신의 다정함은 주변 사람들을 감동받게 한답니다. 그런 당신은 <펠리미>가 가장 잘 어울린답니다!",
    },
    {
        name: "K.K",
        desc: "음악의 여유를 즐기며 일상의 낭만을 찾는 로맨티스트인 당신은 풍부한 감수성과 높은 공감능력으로 상대방의 감정까지 몽글몽글하게 만들지 않나요? 항상 상대방에게 진심으로 다가가고 따뜻함을 주는 당신은 한겨울의 코코아같은 존재랍니다! 부드럽고 낭만적인 당신은 <K.K>가 가장 잘 어울린답니다.",
    },
    {
        name: "낯선 고양이",
        desc: "자유로운 영혼과 4차원적인 엉뚱한 면을 가진 당신은 주변 사람들에게 신비스러운 사람으로 보인답니다. 알 수 없는 사람이지만, 이상하게 사람들을 끌어들이는 매력이 있어요.  느긋한 성격으로 항상 휴식과 여유를 즐기며 자기만의 생각에 빠져사는, 엉뚱하지만 귀여운 당신은 <낯선고양이>가 가장 잘 어울린답니다!",
    },
]