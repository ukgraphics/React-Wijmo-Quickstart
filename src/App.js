import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'wijmo/styles/wijmo.css';
import * as wjGrid from 'wijmo/wijmo.react.grid';
import 'wijmo/cultures/wijmo.culture.ja.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: this.getData()
    };
  }

  getData() {
    var gridData = [
      { id: 15, product: 'ピュアデミグラスソース', date: '2017/01/10', amount: 6000 },
      { id: 17, product: 'だしこんぶ', date: '2017/01/08', amount: 14500 },
      { id: 18, product: 'ピリカラタバスコ', date: '2017/01/12', amount: 4000 },
      { id: 84, product: 'なまわさび', date: '2017/01/21', amount: 8000 }
    ];
    return gridData;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <wjGrid.FlexGrid itemsSource={this.state.data}> 
            <wjGrid.FlexGridColumn header="ID" binding="id" width={60}/>
            <wjGrid.FlexGridColumn header="商品名" binding="product" width={200}/>
            <wjGrid.FlexGridColumn header="受注日" binding="date" width={120}/>
            <wjGrid.FlexGridColumn header="金額" binding="amount" width={100}/>
          </wjGrid.FlexGrid>
        </div>
      </div>
    );
  }
}

export default App;
