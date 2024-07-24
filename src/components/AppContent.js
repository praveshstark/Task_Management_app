import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/modules/app.module.scss";
import TaskItem from "./TaskItem";

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
const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const AppContent = () => {
  const taskList = useSelector((state) => state.task.taskList);
  const filterStatus = useSelector((state) => state.task.filterStatus);

  const sortedTaskList = [...taskList];
  sortedTaskList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTaskList = sortedTaskList.filter((item) => {
    if (filterStatus === "all") {
      return true;
    }
    return item.status === filterStatus;
  });

  return (
    <motion.div
      className={styles.content__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
      data-testid="task-item"
    >
      <AnimatePresence>
        {filteredTaskList && filteredTaskList.length > 0 ? (
          filteredTaskList.map((task) => (
            // <motion.div key={task.id} variants={child}>
            <TaskItem key={task.id} task={task} />
            // </motion.div>
          ))
        ) : (
          <motion.p variants={child} className={styles.emptyText}>
            No Task
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AppContent;
