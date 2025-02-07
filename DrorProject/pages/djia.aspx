<%@ Page Title="Dow Jones Industrial Average (DJIA)" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="djia.aspx.cs" Inherits="DrorProject.pages.djia" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="/scripts/list/djia.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="stock-page">
        <h1>Dow Jones Industrial Average (DJIA)</h1>
        <p>
            The stock index Dow Jones Industrial Average (DJIA) is tracked in the USA and represents 30 of the largest and most influential publicly traded companies across various sectors.
        </p>
        <h3></h3>
        <div class="chart-container">
            <canvas id="djiaChart"></canvas>
        </div>
        <script src="/scripts/graph/djia.js"></script>
        <div class="chart-controls">
            <button onclick="updateDJIAChart('1D')">1D</button>
            <button onclick="updateDJIAChart('5D')">5D</button>
            <button onclick="updateDJIAChart('1M')">1M</button>
            <button onclick="updateDJIAChart('YTD')">YTD</button>
            <button onclick="updateDJIAChart('ALL')">All</button>
        </div>
        <h3></h3>
        <h4>List of all stocks that are represented by the DJIA stock index:</h4>
        <button class="collapsible">Stock List</button>
        <div class="content">
            <ul id="djiaList" class="stock-list"></ul>
        </div>

    </div>
</asp:Content>
