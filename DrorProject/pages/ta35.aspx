<%@ Page Title="TA-35" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="ta35.aspx.cs" Inherits="DrorProject.pages.ta35" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="/scripts/list/ta35.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="stock-page">
        <h1>TA-35</h1>
        <p>
            The TA-35 is Israel's premier stock index, representing the 35 largest publicly traded companies on the Tel Aviv Stock Exchange. It serves as a key benchmark for the performance of the country's largest and most liquid stocks.
        </p>
        <h3></h3>
        <div class="chart-container">
            <canvas id="ta35Chart"></canvas>
        </div>
        <script src="/scripts/graph/ta35.js"></script>
        <div class="chart-controls">
            <button onclick="updateTA35Chart('1D')">1D</button>
            <button onclick="updateTA35Chart('5D')">5D</button>
            <button onclick="updateTA35Chart('1M')">1M</button>
            <button onclick="updateTA35Chart('YTD')">YTD</button>
            <button onclick="updateTA35Chart('ALL')">All</button>
        </div>
        <h3></h3>
        <h4>List of all stocks that are represented by the TA-35 stock index:</h4>
        <button class="collapsible">Stock List</button>
        <div class="content">
            <ul id="ta35List" class="stock-list"></ul>
        </div>
    </div>
</asp:Content>
