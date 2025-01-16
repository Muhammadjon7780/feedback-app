import { Route, Routes } from "react-router-dom";
import Main from "./screens/main/main";
import AddFeedback from "./screens/add-feedback/add-feedback";
import EditFeedback from "./screens/edit-feedback/edit-feedback";
import Kanban from "./screens/kanban/kanban";
import NotFound from "./screens/not-found/not-found";
import "./sass/main.scss"
import Feedback from "./screens/feedback/feedback";
import DataProvider from "./contexts/context-data";




function App() {

  return(
    
<DataProvider>
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/feedback/:id" element={<Feedback />}/>
      <Route path="/add-feedback" element={<AddFeedback />}/>
      <Route path="/edit/:id" element={<EditFeedback />}/>
      <Route path="/kanban" element={<Kanban />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
</DataProvider>


  );
}

export default App;



