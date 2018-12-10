import * as React from 'react';
import { withRouter } from 'react-router';

import { Background, GradientColors } from './styles';

// INFO: Gradient color per route
const colorRoutes = {
  browse: GradientColors.DARK_BLUE,
  library: GradientColors.DARK,
  search: GradientColors.DARK_ORANGE,
};

class Gradient extends React.Component<any> {
  shouldComponentUpdate(nextProps) {
    return this.props.location.pathname !== nextProps.location.pathname;
  }

  render() {
    const route = location.pathname.split('/')[1];
    console.log(route);
    console.log(colorRoutes);


    return <Background gradientColor={colorRoutes[route]} />;
  }
}

export default withRouter(Gradient as any);
