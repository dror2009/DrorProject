﻿<%@ Page Title="Home" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="main.aspx.cs" Inherits="DrorProject.pages.main" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="page-content">
        <h1>Welcome to the Stock Indices Tracker</h1>
        <p>
            Explore detailed insights about major stock indices, including the S&P 500, NASDAQ, Dow Jones Industrial Average, and Russell 2000. Click on the menu above to navigate to the respective pages.
            <br />
            Everything is showed in United States Dollars ($USD)
        </p>
        <h3>List of indices:</h3>
        <ul>
            <li><a href="/pages/sp500.aspx">S&P 500</a></li>
            <li><a href="/pages/nasdaq.aspx">NASDAQ</a></li>
            <li><a href="/pages/djia.aspx">DJIA</a></li>
            <li><a href="/pages/russel2000.aspx">Russell 2000</a></li>
            <li><a href="/pages/ta125.aspx">TA-125</a></li>
            <li><a href="/pages/ta35.aspx">TA-35</a></li>
            <li><a href="/pages/tabiomed.aspx">TA-Biomed</a></li>
            <li><a href="/pages/taRealEstate.aspx">TA-Real Estate</a></li>
            <li><a href="/pages/ftse.aspx">FTSE 100</a></li>
            <li><a href="/pages/dax.aspx">DAX</a></li>
            <li><a href="/pages/cac40.aspx">CAC 40</a></li>
            <li><a href="/pages/estx.aspx">Euro Stoxx 50</a></li>
        </ul>
    </div>
</asp:Content>
