const myStyled = (TargetComponent) => (strs, ...exprs) => class extends React.Component {
  interpolateStyle() {
    const style = exprs.reduce((result, expr, index) => {
      const isFunc = typeof expr === 'function';
      const value = isFunc ? expr(this.props) : expr;
      
      return result + value + strs[index + 1];
    }, strs[0]);

    this.element.setAttribute('style', style);
  }

  componentDidMount() {
    this.interpolateStyle();
  }

  componentDidUpdate() {
    this.interpolateStyle();
  }

  render() {
    return <TargetComponent {...this.props} ref={element => this.element = element } />
  }
};