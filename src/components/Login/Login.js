import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { user, signInUsingGoogle, setUser } = useAuth();


    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
            })
    }


    return (
        <div className="mx-5 mb-4">
            {
                user?.email ?
                    <div>
                        <h4 className="text-success fw-bold mt-5 pt-5">Already Logged !!!</h4>
                        <h5 className="text-dark fw-bold" style={{ marginBottom: "200px" }}>If you want to Logout , Please click Logout button.</h5>
                    </div>
                    :
                    <div className=" my-3 d-flex justify-content-end align-items-center">
                        <h4 className="text-dark fw-bold">Sign with</h4>
                        <button onClick={handleGoogleSignIn} className="btn btn-dark rounded-pill ms-3 fw-bolder"><FontAwesomeIcon icon={faGoogle} size="2x" className="text-warning mx-3" /></button>
                    </div>
            }
        </div>
    );
};

export default Login;