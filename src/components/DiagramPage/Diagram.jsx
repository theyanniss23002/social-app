import React from 'react';
import style from './Diagram.module.scss';
import * as d3 from 'd3';

class Diagram extends React.Component{

  constructor(props) {
    super(props);
    this.myCarottage = React.createRef();
    // this.data = (this.props.getDataDiagram())
    // this.dataset = (this.data || []).map( (item) => {
    //   return this.data
    // } )
    this.dataset = [
      {
        date: '2007-04-23',
        value: '93.24',
      },
      {
        date: '2007-04-24',
        value: '95.35',
      },
      {
        date: '2007-04-25',
        value: '98.84',
      },
      {
        date: '2007-04-26',
        value: '99.92',
      },
      {
        date: '2007-04-29',
        value: '99.8',
      },
      {
        date: '2007-05-01',
        value: '99.47',
      },
      {
        date: '2007-05-02',
        value: '100.39',
      },
      {
        date: '2007-05-03',
        value: '100.4',
      },
      {
        date: '2007-05-04',
        value: '100.81',
      },
      {
        date: '2007-05-07',
        value: '103.92',
      },
      {
        date: '2007-05-08',
        value: '105.06',
      },
      {
        date: '2007-05-09',
        value: '106.88',
      },
    ]
  }

   componentDidMount() {
     data = Object.assign((d3.csvParse(await FileAttachment("aapl.csv").text(),
      d3.autoType)).map(({date, close}) => ({date, value: close})), {y: "$ Close"})
     console.log(typeof data)
    // console.log(this.dataset)
    // let sizeWidth = 500 + 'px';
    // let sizeHeight = 500 + 'px';
    // let sizeColumn = 500;
    // let maxWidth = 500 + 'px';
    // let svg = d3.select(this.myCarottage.current)
    //   .append('svg')
    //   .attr('width', sizeWidth)
    //   .attr('height', sizeHeight)
    //   .attr('max-width', maxWidth)
    //
    // let rect_width = 95;
    // svg.selectAll('react')
    //   .data(this.dataset)
    //   .enter()
    //   .append('rect')
    //   .attr('y', ( d, i) => 5 + i*(rect_width + 5))
    //   .attr('x', i => sizeColumn - i)
    //   .attr('width', rect_width)
    //   .attr('height', d => d)
    //   .attr('fill', 'orange')
    line = ƒ(a)
    line = d3.line()
      .defined(d => !isNaN(d.value))
      .x(d => x(d.date))
      .y(d => y(d.value))

    x = ƒ(n)
    x = d3.scaleUtc()
      .domain(d3.extent(data, d => d.date))
      .range([margin.left, width - margin.right])

    y = ƒ(n)
    y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)]).nice()
      .range([height - margin.bottom, margin.top])

    xAxis = ƒ(g)
    xAxis = g => g
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))

    yAxis = ƒ(g)
    yAxis = g => g
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y))
      .call(g => g.select(".domain").remove())
      .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data.y))

    margin = ({top: 20, right: 30, bottom: 30, left: 40})

    height = 500
    height = 500

    const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height]);

    svg.append("g")
      .call(xAxis);

    svg.append("g")
      .call(yAxis);

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", line);

    return svg.node();
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
