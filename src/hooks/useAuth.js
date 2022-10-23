import { getUser } from 'store/auth';
import { useSelector } from 'react-redux';

export const useAuth = () => {
    const user = useSelector(getUser);
    console.log(user)

    return {
        isLogged: !!user,
        user,
    };
};
