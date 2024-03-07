import { HiCheckCircle, HiExclamation, HiInformationCircle  } from "react-icons/hi"
import { IoIosCloseCircle } from "react-icons/io";

const bannersData = [
  {title:'Congratulations!', icon: <HiCheckCircle />, color: 'green'},
  {title:'Attention', icon: <HiExclamation />, color: 'yellow'},
  {title:'There is a problem with your application', icon: <IoIosCloseCircle />, color: 'red'},
  {title:'Update available!', icon: <HiInformationCircle />, color: 'indigo'},
  
]

export default bannersData