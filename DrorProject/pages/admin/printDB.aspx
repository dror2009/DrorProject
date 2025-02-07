<%@ Page Title="" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="printDB.aspx.cs" Inherits="DrorProject.pages.admin.printDB" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="page-content">
        <h1>Hello Admin</h1>
        <%=Users %>
    </div>
</asp:Content>
