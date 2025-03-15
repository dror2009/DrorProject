<%@ Page Title="FTSE 100" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="ftse.aspx.cs" Inherits="DrorProject.pages.ftse" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="/scripts/list/ftse.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="stock-page">
        <h1>FTSE 100</h1>
        <p>
            The FTSE 100 index tracks the 100 largest companies listed on the London Stock Exchange, providing a key benchmark for the UK stock market and reflecting the performance of multinational corporations across various sectors.
        </p>
        <h3></h3>
        <div class="chart-container">
            <canvas id="ftseChart"></canvas>
        </div>
        <script src="/scripts/graph/ftse.js"></script>
        <div class="chart-controls">
            <button onclick="updateFTSEChart('1D')">1D</button>
            <button onclick="updateFTSEChart('5D')">5D</button>
            <button onclick="updateFTSEChart('1M')">1M</button>
            <button onclick="updateFTSEChart('YTD')">YTD</button>
            <button onclick="updateFTSEChart('ALL')">All</button>
        </div>
        <h3></h3>
        <h4>List of 20 stocks that are represented by the FTSE 100 stock index:</h4>
        <button class="collapsible">Stock List</button>
        <div class="content">
            <ul id="ftseList" class="stock-list"></ul>
        </div>
    </div>
</asp:Content>
