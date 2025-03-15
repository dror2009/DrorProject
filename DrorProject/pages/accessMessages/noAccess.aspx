<%@ Page Title="" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="noAccess.aspx.cs" Inherits="DrorProject.pages.accessMessages.noAccess" %>

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
        <h1>You do not have access to view this page.</h1>
        <h2><a href="/pages/main.aspx">Back to main</a></h2>
    </div>
</asp:Content>
