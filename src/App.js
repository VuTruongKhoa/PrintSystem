import {Routes, Route} from 'react-router-dom'

import LoginPage from "./Page/loginpage";
import SpsoHomePage from "./Page/spsohomepage";
import HcmutHomePage from "./Page/hcmuthomepage";
import ManagePrinter from "./Page/manageprinter";
import CurrentPrinter from "./Page/curentprinter";
import SelectionMode from "./Page/SelectionMode";
import Upload from "./Page/upload";
import ChoosePrinter from "./Page/chooseprinter";
import ViewEdit from "./Page/viewedit";
import AddNewPrinter from "./Page/addnewprinter";
import PrintDoc from "./Page/printdoc";
import Specify from "./Page/specify";

function App() {
  return (
    <SpsoHomePage />      
  );
}

export default App;
