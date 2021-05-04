import axios from 'axios';
const EMPLOYEE_API_BASE_URL="http://localhost:8082/staff/allstaff";
const EMPLOYEE_API_BASE_URL2="http://localhost:8082/staff/addstaff";
const EMPLOYEE_API_BASE_URL3="http://localhost:8082/staff/editstaff";
const EMPLOYEE_API_BASE_URL4="http://localhost:8082/staff/getstaff";
const EMPLOYEE_API_BASE_URL5="http://localhost:8082/staff/deletestaff";
const ROOM_API_BASE_URL1="http://localhost:8083/Rooms/allrooms";
const ROOM_API_BASE_URL2="http://localhost:8083/Rooms/addrooms";
const ROOM_API_BASE_URL3="http://localhost:8083/Rooms/delete";
const ROOM_API_BASE_URL4="http://localhost:8083/Rooms/availrooms";
const ROOM_API_BASE_URL5="http://localhost:8083/Rooms";
const ROOM_API_BASE_URL6="http://localhost:8083/Rooms/editroom";
const ROOMSERVICE_API_BASE_URL1="http://localhost:8083/services/getservices";
const ROOMSERVICE_API_BASE_URL2="http://localhost:8083/services/addservice";
const ROOMSERVICE_API_BASE_URL3="http://localhost:8083/services/delete";
const GUEST_API_BASE_URL1="http://localhost:8084/guest/allguests";
const GUEST_API_BASE_URL2="http://localhost:8084/guest/addguest";
const GUEST_API_BASE_URL3="http://localhost:8084/guest/deleteguest";
const GUEST_API_BASE_URL4="http://localhost:8084/checkin/addcheckin";
const GUEST_API_BASE_URL5="http://localhost:8084/checkin/allcheckin";
const GUEST_API_BASE_URL6="http://localhost:8084/checkin/getcheckin";
const GUEST_API_BASE_URL7="http://localhost:8084/checkin/delete";
const RESERVATION_API_BASE_URL1="http://localhost:8084/reservation/saveres";
const RESERVATION_API_BASE_URL2="http://localhost:8084/reservation/getallres";
class EmployeeService{

    addCheckin(checkindetails){
        return axios.post(GUEST_API_BASE_URL4,checkindetails);
    }
    checkin(){
        return axios.get(GUEST_API_BASE_URL5);
    }
    reser(){
        return axios.get(RESERVATION_API_BASE_URL2);
    }

    getcheckinid(id){
        return axios.get(GUEST_API_BASE_URL6+'/'+id);
    }
    savereservation(details){
        return axios.post(RESERVATION_API_BASE_URL1,details);
    }
    deletecheckin(id){
        return axios.delete(GUEST_API_BASE_URL7+'/'+id);
    }


    getroombyId(roomno){
        return axios.get(ROOM_API_BASE_URL5+'/'+roomno);
    }
    getavailrooms(){
        return axios.get(ROOM_API_BASE_URL4);
    }
    deleteGuest(memcode){
        return axios.delete(GUEST_API_BASE_URL3+'/'+memcode);
    }
    getGuest(){
        return axios.get(GUEST_API_BASE_URL1);
    }
    createGuest(employee){
        return axios.post(GUEST_API_BASE_URL2,employee)

    }
    deleteRoomService(roomno){
        return axios.delete(ROOMSERVICE_API_BASE_URL3 + '/' + roomno);
    }
    createRoomService(employee){
        return axios.post(ROOMSERVICE_API_BASE_URL2, employee);
    }
    getroomservice(){
        return axios.get(ROOMSERVICE_API_BASE_URL1);
    }

    deleteRoom(roomno){
        return axios.delete(ROOM_API_BASE_URL3 + '/' + roomno);
    }
    createRoom(employee){
        return axios.post(ROOM_API_BASE_URL2, employee);
    }
    updateRoom(employee){
        return axios.put(ROOM_API_BASE_URL6, employee);
    }
    getrooms(){
        return axios.get(ROOM_API_BASE_URL1);
    }
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL2, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL4+'/'+employeeId);
    }
    updateEmployee(employee){
        return axios.put(EMPLOYEE_API_BASE_URL3,employee);
    }
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL5 + '/' + employeeId);
    }

}
export default new EmployeeService()