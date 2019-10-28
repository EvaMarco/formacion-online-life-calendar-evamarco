
import ls from 'local-storage'
class getUserCalendar {
  getSavedData(){
    const savedDays = ls.get('userDays');
    return savedDays
  }
  saveUserData(info){
    ls.set('userDays', info);
  }
}
export default getUserCalendar; 