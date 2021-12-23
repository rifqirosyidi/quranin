import { useEffect, useState } from "react";
import {
  getFirebase,
  getFirebaseAuth,
  getFirestoreDatabase,
} from "../services/firebase-config";

export default function useFirebase() {
  const [instance, setInstance] = useState(false);
  const [auth, setAuth] = useState();
  const [db, setDb] = useState();

  useEffect(() => {
    setInstance(!!getFirebase());
    setAuth(getFirebaseAuth());
    setDb(getFirestoreDatabase());
  }, []);

  return { instance, auth, db };
}
