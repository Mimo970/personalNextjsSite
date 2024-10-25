// import React from "react";
// import styles from "./button.module.css";
// import Link from "next/link";

// const Button = ({ text, url }) => {
//   return (
//     <Link href={url}>
//       <button className={styles.container}>{text}</button>
//     </Link>
//   );
// };

// export default Button;

import React from "react";
import Link from "next/link";
import styles from "./button.module.css";

const Button = ({ url, text, type }) => {
  if (type === "submit") {
    return (
      <button type="submit" className={styles.container}>
        {text}
      </button>
    );
  }
  return (
    <Link className={styles.container} href={url}>
      {text}
    </Link>
  );
};

export default Button;
