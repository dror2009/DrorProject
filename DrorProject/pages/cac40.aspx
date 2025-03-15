<%@ Page Title="CAC 40" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="cac40.aspx.cs" Inherits="DrorProject.pages.cac40" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="/scripts/list/cac40.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="stock-page">
        <h1>CAC 40</h1>
        <p>
            The CAC 40 index represents the 40 largest companies on the Euronext Paris exchange, offering insight into France’s corporate landscape and acting as a leading benchmark for the European economy.
        </p>
        <h3></h3>
        <div class="chart-container">
            <canvas id="cacChart"></canvas>
        </div>
        <script src="/scripts/graph/cac40.js"></script>
        <div class="chart-controls">
            <button onclick="updateCACChart('1D')">1D</button>
            <button onclick="updateCACChart('5D')">5D</button>
            <button onclick="updateCACChart('1M')">1M</button>
            <button onclick="updateCACChart('YTD')">YTD</button>
            <button onclick="updateCACChart('ALL')">All</button>
        </div>
        <h3></h3>
        <h4>List of 25 stocks that are represented by the CAC 40 stock index:</h4>
        <button class="collapsible">Stock List</button>
        <div class="content">
            <ul id="cacList" class="stock-list"></ul>
        </div>
    </div>
</asp:Content>
