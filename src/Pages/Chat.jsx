import MainPageContainer from "components/MainPageContainer/MainPageContainer";
import SideBar from "Views/SideBar/SideBar";
import Messages from "Views/Messages/Messages";

const Chat = () => {
    return (
        <MainPageContainer>
            <SideBar />
            <Messages/>
        </MainPageContainer>
    )
}

export default Chat