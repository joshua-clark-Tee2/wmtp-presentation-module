/*
* Graph.tsx
* ResultsGraph is a graph that creates line graph based on the following props:
* data:JSON data
* dataLines:{
*     dataName:The Name of the data in the JSON data object
*     lineName(optional): The name of the line on the graph
*     StrokeColor: Hexadecimal color of the line and dot
* }
* dataKey:X axis of the chart
* legend(optional):Boolean object that will switch the legend
* title(optional):Title displayed on the top of the graph
* numberOfPoints(optional):number of points displayed on the graph
*
* Created by Joseph Bethards lastName on 12/17/18.
*
* Graph Node PackageModule
*
* Copyright © 2009-2018 United States Government as represented by
* the Chief Information Officer of the DHA Connected Health. All Rights Reserved.
*
* Copyright © 2009-2018 Contributors. All Rights Reserved.
*
* THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
* REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
* COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
* AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
* THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
* INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
* REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
* DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
* HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
* RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
*
* Government Agency: DHA Connected Health
* Government Agency Original Software Designation: ProductName001
* Government Agency Original Software Title: ProductName
* User Registration Requested. Please send email
* with your contact information to: robert.a.kayl.civ@mail.mil
* Government Agency Point of Contact for Original Software: robert.a.kayl.civ@mail.mil
*
*/
import * as React from 'react';
import {LineChart,Line,Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";
import {Typography} from "@material-ui/core";

/**
 * Graph Module Properties
 */
export interface IProps {
    /** Title displayed at top of graph */
    title?:string,
    /** User data being displayed to the graph */
    data:object[],
    /** Key used for X axis of the graph */
    dataKey:string,
    /** Legend displayed below graph */
    legend?:boolean,
    /** Description of line */
    lineName?:string,
    /** Array used to define line properties */
    dataLines:Array<{
        dataName:string,
        lineName?:string,
        strokeColor:string
    }>,
    /** Number of points plotted on graph */
    numberOfPoints?:number
}
export interface IState {
    graphData:object[]
}
/**
 * Form Graph
 */
export class Graph extends React.Component<IProps> {


    render() {
        const dataLines = this.props.dataLines.map((dataLine) => (
            <Line type="monotone" key={dataLine.dataName} name={dataLine.lineName} dataKey={dataLine.dataName}
                  stroke={dataLine.strokeColor} activeDot={{r: 5}}/>
        ));
        console.log(this.props.data.length);

        return (
            <div>
                <Typography
                    component="h3"
                    variant="h3"
                    style={{marginLeft: '20px'}}
                >{this.props.title}
                </Typography>
                <ResponsiveContainer width="99%" height={450}>
                <LineChart
                           // The data is dependent on the numberOfPoints prop
                            //if the numberOfPoints is not included or greater than the number of data point, all points are shown
                           data={this.props.numberOfPoints &&
                           this.props.data.length > this.props.numberOfPoints
                               ? (this.props.data.slice(this.props.data.length+1 - this.props.numberOfPoints-1 , this.props.data.length))
                               : this.props.data}
                           margin={{top: 5, right: 60}}
                >

                    <XAxis dataKey={this.props.dataKey}/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    {this.props.legend &&
                    <Legend/>
                    }
                    {dataLines}
                </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}


export default Graph;