import React from 'react';
import {Route} from 'react-router-dom';
import {MySideNav,Menubar} from '../component';
import Sidebar from 'react-sidebar';
import MaterialTitlePanel from './material_title_panel';
import SidebarContent from './sidebar_content';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};

const mql = window.matchMedia(`(min-width: 800px)`);

export class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mql: mql,
      docked: props.docked,
      open: props.open
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, docked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen(open) {
    this.setState({open: open});
  }

  mediaQueryChanged() {
    this.setState({
      mql: mql,
      docked: this.state.mql.matches,
    });
  }

  toggleOpen(ev) {
    this.setState({open: !this.state.open});

    if (ev) {
      ev.preventDefault();
    }
  }




  render() {
    const {component: Component, ...rest} = this.props;

    const sidebar = <SidebarContent />;

    const contentHeader = (
      <span>
        {!this.state.docked &&
         <a onClick={this.toggleOpen.bind(this)} href="#" style={styles.contentHeaderMenuLink}>=</a>}
        <span> Skill Evaluator</span>
      </span>);

    const sidebarProps = {
      sidebar: sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen,
    };

    return (
      <Route {...rest} render={matchProps => (
        <Sidebar {...sidebarProps}>
          <MaterialTitlePanel title={contentHeader}>
            <div style={styles.content}>
              <Component {...matchProps} />
            </div>
          </MaterialTitlePanel>   
        </Sidebar>
      )} />
    );
  }
}

/*
export const DefaultLayout = ({component: Component, ...rest}) => {
  var sidebarContent = <b>Sidebar content</b>;

    return (
      <Route {...rest} render={matchProps => (
        <Sidebar sidebar={sidebarContent}
               open={this.state.sidebarOpen}
               onSetOpen={this.onSetSidebarOpen}>
            <Component {...matchProps} />
        </Sidebar>
      )} />
    )
  };
  */