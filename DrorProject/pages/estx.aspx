<%@ Page Title="Euro Stoxx 50" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="estx.aspx.cs" Inherits="DrorProject.pages.estx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="/scripts/list/estx.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="stock-page">
        <h1>Euro Stoxx 50</h1>
        <p>
            The Euro Stoxx 50 index comprises 50 of the largest blue-chip companies from across the Eurozone, providing a snapshot of economic strength and market trends within the region.
        </p>
        <h3></h3>
        <div class="chart-container">
            <canvas id="euroStoxxChart"></canvas>
        </div>
        <script src="/scripts/graph/estx.js"></script>
        <div class="chart-controls">
            <button onclick="updateEuroStoxxChart('1D')">1D</button>
            <button onclick="updateEuroStoxxChart('5D')">5D</button>
            <button onclick="updateEuroStoxxChart('1M')">1M</button>
            <button onclick="updateEuroStoxxChart('YTD')">YTD</button>
            <button onclick="updateEuroStoxxChart('ALL')">All</button>
        </div>
        <h3></h3>
        <h4>List of 28 stocks that are represented by the Euro Stoxx 50 stock index:</h4>
        <button class="collapsible">Stock List</button>
        <div class="content">
            <ul id="euroStoxxList" class="stock-list"></ul>
        </div>
    </div>
</asp:Content>
