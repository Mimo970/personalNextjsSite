// "use client";
// import React, { useState } from "react";
// import styles from "./page.module.css";
// import Button from "@/components/Button/Button";

// export const metadata = {
//   title: "My Contact Information",
//   description: "This is Contact Page",
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [status, setStatus] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:3000/api/send-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       console.log("res:", res);

//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }

//       const result = await res.json();
//       setStatus(result.message || `Error: ${result.error}`);

//     } catch (error) {
//       console.error("Error:", error);
//       setStatus(`Error: ${error.message}`);
//     }
//   };

//   console.log(formData);
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Let's Keep in Touch</h1>
//       <div className={styles.content}>
//         <form className={styles.form} onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="name"
//             className={styles.input}
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="email"
//             placeholder="email"
//             className={styles.input}
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="subject"
//             className={styles.input}
//             value={formData.subject}
//             onChange={handleChange}
//           />
//           <textarea
//             name="message"
//             className={styles.textArea}
//             placeholder="message"
//             cols="30"
//             rows="10"
//             value={formData.message}
//             onChange={handleChange}
//           ></textarea>
//           <Button type="submit" text="Send" />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import toast, { Toaster } from "react-hot-toast";

export const metadata = {
  title: "My Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();
      setStatus(result.message || `Error: ${result.error}`);

      // Show success toast and clear form inputs
      toast.success("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      console.error("Error:", error);
      setStatus(`Error: ${error.message}`);
      toast.success("Email sent successfully!");
      // toast.error("Failed to send email!");
    }
  };

  return (
    <div className={styles.container}>
      <Toaster position="top-right" />
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="subject"
            className={styles.input}
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <Button type="submit" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
