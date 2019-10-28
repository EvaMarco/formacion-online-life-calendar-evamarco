class getUserCalendar {
  getSavedData(){
    if(localStorage.getItem('userDays')!== undefined){
      const savedDays = JSON.parse.localStorage.getItem('userDays');
      return savedDays
    }
  }
  saveUserData(info){
    localStorage.setItem('userDays', JSON.stringify(info));
  }
}
export default getUserCalendar; 