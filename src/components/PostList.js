// src/components/PostList.js
import React from 'react';
import { motion } from 'framer-motion';
import { ListItem } from '../css/StyledComponents';

const PostList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <motion.li
          key={item.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ListItem>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </ListItem>
        </motion.li>
      ))}
    </ul>
  );
};

export default PostList;
