<%@ Page Title="S&P 500" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="sp500.aspx.cs" Inherits="DrorProject.pages.sp500" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="/scripts/list/sp500.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="stock-page">
        <h1>S&P 500</h1>
        <p>
            The S&P 500 is a stock index that tracks the performance of 500 major publicly traded companies in the USA, selected based on market capitalization, liquidity, and other criteria. It is widely regarded as a benchmark for the U.S. stock market.
        </p>
        <h3></h3>
        <div class="chart-container">
            <canvas id="sp500Chart"></canvas>
        </div>
        <script src="/scripts/graph/sp500.js"></script>
        <div class="chart-controls">
            <button onclick="updateSP500Chart('1D')">1D</button>
            <button onclick="updateSP500Chart('5D')">5D</button>
            <button onclick="updateSP500Chart('1M')">1M</button>
            <button onclick="updateSP500Chart('YTD')">YTD</button>
            <button onclick="updateSP500Chart('ALL')">All</button>
        </div>
        <h3></h3>
        <h4>List of 50 stocks that are represented by the S&P 500 stock index:</h4>
        <button class="collapsible">Stock List</button>
        <div class="content">
            <ul id="sp500List" class="stock-list"></ul>
        </div>
    </div>
</asp:Content>
