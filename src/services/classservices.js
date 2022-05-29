import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
const classCollectionRef = collection(db, "classes");
class ClassDataService {
  addClass = (newClass) => {
    return addDoc(classCollectionRef, newClass);
  };
  updateClass = (id, updatedClass) => {
    const classDoc = doc(db, "classes", id);
    return updateDoc(classDoc, updatedClass);
  };
  deleteClass = (id) => {
    const classDoc = doc(db, "classes", id);
    return deleteDoc(classDoc);
  };
  getAllClasses = () => {
    return getDocs(classCollectionRef);
  };
  getClass = (id) => {
    const classDoc = doc(db, "classes", id);
    return getDoc(classDoc);
  };
}
export default new ClassDataService();
