
import './App.css';

import Staff from './components/managerComponents/StaffCRUD/Staff';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Headercomponent from './components/Headercomponent'
import FooterComponent from './components/FooterComponent'
//import CreateEmployeeComponent from './components/managerComponents/CreateEmployeeComponent';
import ProtectedRoute from './pages/ProtectedRoute';
import ManagerRoute from './pages/ManagerRoute';
import AdminRoute from './pages/AdminRoute';
import Loginpage from './pages/Loginpage';
//import Register from './pages/auth/Reg';
import CreateEmployeeComponent from './components/managerComponents/StaffCRUD/CreateEmployeeComponent';
import Updatestaff from './components/managerComponents/StaffCRUD/Updatestaff';
import Rooms from "./components/managerComponents/RoomCRUD/Rooms";
import CreateRoom from "./components/managerComponents/RoomCRUD/CreateRoom";
import CreateRoomService from './components/managerComponents/RoomCRUD/CreateRoomService';
import RoomServices from './components/managerComponents/RoomCRUD/RoomServices';
import Guest from './components/REceptionistComponents/GuestCRUD/Guest';
import CreateGuest from './components/REceptionistComponents/GuestCRUD/CreateGuest';
import AvailRooms from './components/REceptionistComponents/Roomdetails/AvailRooms';
import RoomBook from './components/REceptionistComponents/Reservation/RoomBook';
import Main from './pages/Main';
import ManagerHp from './components/Homepages/ManagerHp';
import OwnerHp from './components/Homepages/OwnerHp';
import RecepHp from './components/Homepages/RecepHp';
import AddUsers from './components/OwnerComponents/AddUsers';
import Checkin from './components/REceptionistComponents/Reservation/Checkin';
import Checkout from './components/REceptionistComponents/Reservation/Checkout';
function App() {
  
  return (
   
    <div >
      <Router>
        <div  >
          <Headercomponent></Headercomponent>
           <div style={{backgroundColor:"whitesmoke",borderRadius:'10px',marginTop:'1cm',paddingLeft:'0',paddingRight:'0',paddingBottom:'0cm',opacity:"95%",width:'90%'}} className="container">
             <switch>
               {/*Home page routes */}
               <ManagerRoute path="/ManagerHp" exact component={ManagerHp}></ManagerRoute>
               <AdminRoute path="/OwnerHp" exact component={OwnerHp}></AdminRoute>
               <ProtectedRoute path="/RecepHp" exact component={RecepHp}></ProtectedRoute>
               {/* */}

               <AdminRoute path="/add-user" exact component={AddUsers}></AdminRoute>
               <ProtectedRoute path="/check-in" exact component={Checkin}></ProtectedRoute>
               <ProtectedRoute path="/check-out/:code/:check/:no" exact component={Checkout}></ProtectedRoute>
               
               <Route path="/" exact component={Loginpage}></Route>
               <Route path="/main" exact component={Main}></Route>
               <Route path="/login" exact component={Loginpage}></Route>
               <ManagerRoute path="/employee" exact component={Staff}></ManagerRoute>
               <ManagerRoute path="/add-employee" component={CreateEmployeeComponent}></ManagerRoute>
               <ManagerRoute path="/update-employee/:idcode" component={Updatestaff}></ManagerRoute>
               <ManagerRoute path="/room" exact component={Rooms}></ManagerRoute>
               <ProtectedRoute path="/avail-room" exact component={AvailRooms}></ProtectedRoute>
               <ManagerRoute path="/add-room" exact component={CreateRoom}></ManagerRoute>
               <Route path="/room-service"exact component={RoomServices}></Route>
               <Route path ="/add-roomservice" exact component={CreateRoomService}></Route>
               <ProtectedRoute path="/guest" exact component={Guest}></ProtectedRoute>
               <ProtectedRoute path="/add-guest" exact component={CreateGuest}></ProtectedRoute>
               
               <ProtectedRoute path="/book-room/:memcode" exact component={RoomBook}></ProtectedRoute>
               </switch>
           </div>
          <FooterComponent/>
        </div>
     </Router>
    </div>
  );
}

export default App;
