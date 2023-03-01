import { Controls } from 'components/Controls/Controls';
import { Progress } from 'components/Progress/Progress';
import { Publication } from 'components/Publication/Publication';
import React, { Component } from 'react';
const LS_KEY = 'render-item-index';
class Reader extends Component {
  state = {
    publicationIdx: 0,
  };
  changeIndex = value => {
    this.setState(state => ({ publicationIdx: state.publicationIdx + value }));
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.publicationIdx !== this.state.publicationIdx) {
      localStorage.setItem(LS_KEY, this.state.publicationIdx);
    }
  }
  componentDidMount() {
    const savarState = localStorage.getItem(LS_KEY);
    if (savarState) {
      this.setState({ publicationIdx: Number(savarState) });
    }
  }
  render() {
    const { publicationIdx } = this.state;
    const { items } = this.props;
    const totalItems = items.length;
    const currentPublication = items[publicationIdx];
    return (
      <div>
        <Controls
          current={publicationIdx + 1}
          total={totalItems}
          onChange={this.changeIndex}
        />
        <Progress current={publicationIdx + 1} total={totalItems} />
        <Publication item={currentPublication} />
      </div>
    );
  }
}

export default Reader;
