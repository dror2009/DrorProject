<%@ Page Title="login" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="DrorProject.pages.login" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="form-page-content">
        <h1>Log in</h1>
        <form name="login" runat="server" method="post">
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
            <h3><%=message %></h3>
        </form>
    </div>
</asp:Content>
