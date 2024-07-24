import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/modules/app.module.scss";
import { useSelector } from "react-redux";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Dashboard = () => {
  const totalTask = useSelector((state) => state.task.taskList);
  const statusArray = totalTask.map((data) => {
    return data.status;
  });

  //count completed task
  var completdTask = statusArray.reduce((acc, curr) => {
    if (curr === "complete") acc++;
    return acc;
  }, 0);

  //count uncompleted task
  var incompletedTask = statusArray.reduce((dcc, curr) => {
    if (curr === "incomplete") dcc++;
    return dcc;
  }, 0);

  return (
    <motion.div
      className={styles.content__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.card}>
            <h3>Total Task</h3>
            <p>{totalTask?.length}</p>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <h3>Completed Task</h3>
            <p>{completdTask}</p>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <h3>Incomplete Task</h3>
            <p>{incompletedTask}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
