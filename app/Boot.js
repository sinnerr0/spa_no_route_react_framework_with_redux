/**
 * 부팅 시작
 */
class Boot {
    /**
     * 부팅 후 초기화 시작
     */
    static start() {
        let data = {
            userName: '최경식',
            recommend: [{
                type: 0,
                position: 1,
                num: 1,
                title: '가디언즈 오브 갤럭시',
                color: '#0c161c',
                imgUrl: 'data/img/promo_image_sample.png'
            }, {
                type: 1,
                position: 2,
                num: 2,
                title: '콩닥콩닥\n로맨스',
                color: '#cc4f6d',
                imgUrl: ''
            }, {
                type: 1,
                position: 2,
                num: 2,
                title: '콩닥콩닥\n액션',
                color: '#cc4f6d',
                imgUrl: ''
            }, {
                type: 2,
                position: 2,
                num: 3,
                title: '대세 배우\n크리스 프랫\n필모그래픽',
                color: '#3e655c',
                imgUrl: 'data/img/banner_sample_03.png'
            }, {
                type: 3,
                position: 2,
                num: 4,
                title: '공각기동대',
                color: '',
                imgUrl: 'data/img/banner_sample_04.png'
            }, {
                type: 1,
                position: 3,
                num: 5,
                title: '저번주\n예능',
                color: '',
                imgUrl: 'data/img/banner_sample_05.png'
            }, {
                type: 3,
                position: 3,
                num: 6,
                title: '어벤져스:\n인피니티 워',
                color: '',
                imgUrl: 'data/img/banner_sample_06.png'
            }, {
                type: 3,
                position: 3,
                num: 7,
                title: '마블 세계관\n파헤치기',
                color: '',
                imgUrl: 'data/img/banner_sample_07.png'
            }],
            info: ['‘1번’ 보여줘', '다른 거 보여줘', '마이 페이지']
        };
        G.AppDispatcher.dispatch({type: G.ACTION_TYPE.PUSH_LAYER, payload: {name: 'Home', data}}); // 시작 레이어 추가!!
    }
}

export default Boot;