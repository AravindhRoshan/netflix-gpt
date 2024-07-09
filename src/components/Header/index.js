import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../redux/userSlice";
import { removeGPTState, updateGPTState } from "../../redux/GPTSlice";

const AppHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const isGPTSearchPage = useSelector(
    (store) => store.GPTState.isGPTSearchPage
  );
  console.log(isGPTSearchPage);
  useEffect(() => {
    const unscubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        isGPTSearchPage ? navigate("/search") : navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unscubscribe();
    return () => {
      unscubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGPTSearchButton = () => {
    dispatch(updateGPTState());
    navigate("/search");
  };
  return (
    <div className="flex flex-row justify-between">
      <div className="absolute w-screen bg-gradient-to-b from-black flex flex-row justify-between">
        <button
          onClick={() => {
            dispatch(removeGPTState());
            navigate("/browse");
          }}
        >
          <img
            className="h-30 w-72 pl-5 pt-2"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Logo"
          />
        </button>

        {user && !isGPTSearchPage && (
          <div className="flex flex-col items-center pt-9">
            <div className="flex flex-row  mr-10">
              <p className="font-medium text-white pr-3 text-xl">
                Hello {auth.currentUser.displayName} !
              </p>
              <button
                className="bg-red-500 h-8 w-20 rounded-md p-1 text-white"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
            <button
              className="bg-red-500 h-10 w-32 rounded-md p-1 text-white mt-12 shine-effect"
              onClick={handleGPTSearchButton}
            >
              GPT Search
            </button>
          </div>
        )}
        <style>
          {`
          @keyframes shine {
            0% {
              background-position: -100%;
            }
            100% {
              background-position: 200%;
            }
          }
          .shine-effect {
            background-image: linear-gradient(120deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.5) 40%, rgba(255, 255, 255, 0.2) 80%);
            background-size: 200% auto;
            animation: shine 1.5s linear infinite;
          }
        `}
        </style>
      </div>
    </div>
  );
};

export default AppHeader;
