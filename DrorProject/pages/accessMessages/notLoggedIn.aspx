<%@ Page Title="" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="notLoggedIn.aspx.cs" Inherits="DrorProject.pages.accessMessages.notLoggedIn" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style>
        a, a:visited {
            text-decoration: none;
            color: inherit;
        }

            a:hover {
                text-decoration: underline;
            }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="form-page-content">
        <center>
            <h1>You are not logged in.</h1>
            <h2><a href="/pages/login.aspx">Login</a></h2>
            <h2><a href="/pages/signup.aspx">Sign Up</a></h2>
            <h2><a href="/pages/main.aspx">Back to main</a></h2>
        </center>
    </div>
</asp:Content>
