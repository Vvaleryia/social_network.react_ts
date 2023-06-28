import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {rootStateType} from "./state/state";

type AppPropsType = {
    state: rootStateType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path="/profile/*" element={<Profile profilePage={props.state.profilePage}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs messagePage={props.state.dialogsPage.message}
                                                                   dialogsPage={props.state.dialogsPage.dialogs}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
