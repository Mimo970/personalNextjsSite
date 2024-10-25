// import React from "react";
// import styles from "./page.module.css";
// import Image from "next/image";
// import Button from "@/components/Button/Button";

// const About = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.imgContainer}>
//         <Image
//           src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//           fill={true}
//           alt=""
//           className={styles.img}
//         />
//         <div className={styles.imgText}>
//           <h1 className={styles.imgTitle}>Digital Storytellers</h1>
//           <h2 className={styles.imgDesc}>
//             Handcrafting award winning digital experiences
//           </h2>
//         </div>
//       </div>
//       <div className={styles.textContainer}>
//         <div className={styles.item}>
//           <h1 className={styles.title}>Who Are We?</h1>
//           <p className={styles.desc}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
//             quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
//             suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
//             eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
//             beatae, a suscipit eos. Animi quibusdam cum omnis officiis
//             <br />
//             <br />
//             voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
//             adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
//             esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
//             officiis voluptatum quo ea eveniet?
//           </p>
//         </div>
//         <div className={styles.item}>
//           <h1 className={styles.title}>What We Do?</h1>
//           <p className={styles.desc}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
//             quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
//             suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
//             eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
//             Creative Illustrations
//             <br />
//             <br /> - Dynamic Websites
//             <br />
//             <br /> - Fast and Handy
//             <br />
//             <br /> - Mobile Apps
//           </p>
//           <Button url="/contact" text="Contact" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const techImages = [
  { src: "/javascript.png", alt: "JavaScript" },
  { src: "/react.png", alt: "React" },
  { src: "/mongodb.png", alt: "MongoDB" },
  { src: "/csss.png", alt: "CSS" },
  { src: "/firebase.png", alt: "firebase" },
  { src: "/tailwind.png", alt: "tailwind" },
  { src: "/scss.png", alt: "scss" },
  { src: "/html.png", alt: "html" },
  { src: "/python.png", alt: "python" },
  { src: "/nodejs.png", alt: "nodejs" },
  // Add more images as needed
];

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.techContainer}>
        {techImages.map((tech, index) => (
          <div key={index} className={styles.techImage}>
            <Image
              src={tech.src}
              alt={tech.alt}
              fill={true}
              className={styles.img}
            />
          </div>
        ))}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who I am</h1>
          <p className={styles.desc}>
            I am a dedicated college student currently studying computer
            science, with over a year of experience in React. My passion lies in
            learning and problem-solving, always eager to explore new
            opportunities to expand my knowledge and skills. I thrive in dynamic
            environments where I can apply my creativity to develop innovative
            solutions.
            <br />
            <br />
            My journey in the tech world has been driven by a love for coding
            and a keen interest in emerging technologies. In addition to my
            technical expertise, I enjoy collaborating with others, believing
            that teamwork fosters greater innovation and success. As I continue
            to grow in my career, I am excited to take on new challenges that
            push the boundaries of my capabilities and contribute meaningfully
            to impactful projects.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Specialization</h1>
          <p className={styles.desc}>
            I have built full-stack applications but my primary focus is on
            frontend development, where I extensively use React to create
            dynamic and responsive user interfaces. My experience also extends
            to working with various databases and setting up servers, routes,
            and backend APIs. I am adept at using APIs to integrate diverse
            functionalities into websites, ensuring seamless and efficient user
            experiences. My comprehensive understanding of both frontend and
            backend technologies allows me to deliver complete and functional
            web solutions.
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Frontend Frameworks
            <br />
            <br /> - UI/UX Design
          </p>
          {/* <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p> */}
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
