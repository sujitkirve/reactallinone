import React from 'react';
import MaterialTitlePanel from './material_title_panel';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
};

const SidebarContent = (props) => {
  const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;

  return (
    <MaterialTitlePanel title="IBM" style={style}>
      <div style={styles.content}>
        <Link style={styles.sidebarLink} to="/">Home</Link>
        <Link style={styles.sidebarLink} to="/eval">Start - Evaluation</Link>
        <div style={styles.divider} />
        <Link to="/login">Logout</Link>
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;
