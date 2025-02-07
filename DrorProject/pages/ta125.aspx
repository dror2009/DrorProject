<%@ Page Title="TA-125" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="ta125.aspx.cs" Inherits="DrorProject.pages.ta125" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="/scripts/list/ta125.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="stock-page">
        <h1>TA-125</h1>
        <p>
            The TA-125 index tracks the top 125 companies on the Tel Aviv Stock Exchange, offering a comprehensive view of the Israeli stock market and serving as a benchmark for the broader economy.
        </p>
        <h3></h3>
        <div class="chart-container">
            <canvas id="ta125Chart"></canvas>
        </div>
        <script src="/scripts/graph/ta125.js"></script>
        <div class="chart-controls">
            <button onclick="updateTA125Chart('1D')">1D</button>
            <button onclick="updateTA125Chart('5D')">5D</button>
            <button onclick="updateTA125Chart('1M')">1M</button>
            <button onclick="updateTA125Chart('YTD')">YTD</button>
            <button onclick="updateTA125Chart('ALL')">All</button>
        </div>
        <h3></h3>
        <h4>List of 50 stocks that are represented by the TA-125 stock index:</h4>
        <button class="collapsible">Stock List</button>
        <div class="content">
            <ul id="ta125List" class="stock-list"></ul>
        </div>
    </div>
</asp:Content>
