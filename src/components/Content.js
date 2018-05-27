import React from 'react';
import '../styles/style.scss';
import FormContainer from './FormContainer';


class Content extends React.PureComponent {

  render() {

    return (
      <div className="content">

        <div className="main-content">

          <div className="main-info">
            <div className="article main-article">
              <h1>Aenean ac diam nec neque fringilla</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies tincidunt venenatis.
                Etiam venenatis venenatis lacus quis egestas. Donec tincidunt erat quam, non elementum lacus cursus at.
                Sed egestas laoreet purus vitae venenatis. Vivamus ut libero at elit posuere ullamcorper.
                Suspendisse ac sodales nulla. </p>
              <p>Nulla vehicula efficitur nisi eu aliquet. Proin dignissim pulvinar ex, non accumsan purus ultricies ut.
                Etiam consectetur, nulla et facilisis ullamcorper, sem odio hendrerit dui, in blandit urna magna et
                elit.
                Curabitur vitae sollicitudin ex. Integer est leo.</p>
              <p>Fusce quis purus quis lectus euismod convallis.
                Vivamus dapibus a erat ac interdum. Aenean eget auctor justo.
                Vestibulum blandit dolor non porta ultrices.
                Donec porta dolor vitae augue sollicitudin gravida.</p>
              <p>Curabitur faucibus nulla nisl, vel pretium metus mollis sit amet.
                Integer sodales consectetur ornare.
                Proin et scelerisque dui, sed interdum purus.
                Phasellus quis consectetur turpis.
                Praesent finibus commodo nulla non sodales.</p>
              <p>Integer sodales consectetur ornare.
                Proin et scelerisque dui, sed interdum purus.
                Phasellus quis consectetur turpis.
                Praesent finibus commodo nulla non sodales.</p>
            </div>
            <div className="other-articles">
              <div className="article article-1">
                <p>Curabitur faucibus nulla nisl, vel pretium metus mollis sit amet.
                  Integer sodales consectetur ornare.
                  Proin et scelerisque dui, sed interdum purus.
                  Sed egestas laoreet purus vitae venenatis. Vivamus ut libero at elit posuere ullamcorper.
                  Phasellus quis consectetur turpis.
                  Praesent finibus commodo nulla non sodales.</p>
              </div>
              <div className="article article-2">
                <h2>Aenean ac diam nec neque</h2>
                <ul>
                  <li><a href="#">Vivamus dapibus a erat</a></li>
                  <li><a href="#">Praesent finibus commodo</a></li>
                  <li><a href="#">Lorem ipsum dolor sit</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="form">
            <div className="form-name"><h2>Aenean ac diam nec neque</h2></div>
            <p>Curabitur faucibus nulla nisl, vel pretium metus mollis sit amet.
              Integer sodales consectetur ornare.
              Proin et scelerisque dui, sed interdum purus.
              Sed egestas laoreet purus vitae venenatis. Vivamus ut libero at elit posuere ullamcorper.
              Phasellus quis consectetur turpis.
              Praesent finibus commodo nulla non sodales.</p>
            <div className="form-box">
              <FormContainer/>
            </div>

          </div>
        </div>
        <div className="block-content">
          <div className="block">
            Curabitur faucibus nulla nisl, vel pretium metus mollis sit amet.
            Integer sodales consectetur ornare.
            Proin et scelerisque dui, sed interdum purus.
            Sed egestas laoreet purus vitae venenatis. Vivamus ut libero at elit posuere ullamcorper.
            Phasellus quis consectetur turpis.
          </div>
          <div className="block">
            Curabitur faucibus nulla nisl, vel pretium metus mollis sit amet.
            Integer sodales consectetur ornare.
            Proin et scelerisque dui, sed interdum purus.
            Sed egestas laoreet purus vitae venenatis. Vivamus ut libero at elit posuere ullamcorper.
            Phasellus quis consectetur turpis.
          </div>
          <div className="block">
            Curabitur faucibus nulla nisl, vel pretium metus mollis sit amet.
            Integer sodales consectetur ornare.
            Proin et scelerisque dui, sed interdum purus.
            Sed egestas laoreet purus vitae venenatis. Vivamus ut libero at elit posuere ullamcorper.
            Phasellus quis consectetur turpis.
          </div>
        </div>
      </div>
    )
  }
}


export default Content;
