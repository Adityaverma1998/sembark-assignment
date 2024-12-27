import { ReactNode } from "react";
import { motion } from "framer-motion";

interface TransitionProps {
    children: ReactNode;
}

const Transition = ({ children }: TransitionProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 2, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
};

export default Transition;
