import React from 'react';
import style from './Diagram.module.scss';
import * as d3 from 'd3';

class Diagram extends React.Component{

  constructor(props) {
    super(props);
    this.myCarottage = React.createRef();
    this.data = (this.props.getDataDiagram())
    this.dataset = (this.data || []).map( (item) => {
      return item.dimensionLeft
    } )
  }

  componentDidMount() {
    console.log(this.dataset)
    let sizeWidth = 500 + 'px';
    let sizeHeight = 500 + 'px';
    let sizeColumn = 500;
    let maxWidth = 500 + 'px';
    let svg = d3.select(this.myCarottage.current)
      .append('svg')
      .attr('width', sizeWidth)
      .attr('height', sizeHeight)
      .attr('max-width', maxWidth)

    let rect_width = 95;
    svg.selectAll('react')
      .data(this.dataset)
      .enter()
      .append('rect')
      .attr('y', ( d, i) => 5 + i*(rect_width + 5))
      .attr('x', i => sizeColumn - i)
      .attr('width', rect_width)
      .attr('height', d => d)
      .attr('fill', 'orange')
    // console.log(this.dataset)
  }

  render() {
    return (
      <div className={`${style.inlineContent} ${style.diagram}`}>
        <div ref={this.myCarottage}></div>
      </div>
    )
  }
}

export default Diagram;
