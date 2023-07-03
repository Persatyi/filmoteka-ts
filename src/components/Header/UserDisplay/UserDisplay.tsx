import React, { useState } from "react";
import { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "services/firebase";

const UserDisplay = () => {
  const [user, setUser] = useState<User | null>(null);
  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  return user && <div>{user?.displayName}</div>;
};

export default UserDisplay;
