import React from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data = [

        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='dash-container'>
            <div>
                <h2 className='dashboard-header1'>MONTH WISE SELL</h2>
                <LineChart width={400} height={350} data={data}>
                    <Line dataKey={'sell'}></Line>
                    <YAxis dataKey={'sell'}></YAxis>
                    <XAxis dataKey={'month'}></XAxis>

                </LineChart>

            </div>
            <div>
                <h2 className='dashboard-header2'>Investment VS Revenue</h2>

                <BarChart width={530} height={350} data={data}>
                    <CartesianGrid strokeDasharray="3 3" ></CartesianGrid>
                    <Bar dataKey={'investment'} fill={"#8884d8"}></Bar>
                    <Bar dataKey={'revenue'} fill={"#82ca9d"}></Bar>
                    <YAxis dataKey={'investment'}></YAxis>

                    <XAxis dataKey={'month'}></XAxis>

                </BarChart>

            </div>
        </div>


    );
};



export default Dashboard;