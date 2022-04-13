import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Routes from './Config/Routes'
import {BrowserRouter,Route} from 'react-router-dom'


function App() {
    return (
        <BrowserRouter>
            <Route render = {props => (   <>
                <Header {...props}/>
                <Routes/>
                <Footer/>
                </>)}/>
             
            
        </BrowserRouter>
    );
}

export default App;