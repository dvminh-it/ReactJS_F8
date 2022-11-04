import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from './containers'

const Router = () => {
    return (<>
        <BrowserRouter>
            <Routes >
                <Route exact path='/' element={< Container />} />
            </Routes >
        </BrowserRouter>
    </>)
}
export default Router;
