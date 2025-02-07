<%@ Page Title="Russell 2000" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="russel2000.aspx.cs" Inherits="DrorProject.pages.russel2000" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="/scripts/list/russel2000.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="stock-page">
        <h1>Russell 2000</h1>
        <p>
            The stock index Russell 2000 is tracked in the USA and represents 2,000 smaller publicly traded companies, making it a key benchmark for small-cap stocks.
        </p>
        <h3></h3>
        <div class="chart-container">
            <canvas id="russell2000Chart"></canvas>
        </div>
        <script src="/scripts/graph/russell2000.js"></script>
        <div class="chart-controls">
            <button onclick="updateRussell2000Chart('1D')">1D</button>
            <button onclick="updateRussell2000Chart('5D')">5D</button>
            <button onclick="updateRussell2000Chart('1M')">1M</button>
            <button onclick="updateRussell2000Chart('YTD')">YTD</button>
            <button onclick="updateRussell2000Chart('ALL')">All</button>
        </div>
        <h3></h3>
        <h4>List of 50 stocks that are represented by the Russell 2000 stock index:</h4>
        <button class="collapsible">Stock List</button>
        <div class="content">
            <ul id="russList" class="stock-list"></ul>
        </div>
    </div>
</asp:Content>
