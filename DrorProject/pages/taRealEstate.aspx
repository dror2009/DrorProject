<%@ Page Title="TA-Real Estate" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="taRealEstate.aspx.cs" Inherits="DrorProject.pages.taRealEstate" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="/scripts/list/taRealEstate.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="stock-page">
        <h1>TA-Real Estate</h1>
        <p>
            The TA-Real Estate index monitors the performance of real estate companies listed on the Tel Aviv Stock Exchange, providing insights into Israel’s dynamic property and development market.
        </p>
        <h3></h3>
        <div class="chart-container">
            <canvas id="tarealestateChart"></canvas>
        </div>
        <script src="/scripts/graph/tarealestate.js"></script>
        <div class="chart-controls">
            <button onclick="updateTARealEstateChart('1D')">1D</button>
            <button onclick="updateTARealEstateChart('5D')">5D</button>
            <button onclick="updateTARealEstateChart('1M')">1M</button>
            <button onclick="updateTARealEstateChart('YTD')">YTD</button>
            <button onclick="updateTARealEstateChart('ALL')">All</button>
        </div>
        <h3></h3>
        <h4>List of all stocks that are represented by the TA-Real Estate stock index:</h4>
        <button class="collapsible">Stock List</button>
        <div class="content">
            <ul id="taRealEstateList" class="stock-list"></ul>
        </div>
    </div>
</asp:Content>
