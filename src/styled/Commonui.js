import styled from 'styled-components';

export const Wbtn = styled.button`
      background-color: black;
      color: white;
      border: 1px solid #fff;
      border-radius: 30px;
      display: inline-block;
      width:100px;
      line-height: 2rem;
      text-align: center;  
`
export const Bbtn = styled.button`
      background-color: white;
      color: black;
      border: 1px solid #000;
      border-radius: 30px;
      display: inline-block;
      width:100px;
      line-height: 2rem;
      text-align: center;  
`

export const BgBanner = (props) => {
    return (
        <div className={props.className} >
            {props.children}
        </div>
    )
}