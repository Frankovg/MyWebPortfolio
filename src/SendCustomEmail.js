import { db } from "./Firebase";
import { collection, addDoc } from "firebase/firestore";

export default async function SendCustomEmail(email, fullName, message) {
  const collectionRef = collection(db, "MyPortfolioEmails");
  const emailContent = {
    to: "di.francoamoroso@gmail.com",
    message: {
      subject: `Mensaje de ${fullName}`,
      text: `${fullName} te escribe a través de MyPortfolio.
      Mensaje: ${message}
      
      Contestar a ${email}`,
      //   html: `<p>${message}</p>`,
    },
  };

  return await addDoc(collectionRef, emailContent);
}
