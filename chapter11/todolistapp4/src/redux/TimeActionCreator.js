import Constant from '../Constant';

const TimeActionCreator = {
    changeTime() {
        return {  type: Constant.CHANGE_TIME, payload : { currentTime: new Date() } }
    },
    asyncChangeTime() {
        //의도적 지연시간 1초
        return (dispatch, getState)=> {
            //Logger 미들웨어로 확인하기 위해 존재하지 않는 액션 타입 전송
            dispatch({ type:"changeTimeStart" })
            setTimeout(()=>{
                dispatch(this.changeTime());
            }, 1000)
        }    
    }
}

export default TimeActionCreator;
