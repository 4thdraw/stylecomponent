import { Wbtn, Bbtn, BgBanner } from './styled/Commonui'

const Btns = () => {
    const bodybg = {
        backgroundColor: "black",
        padding: "5rem",
        textAlign: "center"
    }
    return (
        <div style={bodybg}>
            <BgBanner bgcolor="gray">
                <h2>큰글씨</h2>
                <p>작은글씨</p>
            </BgBanner>
            <Wbtn>하얀버튼</Wbtn>
            <Bbtn>검정버튼</Bbtn>
        </div>
    )
}

export default Btns