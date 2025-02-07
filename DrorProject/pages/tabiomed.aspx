<%@ Page Title="TA-Biomed" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="tabiomed.aspx.cs" Inherits="DrorProject.pages.tabiomed" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="/scripts/list/tabiomed.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="stock-page">
        <h1>TA-Biomed</h1>
        <p>
            The TA-Biomed index is dedicated to tracking biotechnology and biomedical companies on the Tel Aviv Stock Exchange, reflecting Israel’s innovation-driven life sciences sector.
        </p>
        <h3></h3>
        <div class="chart-container">
            <canvas id="tabiomedChart"></canvas>
        </div>
        <script src="/scripts/graph/tabiomed.js"></script>
        <div class="chart-controls">
            <button onclick="updateTABiomedChart('1D')">1D</button>
            <button onclick="updateTABiomedChart('5D')">5D</button>
            <button onclick="updateTABiomedChart('1M')">1M</button>
            <button onclick="updateTABiomedChart('YTD')">YTD</button>
            <button onclick="updateTABiomedChart('ALL')">All</button>
        </div>
        <h3></h3>
        <h4>List of all stocks that are represented by the TA-Biomed stock index:</h4>
        <button class="collapsible">Stock List</button>
        <div class="content">
            <ul id="tabiomedList" class="stock-list"></ul>
        </div>
    </div>
</asp:Content>
