var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  getInitialState: function(){
    return {
      hovering : false
    }
  },
  render: function(){


    return  <Link className="image-preview"
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
      to={"images/"+this.props.id}>
       {this.props.animated && this.state.hovering ? this.showVideo() : this.showImage()}
       {this.props.animated && !this.state.hovering ? this.showIcon() : null}
       {this.state.hovering ? this.showInlet() : null}
    </Link>
  },
  showImage: function(){
    var link = "http://i.imgur.com/" + this.props.id +"h.jpg";
    return <img src={link} />
  },
  showVideo: function(){
    return <video preload="auto" autoPlay="autoPlay" loop="loop" webkit-playsinline>
                <source src={this.props.mp4} type="video/mp4"></source>
          </video>
  },
  showIcon: function(){
    return <span className="glyphicon glyphicon-play"></span>
  },
  showInlet: function(){
    return <div className="inlet">
        Views: {this.props.views}
        <br />
        Upvotes:{this.props.ups}
    </div>
  },
  handleMouseEnter: function() {
    this.setState({
      hovering:true
    })
  },

  handleMouseLeave: function() {
    this.setState({
      hovering:false
    })

  }

});
