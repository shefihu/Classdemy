import { db } from "../firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
const commentCollectionRef = collection(db, "comments");

class CommentDataService {
  addComment = (newComment) => {
    return addDoc(commentCollectionRef, newComment);
  };
  updateComment = (updatedComment, id) => {
    const commentDoc = doc(db, "comments", id);
    return updateDoc(commentDoc, updatedComment);
  };
  deleteComment = (id) => {
    const commentDoc = doc(db, "comments", id);
    return deleteDoc();
  };
  getAllComments = () => {
    return getDocs(commentCollectionRef);
  };
  getComment = (id) => {
    const commentDoc = doc(db, "comments", id);
    return getDoc(commentDoc);
  };
}
export default new CommentDataService();
