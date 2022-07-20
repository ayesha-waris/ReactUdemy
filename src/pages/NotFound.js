import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <div className="centered"> 
      <p> page can not be found</p>
      <Link to='/' >Back to home page</Link>
    </div>
   );
}
 
export default NotFound;