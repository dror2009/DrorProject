<%@ Page Title="Login" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="DrorProject.pages.login" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="form-page-content" id="loginForm">
        <h1>Log in</h1>
        <form name="login" runat="server" method="post" id="login">
            <label for="username">Enter username:</label>
            &nbsp;
            <input name="uName" type="text" id="username" placeholder="Enter username here." />
            <br />
            <label for="password">Enter password:</label>
            &nbsp;
            <input name="pwd" type="password" id="password" placeholder="Enter password here." />
            <br />
            <button type="submit">Log in</button>
            <br />
            <br />
            <h3 id="resultArea"><%=message %></h3>
            <div style="display: none;" id="shouldClear" runat="server" clientidmode="Static"></div>
        </form>
    </div>
    <div class="form-page-content" id="loginSuccess" style="display: none;">
        <center>
            <h3 style="font-size: 1.5rem;">Successfully logged in.</h3>
            <h3><a href="main.aspx" style="color: inherit;">Main page</a></h3>
        </center>
    </div>
</asp:Content>
