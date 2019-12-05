import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import _ from 'lodash';
import { Chart } from "react-google-charts";

const week = 1;

const Graph = ({state}) => {
    const options = {
      title: "This Week's Assignments",
      legend: {position: 'none'},
      vAxis: {
        title: "Median Hours",
        titleTextStyle: {
          italic: false
        }
      }
    };
    let data = [
      ['Assignment', 'Median Hours Spent', { role: 'style' }],
    ];
    let dueSoon = "";
    let maxHours = 0;
    for (let i = 0; i < state.classes.length; i += 1) {
      const assignments = state.classes[i].assignments;
      for (let j = 0; j < assignments.length; j += 1) {
        const assignment = assignments[j];
        if (assignment.week == week){
          if (assignment.average_time_spent > maxHours){
            maxHours = assignment.average_time_spent;
            dueSoon = state.classes[i].title + " " + assignment.title;
          }
          data.push([state.classes[i].title + " " + assignment.title, assignment.average_time_spent, ''])
        }
      }
    }
    for (let i = 0; i < data.length; i += 1){
      if (data[i][0] == dueSoon){
        data[i][2] = 'red';
      }
    }
    return (
      <Col>
        <Card border="light">
          <Card.Body>
            <Card.Title><h3>Upcoming Week</h3></Card.Title>
            <div className={"my-pretty-chart-container"}>
              <Chart
                chartType="ColumnChart"
                data={data}
                options={options}
                width="100%"
                height="300px"
                legendToggle
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    )
};

export default Graph;