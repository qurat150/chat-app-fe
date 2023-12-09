export const getLocalAccessToken = () => {
  return localStorage.getItem('token');
};

export const setLocalAccessToken = (token) => {
  return localStorage.setItem('token', token);
};

// export const currentUser = async () => {
//   const dispatch = useDispatch();
//   const [currentUser, setCurrentUser] = useState('');
//   // Current User Details
//   useEffect(() => {
//     const gettingCurrentUserDetails = async () => {
//       const result = await dispatch(verifyToken());
//       setCurrentUser(result.payload.user);
//     };
//     gettingCurrentUserDetails();
//   }, [dispatch]);

//   console.log(currentUser);
// };
