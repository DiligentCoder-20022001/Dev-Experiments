import React from 'react';
import Card from './Card';
import Nav from './Nav';
import './styles.css';
class CP extends React.Component
{
    render()
    {
        return (
            <div>
                <Nav/>
                <div style = {{textAlign:"center", paddingTop:'1%'}}>
                    <h1 style = {{fontSize:'2rem', fontWeight:'bold'}}>Competitive programming</h1>
                </div>
                <div style={{paddingTop:'2%'}}></div>
                <div class = "container">
                    <div class = "container container-custom">
                    <div class = "row">
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CP;