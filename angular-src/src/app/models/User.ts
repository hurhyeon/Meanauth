// 사용자 등록시 서버에 전송하는 정보의 데이터 모델
export interface User{
    name: string;
    email: string;
    username: string;
    password: string;
}
//로그인시서버에보내는정보의데이터모델
export interface Login {
    username: string;
    password: string;
} 
//로그인된사용자정보의데이터모델.
//보안을위해서버가패스워드정보는제외하고보내주었음.
export interface UserNoPW{
    _id: string;
    name: string;
    email: string;
    username: string;
}