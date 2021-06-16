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