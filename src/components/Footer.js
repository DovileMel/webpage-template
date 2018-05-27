import React from 'react';
import '../styles/style.scss';


class Footer extends React.PureComponent {


  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <span className="footer-link">menu link</span>
            <span className="footer-link">menu link</span>
            <span className="footer-link">menu link</span>
            <span className="footer-link">menu link</span>
            <span className="footer-link">menu link</span>
          </div>
          <div className="text-block">
            Fusce quis purus quis lectus euismod convallis.
            Vivamus dapibus a erat ac interdum. Aenean eget auctor justo.
            Vestibulum blandit dolor non porta ultrices.
            Donec porta dolor vitae augue sollicitudin gravida.
            Donec porta dolor vitae augue sollicitudin gravida.
          </div>
        </div>
        <div className="footer-title">
          The Site
        </div>
      </div>
    )
  }
}


export default (Footer);
