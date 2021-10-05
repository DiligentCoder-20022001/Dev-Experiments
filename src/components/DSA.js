import React from 'react';
import Card from './Card';
import Nav from './Nav';
import './styles.css';
class DSA extends React.Component
{
    render()
    {
        return (
            <div>
                <Nav/>
                <div style = {{textAlign:"center", paddingTop:'1%'}}>
                    <h1 style = {{fontSize:'2rem', fontWeight:'bold'}}>DSA Practice</h1>
                </div>
                <div style={{paddingTop:'2%'}}></div>
                <div class = "container">
                    <div class = "container container-custom">
                    <div class = "row">
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card prev = "DSA" title = "Arrays"/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card prev = "DSA" title = "Mathematics"/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card prev = "DSA" title = "2 Pointers"/>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card prev = "DSA" title = "Sorting"/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card prev = "DSA" title = "Strings"/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card prev = "DSA" title = "Sliding window"/>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card prev = "DSA" title = "Searching"/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card prev = "DSA" title = "Bit magic"/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card prev = "DSA" title = "Recursion and Backtracking"/>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card prev = "DSA" title = "Linked Lists"/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card prev = "DSA" title = "Stacks, Queues, Dequeue"/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card prev = "DSA" title = "Binary Trees"/>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card prev = "DSA" title = "Binary search trees"/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card prev = "DSA" title = "Hashmaps"/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card prev = "DSA" title = "Heaps"/>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card prev = "DSA" title = "Greedy"/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card prev = "DSA" title = "Tries"/>
                        </div>
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card prev = "DSA" title = "Graphs"/>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "col-lg-4 col-md-6 col-sm-12">
                            <Card prev = "DSA" title = "Dynamic Programming"/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DSA;