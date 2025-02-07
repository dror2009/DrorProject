<%@ Page Title="NASDAQ Composite" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="nasdaq.aspx.cs" Inherits="DrorProject.pages.nasdaq" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="/scripts/list/nasdaq.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="stock-page">
        <h1>NASDAQ Composite</h1>
        <p>
            The NASDAQ Composite is a stock index traded in the USA, representing over 3,000 publicly traded companies listed on the NASDAQ exchange. It includes a wide range of companies, from small-cap to large-cap, with a focus on the technology sector.
        </p>
        <h3></h3>
        <div class="chart-container">
            <canvas id="nasdaqChart"></canvas>
        </div>
        <script src="/scripts/graph/nasdaq.js"></script>
        <div class="chart-controls">
            <button onclick="updateChart('1D')">1D</button>
            <button onclick="updateChart('5D')">5D</button>
            <button onclick="updateChart('1M')">1M</button>
            <button onclick="updateChart('YTD')">YTD</button>
            <button onclick="updateChart('ALL')">All</button>
        </div>
        <h3></h3>
        <h4>List of 50 stocks that are represented by the NASDAQ Composite stock index:</h4>
        <button class="collapsible">Stock List</button>
        <div class="content">
            <ul id="nasdaqList" class="stock-list"></ul>
        </div>
    </div>
</asp:Content>
