import { useEffect, useState } from "react";
import { getFirebase, getFirebaseAuth } from "../services/firebase-config";

export default function useFirebase() {
  const [instance, setInstance] = useState(false);
  const [auth, setAuth] = useState();

  useEffect(() => {
    setInstance(!!getFirebase());
    setAuth(getFirebaseAuth());
  }, []);

  return [instance, auth];
}
