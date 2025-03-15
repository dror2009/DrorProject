<%@ Page Title="DAX" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="dax.aspx.cs" Inherits="DrorProject.pages.dax" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="/scripts/list/dax.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="stock-page">
        <h1>DAX</h1>
        <p>
            The DAX index consists of the 40 largest publicly traded companies in Germany, serving as a barometer for the German economy and a key indicator of the European stock market.
        </p>
        <h3></h3>
        <div class="chart-container">
            <canvas id="daxChart"></canvas>
        </div>
        <script src="/scripts/graph/dax.js"></script>
        <div class="chart-controls">
            <button onclick="updateDAXChart('1D')">1D</button>
            <button onclick="updateDAXChart('5D')">5D</button>
            <button onclick="updateDAXChart('1M')">1M</button>
            <button onclick="updateDAXChart('YTD')">YTD</button>
            <button onclick="updateDAXChart('ALL')">All</button>
        </div>
        <h3></h3>
        <h4>List of 22 stocks that are represented by the DAX stock index:</h4>
        <button class="collapsible">Stock List</button>
        <div class="content">
            <ul id="daxList" class="stock-list"></ul>
        </div>
    </div>
</asp:Content>
